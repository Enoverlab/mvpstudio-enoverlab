import React from 'react'
import { motion } from 'framer-motion'

const Meetourfounder = () => {
  return (
    <>
    <section className='mt-10 relative'
    style={{
        backgroundImage: "url('/talentsbg.png')",
        backgroundRepeat: 'no-repeat',
    }}
    >
        <div className=' flex flex-row bg-[#1A2DB3] justify-center items-center w-[220px] h-[29px] sm:w-[250px] md:w-[280px] text-white font-semibold md:font-medium text-base sm:text-lg text-center leading-6 rounded-2xl mx-auto'>
        
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Meet Our Founder
        </div>
        <motion.img
        initial={{ opacity:0, scale:0.7 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.1,
      damping: 20,
    }}
        src="/founder.jpg" alt="enoverlab-founder" className='rounded-xl flex justify-center items-center text-center mx-auto mt-5 z-5555' />
        <motion.h2
        initial={{ opacity:0, y:-40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='flex justify-center items-center text-center font-semibold pt-5'>Olabanji Enwela (CEO, Enoverlab)</motion.h2>
        <motion.div
        initial={{ opacity:0, y:-40 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 md:p-10 text-[11px] sm:text-base gap-5 max-sm:text-center lg:px-30'>
            <article className='text-sm'>Olabanji Ewenla is an experienced product manager with over seven years of experience working in different industries like education, health and wellness, logistics, mobility, travel and tourism. He is a Certified Product Manager by AIPMM (Association of International Product Marketing and Management).He is the Co-founder and CEO of Enoverlab, a training institute that provides product management training to individuals and corporate organizations.</article>
            <article className='text-sm'>Enoverlab is accredited by the “American Council of Training and Development” (ACTD) and has trained 600+ product managers working for companies based in the US, UK, Canada, Germany, Qatar, Italy, Portugal, Hong Kong, Australia, and of course, Nigeria. Enoverlab has a fast growing community of over 20,000 career professionals and business people across all its platforms.</article>
            <article className='text-sm'>Olabanji is also the author of “The Blood Money in Tech”, a book that shares the most important insights to thrive in the tech industry for anyone coming into tech and young tech talents. Outside of work, Olabanji tinkers with music, photography and videography - you would typically find Olabanji doing something around music, photography or videography when he is not involved in building and managing products.</article>
        </motion.div>
    </section>
    </>
  )
}

export default Meetourfounder