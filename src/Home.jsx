import React from 'react'
import './Home.css'
import Navbar from './components/Navbar'
import Usspecial from './components/home/Usspecial'
import Browsemvps from './components/home/Browsemvps'
import Meettheexperts from './components/home/Meettheexperts'
import Hero from './components/home/Hero'
import Meettheexpertsmobile from './components/home/Meettheexpertsmobile'
import Testimonials from './components/home/Testimonials'
import Frequentlyaskedquestions from './components/home/Frequentlyaskedquestions'
import Somethinggreat from './components/home/Somethinggreat'
import Projectcount from './components/home/Projectcount'
import Heromobile from './components/home/Heromobile'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
    <div className='overflow-hidden bg-[#F3F3FF]'>
    <Navbar/>
    <div className='max-lg:hidden'><Hero/></div>
    <div className='lg:hidden'><Heromobile/></div>
    <Projectcount/>
    <Usspecial/>
    <Browsemvps/>
    <div className='max-md:hidden'><Meettheexperts/></div>
    <div className='md:hidden'><Meettheexpertsmobile/></div>
    <Testimonials/>
    <Frequentlyaskedquestions/>
    <Somethinggreat/>
    <Footer/>
    </div>
    </>
  )
}

export default Home