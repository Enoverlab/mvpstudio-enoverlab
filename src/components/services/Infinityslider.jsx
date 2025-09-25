import React from 'react'
import { motion } from 'framer-motion';

const images = [
    '/infinityslider1.png',
    '/infinityslider2.png',
    '/infinityslider3.png',
    '/infinityslider4.png',
    '/infinityslider1.png',
    '/infinityslider2.png',
    '/infinityslider3.png',
    '/infinityslider4.png',
]

const Infinityslider = () => {
  return (
    <>
    <div>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-center font-bold md:mt-10 mb-7 md:mb-15 '>Our Future Works</h1>
    </div>
    <div className="overflow-hidden w-full pb-10">
<motion.div
className="flex gap-6"
animate={{ x: [0, -images.length * 320] }} // 300px image + 20px gap
transition={{
x: {
repeat: Infinity,
repeatType: "loop",
duration: 100,
ease: "linear",
},
}}
>
{[...images, ...images].map((src, idx) => (
<img
key={idx}
src={src}
alt="sliding"
className="w-[300px] h-[200px] object-cover rounded-2xl shadow-md"
/>
))}
</motion.div>
</div>
    </>
  )
}

export default Infinityslider