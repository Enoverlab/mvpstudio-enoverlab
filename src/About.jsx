import React from 'react'
import Special from './components/about/Special'
import Empower from './components/about/Empower'
import Reshape from './components/about/Reshape'
import Footer from './components/Footer'
import Hero from './components/about/Hero'
import Navbarwhite from './components/Navbarwhite'
import Meetourfounder from './components/about/Meetourfounder'

const About = () => {
  return (
    <>
    <Navbarwhite/>
    <div className='overflow-hidden bg-[#F3F3FF]'>
    <Hero/>
    <Special/>
    <Empower/>
    <Meetourfounder/>
    <Reshape/>
    <Footer/>
    </div>
    </>
  )
}

export default About