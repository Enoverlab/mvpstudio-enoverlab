import React from 'react'
import Heromarquee from './Heromarquee'
import Heromarqueevertical from './Heromarqueevertical'

const Hero = () => {
  return (
    <>
    <section className="w-full h-screen flex flex-col herobg relative overflow-hidden">
      <div className='w-full flex flex-row'>
      {/* Left: Text & Buttons */}
      <div className="flex flex-col w-1/2 justify-center items-start px-6 xl:px-20 py-20 xl:py-30 z-10">
        <div className="mb-4 flex items-center gap-2 border-1 rounded-2xl px-5 border-gray-300">
          <span className="text-[#FF9800] text-lg">★★★★</span>
          <span className="text-[#121212] text-sm font-medium">
            4.9/5 (Base on 10000+ happy users)
          </span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold text-[#121212] mb-4 leading-tight">
          Enoverlab Makes Sure
          You Never Start From <span className="text-[#1051FF]">Scratch</span>
        </h1>
        <p className="text-[#595C63] text-sm lg:text-base mb-8 max-w-xl">
          We Empower startups, SMEs, and organization by offering ready to use and customizable MVPs That helps business scale their ideas without the typical hurdles of Cost and Time.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="px-3 w-[174px] h-[48px] py-2 border border-[#1051FF] rounded-lg text-[#121212] text-sm lg:font-medium bg-white hover:bg-[#1051FF] hover:text-white transition">
            <img src='/explore.png' className='inline-block mr-2 w-5 h-5'/>Explore an MVP
          </button>
          <button className="px-3 w-[174px] h-[48px] py-2 rounded-lg bg-[#1051FF] text-white text-sm lg:font-medium hover:bg-[#1060ffc2] transition">
            <img src='/hire.png' className='inline-block mr-2 w-5 h-5'/>Hire Talents
          </button>
        </div>
      </div>

      <div className="w-1/2 flex overflow-hidden pb-5">
   <Heromarqueevertical/>
    </div>
    </div>
    <div className='flex '><Heromarquee/></div>
      </section>
    
    </>
  )
}

export default Hero