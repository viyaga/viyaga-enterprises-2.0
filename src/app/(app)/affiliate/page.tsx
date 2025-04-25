import AffiliateLandingPage from "@/components/pages/affiliate";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/affiliate/dashboard");
  return <AffiliateLandingPage />;
};

export default page;
