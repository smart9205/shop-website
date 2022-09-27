import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IntroSection from '../components/Home/intro'
import MainSection from '../components/Home/main'
import ServiceSection from '../components/Home/serv'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <MainSection />
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default Home
