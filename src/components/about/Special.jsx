import React from 'react'
import Heromarquee from '../home/Heromarquee'
import { motion } from 'framer-motion'

const Special = () => {
  return (
    <>
    <section className='bg-[#F3F3FF] p-5 pt-20'>
    <motion.div 
    initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
    className='flex flex-col gap-1 justify-center items-center px-10 text-center'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Our Values
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          What Makes Us Special
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          Our ability to rapidly develop and deliver products ideas with limited<br className='max-md:hidden'/> resources.
        </div>
      </motion.div>
      <div className='w-full p-5 md:p-15 gap-4 flex flex-col lg:flex-row'>
        <motion.div
        initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
        className='flex flex-col gap-5 text-center p-5 bg-white rounded-2xl'>
            <div className='bg-[#B9CEF9] w-15 h-15 rounded-full mx-auto flex justify-center items-center'><img src='/progress.png'/></div>
            <h1 className='font-bold text-base md:text-2xl'>Business Progress</h1>
            <p className='font-normal text-sm'>We accelerate your growth by delivering ready-to-launch MVPs, removing the traditional barriers of cost, time, and team size.</p>
        </motion.div>
        <motion.div
        initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
        className='flex flex-col gap-5 text-center p-5 bg-white rounded-2xl'>
            <div className='bg-[#B9CEF9] w-15 h-15 rounded-full mx-auto flex justify-center items-center'><img src='/admin.png'/></div>
            <h1 className='font-bold text-base md:text-2xl'>Business Administration</h1>
            <p className='font-normal text-sm '>Our customizable MVPs are designed with your unique business needs in mind, whether you're a startup founder or a small business owner.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
        className='flex flex-col gap-5 text-center p-5 bg-white rounded-2xl'>
            <div className='bg-[#B9CEF9] w-15 h-15 rounded-full mx-auto flex justify-center items-center'><img src='/teamwork.png'/></div>
            <h1 className='font-bold text-base md:text-2xl'>Teamwork</h1>
            <p className='font-normal text-sm'>At the core of every product we build is a collaborative spirit. We work closely with you to create viable solutions.</p>
        </motion.div>
        </div>
      <div className='mb-10 max-md:hidden'><Heromarquee/></div>
    </section>
    </>
  )
}

export default Special