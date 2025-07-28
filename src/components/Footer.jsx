import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full lg:w-[95%] xl:w-[90%] mx-auto px-1 sm:px-5 max-md:mb-10'>
      <section className="bg-[#fff] rounded-[40px] p-4 md:m-10 lg:p-15 shadow-xl">
      {/* CTA Banner */}
      <div className="mx-auto mb-12">
        <div className="relative bg-[#1051FF] rounded-xl flex flex-row items-center justify-between px-4 md:px-16 py-4 sm:py-6 lg:py-10 overflow-hidden">
          <h2 className="flex text-white text-[12px] sm:text-[18px] md:text-[20px]lg:text-[28px] font-semibold text-left z-10 ">
            Grow your business fast with Enoverlab
          </h2>
          <button className="md:mt-0 bg-black hover:bg-white hover:shadow-xl text-white hover:text-black px-4 sm:px-7 py-3 rounded-lg font-semibold text-[11px] sm:text-base z-10 flex whitespace-pre">
            Explore Now
          </button>
          {/* Decorative circle */}
          <div className="absolute right-0 bottom-0 md:right-[-80px] md:bottom-[-80px] w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-[#3b82f6] rounded-full opacity-30 pointer-events-none" />
          <div className="absolute right-10 bottom-10 w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-[#2563eb] rounded-full opacity-20 pointer-events-none" />
        </div>
      </div>
      {/* Footer Links */}
      <div className="mx-auto grid grid-cols-4 gap-1 sm:gap-10 lg:px-16 py-2 sm:py-4">
        {/* Company */}
        <div>
          <h3 className="font-semibold text-sm sm:text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-[#222]">
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">About</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">MVP Studio</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Partners</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Contact Us</a></li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h3 className="font-semibold text-sm sm:text-lg mb-4">Explore</h3>
          <ul className="space-y-3 text-[#222] ">
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Browse MVPs</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Industries</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Case Studies</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Testimonials</a></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold text-sm sm:text-lg mb-4">Support</h3>
          <ul className="space-y-3 text-[#222] ">
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">FAQ</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Help Center</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF] whitespace-pre'><a href="#">Submit Your MVP</a></li>
            <li className='text-[11px] md:text-base hover:text-[#1051FF]'><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-sm sm:text-lg mb-4">ContactUs</h3>
          <p className='text-[11px] md:text-base flex max-lg:justify-end'>(+234)9055654356</p>
          <div className='flex flex-row justify-between w-2/3 sm:w-1/2 gap-2 mt-3'>
            <FaInstagram className='md:w-5 md:h-5 hover:text-indigo-700'/>
            <FaFacebook className='md:w-5 md:h-5 hover:text-indigo-700'/>
            <FaWhatsapp className='md:w-5 md:h-5 hover:text-indigo-700'/>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        footer {
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
        }
        @media (max-width: 768px) {
          .max-w-5xl, .max-w-6xl {
            max-width: 100% !important;
          }
        }
      `}</style>
      </section>
    </footer>
  );
};

export default Footer;