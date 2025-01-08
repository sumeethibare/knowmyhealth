"use client";
import React, { useState, useEffect } from 'react';
import { PatientForm } from '../forms/PatientForm';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false); // Track if we're in the client-side
    const [windowWidth, setWindowWidth] = useState<number>(0); // Track window width

    const toggleDrawer = () => setIsOpen(prevState => !prevState);
    const closeDrawer = () => setIsOpen(false);

    useEffect(() => {
        // Ensure window is only used on the client
        setIsClient(true);
        setWindowWidth(window.innerWidth);

        // Update window width on resize
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isClient) return null; // Prevent rendering on the server side

    return (
        <div className="drawer drawer-end">
            <a
                href={windowWidth >= 768 ? "#appointment" : undefined}
                aria-label="Toggle user drawer"
                onClick={(e) => {
                    if (windowWidth >= 768) {
                        // Allow default behavior (navigation)
                    } else {
                        e.preventDefault();
                        toggleDrawer();
                    }
                }}
                role="button"
                className="group btn bg-base-100 relative inline-flex items-center border-none"
            >
                <span className="transition-all lg:flex hidden duration-300 ease-out group-hover:mr-6">
                    Book Appointment
                </span>
                <ClipboardDocumentIcon
                    className="absolute lg:right-0 size-5 lg:opacity-0 transition-all duration-300 ease-out lg:group-hover:right-3 lg:group-hover:opacity-100"
                    aria-hidden="true"
                />
            </a>

            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={closeDrawer}
                    aria-hidden="true"
                ></div>
                <div
                    className={`absolute left-0 bottom-0 w-full bg-base-100 text-zinc-800 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex flex-col h-full justify-center">
                        <div className="sub-container flex-1 max-w-[496px] w-full lg:w-[400px] bg-dark-500 p-6 shadow-md">
                            <PatientForm />
                            <a onClick={closeDrawer} className='btn mt-4 w-full'>Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
