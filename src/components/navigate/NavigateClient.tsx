"use client";

import React, { useState } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Drawer from "./Drawer";
import Image from "next/image";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Logo from "/public/images/logo.png";

interface NavigateClientProps {
  isAuthenticated: boolean;
  safeUser: {
    given_name?: string;
    family_name?: string;
    picture?: string;
  } | null;
}

export default function NavigateClient({ isAuthenticated, safeUser }: NavigateClientProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <nav className="flex items-center justify-between lg:p-6 px-3 bg-white shadow">
      {/* Logo */}
      <Image src={Logo} width={80} height={60} alt="Logo" />

      {/* Desktop Search Inputs */}
      <div className="hidden lg:flex gap-4 bg-zinc-100 lg:p-2 rounded-2xl">
        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MapPinIcon className="w-5 h-5" />
          <input type="text" className="grow" placeholder="Bangalore" disabled />
        </label>
        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* Mobile Icons */}
      <div className="flex lg:hidden items-center gap-4">
        <MapPinIcon className="w-6 h-6 cursor-pointer" />
        <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" onClick={toggleModal} />
      </div>

      {/* User Drawer or Login */}
      <div>
        {!isAuthenticated ? (
          <Drawer user={safeUser} />
         
        ) : (
            <LoginLink className="btn btn-primary">Login</LoginLink>
        )}
      </div>

      {/* Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-3/4 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-black">
                ✕
              </button>
            </div>
            <label className="input input-bordered rounded-xl flex items-center gap-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <input type="text" className="grow" placeholder="Type to search..." />
            </label>
          </div>
        </div>
      )}
    </nav>
  );
}
