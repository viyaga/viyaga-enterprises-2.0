import { CollectionBeforeValidateHook } from 'payload';
import { CollectionBeforeOperationHook } from 'payload';

export const updateRank: CollectionBeforeOperationHook = async ({ args }) => {
  if (!args) return;

  const earned = args.total_earned || 0;

  if (earned >= 10000) {
    args.current_rank = 'Platinum';
  } else if (earned >= 5000) {
    args.current_rank = 'Gold';
  } else if (earned >= 1000) {
    args.current_rank = 'Silver';
  } else if (earned >= 100) {
    args.current_rank = 'Bronze';
  } else {
    args.current_rank = 'Starter';
  }

  return args;
};


const REFERRAL_CODE_LENGTH = 6
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function generateCode(length: number = REFERRAL_CODE_LENGTH): string {
  let code = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * CHARSET.length)
    code += CHARSET[index]
  }
  return code
}

export const generateReferralCode: CollectionBeforeValidateHook = async ({ data, req, originalDoc }) => {
  // Skip if referralCode already exists (e.g., during update)
  if (originalDoc?.referralCode || data?.referralCode) return data

  const payload = req.payload
  let referralCode = ''
  let isUnique = false
  const maxAttempts = 10
  let attempts = 0

  while (!isUnique && attempts < maxAttempts) {
    referralCode = generateCode()
    const existing = await payload.find({
      collection: "users",
      where: { referralCode: { equals: referralCode } },
      limit: 1,
    })
    isUnique = existing.totalDocs === 0
    attempts++
  }

  if (!isUnique) {
    throw new Error('Failed to generate a unique referral code after several attempts.')
  }

  return {
    ...data,
    referralCode,
  }
}