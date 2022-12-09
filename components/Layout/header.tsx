import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-white sticky top-0 z-30 w-full shadow-xl">
            <div className="flex items-center justify-between mx-auto container">
                <div className="flex justify-center items-center gap-2 py-4 pl-2">
                    <a
                        target="_blank"
                        href="#"
                        rel="noopener noreferrer"
                        className="text-[#88b06a] text-2xl font-bold"
                    >
                        Corvo Coffee
                    </a>
                </div>
                <ul className="hidden space-x-4 sm:inline-flex pr-2">
                    <li>
                        <a
                            href="#"
                            className="px-2 py-2 text-[#88b06a] rounded"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Image
                                    src={"/images/mail.svg"}
                                    width="20px"
                                    height="20px"
                                />
                                <span className="text-xl">Contact Us</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="#"
                            rel="noopener noreferrer"
                            className="px-2 py-2 text-[#88b06a] rounded"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Image
                                    src={"/images/direc.svg"}
                                    width="20px"
                                    height="20px"
                                />
                                <span className="text-xl">Get Directions</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
