import {
  authMiddleware,
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: Request) {
  return withAuth(req);
}

export const config = {
  matcher: ["/profile", "/appointments","/health","/surgery","/wellness","/medicine","/diagnostics","/dental"],
};
