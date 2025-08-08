import { motion } from 'framer-motion'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Usspecial = () => {
  return (
    <>
    <section className='mt-5 mb-20'>
        <motion.div
        initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='flex flex-col gap-1 justify-center items-center'>
            <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[207px] h-[31px] text-white text-base rounded-2xl'><img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5'/>Why choose Enoverlab</div>
            <div className='text-2xl md:text-[36px] text-[#111216] text-center px-5 font-medium'>What Makes Us Special</div>
            <div className=' text-center text-base text-[#595C63] px-5'>Our ability to rapidly develop and deliver products ideas with limited resources</div>
            </motion.div>

            <motion.div
            initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-10 xl:px-[86px]'>
                <div className='w-full h-[220px] md:h-[359px] bg-[#94ddf3] flex flex-row rounded-4xl gap-5 border-white border-1 relative'>
                <div className='w-1/2 mt-[60px] md:mt-[120px] py-8'><img src='/01.png' className='w-[315px] h-[128px] md:h-[207px]'/></div>
                <div className='w-1/2 flex flex-col p-5 md:py-10 gap-3 md:gap-5'>
                    <h1 className='text-[#484848] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold'>Empower Startups</h1>
                    <p className='max-sm:text-[10px] md:text-base text-[#595c63]'>Easy onboarding support for your startups company</p>
                    <div className='flex justify-start md:justify-end absolute bottom-[14px] lg:bottom-[48px] lg:right-[18px]'><Link to='/contact'><button className='bg-[#F5F3FF] w-[134px] h-[33px] md:h-[48px] mr-3 text-[#17BDF9] rounded-xl text-sm md:text-base hover:text-white hover:bg-[#17BDF9]'>Invest <MdArrowOutward className='inline-block mb-2 h-[14px]'/></button></Link></div>
                </div>
                </div>

                <motion.div
                initial={{ opacity:0, x:40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
                className='w-full h-[220px] md:h-[359px] bg-[#dbd6e6] flex flex-row rounded-4xl gap-5 border-white border-1 relative'>
                <div className='w-1/2 mt-[60px] md:mt-[120px] py-8'><img src='/02.png' className='w-[315px] h-[128px] md:h-[207px]'/></div>
                <div className='w-1/2 flex flex-col p-5 md:py-10 gap-3 md:gap-5'>
                    <h1 className='text-[#484848] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold'>Smart Talent Discovery</h1>
                    <p className='max-sm:text-[10px] md:text-base text-[#595c63]'>Have access to talents who have completed real projects verified by mentors</p>
                    <div className='flex justify-start md:justify-end absolute bottom-[14px] lg:bottom-[48px] lg:right-[18px]'><Link to='/talents'><button className='bg-[#F5F3FF] w-[134px] h-[33px] md:h-[48px] mr-3 text-[#17BDF9] rounded-xl text-sm md:text-base hover:text-white hover:bg-[#17BDF9]'>Connect <MdArrowOutward className='inline-block mb-2 h-[14px]'/></button></Link></div>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                className='w-full h-[220px] md:h-[359px] bg-[#ece8bf] flex flex-row rounded-4xl gap-5 border-white border-1 relative'>
                <div className='w-1/2 mt-[60px] md:mt-[120px] py-8'><img src='/03.png' className='w-[315px] h-[128px] md:h-[207px]'/></div>
                <div className='w-1/2 flex flex-col p-5 md:py-10 gap-3 md:gap-5'>
                    <h1 className='text-[#484848] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold'>MVP Studio</h1>
                    <p className='max-sm:text-[10px] md:text-base text-[#595c63]'>Validated product ideas that solve real problems.</p>
                    <div className='flex justify-start md:justify-end absolute bottom-[14px] lg:bottom-[48px] lg:right-[18px]'><Link to='/mvpstudio'><button className='bg-[#F5F3FF] w-[134px] h-[33px] md:h-[48px] mr-3 text-[#17BDF9] rounded-xl text-sm md:text-base hover:text-white hover:bg-[#17BDF9]'>Explore <MdArrowOutward className='inline-block mb-2 h-[14px]'/></button></Link></div>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity:0, x:40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                className='w-full h-[220px] md:h-[359px] bg-[#a0e0cb] flex flex-row rounded-4xl gap-5 border-white border-1 relative'>
                <div className='w-1/2 mt-[60px] md:mt-[120px] py-8'><img src='/04.png' className='w-[315px] h-[128px] md:h-[207px]'/></div>
                <div className='w-1/2 flex flex-col p-5 md:py-10 gap-3 md:gap-5'>
                    <h1 className='text-[#484848] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold'>Hire / Partner</h1>
                    <p className='max-sm:text-[10px] md:text-base text-[#595c63]'>Contact and collaborate with experienced talents or partner with us.</p>
                    <div className='flex justify-start md:justify-end absolute bottom-[14px] lg:bottom-[48px] lg:right-[18px]'><Link to='/talents'><button className='bg-[#F5F3FF] w-[134px] h-[33px] md:h-[48px] mr-3 text-[#17BDF9] rounded-xl text-sm md:text-base hover:text-white hover:bg-[#17BDF9]'>Hire Us <MdArrowOutward className='inline-block mb-2 h-[14px]'/></button></Link></div>
                </div>
                </motion.div>

            </motion.div>
    </section>
    </>
  )
}

export default Usspecial