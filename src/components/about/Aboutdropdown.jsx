import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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

const Aboutdropdown = () => {
  return (
    <section className="absolute hidden lg:block top-20 left-0 w-full min-h-[100vh] max-h-[100vh] bg-gradient-to-b from-[#FBECF4] to-[#DDECFF] py-6 z-50 animate-slide-in duration-200">
                     <div className="max-w-6xl mx-auto relative">
                       <h2 className="text-center text-2xl md:text-3xl font-normal mb-2 mt-2">
                         Our Mvp <span className="font-bold">Studio</span> Development
                       </h2>
                       <div className="text-center italic font-light text-3xl mb-8">Services</div>
                       <div className="grid grid-cols-4 gap-6">
                         {services.map((service, idx) => (
                           <div
                             key={idx}
                             className="bg-white/40 border border-[#D2DEFF] rounded-xl p-6 flex flex-col items-start text-start min-h-[260px] hover:shadow-lg transition"
                           >
                             <div className="mb-3 p-5 rounded-2xl bg-white"><img src={service.icon} className='w-5 h-5'/></div>
                             <div className="font-semibold text-base mb-1">{service.title}</div>
                             <div className="text-sm text-[#6b7280] mb-15">{service.desc}</div>
                             <a
                               href={service.link}
                               
                             >
                               <div className='absolute bottom-6'><span>Contact Us</span>
                               <span className='inline-block ml-3'><FaArrowRight/></span></div>
                             </a>
                           </div>
                         ))}
                       </div>
                     </div>
                   </section>
  );
}

export default Aboutdropdown;