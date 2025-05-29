import { PayloadRequest } from "payload";
import type { Access, Where } from "payload";
import { isAdminUser, isAffiliateUser, isCustomerUser } from ".";
import { User } from "@/payload-types";

export const hasOrderAccess: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    if (!user) return false;

    if (isAdminUser(user)) {
        return true;
    }

    if (isCustomerUser(user)) {
        const where: Where = {
            "billingDetails.email": { equals: user.email },
        };
        return where;
    }

    if (isAffiliateUser(user)) {
        const where: Where = {
            referralCode: { equals: user.referralCode },
        };
        return where;
    }

    return false;
};