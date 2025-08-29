import React, { useState, useEffect, useRef } from 'react';
import { reviews } from '../data'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdDoubleArrow } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';

  

const Talentsreviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyLeft = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }
    };
    window.addEventListener("keydown", handleKeyLeft);
    return () => window.removeEventListener("keydown", handleKeyLeft);
  }, []);

  // Manual tab click
  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
  };
  return (
    <section className='relative md:overflow-hidden'>
                <img src="/talentsbg.png" className='hidden sm:block w-full h-auto object-cover absolute top-20 xl:-top-5 left-0 z-1' />
                <img src="/talentsbg.png" className='sm:hidden w-full h-auto object-cover absolute top-0 left-0 z-1' />
                <img src="/talentsbg.png" className='sm:hidden w-full h-auto object-cover absolute top-50 left-0 z-1' />


      <div className='md:px-25 lg:px-30 min-[1366px]:mx-10 relative'>
      <div
      className="flex max-lg:flex-wrap lg:flex-row lg:overflow-x-auto justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10 mt-16 px-2 sm:px-5 md:py-5 md:justify-around cursor-grab bg-transparent border-none lg:w-full hide-scrollbar">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={`rounded-full transition-all duration-300 opacity-100 z-100 flex flex-nowrap ${review.style}
              ${activeIndex === idx ? "bg-indigo-600 scale-110" : "opacity-100"}
            `}
            tabIndex={0}
          >
            <img src={review.img} className='hidden object-cover w-20 h-30 rounded-full z-10 lg:flex lg:w-40  lg:h-60 lg:flex-shrink-0'/>
            <img src={review.imgmobile} className='object-cover max-sm:w-24 max-sm:h-34 w-20 h-30 rounded-full z-10 flex lg:hidden lg:w-40  lg:h-60 lg:flex-shrink-0'/>
          </div>
        ))}
      </div>

      <div className='hidden absolute bottom-0 right-0 w-20 h-20 text-4xl animate-bounce lg:flex flex-col'>
        <MdDoubleArrow/>
        <p className='italic text-sm'>Scroll...</p>
        </div>
      </div>
      <div className='flex flex-col justify-center mx-auto mt-5 lg:mt-15 w-full sm:w-2/3 lg:w-1/3 gap-3 max-md:p-8 md:gap-5 mb-15 md:mb-30'>
        <div className='flex flex-row gap-3 md:gap-5 md:text-center md:items-center md:mx-auto'>
            <img src='/reviewquotes.png' className='w-7 h-7 sm:w-15 sm:h-15'/>
            <h1 className='font-semibold text-lg'>{reviews[activeIndex].name}<br/><span className='text-base font-normal'>{reviews[activeIndex].role}</span><br/><span className='font-light text-xs'>{reviews[activeIndex].role2}</span></h1>
        </div>
        <p className='text-sm md:text-center text-black'>{reviews[activeIndex].text}</p>
        <div className='flex flex-row gap-2 md:gap-2 md:justify-center md:items-center'>
            <Link to='/talentsform'><span className="text-[10px] md:text-sm text-[#1051FF] bg-[#DFDFEE] rounded-lg w-[200px] py-1 md:py-1 lg:py-2 hover:text-white text-center hover:bg-[#1051FF] inline-block">{reviews[activeIndex].hire}</span></Link>
            <span className='mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><a href={reviews[activeIndex].linkedin} target='_blank' rel='noopener noreferrer'><FaLinkedin/></a></span>
            <span className='mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><a href={reviews[activeIndex].x} target='_blank' rel='noopener noreferrer'><FaXTwitter/></a></span>
            <span className='mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><a href={reviews[activeIndex].instagram} target='_blank' rel='noopener noreferrer'><FaInstagram/></a></span>
            <span className='mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><a href={reviews[activeIndex].whatsapp} target='_blank' rel='noopener noreferrer'><FaWhatsapp/></a></span>
        </div>
      </div>
    </section>
  )
}

export default Talentsreviews