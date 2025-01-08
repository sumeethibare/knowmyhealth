"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { diseases } from "./treatment";
import { doctors } from "./doctors";
import Image, { StaticImageData } from "next/image";

// Define types for disease and doctor
interface Disease {
    id: number;
    name: string;
    description: string;
    image: StaticImageData | string;
}


const OnlineConsultation = () => {
    const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

    const openModal = (disease: Disease) => {
        setSelectedDisease(disease);
        const modal = document.getElementById("option_enabled") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    // Filter doctors by the selected disease's specialty
    const filteredDoctors = selectedDisease
        ? doctors.filter((doctor) => doctor.specialty === selectedDisease.name)
        : doctors;

    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {diseases.map((disease) => (
                    <div
                        key={disease.id}
                        className="rounded-none border border-zinc-200 p-4 text-center cursor-pointer hover:shadow-2xl hover:duration-300 duration-300 transition-all transform lg:hover:scale-110"
                        onClick={() => openModal(disease)}
                    >
                        <div className="w-full h-48 overflow-hidden">
                            <Image
                                src={disease.image}
                                alt={disease.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{disease.name}</h2>
                            <p>{disease.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="option_enabled" className="modal">
                <div className="modal-box w-full h-full max-w-full max-h-full flex lg:flex-row flex-col">
                    <button
                        className="absolute top-4 right-4 text-gray-600 text-2xl"
                        onClick={() => (document.getElementById("option_enabled") as HTMLDialogElement)?.close()}
                    >
                        <XMarkIcon className="size-8" />
                    </button>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedDisease?.name}</h2>
                        <p className="mb-6 text-gray-600">{selectedDisease?.description}</p>

                        {/* <h3 className="text-xl font-semibold mb-4">Top Doctors for {selectedDisease?.name}</h3> */}
                        <div className="flex items-center flex-wrap gap-6">
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => (
                                    <div
                                        key={doctor.id}
                                        className="p-4 border rounded-none hover:shadow-2xl transition-all hover:duration-300 duration-300 transform hover:scale-105 flex items-start space-x-4"
                                    >
                                        <Image
                                            src={doctor.imageUrl}
                                            alt={doctor.name}
                                            height={50}
                                            width={50}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{doctor.name}</h4>
                                            <p className="text-gray-600">{doctor.specialty}</p>
                                            <p className="text-gray-500">{doctor.location}</p>
                                            <p className="text-gray-500">
                                                Fee: {doctor.consultationFee} | Mode: {doctor.modeOfConsultation}
                                            </p>
                                            <p className="text-gray-500">
                                                Experience: {doctor.experience}
                                            </p>
                                            <p className="text-gray-500">
                                                Languages: {doctor.languages.join(", ")}
                                            </p>
                                            <p className="text-gray-500 mb-5">Availability: {doctor.availability}</p>
                                            <a href="/appointments/booking"
                                                className="px-4 py-2 bg-blue-900 text-white rounded-none btn hover:btn-primary"
                                            >
                                                Book Appointment
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No doctors available for this specialty.</p>
                            )}
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default OnlineConsultation;
