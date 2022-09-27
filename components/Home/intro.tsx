import Image from "next/image";
const IntroSection = () => {
    return (
        <div className="w-full bg-black px-4">
            <div className="flex flex-col justify-center items-center relative py-4">
                <div className="opacity-30">
                    <Image src={"/images/intro.jpg"} layout="fill" objectFit='contain'
                    />
                </div>
                <div className="h-32"></div>
                <span className="font-bold text-5xl text-white text-center leading-tight">The Holy Cross Brewing Society</span>
                <span className="text-white mt-5">Cafe in New York</span>
                <span className="text-white mt-2">Open today until 7:00 PM</span>
                <div className="bg-green-600 hover:bg-green-800 my-5 px-6 py-2 z-10 rounded-lg">
                    <span className="text-white">Contact Us</span>
                </div>
            </div>
        </div>
    )
}

export default IntroSection;