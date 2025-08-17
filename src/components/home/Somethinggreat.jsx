import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
const Somethinggreat = () => {
  return (
    <>
    <section className='p-5 max-md:pt-20 max-md:pb-20 md:p-10'>
        <motion.div
        initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='relative w-full bg-[#1051FF] h-[270px] md:h-[470px] rounded-[20px]'>
            <span className='max-md:hidden'><img className='absolute bottom-0 left-[226px]' src='/elipsesmall.png'/>
            <img className='absolute bottom-0 right-[41px]' src='/elipselarge.png'/>
            <img className='absolute top-0 right-[225px] rotate-180' src='/elipsesmall.png'/>
            <img className='absolute top-0 left-[34px] rotate-180' src='/elipselarge.png'/></span>
            <span className='md:hidden'><img className='absolute bottom-0 left-[59px]' src='/elipsesmallmobile.png'/>
            <img className='absolute bottom-0 right-[53px]' src='/elipselargemobile.png'/>
            <img className='absolute top-0 right-[91px] rotate-180' src='/elipsesmallmobile.png'/>
            <img className='absolute top-0 left-[59px] rotate-180' src='/elipselargemobile.png'/></span>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white gap-5'>
                <h1 className='text-base md:text-lg lg:text-[56px] font-bold'>Let`s Start Something Great</h1>
                <p className='w-[50%] text-[12px] md:text-base lg:text-[18px] text-center'>We offer a wide range of features that are specially designed to help teams stay organized and productive, such as task assaignments, file sharing, and chat routing.</p>
                <Link to='/contact'><button className="max-md:hidden mt-2 md:mt-10 bg-black hover:bg-white hover:shadow-xl text-white hover:text-black px-7 py-3 rounded-lg font-semibold text-base z-10">
            Let's Talk
          </button></Link>
            </div>
        </motion.div>
    </section>
    </>
  )
}

export default Somethinggreat