import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Autoplay } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section className='mt-9 bg-[#F3F3FF]'>
      <div className='flex flex-col gap-1 justify-center items-center px-10 text-center'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/testimonials.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Testimonials
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          What Our Clients Are Saying
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          We take pride in delivering exceptional solutions that delivers great <br className='max-md:hidden'/> results. But don’t just take our word for it.
        </div>
      </div>
<div className='max-w-[90%] mx-auto px-4'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
                },
          1200: {
            slidesPerView: 3,
            },
        }}
        className="mySwiper2"
      >
        <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>"I really like the system at this management, I love recommending this software from you guys"</p>
          <div className='w-full flex flex-row'>
            <div><img src='/ashley.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Ashley Cooper</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>"“We alighn our succeess with the success of our customers and offer transcending our software”.</p>
          <div className='w-full flex flex-row'>
            <div><img src='/jackline.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Jackline Fare</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>"I really like the system at this management, I love recommending this software from you guys"</p>
          <div className='w-full flex flex-row'>
            <div><img src='/ashley.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Ashley Cooper</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>“We alighn our succeess with the success of our customers and offer transcending our software”.</p>
          <div className='w-full flex flex-row'>
            <div><img src='/jackline.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Jackline Fare</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>"I really like the system at this management, I love recommending this software from you guys"</p>
          <div className='w-full flex flex-row'>
            <div><img src='/ashley.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Ashley Cooper</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5'>
          <p className='text-sm md:text-base mb-7'>"I really like the system at this management, I love recommending this software from you guys"</p>
          <div className='w-full flex flex-row'>
            <div><img src='/jackline.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
            
                <p className='text-sm ml-2 mt-3'>Jackline Fare</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4 ml-13 lg:ml-16'/></div></div></div></SwiperSlide>

              
      </Swiper>
      </div>
      </section>
  )
}

export default Testimonials