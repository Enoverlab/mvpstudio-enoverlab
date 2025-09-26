import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Servicessection = () => {
  return (
    <>
    <section>
        <motion.div
              initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0}}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              damping: 20,
            }}
              className='flex flex-col gap-1 justify-center items-center px-10 text-center mb-10 pt-20 py-8'>
                <div className='flex flex-row bg-[#1A2DB3] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
                  <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' alt="icon" />
                  What We Do
                </div>
                <div className='text-[24px] md:text-[30px] text-[#111216] text-center md:font-medium'>
                  We sell ready-to-use MVPs and transform <br className='max-md:hidden'/> your ideas into a valuable product.
                </div>
                <div className='text-[14px] font-normal text-[#595C63]'>
                  Our ability is to rapidly develop and deliver product ideas with limited resources
                </div>
              </motion.div>

            <div className='md:p-10 lg:px-15'>
              <motion.div
            initial={{ opacity:0, x:40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className="w-full p-7 mt-6 bg-gradient-to-r from-[#DEECFF] to-[#F9ECF5]">
                <div className=" flex flex-row gap-4 w-full">
                  <div className='flex flex-col lg:p-15 w-full max-md:hidden md:w-1/2 gap-4'>
                  <img src='/iconone.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg md:text-2xl lg:text-3xl'>UI/UX Design</h1>
                  <p className='text-sm md:text-base'>We combine creativity with strategy through branding, web design, and UI/UX design, to create designs that pass your message effectively and elevate your brand's visual impression.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 cursor-pointer py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  <div className='w-full md:w-1/2 max-md:hidden'>
                  <img src='/servicesone.png' alt="services"/>
                  </div>
                  {/* for mobile view */}
                  <div className="relative max-md:w-[100%]  max-md:inset-0 h-[420px]  justify-center items-center mx-auto md:hidden"
                            style={{
                backgroundImage: `url(/servicesone.png)`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                 }}>
                    <div className='absolute inset-0 flex items-center justify-center p-5 md:hidden'>
                  <span className='flex flex-col p-4 bg-gradient-to-r from-[#DEECFF]/80 to-[#F9ECF5]/85'>
                  <div className='flex flex-col p-5 w-full md:hidden md:w-1/2 gap-4'>
                  <img src='/iconone.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg'>UI/UX Design</h1>
                  <p className='text-sm md:text-base'>We combine creativity with strategy through branding, web design, and UI/UX design, to create designs that pass your message effectively and elevate your brand's visual impression.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 py-2 cursor-pointer rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  </span>
                  </div>
                  </div>
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
            className="w-full p-7 mt-6 bg-gradient-to-r from-[#DEECFF] to-[#F9ECF5]">
                <div className=" flex flex-row gap-4 w-full">
                    <div className='w-full md:w-1/2 max-md:hidden'>
                  <img src='/servicestwo.png' alt="services"/>
                  </div>
                  <div className='flex flex-col lg:p-15 w-full max-md:hidden md:w-1/2 gap-4 text-end items-end'>
                  <img src='/icontwo.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg md:text-2xl lg:text-3xl'>Web Development</h1>
                  <p className='text-sm md:text-base'>We create custom websites and web applications that fit your business needs. Our team uses the latest technology to make your site look good and work perfectly on any device.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 py-2 cursor-pointer rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  
                  {/* for mobile view */}
                  <div className="relative max-md:w-[100%]  max-md:inset-0 h-[420px]  justify-center items-center mx-auto md:hidden"
                            style={{
                backgroundImage: `url(/servicestwo.png)`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                 }}>
                    <div className='absolute inset-0 flex items-center justify-center p-5 md:hidden'>
                  <span className='flex flex-col p-4 bg-gradient-to-r from-[#DEECFF]/80 to-[#F9ECF5]/85'>
                  <div className='flex flex-col p-5 w-full md:hidden md:w-1/2 gap-4'>
                  <img src='/icontwo.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg'>Web Development</h1>
                  <p className='text-sm md:text-base'>We create custom websites and web applications that fit your business needs. Our team uses the latest technology to make your site look good and work perfectly on any device.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 py-2 cursor-pointer rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  </span>
                  </div>
                  </div>
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
            className="w-full p-7 mt-6 bg-gradient-to-r from-[#DEECFF] to-[#F9ECF5]">
                <div className=" flex flex-row gap-4 w-full">
                  <div className='flex flex-col lg:p-15 w-full max-md:hidden md:w-1/2 gap-4'>
                  <img src='/iconthree.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg md:text-2xl lg:text-3xl'>Product Management</h1>
                  <p className='text-sm md:text-base'>We take your product idea and turn it into reality, handling everything from design and engineering to testing and launch. We give attention to all processes involved in building a great product.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 py-2 cursor-pointer rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  <div className='w-full md:w-1/2 max-md:hidden'>
                  <img src='/servicesthree.png' alt="services"/>
                  </div>
                  {/* for mobile view */}
                  <div className="relative max-md:w-[100%]  max-md:inset-0 h-[450px]  justify-center items-center mx-auto md:hidden"
                            style={{
                backgroundImage: `url(/servicesthree.png)`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                 }}>
                    <div className='absolute inset-0 flex items-center justify-center p-5 md:hidden'>
                  <span className='flex flex-col p-4 bg-gradient-to-r from-[#DEECFF]/80 to-[#F9ECF5]/85'>
                  <div className='flex flex-col p-5 w-full md:hidden md:w-1/2 gap-4'>
                  <img src='/iconthree.png' className='w-14 h-14'/>
                  <h1 className='font-bold text-lg'>Product Management</h1>
                  <p className='text-sm md:text-base'>We take your product idea and turn it into reality, handling everything from design and engineering to testing and launch. We give attention to all processes involved in building a great product.</p>
                  <Link to='/contact'>
                  <button className='bg-[#1A2DB3] text-white px-6 py-2 cursor-pointer rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#2563EB] transition'>Contact Us <span>&#8594;</span></button>
                  </Link>
                  </div>
                  </span>
                  </div>
                  </div>
                </div>
            </motion.div>
            </div>
    </section>
    </>
  )
}

export default Servicessection