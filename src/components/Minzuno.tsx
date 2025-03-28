import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Mizuno = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch justify-center px-6 md:px-12 mt-12">
            <div className="w-full md:w-1/2 flex">
                <div className="p-8 rounded-l-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
                    <h2 className="mb-6">
                        <Image src="/mizuno_logo.svg" alt="Mizuno Logo" width={150} height={50} />
                    </h2>

                    <h1 className="text-3xl font-bold">Mizuno USA Goes composable for big growth.</h1>
                    <p className="mt-7 text-lg  text-gray-600 flex items-start gap-6">
                        <span className="flex flex-col">
                            <span className="font-sans text-2xl font-bold">90%</span>
                            <span>Decrease in time to complete checkout</span>
                        </span>
                        <span className="flex flex-col">
                            <span className="font-sans text-2xl font-bold">12%</span>
                            <span>Increase in average order value</span>
                        </span>
                    </p>


                    <h3 className="mt-8 text-2xl font-semibold">SOLUTIONS</h3>

                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center space-x-3">
                            <Image src="/mira-commerce-logomark.svg" alt="Mira Commerce" width={40} height={40} className="rounded-md" />
                            <span className="text-lg text-gray-700">Mira Commerce</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Image src="/deck-commerce-logomark.svg" alt="Deck Commerce" width={40} height={40} className="rounded-md" />
                            <span className="text-lg text-gray-700">Deck Commerce</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Image src="/bolt-logomark.svg" alt="Bolt" width={40} height={40} className="rounded-md" />
                            <span className="text-lg text-gray-700">Bolt</span>
                        </li>
                    </ul>

                    <Button className="mt-6 px-6 py-5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                        READ THEIR STORY
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
                <Image
                    src="/minzuno.png"
                    alt="Mizuno Growth"
                    width={550}
                    height={550}
                    className="rounded-2xl object-cover w-auto h-auto"
                />
            </div>
        </section>
    );
};

export default Mizuno;
