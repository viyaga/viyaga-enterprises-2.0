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
