import React from 'react'
import { motion } from 'framer-motion'

const Empower = () => {
  return (
    <section className='w-full bg-white'>
        <div className='w-full flex flex-col md:flex-row p-4 md:py-20 md:px-10 md:gap-15'>
            <div className='w-full md:w-1/2 flex flex-col gap-5 p-2 md:px-[20px]'>
             <div className='flex flex-row bg-[#003AD4] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Our Mission
        </div>
            <h1 className='text-[24px] md:text-[36px] lg:text-[48px]'>Empowering Businesses & Innovations</h1>
            <p className='text-[14px] md:text-[16px]'>To empower startups and small businesses with affordable, ready-to-launch MVPs tailored to their needs, helping them go from idea to execution, reducing time to market.</p>
            </div>
            <motion.div
            initial={{ opacity:0, x:50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
            className='w-full md:w-1/2 flex flex-col gap-5 p-2 max-md:mt-5'>
                <h1 className='text-lg lg:text-2xl text-[#111216]'>“How Do We Help You Launch Faster and Smarter?”</h1>
                <p className='text-sm md:text-base text-[#111216] mb-5 md:mb-12'>At Enoverlab MVP Studio, our mission goes beyond building products, we’re here to partner with you in turning your ideas into viable, market-ready digital solutions.</p>
            <div className='flex flex-row gap-5'>
                <div className='w-[5%'><img src='/empowercheck.png' className='inline-block'/></div>
                <div className='w-[95%]'>
            <p className='text-sm md:text-base'><span className='font-bold'>Understand Your Vision: </span>We take the time to understand your unique challenges and business goals.</p>
                </div>
            </div>
            
            <div className='flex flex-row gap-5'>
                <div className='w-[5%'><img src='/empowercheck.png' className='inline-block'/></div>
                <div className='w-[95%]'>
            <p className='text-sm md:text-base'><span className='font-bold'>Impact-Driven Approach: </span>Every MVP we craft is built to help you validate your ideas faster.</p>
                </div>
            </div>

            <div className='flex flex-row gap-5'>
                <div className='w-[5%'><img src='/empowercheck.png' className='inline-block'/></div>
                <div className='w-[95%]'>
            <p className='text-sm md:text-base'><span className='font-bold'>Export-Led Execution: </span>From insight to execution, our expert team turns your ideas into MVPs ready to thrive in the market.</p>
                </div>
            </div>
            </motion.div>
        </div>
        </section>
  )
}

export default Empower