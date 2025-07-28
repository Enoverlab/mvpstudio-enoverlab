import React from 'react'
import Hero from './components/talents/Hero'
import Navbar from './components/Navbar'
import Talentsreviews from './components/talents/Talentsreviews'
import Footer from './components/Footer'

const Talents = () => {
  return (
    <div className='bg-[#F3F3FF] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Talentsreviews/>
      <Footer/>
    </div>
  )
}

export default Talents