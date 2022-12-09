import React from "react";
import { HiOutlineMail, HiOutlineThumbUp } from "react-icons/hi";

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
                        Hideaway Coffee
                    </a>
                </div>
                <ul className="hidden space-x-4 sm:inline-flex pr-2">
                    <li>
                        <a
                            href="#"
                            className="px-2 py-2 text-[#88b06a] rounded hover:text-gray-600"
                        >
                            <div className="flex items-center justify-center gap-2 ">
                                <HiOutlineThumbUp size={"22px"} />
                                <span className="text-xl">About Us</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="#"
                            rel="noopener noreferrer"
                            className="px-2 py-2 text-[#88b06a] rounded hover:text-gray-600"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <HiOutlineMail size={"22px"} />
                                <span className="text-xl">Find us</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
