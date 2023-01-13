import React from 'react'
import  ClientCandidate  from './ClientCandidate'
import  CompanyIntro  from './CompanyIntro'
import  Footer  from './Footer'
import Hero from './Hero'
import Slider from '../Slider'
import  Testimonials  from './Testimonials'

export default function HomePage() {
  return (
    <div>
        <Hero/>
        <CompanyIntro/>
        <Testimonials/>
        <ClientCandidate/>
        <Footer/>
        <Slider/>
    </div>
  )
}


