import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IntroSection from '../components/Home/intro'
import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
    </div>
  )
}

export default Home
