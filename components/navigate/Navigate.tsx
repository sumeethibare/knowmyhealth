import React from "react";
import Drawer from "./Drawer";
import Logo from '@/public/images/logo.png'
import Image from "next/image";
import Search from "./Search";

export default async function Navigate() {
  return (
    <>

      <div className="flex items-center justify-between w-full px-2 py-3 bg-gray-50">

        <div>
          <a href="/" className="flex items-center justify-center tracking-tight">
            <Image src={Logo} width={1000} height={1000} className="h-14 w-auto" alt="Know My Health" />
            <span className="text-xl">knowmyhealth.in</span>
          </a>
        </div>

        <div className="lg:flex lg:gap-4">
          <div className="hidden lg:flex">
            <Search />
          </div>
          <Drawer />
        </div>
      </div>

    </>
  );
}
