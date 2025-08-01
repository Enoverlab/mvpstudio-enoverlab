import { motion } from 'framer-motion'
import React from 'react'

const Reshape = () => {
  return (
    <>
    <section className='bg-[#F3F3FF] p-5'>
        <div className='flex flex-col gap-1 justify-center items-center  text-center mt-5 md:mt-15'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Our Values
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          Reshaping the Future of Startup <br className='max-md:hidden'/>Innovation
        </div>
        <div className='text-[14px] font-normal text-[#595C63] px-5'>
          To redefine how startups and small businesses bring ideas to life.
        </div>

        <motion.div
        initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='w-full p-5 md:p-15 gap-5 flex flex-col sm:flex-row   max-md:px-10'>
        <div className='w-full items-center justify-center flex sm:w-1/3 rounded-2xl bg-cover'>
          <img src="/reshape1.png" />  
        </div>
        <motion.div
        initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='w-full items-center justify-center flex sm:w-1/3 rounded-2xl bg-cover'>
          <img src="/reshape2.png" />  
        </motion.div>
        <motion.div
        initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='w-full items-center justify-center flex sm:w-1/3 rounded-2xl bg-cover'>
          <img src="/reshape3.png" />  
        </motion.div>
        
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default Reshape