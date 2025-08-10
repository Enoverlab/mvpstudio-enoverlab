import React from 'react'
import Hero from './components/services/Hero'
import Somethinggreat from './components/home/Somethinggreat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Services = () => {
  return (
    <>
    <section>
        <Navbar/>
        <Hero/>
        <Somethinggreat/>
        <Footer/>
    </section>
    </>
  )
}

export default Services