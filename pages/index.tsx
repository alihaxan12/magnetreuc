import Head from 'next/head'
import Image from 'next/image'
// import {HomePage} from './Component/HomePage'
import Hero from './Component/Hero';
import CompanyIntro from './Component/CompanyIntro';
import Testimonials from './Component/Testimonials';
import ClientCandidate from './Component/ClientCandidate';
import Footer from './Component/Footer';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Magnet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HomePage/> */}
      <div>
        <Hero/>
        <CompanyIntro/>
        <Testimonials/>
        <ClientCandidate/>
        <Footer/>
    </div>
    </div>
  )
}
