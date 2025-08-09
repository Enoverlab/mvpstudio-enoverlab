import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aboutdropdown from './about/Aboutdropdown';
import { IoIosArrowDown } from 'react-icons/io';


 


const Navbar = () => {
      const [dropdownOpen, setDropdownOpen] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef(null);
        const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY === 0) {
       setShowNavbar(true); 
     } else if (window.scrollY < lastScrollY) {
       setShowNavbar(true); 
     } else {
       setShowNavbar(false); 
     }
     setLastScrollY(window.scrollY);
   };
 
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, [lastScrollY]);
  
        
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  return (
    <motion.nav
    initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='w-full h-[80px] fixed top-0 left-0 text-[#010080] p-4 z-9999 backdrop-blur-[21px]'
    >
      <div
      className="flex flex-row items-center justify-between"
      >
      <div className='inline-block'><Link to="/"><img src="/logo.png" alt="" className='w-[25px] h-[28.19px] justify-start items-start inline-block ml-[10px]'/><img src='/logo1.png' className='w-[118.88px] max-h-[36.19px]  inline-block'/></Link></div>
        <ul
                   ref={menuRef} 
                   className={`flex max-lg:flex-col items-center absolute top-15 lg:static w-[60%] text-center gap-7 lg:gap-9 herobg min-lg:bg-none max-lg:text-black font-medium lg:w-auto lg:bg-transparent lg:flex-row z-9999 ${
                     isOpen ? 'min-h-[50svh] w-full right-0 animate-slide-in duration-200' : 'h-[0px]'
                   }`}
                 >
                   <li className={`block ${isOpen ? "pt-10" : "max-lg:hidden"} pt-2 justify-between 
                          text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-black max-lg:hover:text-blue-700`} ><Link to="/">Home</Link></li>
                   <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                         text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-black max-lg:hover:text-blue-700`} ><Link to="/about">About Us</Link>
                 {/* Dropdown Button */}
                   <div className='hidden lg:inline-block ml-1'>
                 <button
                   className="cursor-pointer lg:block"
                   onClick={() => setDropdownOpen((open) => !open)}
                 >
                   {dropdownOpen ? <IoIosArrowDown  /> : <IoIosArrowDown  />}
                 </button></div></li> 
        
                 {/* Dropdown Section */}
                 {dropdownOpen && (
                   <Aboutdropdown/>
                 )}
                   <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                         text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-black max-lg:hover:text-blue-700`} ><Link to="/talents">Talents</Link></li>
                   <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                         text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-black max-lg:hover:text-blue-700`} ><Link to="/contact">Contact US</Link></li>
                   <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                         text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-black max-lg:hover:text-blue-700`} ><Link to="/mvpstudio">MVP Studio</Link></li>
                 </ul>
        <Link to='/contact'><button className='max-lg:hidden mr-5 h-[48px] w-[169px] rounded-lg inset-0 bg-[#1051FF] text-white hover:bg-white hover:text-[#1051FF] hover:ring-1 hover:ring-white text-center'>Let's Talk</button></Link>
        <button 
          className="block cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdMenuOpen className='text-3xl' /> : <MdMenu className='text-3xl' />}
        </button>
        </div>
        
    </motion.nav>
  )
}

export default Navbar