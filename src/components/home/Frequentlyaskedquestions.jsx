import React, { useState } from 'react'
import { questions } from '../data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Frequentlyaskedquestions = () => {
    const [openIndex, setOpenIndex] = useState(null)

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx)
  }
  return (
    <>
    <Link name='faq'
    offset={-50}>
    <section className='w-full bg-white'>
    <div className='w-full flex flex-col md:flex-row'>
        <motion.div
        initial={{ opacity:0, x:-40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
        className='w-full md:w-1/2 flex flex-col gap-5 p-5 md:py-20 md:px-10'>
        <h2 className='text-[24px] text-[#1051FF] font-semibold '>FAQ</h2>
        <h1 className='text-[24px] md:text-[36px] lg:text-[48px]'>Frequently Asked Questions</h1>
        <p className='text-[14px] md:text-[16px]'>We complied a list of answers to address your most pressing questions regarding our services</p>
        </motion.div>
        <motion.div
            initial={{ opacity:0, x:40 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className="w-full md:w-1/2 p-7">
              {questions.map((item, idx) => (
                <div key={idx} className="overflow-hidden mt-6">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-[#1051FF] font-semibold transition text-left text-sm md:text-base border-1 border-[#C4C4FF]"
                    onClick={() => toggle(idx)}
                  >
                    <span className='text-[#313030] max-lg:text-sm'>{item.q}</span>
                    <span className="ml-4 text-black">{openIndex === idx ? "-" : "+"}</span>
                  </button>
                  <div
                    className="transition-all duration-900 ease-in-out"
                    style={{
                      maxHeight: openIndex === idx ? '500px' : '0px',
                      opacity: openIndex === idx ? 1 : 0,
                      overflow: 'hidden',
                    }}
                  >
                    <div className="px-6 py-4 bg-[#F3F3FF] border-1 border-[#02ACD7] text-gray-700">
                      {item.a}
                    </div>
                    </div>
                </div>
              ))}
            </motion.div>
    </div>
    </section>
    </Link>
    </>
  )
}

export default Frequentlyaskedquestions