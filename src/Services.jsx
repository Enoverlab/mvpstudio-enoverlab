import React from 'react'
import Somethinggreat from './components/home/Somethinggreat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Heronew from './components/services/Heronew'
import Servicessection from './components/services/Servicessection'
import Infinityslider from './components/services/Infinityslider'

const Services = () => {
  return (
    <>
    <section className='overflow-x-hidden'>
        <Navbar/>
        <Heronew/>
        <Servicessection/>
        <Somethinggreat/>
        <Infinityslider/>
        <Footer/>
    </section>
    </>
  )
}

export default Services