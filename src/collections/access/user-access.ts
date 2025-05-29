import { User } from "@/payload-types";
import { PayloadRequest, Where } from "payload";
import { isAdminUser, isAffiliateUser } from ".";
import { equal } from "assert";

export function canAccessUserDetails({ req }: { req: PayloadRequest }) {
    const user = req.user as User
    if (!user) return false;
    if (isAdminUser(user)) return true;
    if (isAffiliateUser(user)) {
        const where: Where = {
            or: [
            { referred_by: { equals: user.id } },
            { id: { equals: user.id } }
            ]
        };
        return where
    }
    return { id: { equals: user.id } };
}