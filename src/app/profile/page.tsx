import { getUserData } from "../../helpers/getUserData";
import User from "../../components/profile/User";
import Homegate from "@/components/navigate/Homegate";

export default async function UserPage() {
  const userData = await getUserData();

  return <>
  <Homegate/>
  <User userData={userData} />
  </>;
}
