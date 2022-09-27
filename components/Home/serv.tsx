import Image from "next/image";
import Link from "next/link";
const ServiceSection = () => {
    return (
        <div className="flex justify-evenly items-start">
            <div className="flex flex-col justify-start items-start">
                <span className="text-white font-bold text-xl sm:text-2xl">
                    Address
                </span>
                <div className="bg-green-600 hover:bg-green-800 my-5 px-3 py-2 z-10 rounded-lg">
                    <Link href={"https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9"}>
                        <span className="text-white uppercase font-bold">Get Directions</span>
                    </Link>
                </div>
                <span className="text-white max-w-[120px] sm:max-w-[240px] sm:text-xl">
                    Fahrgasse 7, 60311 Frankfurt am Main, Germany
                </span>
            </div>
            <div className="hidden md:block">
                <div className="h-12"></div>
                <Image src={"/images/intro.jpg"} width="200px" height="100px" />
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-xl sm:text-2xl">
                    Business Hours
                </span>
                <span className="text-white sm:text-xl">Mon: 9:00-18:00</span>
                <span className="text-white sm:text-xl">Tue: 9:00-18:00</span>
                <span className="text-white sm:text-xl">Wed: 9:00-18:00</span>
                <span className="text-white sm:text-xl">Thu: 9:00-18:00</span>
                <span className="text-white sm:text-xl">Fri: 9:00-18:00</span>
                <span className="text-white sm:text-xl">Sat: 10:00-18:00</span>
                <span className="text-white sm:text-xl">Sun: 10:00-18:00</span>
            </div>
        </div>
    )
}

export default ServiceSection;