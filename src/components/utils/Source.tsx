import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function getUserData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userData = user
    ? {
        given_name: user.given_name || undefined,
        family_name: user.family_name || undefined,
        picture: user.picture || undefined,
      }
    : null;

  return userData;
}
