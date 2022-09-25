import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <header className="bg-black sticky top-0 z-30 w-full px-2 md:py-0  py-4  sm:px-4 shadow-xl">
          <div className="flex items-center justify-between mx-auto max-w-7xl">
            <div className='flex justify-center items-center gap-2'>
              <Image src={"/images/logo.jpg"} width="60px" height="60px" />
              <a href="#" className='max-w-[260px] md:max-w-full'>
                <span className="text-xl font-extrabold text-white">The Holy Cross Brewing Society</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <ul className="hidden space-x-2 lg:inline-flex">
                <li>
                  <a href="#" className="px-2 py-2 font-semibold text-white rounded">
                    <div className="flex items-center justify-center gap-4 px-3 m-0">
                      <Image src={"/images/mail.svg"} width="24px" height="24px" />
                      <span className='text-xl'>Contact Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 py-2 font-semibold text-white rounded">
                    <div className="flex items-center justify-center gap-4 px-3 m-0">
                      <Image src={"/images/direc.svg"} width="24px" height="24px" />
                      <span className='text-xl'>Get Directions</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="inline-flex lg:hidden">
                <button className="flex-none px-2 ">
                  <Image src={"/images/hamburger.jpg"} width="64px" height="64px" />
                  <span className="sr-only">Open Menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="p-4 mx-auto max-w-7xl">
          <div className="mx-auto font-sans h-[1024px]">
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
