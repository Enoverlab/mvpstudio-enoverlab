import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md';
import Navbar from './components/Navbar';

const Contact = () => {
  const [form, setForm] = useState({
      firstname: "",
      lastname: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
    const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };
  return (
    <>
    <section className='bg-[#E9E3E0]'>
      <Navbar/>
      <div className='flex flex-col md:flex-row w-full pt-[60px] md:pt-[120px]'>
        <div className='max-md:hidden md:w-1/2 flex justify-end items-end ml-auto max-h-[900px] mt-10 lg:mt-20 xl:mt-60' >
        <img src="/contact.png" alt="" /></div>
        <div className='w-full md:w-1/2 flex justify-start items-start px-2 py-8'>
              <form
                className="bg-white rounded-[20px] shadow-md w-full max-w-xl max-md:mx-auto p-6 md:p-8 flex flex-col gap-4 mt-5"
                onSubmit={handleSubmit}
              >
                <h2 className="text-center font-medium text-lg mb-2">Send us a Direct Message</h2>
                <p className="text-center text-sm text-[#595C63] mb-4">
                  We are dedicated to making our process collaborative, we are inspired to tell our clients' stories in their own way, with our Unique touch.
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
                  className="bg-[#2563eb] text-white rounded-md py-3 font-medium text-base mt-2 hover:bg-[#1051FF] transition inline-block"
                >
                  Send message <span className="inline-block"><MdArrowOutward/></span>
                </button>
              </form>
            </div>
      </div>
    </section>
    </>
  )
}

export default Contact