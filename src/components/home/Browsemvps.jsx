import { motion } from 'framer-motion'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Browsemvps = () => {
  return (
    <>
    <section className='mt-5'>
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
            <div className='flex flex-row bg-[#1A2DB3] justify-center items-center w-[164px] h-[31px] text-white text-base leading-6 rounded-2xl'><img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5'/>Browse MVPs</div>
            <div className='text-[24px] md:text-[36px] text-[#111216] text-center max-md:hidden font-medium'>Validated MVPs ready for adoption <br/> and optimization</div>
            <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:hidden leading-7'>Validated MVPs ready for adoption and optimization</div>
            <div className='text-[14px] md:text-base text-[#595C63]'>Explore our catalogue of tested and ready to use products</div>
            </motion.div>

            <div className='flex flex-col w-full p-5 md:p-10 gap-6'>
                <motion.div
                initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
                className='w-full flex flex-col md:flex-row bg-gradient-to-l from-[#FFEDEE] to-[#F2EAFF] border-white border-1 rounded-4xl relative'>
                    <div className='w-full md:w-1/2 flex flex-col p-5 md:p-10 lg:p-15 xl:p-20 gap-6'>
                        <h1 className='text-[24px] md:text-[32px] lg:text-[48px] text-[#484848] font-bold max-md:pt-7'>FinTech</h1>
                        <p className='text-sm lg:text-base text-[#484848]'>A secure  payment gateway MVP in 12 weeks, designed and implemented by our team.</p>
                        <p className='text-sm lg:text-base text-[#595C63]'>→ Compliance-first architecture | Rapid prototyping | Investor pitch prep</p>
                        <Link to={`/mvpstudio?category=FinTech`} className='bg-[#F5F3FF] w-[129px] md:w-[185px] h-[33px] lg:h-[48px] mr-3 text-[#17BDF9] rounded-lg text-xs md:text-sm md:absolute md:bottom-[32px] hover:text-white hover:bg-[#17BDF9] flex items-center justify-center'>Learn More<MdArrowOutward className='inline-block ml-1 mb-1'/></Link>
                    </div>
                    <div className='flex md:w-1/2 max-md:ml-auto justify-end md:justify-center md:p-8'><img src='browsemvps1.png' className='hidden md:block md:w-[500px] md:h-[300px] lg:w-[539px] lg:h-[410px]'/>
                    <img src='browsemvps1mobile.png' className='w-[238px] h-[185px] md:hidden'/>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity:0, x:40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
                className='w-full flex flex-col md:flex-row bg-gradient-to-l from-[#D9ECFF] to-[#E7EDFF] border-white border-1 rounded-4xl relative'>
                    <div className='w-full md:w-1/2 flex flex-col p-5 md:p-10 lg:p-15 xl:p-20 gap-6'>
                        <h1 className='text-[24px] md:text-[32px] lg:text-[48px] text-[#484848] font-bold max-md:pt-7'>HealthTech</h1>
                        <p className='text-sm lg:text-base text-[#484848]'>Launch an AI-driven diagnostics platform, achieving health solutions.</p>
                        <p className='text-sm lg:text-base text-[#595C63]'>→ Regulatory navigation | HIPAA-compliant design | Pilot-to-scale strategy</p>
                        <Link to={`/mvpstudio?category=HealthTech`} className='bg-[#F5F3FF] w-[129px] md:w-[185px] h-[33px] lg:h-[48px] mr-3 text-[#17BDF9] rounded-lg text-xs md:text-sm md:absolute md:bottom-[32px] hover:text-white hover:bg-[#17BDF9] flex items-center justify-center'>Learn More<MdArrowOutward className='inline-block ml-1 mb-1'/></Link>
                    </div>
                    <div className='flex md:w-1/2 max-md:ml-auto justify-end md:justify-center md:p-8'><img src='browsemvps2.png' className='hidden md:block md:w-[500px] md:h-[300px] lg:w-[539px] lg:h-[410px]'/>
                    <img src='browsemvps2mobile.png' className='w-[238px] h-[185px] md:hidden'/>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
                className='w-full flex flex-col md:flex-row bg-gradient-to-l from-[#E2EDFF] to-[#F6EBFA] border-white border-1 rounded-4xl relative'>
                    <div className='w-full md:w-1/2 flex flex-col p-5 md:p-10 lg:p-15 xl:p-20 gap-6'>
                        <h1 className='text-[24px] md:text-[32px] lg:text-[48px] text-[#484848] font-bold max-md:pt-7'>E-commerce</h1>
                        <p className='text-sm lg:text-base text-[#484848]'>A Ready to use,  E-commerce platform.</p>
                        <p className='text-sm lg:text-base text-[#595C63]'>→ Regulatory navigation | HIPAA-compliant design | Pilot-to-scale strategy.</p>
                        <Link to={`/mvpstudio?category=E-Commerce`} className='bg-[#F5F3FF] w-[129px] md:w-[185px] h-[33px] lg:h-[48px] mr-3 text-[#17BDF9] rounded-lg text-xs md:text-sm md:absolute md:bottom-[32px] hover:text-white hover:bg-[#17BDF9] flex items-center justify-center'>Learn More<MdArrowOutward className='inline-block ml-1 mb-1'/></Link>
                    </div>
                    <div className='flex md:w-1/2 max-md:ml-auto justify-end md:justify-center md:p-8'><img src='browsemvps3.png' className='hidden md:block md:w-[500px] md:h-[300px] lg:w-[539px] lg:h-[410px]'/>
                    <img src='browsemvps3mobile.png' className='w-[238px] h-[185px] md:hidden'/>
                    </div>
                </motion.div>

            <div className='flex justify-center'><Link to='/mvpstudio'><button className='bg-[#1A2DB3] w-[129px] h-[33px] text-[#FFFFFF] cursor-pointer rounded-2xl hover:bg-white hover:text-[#1A2DB3] hover:ring-1 hover:ring-white'>See All<MdArrowOutward className='inline-block mb-2 mx-2'/></button></Link></div>
            </div>
    </section>
    </>
  )
}

export default Browsemvps