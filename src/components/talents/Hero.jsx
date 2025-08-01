import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

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
        className='mt-30 md:mt-40 xl:mt-45 flex flex-col justify-center text-center items-center gap-4 px-5 sm:px-20 md:px-35 lg:px-55 xl:px-65'>
            <h1 className='text-[20px] md:text-[30px] lg:text-[36px]'>Hire the <span className='text-[#1051FF] font-bold md:font-extrabold'>top</span> candidate <br/> for your <span className='font-light italic tracking-tighter'>startup</span> </h1>
            <p className='text-black'>Explore our pool of top tire professionals from product designer to software engineers, marketing strategists to data analysis our curated network of talents brings innovation, skill, and excellence to every project. Each profile represents a proven expert ready to deliver results</p>
        </motion.div>

            <Link to='/talentsform'><motion.div
            initial={{ opacity:0, y:-50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
            ><button className="px-2 md:px-3 w-[150px] md:w-[174px] h-[37px] md:h-[48px] py-2 rounded-lg bg-[#1051FF] text-white text-sm lg:font-medium hover:bg-[#1060ffc2] transition flex justify-center items-center mx-auto mt-6">
            <img src='/hire.png' className='inline-block mr-2 w-4 md:w-5 h-4 md:h-5'/>Hire Talents
          </button></motion.div></Link>
    </section>
    </>
  )
}

export default Hero