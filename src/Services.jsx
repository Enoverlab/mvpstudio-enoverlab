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
    <section>
      <div className='overflow-hidden'>
        <Navbar/>
        <Heronew/>
        <Servicessection/>
        <Somethinggreat/>
        <Infinityslider/>
        <Footer/>
        </div>
    </section>
    </>
  )
}

export default Services