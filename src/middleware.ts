import {
  authMiddleware,
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: Request) {
  return withAuth(req);
}

export const config = {
  matcher: ["/diagnostics","/medicine","/appointments","/surgery","/dental","/lab","/profile","/appointments/online","/appointments/clinic","/appointments/booking"],
};
