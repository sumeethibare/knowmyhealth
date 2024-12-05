import React from "react";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Drawer from "./Drawer";
import Logo from '/public/images/logo.png'
import Image from "next/image";

const mainmenus = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default async function Navigate() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  const safeUser = user
    ? {
      given_name: user.given_name || undefined,
      family_name: user.family_name || undefined,
      picture: user.picture || undefined,
    }
    : null;

  return (
    <nav className="navbar bg-base-100">
      {/* Logo and main navigation */}
      <div className="flex-1 items-center">
        <div className="flex items-center">
          <Image src={Logo} width={60} height={60} alt="know my health"/>
          <a href="/" className="btn btn-ghost text-xl">
            Know My Health
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-0">
            {mainmenus.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-none">
        {!await isAuthenticated() ? (
          <div className="p-1">
            <LoginLink className="btn btn-primary">Get Started</LoginLink>
          </div>
        ) : (
          <Drawer user={safeUser} />
        )}
      </div>
    </nav>
  );
}
