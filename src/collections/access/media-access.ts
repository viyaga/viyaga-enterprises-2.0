import { Access, PayloadRequest } from "payload";
import { isAdminUser, isCustomerUser } from ".";
import { User } from "@/payload-types";

export const hasMediaAccess: Access = ({ req }: { req: PayloadRequest }) => {
  const user = req.user as User | undefined;
  if (!user) return false;

  if (isCustomerUser(user)) return false
  if (isAdminUser(user)) return true;

  return {
    uploaded_by: {
      equals: user.id,
    },
  };
};