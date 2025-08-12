import {
  CollectionBeforeValidateHook,
  CollectionBeforeOperationHook,
} from 'payload';

const REFERRAL_CODE_LENGTH = 6;
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateCode(length = REFERRAL_CODE_LENGTH): string {
  let code = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * CHARSET.length);
    code += CHARSET[index];
  }
  return code;
}

/**
 * Generates a unique referral code and stores it in affiliateDetails.referralCode
 */
export const generateReferralCode: CollectionBeforeValidateHook = async ({
  data,
  req,
  originalDoc,
}) => {
  const originalReferral = originalDoc?.affiliateDetails?.referralCode;
  const incomingReferral = data?.affiliateDetails?.referralCode;

  if (originalReferral || incomingReferral) return data;

  const payload = req.payload;
  let referralCode = '';
  let isUnique = false;
  let attempts = 0;

  while (!isUnique && attempts < 10) {
    referralCode = generateCode();
    const existing = await payload.find({
      collection: 'users',
      where: { 'affiliateDetails.referralCode': { equals: referralCode } },
      limit: 1,
    });
    isUnique = (existing?.totalDocs ?? 0) === 0;
    attempts++;
  }

  if (!isUnique) {
    throw new Error(
      'Failed to generate a unique referral code after several attempts.'
    );
  }
  console.log({ referralCode });
  
  return {
    ...data,
    affiliateDetails: {
      ...(data?.affiliateDetails || {}),
      referralCode,
    },
  };
};

function computeRank(earned: number): string {
  if (earned >= 10000) return 'Platinum';
  if (earned >= 5000) return 'Gold';
  if (earned >= 1000) return 'Silver';
  if (earned >= 100) return 'Bronze';
  return 'Starter';
}

/**
 * Updates rank based on total_earned before create/update operations
 */
export const updateRank: CollectionBeforeOperationHook = async ({
  args,
  operation,
}) => {
  if (operation !== 'create' && operation !== 'update') return;

  const { data, originalDoc } = args;

  const earnedFromData = data?.affiliateDetails?.total_earned;
  const earnedFromOriginal = originalDoc?.affiliateDetails?.total_earned;
  const totalEarned =
    typeof earnedFromData !== 'undefined'
      ? Number(earnedFromData)
      : typeof earnedFromOriginal !== 'undefined'
      ? Number(earnedFromOriginal)
      : 0;

  const rank = computeRank(totalEarned);

  args.data = {
    ...data,
    affiliateDetails: {
      ...(data?.affiliateDetails || {}),
      current_rank: rank,
    },
  };

  return args;
};