"use client";

import React, { useState } from 'react';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from 'next/image';

interface DrawerProps {
    user: {
        given_name?: string;
        family_name?: string;
        picture?: string;
    } | null;
}

interface MenuItem {
    label: string;
    href?: string;
    isLogout?: boolean;
}

export default function Drawer({ user }: DrawerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(prevState => !prevState);
    const closeDrawer = () => setIsOpen(false);

    const givenName = user?.given_name || '';
    const familyName = user?.family_name || '';
    const userPicture = user?.picture;

    const menuItems: MenuItem[] = [
        { label: 'Home', href: '/' },
        { label: 'Profile', href: '/profile' },
        { label: 'Log Out', isLogout: true },
    ];

    return (
        <div className="drawer drawer-end">
            <div
                onClick={toggleDrawer}
                role="button"
                className="avatar cursor-pointer"
                aria-label="Toggle user drawer"
            >
                <div className="w-10 rounded-full">
                    {userPicture ? (
                        <Image
                            src={userPicture}
                            alt="User profile avatar"
                            referrerPolicy="no-referrer"
                            className="avatar"
                            width={40}
                            height={40}
                        />
                    ) : (
                        <div className="avatar flex items-center justify-center bg-zinc-100 text-black font-bold">
                            {`${givenName[0] || ''}${familyName[0] || ''}`.toUpperCase()}
                        </div>
                    )}
                </div>
            </div>

            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={closeDrawer}
                    aria-hidden="true"
                ></div>
                <div
                    className={`absolute right-0 top-0 h-full lg:w-80 w-full bg-base-100 text-zinc-800 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div onClick={closeDrawer} className="flex flex-col h-full">
                        <div className="p-4 bg-zinc-100 text-zinc-800">
                            <p className="text-2xl font-">{`${givenName} ${familyName}`}</p>
                        </div>

                        <ul className="menu space-y-2 text-xl tracking-tight p-4">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    {item.isLogout ? (
                                        <LogoutLink>
                                            <button
                                                onClick={closeDrawer}
                                                className="block w-full text-left"
                                            >
                                                {item.label}
                                            </button>
                                        </LogoutLink>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={closeDrawer}
                                            className="block"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
