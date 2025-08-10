import type { CollectionBeforeChangeHook } from 'payload';
import type { User } from '@/payload-types';

export const setCreatedBy: CollectionBeforeChangeHook = async ({ req, data, operation }) => {
  if (!req.user) {
    throw new Error('Unauthorized action.');
  }

  if (operation === 'create') {
    return {
      ...data,
      createdBy: (req.user as User).id,
    };
  }

  return data;
};

export const validateMaxUses: CollectionBeforeChangeHook = async ({ data }) => {
  if (data.maxUses && data.timesUsed && data.timesUsed > data.maxUses) {
    throw new Error('Max uses exceeded for this discount code.');
  }
  return data;
};
