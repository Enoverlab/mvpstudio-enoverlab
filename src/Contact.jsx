import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdArrowOutward } from 'react-icons/md';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const Contact = () => {
  const emailform = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
    const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Submit logic here
    emailjs
              .sendForm('service_8ep6asr', 'template_c0wfmrh', emailform.current, {
                publicKey: 'a_1aNzLSL_lnnllME',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  setIsSubmitted(true);
                  emailform.current.reset();
                  setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSending(false);
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
                
              );
  };



  return (
    <>
    <section className='bg-[#E9E3E0]'>
      <Navbar/>
      <div className='flex flex-col md:flex-row w-full pt-[60px] md:pt-[120px]'>
        <div className='max-md:hidden md:w-1/2 flex justify-end items-end ml-auto max-h-[900px] mt-10 lg:mt-20 xl:mt-60' >
        <img src="/contact.png" alt="" /></div>
        <div className='w-full md:w-1/2 flex justify-start items-start px-2 py-8'>
              <form ref={emailform} 
                className="bg-white rounded-[20px] shadow-md w-full max-w-xl max-md:mx-auto p-6 md:p-8 flex flex-col gap-4 mt-5"
                onSubmit={handleSubmit}
              >
                <h2 className="text-center font-medium text-lg mb-2">Send us a Direct Message</h2>
                <p className="text-center text-sm text-[#595C63] mb-4">
                  We are dedicated to making our process collaborative. We are inspired to tell our clients' stories in their own way, with our Unique touch.
                </p>
                    <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  value={form.firstname}
                  onChange={handleInputChange}
                  className="border rounded-md px-3 py-2 text-sm outline-none"
                  required
                />
                    <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter Last Name"
                  value={form.lastname}
                  onChange={handleInputChange}
                  className="border rounded-md px-3 py-2 text-sm outline-none"
                  required
                />
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email address"
                  value={form.email}
                  onChange={handleInputChange}
                  className="border rounded-md px-3 py-2 text-sm outline-none"
                  required
                />
                <label className="text-sm font-medium">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone number"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="border rounded-md px-3 py-2 text-sm outline-none"
                  required
                />
                <label className="text-sm font-medium mt-2">
                  What are you looking to build with Enoverlab?
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  value={form.message}
                  onChange={handleInputChange}
                  className="border rounded-md px-3 py-2 text-sm outline-none min-h-[80px] resize-none"
                />
                <button
                          type="submit"
                          className="bg-[#2563eb] text-white rounded-md py-3 font-medium text-base mt-2 hover:bg-[#1051FF] transition inline-block" disabled={isSending}
                        >{isSending ? "Sending..." : "Send Message"}<span className="inline-block"><MdArrowOutward/></span>
                        </button>
              </form>
            </div>
            {isSubmitted && (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="flex flex-col items-center justify-center bg-[#b7b2ce] p-6 rounded-lg">
      <div className='flex flex-row'><Link to="/"><img src='/logo1.png' className='w-[118.88px] max-h-[36.19px]  inline-block'/></Link></div>
          <h2 className="text-xl font-semibold mt-4 mb-4 text-[#3c235c]">We have received your message!</h2>
          <p className="text-gray-800 mb-4 font-medium italic">We will get back to you shortly</p>
         <button
            onClick={() => setIsSubmitted(false)} // Close popup
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-black max-md:text-sm"
          >
            Close
          </button>
        </div>
  </div>
)}
      </div>
    </section>
    </>
  )
}

export default Contact