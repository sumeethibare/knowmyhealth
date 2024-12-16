// helpers/getUserData.ts

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Function to fetch user data
export async function getUserData() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  const safeUser = user
    ? {
        given_name: user.given_name || undefined,
        family_name: user.family_name || undefined,
        picture: user.picture || undefined,
        email: user.email || undefined,
      }
    : null;

  return {
    isAuthenticated: await isAuthenticated(),
    safeUser,
  };
}
