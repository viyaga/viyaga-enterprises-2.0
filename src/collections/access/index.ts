import { Access, PayloadRequest, User } from 'payload';

export const isAdmin: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'admin');
};

export const isAffiliate: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'affiliate');
};

export const isCustomer: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && user.role === 'customer');
};

export const isAdminOrAffiliate: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && (user.role === 'admin' || user.role === 'affiliate'));
};

export const isAdminOrCustomer: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    return Boolean(user && (user.role === 'admin' || user.role === 'customer'));
};