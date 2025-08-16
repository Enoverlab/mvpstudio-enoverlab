import React, { useRef, useEffect, useState } from 'react'

const experts = [
  {
    name: "Sarah Ibeji",
    role: "Head of Product",
    img: "/talentonemobile.jpg",
    imgbanner: "/flagmobile.png",
    style: "top-10 left-1/7 min-[460px]:left-1/4"
  },
  {
    name: "Okpanachi Isah",
    role: "Product Manager",
    img: "/talenttwomobile.jpg",
    imgbanner: "/penmobile.png",
    style: "top-15 left-7/12"
  },
  {
    name: "John Esan",
    role: "Product manager",
    img: "/talentsixmobile.jpg",
    imgbanner: "/penmobile.png",
    style: "bottom-16 left-7/12"
  },
  {
    name: "Osinachi Ekwueme",
    role: "Web Developer",
    img: "/talentfournew1.jpg",
    imgbanner: "/chatmobile.png",
    style: "bottom-8 min-[480px]:bottom-14 right-7/12 "
  },
  {
    name: "Beatrice Olajide",
    role: "Product manager",
    img: "/talentthreemobile.jpg",
    imgbanner: "/chatmobile.png",
    style: "top-25 right-7/11 min-[480px]:right-61/100"
  }
];

const CIRCLE_RADIUS = 50;
const CIRCLE_CIRCUM = 2 * Math.PI * CIRCLE_RADIUS;
const TARGET_PERCENT = 85;

const Meettheexpertsmobile = () => {
    const sectionRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);
      const [progress, setProgress] = useState(0);
      const [count, setCount] = useState(0);
    
      // Intersection Observer to trigger animation
      useEffect(() => {
        const observer = new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
          },
          { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
      }, []);
    
      // Animate stroke
      useEffect(() => {
        if (!isVisible) return;
        let start = null;
        const duration = 1200;
        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          const percent = Math.min(elapsed / duration, 1) * TARGET_PERCENT;
          setProgress(percent);
          if (elapsed < duration) {
            requestAnimationFrame(animate);
          } else {
            setProgress(TARGET_PERCENT);
          }
        };
        requestAnimationFrame(animate);
      }, [isVisible]);
    
      // Animate count up
      useEffect(() => {
        if (!isVisible) return;
        let start = null;
        const duration = 1800;
        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          const val = Math.floor(Math.min(elapsed / duration, 1) * TARGET_PERCENT);
          setCount(val);
          if (elapsed < duration) {
            requestAnimationFrame(animate);
          } else {
            setCount(TARGET_PERCENT);
          }
        };
        requestAnimationFrame(animate);
      }, [isVisible]);
  return (
    <>
    <section ref={sectionRef} className='bg-[#FFFFFF] pt-20 py-8'>
      <div className='flex flex-col gap-1 justify-center items-center px-10 text-center mb-10'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' alt="icon" />
          Meet The Team
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center  md:font-medium'>
          Meet the Experts Behind <br className='max-md:hidden' /> Our Success
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
        </div>
      </div>
      <div className=" w-full h-[320px] flex flex-row">
        {/* Central Progress Circle */}
        <div className='w-full lg:w-[60%] relative'>
          <img src='/circlelargedash.png' className='max-md:hidden absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <img src='circlesmalldash.png' className='max-md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <img src='/circlelargedashmobile.png' className='md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <img src='/circlesmalldashmobile.png' className='md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <svg width="500" height="500" className="w-[220px] h-[220px] md:w-[220px] md:h-[220px]">
            <circle
              cx="110"
              cy="110"
              r={CIRCLE_RADIUS}
              stroke="#E5E7EB"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="110"
              cy="110"
              r={CIRCLE_RADIUS}
              stroke="#22C55E"
              strokeWidth="3"
              fill="none"
              strokeDasharray={CIRCLE_CIRCUM}
              strokeDashoffset={CIRCLE_CIRCUM * (1 - progress / 100)}
              strokeLinecap="round"
              transform="rotate(-90 110 110)"
              style={{ transition: 'stroke-dashoffset 0.3s' }}
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#22C55E] text-xl md:text-4xl font-bold text-center">
            {count}%
            <p className='text-[8px] font-normal text-[#121212]'>Projects Completed</p>
          </span>
        </div>
        {/* Expert Cards */}
        {experts.map((expert, idx) => {
          // For left-side cards, place info on the left, image on the right
          const isLeft =
            expert.name === "Sarah Ibeji" ||
            expert.name === "Beatrice Olajide" ||
            expert.name === "Osinachi Ekwueme";
          return (
            <div
              key={expert.name}
              className={`absolute ${expert.style} flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center`}
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-lg"
              />
              <div className={`bg-white rounded-xl shadow-md px-2 py-1 md:px-4 md:py-2 text-left ${isLeft ? 'mr-1' : 'ml-1'} flex-1 flex flex-row p-5 gap-1 mb-10`}>
                <img src={expert.imgbanner} className='h-1/2'/>
                <div className='flex flex-col'>
                <div className="font-semibold text-[#111216] text-[8px]">{expert.name}</div>
                <div className="text-[8px] text-[#595C63] whitespace-pre">{expert.role}</div>
                </div>
                
              </div>
            </div>
          );
        })}
        </div>
        <div className='w-[40%] flex flex-col px-7 gap-7 max-lg:hidden'>
        <h1 className='text-[#12141D] text-[40px] font-semibold text-center'>Organize & prioritize all your work with our team</h1>
        <p className='text-base font-medium'>Sort out the most important and urgent tasks & concentrate on them first  base your priorities</p>
        <p className='text-sm text-black'>Multi-voting helps a committee or group narrow down a large number of items into just a few items on which to focus & similar to multi-voting, this approach.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Meettheexpertsmobile