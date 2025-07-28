import React, { useRef, useEffect } from 'react';

const testimonials = [
  {
    text: "We alighn our successes with the success of our customers which is why our offering transcends our software”.",
    name: "Jackline Fare",
    img: "/jackline.png",
    stars: 5,
  },
  {
    text: "I really like the system at this management, i love recommending this software to you guys",
    name: "Ashley Cooper",
    img: "/ashley.png",
    stars: 5,
  },
  {
    text: "The team is super responsive and the product is exactly what we needed. Highly recommended!",
    name: "Jackline Fare",
    img: "/jackline.png",
    stars: 5,
  },
];

const STAR = "/star.png";
const INVERTED_COMMA = "/invertedcomma.png";

const TestimonialsmarqueewithHoverpause = () => {
  const marqueeRef = useRef(null);

  // Pause on hover
  useEffect(() => {
    const marquee = marqueeRef.current;
    let isPaused = false;

    const handleMouseEnter = () => {
      isPaused = true;
      marquee.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      isPaused = false;
      marquee.style.animationPlayState = 'running';
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate testimonials for seamless infinite scroll
  const slides = [...testimonials, ...testimonials];

  return (
    <section className='mt-5 py-8 bg-[#F6F8FF]'>
      <div className='flex flex-col gap-1 justify-center items-center px-4 md:px-10 text-center mb-10'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/testimonials.png' className='w-4 mr-2 h-[19px] leading-1.5' alt="icon" />
          Testimonials
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          What Our Clients Are Saying
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          We take pride in delivering exceptional solutions that delivers great <br className='max-md:hidden'/> results. But don’t just take our word for it.
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative flex flex-col items-center w-full">
        <div className="w-full flex justify-center overflow-x-hidden">
          <div
            ref={marqueeRef}
            className="flex gap-6 md:gap-8 marquee-slider"
          >
            {slides.map((t, idx) => (
              <div
                key={idx}
                className={`
                  bg-white rounded-2xl shadow-md px-5 py-8 flex flex-col justify-between relative
                  min-w-[80vw] max-w-[80vw] md:min-w-[28vw] md:max-w-[28vw]
                  ${idx % testimonials.length === 1 ? 'z-20 scale-100' : 'z-10 scale-95 opacity-70'}
                  transition-all duration-500
                `}
                style={{
                  boxShadow: idx % testimonials.length === 1
                    ? '0 8px 32px 0 rgba(16,81,255,0.10)'
                    : '0 2px 8px 0 rgba(16,81,255,0.05)',
                  marginLeft: idx === 0 ? '-32vw' : undefined,
                  marginRight: idx === slides.length - 1 ? '-32vw' : undefined,
                }}
              >
                <img
                  src={INVERTED_COMMA}
                  alt=""
                  className="absolute bottom-6 right-6 w-8 h-8 opacity-10"
                />
                <div className="text-[#121212] text-[16px] md:text-[18px] font-normal mb-8 text-left">
                  “{t.text}”
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col items-start">
                    <span className="text-[#121212] text-[15px] font-medium">{t.name}</span>
                    <div className="flex gap-1 mt-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <img key={i} src={STAR} alt="star" className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Controls */}
        <div className="flex gap-4 mt-8 z-30">
          <button
            onClick={() => {
              marqueeRef.current.style.animationPlayState = 'paused';
              marqueeRef.current.scrollLeft -= marqueeRef.current.offsetWidth / 2;
              setTimeout(() => {
                marqueeRef.current.style.animationPlayState = 'running';
              }, 500);
            }}
            className="w-10 h-10 rounded-full border border-[#BDBDBD] flex items-center justify-center text-xl bg-white hover:bg-[#F3F3FF] transition"
            aria-label="Previous"
            type="button"
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <button
            onClick={() => {
              marqueeRef.current.style.animationPlayState = 'paused';
              marqueeRef.current.scrollLeft += marqueeRef.current.offsetWidth / 2;
              setTimeout(() => {
                marqueeRef.current.style.animationPlayState = 'running';
              }, 500);
            }}
            className="w-10 h-10 rounded-full bg-[#1051FF] flex items-center justify-center text-xl text-white hover:bg-[#0039b7] transition"
            aria-label="Next"
            type="button"
          >
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .marquee-slider {
          animation: testimonial-marquee 24s linear infinite;
        }
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .marquee-slider > div {
            min-width: 80vw !important;
            max-width: 80vw !important;
          }
        }
        @media (min-width: 769px) {
          .marquee-slider > div {
            min-width: 28vw !important;
            max-width: 28vw !important;
          }
        }
      `}</style>

      <div className='flex flex-col gap-1 justify-center items-center px-10 text-center mb-10'>
        <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-base leading-6 rounded-2xl'>
          <img src='/testimonials.png' className='w-4 mr-2 h-[19px] leading-1.5' />
          Testimonials
        </div>
        <div className='text-[24px] md:text-[36px] text-[#111216] text-center md:font-medium'>
          What Our Clients Are Saying
        </div>
        <div className='text-[14px] font-normal text-[#595C63]'>
          We take pride in delivering exceptional solutions that delivers great <br className='max-md:hidden'/> results. But don’t just take our word for it.
        </div>
      </div>

      {/* Custom Navigation Buttons */}
        <div className="flex gap-4 absolute left-1/2 -translate-x-1/2" style={{ bottom: '-15px' }}>
          <div className="swiper-button-prev w-10 h-10 rounded-full bg-white border border-[#BDBDBD] flex items-center justify-center cursor-pointer shadow">
            <span className="text-2xl text-[#1051FF]">&#8592;</span>
          </div>
          <div className="swiper-button-next w-10 h-10 rounded-full bg-[#1051FF] flex items-center justify-center cursor-pointer shadow">
            <span className="text-2xl text-white">&#8594;</span>
          </div>
        </div>
    </section>
  );
};

export default TestimonialsmarqueewithHoverpause;