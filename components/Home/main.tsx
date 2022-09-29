import Image from "next/image";
import Link from "next/link";
const MainSection = () => {
    return (
        <div className="flex flex-col justify-center items-center my-4">
            <hr className="w-16 my-2" />
            <span className="text-white text-3xl uppercase font-bold mb-6">
                Contact Us
            </span>
            <a target="_blank" href={"https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9"}>
                <div className="hidden sm:block">
                    <Image src={"/images/map.png"} width="1000px" height="400px" objectFit="cover" />
                </div>
            </a>
            <a target="_blank" href={"https://maps.app.goo.gl/cRLEXB9Qa1EHt6dc9"}>
                <div className="block sm:hidden">
                    <Image src={"/images/smallMap2.png"} width="1000px" height="400px" objectFit="cover" />
                </div>

            </a>
        </div>
    )
}

export default MainSection;