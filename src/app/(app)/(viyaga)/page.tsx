import HomePage from "@/components/pages/home";
import { pingServer } from "@/lib/services/ping-server";

export default async function Home() {
  await pingServer();
  return <HomePage />;
}
