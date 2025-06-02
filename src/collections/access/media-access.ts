import { Access, PayloadRequest } from "payload";
import { isAdminUser, isAffiliateUser, isCustomerUser } from ".";
import { User } from "@/payload-types";

export const hasMediaReadAccess: Access = ({ req }: { req: PayloadRequest }) => {
  const user = req.user as User | undefined;
  if (!user) return true;

  if (isAdminUser(user)) return true;
  
  if (isAffiliateUser(user)) {
    return {
      uploaded_by: {
        equals: user.id,
      },
    }
  }

  return false
};

export const hasMediaUpdateAccess: Access = ({ req }: { req: PayloadRequest }) => {
  const user = req.user as User | undefined;
  if (!user) return false;

  if (isAdminUser(user)) return true;
  if (isCustomerUser(user) || isAffiliateUser(user)) {
    return {
      uploaded_by: {
        equals: user.id,
      },
    }
  }
  return false;
};
