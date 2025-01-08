"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import One from "@/public/images/doctors/balakrishna shetty.jpg";
import I1 from "@/public/images/homeimage.png";
import I2 from "@/public/images/docone.png";
import I3 from "@/public/images/doctwo.png";

const carouselImages = [I1, I2, I3];

const Impress = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const users = [
        {
            id: 1,
            name: "Dr Balakrishna Shetty", 
            email: "balakrishna.shetty@kmy.com",
            image:One,
        },
        // {
        //     id: 2,
        //     name: "Rose Francis",
        //     email: "rose.francis@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
        // {
        //     id: 3,
        //     name: "Kate Bishop",
        //     email: "kate.bishop@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
        // {
        //     id: 2,
        //     name: "Rose Francis",
        //     email: "rose.francis@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
        // {
        //     id: 3,
        //     name: "Kate Bishop",
        //     email: "kate.bishop@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
        // {
        //     id: 2,
        //     name: "Rose Francis",
        //     email: "rose.francis@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
        // {
        //     id: 1,
        //     name: "Leslie Alexander",
        //     email: "leslie.alexander@kmy.com",
        //     image:
        //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        // },
    ];

    // Automatic carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-4/6 h-72 lg:h-[28rem] overflow-hidden">
                    {carouselImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width={700}
                            height={700}
                            alt="carousel image"
                            className={`absolute w-full h-full duration-300 transition-all ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                </div>

                {/* Doctors Section */}
                <div className="hidden lg:flex flex-col mx-4 p-4 w-1/3">
                    <div className="flex items-center justify-between">
                        <p className="text-xl">Top Doctors in City</p>
                        <ArrowRightIcon className="h-6 w-6" />
                    </div>
                    <div className="w-full overflow-auto scrolly h-4/6">
                        <ul role="list" className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    className="flex justify-between gap-x-6 py-5"
                                >
                                    <div className="flex min-w-0 gap-x-4">
                                        <Image
                                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                            src={user.image}
                                            alt={user.name}
                                        />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {user.name}
                                            </p>
                                            <p className="mt-1 truncate text-xs text-gray-500">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-6xl lg:text-left text-center py-10">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-8xl">
                    AI-powered consumer{" "}
                    <span className="text-green-500 font-serif italic font-normal">
                        health
                    </span>{" "}
                    Platform
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Introducing our cutting-edge solution, the ultimate safeguard for
                    health and wellbeing. In today’s rapidly evolving health sector, we
                    take people’s health as a serious concern and help them.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                    <a
                        href="/profile"
                        className=" bg-zinc-900 btn lg:hover:scale-125 lg:hover:skew-x-2 lg:hover:-rotate-6 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                    >
                        Get Started
                    </a>
                    <a href="/about" className="text-md font-semibold leading-6 text-gray-900">
                        About Us <span>→</span>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Impress;
