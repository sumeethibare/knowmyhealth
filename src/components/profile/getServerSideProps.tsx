import { getUserData } from "../../helpers/getUserData";
import User from "./User";

export async function getServerSideProps() {
  const userData = await getUserData();

  return {
    props: {
      userData,
    },
  };
}

export default function UserPage({ userData }: { userData: any }) {
  return <User userData={userData} />;
}
