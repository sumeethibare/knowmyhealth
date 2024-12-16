"use client";

import React from "react";
import Image from "next/image";

// User component that takes `userData` as a prop and displays it
function User({ userData }: { userData: any }) {
    const { isAuthenticated, safeUser, userPicture } = userData || {};
    const loading = !userData;

    const profilePicture = loading || !isAuthenticated ? (
        <Image
            src={userPicture || ""} // Fallback if userPicture is invalid
            alt="User profile avatar"
            referrerPolicy="no-referrer"
            className="avatar rounded-full"
            width={40}
            height={40}
        />

    ) : (
        <img
            className="w-full rounded-full h-auto md:w-auto md:h-auto "
            src="https://via.placeholder.com/150"
            alt="User Profile"
        />
    );

    return (
        <div className="w-auto flex justify-center py-10">
            <div className="flex items-center justify-evenly lg:flex-row flex-col ">
                <div>
                    {profilePicture}
                </div>

                <div className="flex flex-col lg:ml-10 items-center lg:items-start">

                    <h1 className="text-zinc-300 font-semibold text-3xl lg:text-6xl">
                        {loading
                            ? "Fetching user details..."
                            : isAuthenticated
                                ? `${safeUser?.given_name || "User"} ${safeUser?.family_name || ""}`
                                : "Guest User"}
                    </h1>

                    <h1 className="text-zinc-300 text-xl">
                        {loading
                            ? "Fetching user details..."
                            : isAuthenticated
                                ? `${safeUser?.email || ""}`
                                : "Guest User"}
                    </h1>

                    {loading ? (
                        <span className="loading loading-bars loading-sm"></span>
                    ) : isAuthenticated ? (
                        <p className="text-zinc-400">Welcome to your profile!</p>
                    ) : (
                        <p className="text-zinc-400">Please log in to access your profile details.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default User;
