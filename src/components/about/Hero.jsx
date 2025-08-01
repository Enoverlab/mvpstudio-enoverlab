import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
    <>
    <section>
      <motion.div
      initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
      className='relative w-full min-h-[50svh] flex justify-center mx-auto mt-[60px]' style={{
        backgroundImage: "url('/abouthero.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className='absolute inset-0 abouthero opacity-75'>
          <div className='absolute inset-0 flex justify-center text-center w-full p-5 md:w-2/3 lg:w-1/2 flex-col mx-auto text-white'>
            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Transforming Ideas into <br/>Digital Reality </h1>
            <p className='text-xs lg:text-sm '>We partner with visionary founders to turn their ideas into market ready products. Through a deeply collaborative process, we blend your vision with our unique expertise to deliver scalable MVPs that are fast, affordable, and tailored to your target market.</p>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  )
}

export default Hero