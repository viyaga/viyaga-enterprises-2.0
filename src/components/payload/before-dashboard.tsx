import { redirectBasedOnRole } from "@/lib/payload/users";

const BeforeDashboard = async () => {
  await redirectBasedOnRole()
  
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
    </div>
  );
};

export default BeforeDashboard;
