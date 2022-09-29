import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isMenuDown, setIsMenuDown] = useState(true);
    const MenuDown = () => {
        setIsMenuDown(!isMenuDown);
    }
    return (
        <div className="bg-gray-100">
            <header className="bg-black sticky top-0 z-30 w-full px-2 md:py-0  py-4  sm:px-4 shadow-xl border-b-gray-300 border-b-4">
                <div className="flex items-center justify-between mx-auto max-w-7xl">
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={"/images/logo.jpg"} width="60px" height="60px" />
                        <a target="_blank" href="https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9" className='max-w-[260px] md:max-w-full'>
                            <span className="text-xl font-extrabold text-white">The Holy Cross Brewing Society</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ul className="hidden space-x-2 lg:inline-flex">
                            <li>
                                <a href="#contact_us" className="px-2 py-2 font-semibold text-white rounded">
                                    <div className="flex items-center justify-center gap-4 px-3 m-0">
                                        <Image src={"/images/mail.svg"} width="32px" height="32px" />
                                        <span className='text-xl'>Contact Us</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9" className="px-2 py-2 font-semibold text-white rounded">
                                    <div className="flex items-center justify-center gap-4 px-3 m-0">
                                        <Image src={"/images/direc.svg"} width="32px" height="32px" />
                                        <span className='text-xl'>Get Directions</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="inline-flex lg:hidden">
                            {isMenuDown ? (<div className="mx-3" onClick={MenuDown}>
                                <div className="w-9 h-[5px] bg-white m-[6px]"></div>
                                <div className="w-9 h-[5px] bg-white m-[6px]"></div>
                                <div className="w-9 h-[5px] bg-white m-[6px]"></div>
                            </div>) : (<div className="mx-3" onClick={MenuDown}>
                                <div className="w-9 h-[5px] bg-white m-[6px] duration-150 translate-y-3 rotate-[45deg]"></div>
                                <div className="w-9 h-[5px] bg-white m-[6px] opacity-0"></div>
                                <div className="w-9 h-[5px] bg-white m-[6px] duration-150 -translate-y-3 -rotate-[45deg]"></div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </header>
            <div>
                {
                    isMenuDown ? "" :
                        (
                            <div className=" bg-black w-full text-white">

                                <ul>
                                    <li className="m-0 bg-transparent  border-b-2 border-white">
                                        <a href="#contact_us" className="px-2 py-2 font-semibold text-white rounded">
                                            <div className="flex items-center justify-center gap-4 px-3 m-0">
                                                <Image src={"/images/mail.svg"} width="32px" height="32px" />
                                                <span className='text-xl'>Contact Us</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="m-0 bg-transparent ">
                                        <a target="_blank" href="https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9" className="px-2 py-2 font-semibold text-white rounded">
                                            <div className="flex items-center justify-center gap-4 px-3 m-0">
                                                <Image src={"/images/direc.svg"} width="32px" height="32px" />
                                                <span className='text-xl'>Get Directions</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                }
            </div>
        </div >
    )
}

export default Navbar;