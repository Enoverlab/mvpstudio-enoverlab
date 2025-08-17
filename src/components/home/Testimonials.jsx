import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className='mt-9 bg-[#F3F3FF]' id='testimonials'>
      <motion.div
      initial={{ opacity:0, y:-40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
      className='flex flex-col gap-1 justify-center items-center px-10 text-center'>
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
      </motion.div>
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
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
                },
          1024: {
            slidesPerView: 3,
            },
        }}
        className="mySwiper2"
      >
        <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm mb-7'>"This product/service has exceeded my expectations in every way and makes my work easier!"</p>
          <div className='absolute bottom-3  w-full flex flex-row'>
            <div><img src='/prisca.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Ekok Prisca</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm  mb-7'>"I highly recommend this product/service to anyone looking for a ready made MVP. Kudos to the team".</p>
          <div className='absolute bottom-3 w-full flex flex-row'>
            <div><img src='/esther.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Eyam Esther</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm mb-7'>"The experience was seamless and stress-free. They responded quickly to my questions. Thanks to this team!"
</p>
          <div className='absolute bottom-3 w-full flex flex-row'>
            <div><img src='/john.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Okolie John</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm mb-7'>“I’m thoroughly impressed with the template I got. The design is modern, and the customizations are endless."</p>
          <div className='absolute bottom-3 w-full flex flex-row'>
            <div><img src='/ben.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Opeyemi Ben</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm mb-7'>“This MVP studio is a game changer! The designs are modern, clean, and professional. It saved me so much time”.</p>
          <div className='absolute bottom-3 w-full flex flex-row'>
            <div><img src='/malik.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Sanusi Malik</p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              <SwiperSlide ><div className='bg-white flex flex-col p-5 rounded-xl h-[200px] relative'>
          <p className='text-sm mb-7'>“Wow I’m absolutely thrilled with the talent I hired! They exceeded my expectations with their professionalism."</p>
          <div className='absolute bottom-3 w-full flex flex-row'>
            <div><img src='/chika.png' className='object-contain w-15 h-15'/></div>
            <div className='flex flex-col'>
                <p className='text-sm ml-2 mt-3 whitespace-pre'>Onaga Chika </p>
                <div className="text-[#FF9800] text-lg ml-2">★★★★</div>
              </div><div className='ml-auto mr-6'><img src='/invertedcomma.png' className='object-contain w-12 h-16 py-4'/></div></div></div></SwiperSlide>

              
      </Swiper>
      </div>
      </section>
  )
}

export default Testimonials