import React from "react";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Drawer from "./Drawer";
import Logo from '/public/images/logo.png'
import Image from "next/image";
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
    <nav className="flex items-center justify-between lg:p-6 px-3">

      <Image src={Logo} width={1000} height={1000} className="lg:h-36 h-24 w-auto" alt="know my health" />

      {/* the desktop code */}
      <div className=' gap-4 lg:flex hidden flex-wrap bg-zinc-100 lg:p-2 rounded-2xl'>
        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MapPinIcon className='size-4' />
          <input type="text" className="grow" placeholder="banglore" disabled />
        </label>

        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MagnifyingGlassIcon className='size-4' />
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* the mobile code */}
      <div className=' gap-4 lg:hidden flex flex-wrap p-2 rounded-2xl'>

        <MapPinIcon className='size-6 m-4' />

        {/* The button to open modal */}
        <label htmlFor="searchbox"> <MagnifyingGlassIcon className='size-6 m-4' /></label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="searchbox" className="modal-toggle" />
        <div className="modal backdrop-blur-xl backdrop-brightness-50" role="dialog">
          <div className="modal-box bg-transparent rounded-full">
            <label className="input input-bordered rounded-full flex items-center gap-2 input-lg">
              <MagnifyingGlassIcon className='size-4' />
              <input type="text" className="grow" placeholder="Search anything" />
            </label>
          </div>
          <label className="modal-backdrop" htmlFor="searchbox">Close</label>
        </div>
      </div>

      <div>
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
