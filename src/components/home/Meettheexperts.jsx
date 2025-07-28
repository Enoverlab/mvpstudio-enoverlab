import React, { useRef, useEffect, useState } from 'react'

const experts = [
  {
    name: "Thomas Smart",
    role: "Product designers",
    img: "/expert1.png",
    imgbanner: "/penmobile.png",
    hire: "Hire Thomas",
    style: "top-2 left-1/4"
  },
  {
    name: "Sarah Paul",
    role: "Product Manager",
    img: "/expert2.png",
    imgbanner: "/penmobile.png",
    hire: "Hire Sarah",
    style: "top-20 left-7/11"
  },
  {
    name: "Joy Samuel",
    role: "Product manager",
    img: "/expert3.png",
    imgbanner: "/flagmobile.png",
    hire: "Hire Joy",
    style: "bottom-16 left-7/11"
  },
  {
    name: "Bright Williams",
    role: "Developer",
    img: "/expert4.png",
    imgbanner: "/chatmobile.png",
    hire: "Hire Bright",
    style: "-bottom-7 right-7/12 "
  },
  {
    name: "Promise John",
    role: "Product manager",
    img: "/expert5.png",
    imgbanner: "/chatmobile.png",
    hire: "Hire Promise",
    style: "top-35 right-7/10"
  }
];

const CIRCLE_RADIUS = 100;
const CIRCLE_CIRCUM = 2 * Math.PI * CIRCLE_RADIUS;
const TARGET_PERCENT = 85;

const Meettheexperts = () => {
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
          const duration = 3000;
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
          const duration = 3000;
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
    <section ref={sectionRef} className='bg-[#FFFFFF] mt-5 py-8'>
      <div className='flex flex-col gap-1 justify-center items-center px-10 text-center mb-10'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' alt="icon" />
          Meet The Team
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          Meet the Experts Behind <br className='max-md:hidden' /> Our Success
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
        </div>
      </div>
      <div className=" w-full h-[500px] flex flex-row mt-10">
        {/* Central Progress Circle */}
        <div className='flex w-full lg:w-[70%] justify-end items-end -p-5  relative'>
          <img src='/circlelargedash.png' className='max-md:hidden absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <img src='circlesmalldash.png' className='max-md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
         
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <svg width="500" height="500" className="w-[220px] h-[220px] md:w-[220px] md:h-[220px]">
            <circle
              cx="110"
              cy="110"
              r={CIRCLE_RADIUS}
              stroke="#E5E7EB"
              strokeWidth="13"
              fill="none"
            />
            <circle
              cx="110"
              cy="110"
              r={CIRCLE_RADIUS}
              stroke="#22C55E"
              strokeWidth="13"
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
            <p className='text-[12px] font-normal text-[#121212]'>Projects Completed</p>
          </span>
        </div>
        {/* Expert Cards */}
        {experts.map((expert, idx) => {
          // For left-side cards, place info on the left, image on the right
          const isLeft =
            expert.name === "Thomas Smart" ||
            expert.name === "Promise John" ||
            expert.name === "Bright Williams";
          return (
            <div
              key={expert.name}
              className={`absolute ${expert.style} flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center`}
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-xl"
              />
              <div className={`bg-white rounded-xl shadow-xl px-2 py-1 md:px-4 md:py-2 text-left ${isLeft ? 'mr-1' : 'ml-1'} flex-1 flex flex-row p-5 gap-1 mb-20`}>
                <img src={expert.imgbanner} className='h-1/2'/>
                <div className='flex flex-col'>
                <div className="font-semibold text-[#111216] text-[14px]">{expert.name}</div>
                <div className="text-[10px] xl:text-[14px] text-[#595C63]">{expert.role}</div>
                <button className="mt-1 text-[10px] text-[#1051FF] bg-[#F3F3FF] rounded-2xl shadow-xl w-[70%] py-0.5 md:py-1 hover:text-white hover:bg-[#1051FF]">{expert.hire}</button>
                </div>
                
              </div>
            </div>
          );
        })}
        </div>
        <div className='w-[35%] flex flex-col xl:px-2 gap-7 max-lg:hidden mt-15 xl:mt-25 xl:pr-7'>
        <h1 className='text-[#12141D] text-[36px] font-semibold underline decoration-[#1051FF]'>Organize & prioritize all your work with our team</h1>
        <p className='text-[16px] font-medium'>Sort out the most important and urgent tasks & concentrate on them first  base your priorities</p>
        <p className='text-[14px] text-black'>Multi-voting helps a committee or group narrow down a large number of items into just a few items on which to focus & similar to multi-voting, this approach.</p>
        </div>
      </div>
    </section>
  )
}

export default Meettheexperts