import { Access, PayloadRequest } from "payload";
import { isAdminUser, isCustomerUser } from ".";
import { User } from "@/payload-types";

export const hasBankDetailsAccess: Access = ({ req }: { req: PayloadRequest }) => {
    const user = req.user as User | undefined;
    if (!user) return false;

    if (isCustomerUser(user)) return false
    if (isAdminUser(user)) return true;

    return {
        user: {
            equals: user.id,
        },
    };
};