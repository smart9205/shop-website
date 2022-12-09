import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col-reverse md:flex-col">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="font-sans font-extrabold text-6xl text-[#88b06a] mt-[20px] md:mt-[70px] p-2">
                        Corvo Coffee
                    </h1>
                    <span className="text-[#88b06a] text-xl mt-[20px]">
                        The Holy Cross Brewing Society
                    </span>
                    <span className="text-[#88b06a] text-xl mb-[20px]">
                        Cafe in Frankfurt
                    </span>
                    <button className="bg-[#88b06a] px-[54px] py-[18px] text-white">
                        CONTACT US
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center py-0 md:py-12 w-full">
                    <Image
                        src={"/images/selling.jpg"}
                        width="3000px"
                        height="1260px"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-6">
                <h5 className="relative text-black p-3 font-bold text-[22px] before:absolute before:top-0 before:left-[20px] before:h-[3px] before:w-[90px] before:bg-black">
                    Contact Us
                </h5>
                <a
                    target="_blank"
                    href={"https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9"}
                    rel="noopener noreferrer"
                >
                    <div className="hidden sm:block">
                        <Image
                            src={"/images/map.png"}
                            width="3000px"
                            height="1260px"
                            objectFit="cover"
                        />
                    </div>
                </a>
                <a
                    target="_blank"
                    href={"https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9"}
                    rel="noopener noreferrer"
                >
                    <div className="block sm:hidden">
                        <Image
                            src={"/images/smallMap2.png"}
                            width="1000px"
                            height="400px"
                            objectFit="cover"
                        />
                    </div>
                </a>
            </div>

            <div className="flex mt-5">
                <div className="flex-1">
                    <h1 className="text-black font-bold text-lg sm:text-xl">
                        Address
                    </h1>
                    <button className="bg-[#88b06a] my-3 px-3 py-2">
                        Get Directions
                    </button>
                    <p className="text-black max-w-[120px] sm:max-w-[240px] sm:text-md">
                        542 9th Avenue New York, NY 10018 USA
                    </p>
                </div>
                <div className="flex-1 text-black">
                    <p className="font-bold text-xl sm:text-2xl">
                        Business Hours
                    </p>
                    <p className="sm:text-xl">Mon: 9:00-18:00</p>
                    <p className="sm:text-xl">Tue: 9:00-18:00</p>
                    <p className="sm:text-xl">Wed: 9:00-18:00</p>
                    <p className="sm:text-xl">Thu: 9:00-18:00</p>
                    <p className="sm:text-xl">Fri: 9:00-18:00</p>
                    <p className="sm:text-xl">Sat: 10:00-18:00</p>
                    <p className="sm:text-xl">Sun: 10:00-18:00</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
