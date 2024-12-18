import React from "react";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Drawer from "./Drawer";
import Logo from '/public/images/logo.png'
import Image from "next/image";
import { MagnifyingGlassIcon, MapIcon } from '@heroicons/react/24/solid';

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
    <nav className="flex items-center justify-between px-2 bg-zinc-100 lg:bg-transparent">

      <div className="flex items-center lg:flex-row flex-col">
        <a href="/" className="flex items-center justify-center tracking-tight">
          <Image src={Logo} width={1000} height={1000} className="lg:h-28 h-20 w-auto" alt="Know My Health" />
          <span className="text-md">knowmyhealth.in</span>
        </a>
      </div>

      <div className='lg:flex hidden flex-wrap bg-zinc-50 lg:p-1'>
        <label className="input input-bordered flex items-center gap-2">
          <MapIcon className='size-4' />
          <input type="text" className="grow" placeholder="Bengaluru" disabled />
        </label>
        <label className="input hover:bg-zinc-950 bg-transparent hover:text-white text-zinc-950 transition-all duration-300 flex items-center gap-2" htmlFor="searchbox"> <MagnifyingGlassIcon className='size-4' /></label>
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

      <input type="checkbox" id="searchbox" className="modal-toggle" />
      <div className="modal backdrop-blur-md" role="dialog">
        <label className="input modal-box rounded-none flex items-center gap-2 input-lg">
          <MagnifyingGlassIcon className='size-4' />
          <input type="text" className="grow" placeholder="Search anything" />
        </label>
        <label className="modal-backdrop" htmlFor="searchbox">Close</label>
      </div>
    </nav>
  );
}
