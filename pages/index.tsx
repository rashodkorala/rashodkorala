import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/src/components/navbar'
import Main from '@/src/components/main/home'
import About from '@/src/components/main/about'
import Skills from '@/src/components/main/skills'
import Work from '@/src/components/main/work'
import Contact from '@/src/components/main/contact'
import Footer from '@/src/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}
