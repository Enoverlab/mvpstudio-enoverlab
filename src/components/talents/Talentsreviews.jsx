import React, { useState, useEffect, useRef } from 'react';
import { reviews } from '../data'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

  

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
    <section className='relative'>
                <img src="/talentsbg.png" className='w-full h-auto object-cover absolute top-20 sm:-top-10 lg:-top-20 left-0 z-1' />

      <div className="flex max-md:flex-wrap flex-row justify-center items-center gap-8 mt-16 w-full">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={`rounded-full transition-all duration-300 cursor-pointer opacity-100 z-100 ${review.style}
              ${activeIndex === idx ? "bg-indigo-600 scale-110" : "opacity-100"}
            `}
            tabIndex={0}
          >
            <img src={review.img} className='object-cover w-20 h-30  md:w-40 md:h-60 rounded-full z-10' />
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center mx-auto mt-5 sm:mt-20 w-full sm:w-2/3 lg:w-1/3 gap-3 max-md:p-8 md:gap-5 mb-15 md:mb-30'>
        <div className='flex flex-row gap-3 md:gap-5 md:text-center md:items-center md:mx-auto'>
            <img src='/reviewquotes.png' className='w-7 h-7 sm:w-15 sm:h-15'/>
            <h1 className='font-semibold text-lg'>{reviews[activeIndex].name}<br/><span className='text-base font-normal'>{reviews[activeIndex].role}</span><br/><span className='font-light text-xs'>{reviews[activeIndex].role2}</span></h1>
        </div>
        <p className='text-sm md:text-center text-black'>{reviews[activeIndex].text}</p>
        <div className='flex flex-row gap-2 md:gap-2 md:justify-center md:items-center'>
            <button className="text-[10px] md:text-sm text-[#1051FF] bg-[#DFDFEE] rounded-lg  w-[50%] py-0.5 md:py-1 lg:py-2 hover:text-white hover:bg-[#1051FF] inline-block">{reviews[activeIndex].hire}</button>
            <span className='lg:mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><FaInstagram/></span>
            <span className='lg:mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><FaFacebook/></span>
            <span className='lg:mt-2 w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-indigo-600'><FaWhatsapp/></span>
        </div>
      </div>
    </section>
  )
}

export default Talentsreviews