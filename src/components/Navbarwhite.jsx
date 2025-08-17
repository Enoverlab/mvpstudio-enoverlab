import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io';


const Navbarwhite = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
         const menuRef = useRef(null);
         const dropRef = useRef(null);
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

     useEffect(() => {
           const handleClickOutside = (event) => {
             if (dropRef.current && !dropRef.current.contains(event.target)) {
               setDropdownOpen(false);
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
       className='w-full h-[60px] lg:h-[80px] fixed top-0 left-0 text-[#010080] p-4 z-9999 bg-white backdrop-blur-[21px]'
     >
       <div
       className="flex flex-row items-center justify-between"
       >
       <div className='inline-block'><Link to="/"><img src='/logo1.png' className='w-[118.88px] max-h-[36.19px] md:ml-[10px] inline-block'/></Link></div>
         <ul
           ref={menuRef} 
           className={`flex max-lg:flex-col items-center absolute top-15 lg:static w-[60%] text-center gap-7 lg:gap-9 abouthero min-lg:bg-none max-lg:text-white font-medium lg:w-auto lg:bg-transparent lg:flex-row z-9999 ${
             isOpen ? 'min-h-[50svh] w-full right-0 animate-slide-in duration-200' : 'h-[0px]'
           }`}
         >
           <li className={`block ${isOpen ? "pt-10" : "max-lg:hidden"} pt-2 justify-between 
                  text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/">Home</Link></li>
           <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
             text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} 
             ref={dropRef}
           >
             <NavLink to="/about" className={({ isActive }) => ` hover:text-indigo-900 ${isActive ? 'text-indigo-600' : ''}`}>About Us</NavLink>
             {/* Dropdown Button */}
             <div className='inline-block ml-1'>
               <button
                 className="cursor-pointer lg:block relative"
                 onClick={() => setDropdownOpen((open) => !open)}
               >
                 <IoIosArrowDown />
               </button>
             </div>
             {/* Dropdown Section */}
             {dropdownOpen && (
               <ul className='lg:absolute lg:top-14 lg:left-[40%] bg-white shadow-lg rounded-lg p-4 z-50 duration-500 hover:text-indigo-900 text-sm text-black'>
                 <NavLink to="/services" className={({ isActive }) => `text-black hover:text-indigo-900 ${isActive ? 'text-indigo-900' : ''}`}>Serivces</NavLink>
               </ul>
             )}
           </li>
           <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                 text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/talents">Talents</Link></li>
           <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                 text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/contact">Contact US</Link></li>
           <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 justify-between 
                 text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><NavLink to="/mvpstudio" className={({ isActive }) => ` hover:text-indigo-900 ${isActive ? 'text-indigo-600' : ''}`}>MVP Studio</NavLink></li>
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

export default Navbarwhite