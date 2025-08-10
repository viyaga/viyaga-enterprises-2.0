import type { Access, PayloadRequest } from 'payload';
import type { User } from '@/payload-types';
import { isAdminUser, isCustomerUser } from '.';

export const hasDiscountCodeAccess: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    if (!user) return false;

    if (isAdminUser(user)) return true;
    if (isCustomerUser(user)) return false;

    return {
        createdBy: {
            equals: user.id,
        },
    };
};
