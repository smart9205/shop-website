import Link from "next/link";
import Image from "next/image";
const IntroSection = () => {
    return (
        <div className="w-full bg-black px-4 py-4  gap- flex flex-col-reverse sm:flex-col">
            <div className="flex flex-col justify-center items-center relative py-4">
                <div className="opacity-30">
                    <Image src={"/images/intro.jpg"} layout="fill" objectFit='contain'
                    />
                </div>
                <div className="sm:h-32"></div>
                <span className="font-bold text-5xl text-white text-center leading-tight">The Holy Cross Brewing Society</span>
                <span className="text-white mt-5 text-xl">Cafe in Frankfurt</span>
                <div className="bg-green-600 hover:bg-green-800 my-5 px-6 py-2 z-10 rounded-lg">
                    <Link href={"https://instagram.com/the_holy_cross_brewing_society?igshid=YmMyMTA2M2Y="}>
                        <span className="text-white uppercase font-bold">Contact Us</span>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center py-12">
                <Image src={"/images/selling.jpg"} width="1000px" height="560px" />
            </div>
        </div>
    )
}

export default IntroSection;