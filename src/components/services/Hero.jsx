import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: "/design.png",
    title: "Design",
    desc: "We combine creativity with strategy through branding, web design, and UI/UX design, to create designs that pass your message effectively and elevate your brand visual impression.",
    link: "#"
  },
  {
    icon: "/product.png",
    title: "Product management",
    desc: "We take your product idea and turn it into reality, handling everything from design and engineering to testing and launch. We give attention to all processes involved in building a great product",
    link: "#"
  },
  {
    icon: "/web.png",
    title: "Web Development",
    desc: "We create custom websites and web applications that fit your business needs. Our team uses the latest technology to make sure you look good and work perfectly on any device.",
    link: "#"
  },
  {
    icon: "/team.png",
    title: "Team Optimization",
    desc: "Our focus is on helping your team perform at its best. We provide solutions and strategies to improve collaboration, boost productivity, and streamline workflows.",
    link: "#"
  },
];

const Hero = () => {
  return (
    <section className="w-full  bg-gradient-to-b from-[#FBECF4] to-[#DDECFF] py-6 z-50 mt-[60px]">
                         <div className="max-w-6xl mx-auto relative">
                           <motion.h2
                           initial={{ opacity:0, y:-50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.1,
          damping: 20,
        }}
                           className="text-center text-2xl md:text-3xl font-normal mb-2 mt-2">
                             Our Mvp <span className="font-bold">Studio</span> Development
                           </motion.h2>
                           <motion.div
                           initial={{ opacity:0, y:-50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
                           className="text-center italic font-light text-3xl mb-8">Services</motion.div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                             {services.map((service, idx) => (
                               <motion.div
                               initial={{ opacity:0, y:-50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.3,
          damping: 20,
        }}
                                 key={idx}
                                 className="bg-white/40 border border-[#D2DEFF] rounded-xl p-6 flex flex-col items-start text-start min-h-[260px] hover:shadow-lg transition relative"
                               >
                                 <div className="mb-3 p-5 rounded-2xl bg-white"><img src={service.icon} className='w-5 h-5'/></div>
                                 <div className="font-semibold text-base md:text-base mb-1">{service.title}</div>
                                 <div className="text-sm md:text-base text-[#6b7280] mb-16 md:mb-15">{service.desc}</div>
                                 <Link to='/contact'>
                                   <div className='absolute bottom-8 md:bottom-6'><span>Contact Us</span>
                                   <span className='inline-block ml-3'><FaArrowRight/></span></div>
                                 </Link>
                               </motion.div>
                             ))}
                           </div>
                         </div>
                       </section>
  )
}

export default Hero