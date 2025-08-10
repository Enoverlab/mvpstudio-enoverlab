import React from 'react'
import Mvpstudiocatalog from './mvpstudio/Mvpstudiocatalog'
import Hero from './mvpstudio/Hero'
import Footer from './Footer'
import Navbarwhite from './Navbarwhite'

const Mvpstudio = () => {
  return (
    <>
    < div className='bg-[#F3F3FF]'>
    <Navbarwhite/>
    <Hero/>
    <Mvpstudiocatalog/>
    <Footer/>
    </div>
    </>
  )
}

export default Mvpstudio