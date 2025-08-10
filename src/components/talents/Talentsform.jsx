import React, { useState } from "react";
import Navbar from "../Navbar";
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const roles = [
  "Product Manager",
  "Product Designer",
  "Software Engineer",
  "Data Analyst",
  "Digital Marketers",
];

const TalentsForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleRoleToggle = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (e) => {
    e.preventDefault();
    setDropdownOpen((open) => !open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#E3ECFE] flex items-center justify-center px-2 py-8">
      <form
        className="bg-white rounded-[20px] shadow-md w-full max-w-md mx-auto p-6 md:p-8 flex flex-col gap-4 mt-20"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-medium text-lg mb-2">Contact to Hire</h2>
        <p className="text-center text-sm text-[#595C63] mb-4">
          We are dedicated to making our process collaborative, we are inspired to tell our clients' stories in their own way, with our Unique touch.
        </p>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={form.name}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-sm outline-none"
          required
        />
        <label className="text-sm font-medium">Company (if applicable)</label>
        <input
          type="text"
          name="company"
          placeholder="Enter Company"
          value={form.company}
          onChange={handleInputChange}
          className="border rounded-md px-3 py-2 text-sm outline-none"
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
        <label className="text-sm font-medium">Role interested in</label>
        <div className="relative">
          <button
            type="button"
            onClick={handleDropdownSelect}
            className="border rounded-md px-3 py-2 text-sm w-full text-left flex justify-between items-center bg-white"
          >
            {selectedRoles.length > 0
              ? selectedRoles.join(", ")
              : "Select role you want to hire"}
            <span className="inline-block ml-2 w-3"><MdKeyboardArrowDown/></span>
          </button>
          {dropdownOpen && (
            <>
              {/* Backdrop Blur */}
              <div
                className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
                onClick={() => setDropdownOpen(false)}
                aria-label="Close dropdown"
              />
              {/* Dropdown */}
              <div className="absolute left-0 top-3 w-[97%] ml-[1.5%] bg-white rounded-xl shadow-lg z-50 p-4 flex flex-col gap-3">
                <button
                  type="button"
                  className="absolute top-2 right-3 text-xl text-gray-400"
                  onClick={() => setDropdownOpen(false)}
                  aria-label="Close"
                >
                  <span className="inline-block mb-3 text-white bg-gray-700 w-5 h-5 rounded-full"><IoMdClose/></span>
                </button>
                {roles.map((role) => (
                  <label
                    key={role}
                    className="flex items-center justify-between py-2 px-2 cursor-pointer hover:bg-[#f3f6fd] rounded mt-2"
                  >
                    <span className="text-sm">{role}</span>
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleToggle(role)}
                      className="w-4 h-4"
                    />
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
        <label className="text-sm font-medium mt-2">
          Additional Comments
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
    </>
  );
};

export default TalentsForm;