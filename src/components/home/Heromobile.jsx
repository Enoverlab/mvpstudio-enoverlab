import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Heromarquee from './Heromarquee';
const Heromobile = () => {
  return (
    <>
    <section>
        <div className='flex flex-col'>
            <div className='w-full flex flex-col justify-center items-center max-sm:p-5 p-10 mt-20 gap-3'>
                  <div className="max-sm:mb-4   border-1 rounded-2xl px-5 border-gray-300">
          <span className="text-[#FF9800] text-lg">★★★★</span>
          <span className="text-[#121212] text-sm font-medium">
            4.9/5 (Base on 10000+ happy users)
          </span>
        </div>
      <h1 className='sm:text-[2.5rem] text-[26px] leading-9 font-bold text-center'>Enoverlab Makes Sure
          You Never Start From <span className='sm:hidden'><br/></span><span className="text-[#1051FF]">Scratch</span></h1>
<p className='text-sm sm:text-center'>We Empower startups, SMEs, and organization by offering ready to use and customizable MVPs That helps business scale their ideas without the typical hurdles of Cost and Time.</p>
      </div>

<Swiper
effect={'coverflow'}
grabCursor={true}
autoplay={{delay: 2500, disableOnInteraction: false}}
loop={true}
centeredSlides={true}
slidesPerView={'auto'}
coverflowEffect={{
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: true,
}}
modules={[Autoplay, EffectCoverflow]}
className='mySwiper'
>
    <SwiperSlide>
        <img src="/firstverticalimage1.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="/firstverticalimage2.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="/firstverticalimage3.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="/secondverticalimage1.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="/secondverticalimage2.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="/secondverticalimage3.png" className='rounded-2xl w-[300px] sm:w-[300px] h-[240px] sm:h-[300px]'/>
    </SwiperSlide>
</Swiper>
                        <Heromarquee/>
        </div>
    </section>
    </>
  )
}

export default Heromobile