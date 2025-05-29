import { User } from '@/payload-types';
import { PayloadRequest } from 'payload';

// ─────────────────────────────────────────
// 🔒 Role Check Utilities
// ─────────────────────────────────────────

export const isAdminUser = (user: User | null | undefined): boolean =>
    !!user && user.role === 'admin';    

export const isAffiliateUser = (user: User | null | undefined): boolean =>
    !!user && user.role === 'affiliate';

export const isCustomerUser = (user: User | null | undefined): boolean =>
    !!user && user.role === 'customer';

export const isAdmin = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'admin');
};

export const isAffiliate = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'affiliate');
};

export const isCustomer = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'customer');
};

export const isAdminOrAffiliate = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && (user.role === 'admin' || user.role === 'affiliate'));
};

export const isAdminOrCustomer = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && (user.role === 'admin' || user.role === 'customer'));
};

export const isSelfOrAdmin = ({ req, id }: { req: PayloadRequest, id?: string | number | undefined }) => {
    const user = req.user as User | undefined
    return Boolean(user && user.role === 'admin' || user?.id === id);
};