import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Heromarqueemobile from './Heromarqueemobile';

const Heromobile = () => {
  return (
    <>
    <section className='mb-20'>
        <div className='flex flex-col'>
            <motion.div
            initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className='w-full flex flex-col justify-center items-center p-5 sm:p-10 mt-20 gap-3'>
                  <div className="max-sm:mb-4  border-1 rounded-2xl px-5 border-gray-300">
          <span className="text-[#FF9800] text-lg">★★★★</span>
          <span className="text-[#121212] text-[10px] font-medium inline-flex">
            4.9/5 (Based on 10000+ happy users)
          </span>
        </div>
      <h1 className='sm:text-[2.5rem] text-[26px] leading-9 font-bold text-center'>Do you have a product idea or need a ready-to-use MVP? <span className='sm:hidden'><br/></span><span className="text-[#1A2DB3]">Enoverlab's</span> got you</h1>
<p className='text-sm text-center font-normal'>We empower startups, SMEs, and organizations by offering ready to use and customizable MVPs that help businesses scale their ideas without the typical hurdles of cost and time. We also build fresh custom websites tailored to your unique ideas.</p>
      </motion.div>

<Swiper
effect={'coverflow'}
grabCursor={true}
autoplay={{delay: 2500, disableOnInteraction: false}}
loop={true}
slidesPerView={'auto'}
centeredSlides={true}
coverflowEffect={{
rotate: 50,
stretch: 0,
depth: 200,
modifier: 1,
slideShadows: false,
}}
modules={[Autoplay, EffectCoverflow]}
className='mySwiper swiper-slide max-w-[768px]'
>
    <SwiperSlide className='rounded-3xl'>
        <img src="/firstverticalimage1.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide className='rounded-3xl'>
        <img src="/firstverticalimage2.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide className='rounded-3xl'>
        <img src="/firstverticalimage3.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide className='rounded-3xl'>
        <img src="/secondverticalimage1.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide className='rounded-3xl'>
        <img src="/secondverticalimage2.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide className='rounded-3xl'>
        <img src="/secondverticalimage3.png" className='rounded-3xl w-[200px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
</Swiper>
                        <Heromarqueemobile/>
        </div>
    </section>
    </>
  )
}

export default Heromobile