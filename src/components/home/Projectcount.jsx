import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const Projectcount = ({count}) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
  return (
    <>
    <section>
        <div 
        ref={ref}
        className='w-full flex flex-wrap max-md:hidden justify-between p-5 text-center px-15 gap-4 mb-20'>
            <div className='flex flex-col'>
                <p className='text-xl  lg:text-2xl'> {inView ? (
                    <>
                    <CountUp end={50} duration={3} separator=',' /><span>K</span><span>+</span>
                    </>) : (count)}</p>
                <p className='text-[10px] lg:text-lg leading-7 xl:leading-10 '>MVP Built</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl  lg:text-2xl'> {inView ? (
                    <>
                    <CountUp end={200} duration={3} separator=',' /><span>K</span><span>+</span>
                    </>) : (count)}</p>
                <p className='text-[10px] lg:text-lg leading-7 xl:leading-10'>Trained Professionals</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl  lg:text-2xl'> {inView ? (
                    <>
                    <CountUp end={30} duration={3} separator=',' /><span>K</span><span>+</span>
                    </>) : (count)}</p>
                <p className='text-[10px] lg:text-lg leading-7 xl:leading-10'>Mentors</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl  lg:text-2xl'> {inView ? (
                    <>
                    <CountUp end={92} duration={3} separator=',' /><span>K</span>
                    </>) : (count)}</p>
                <p className='text-[10px] lg:text-lg leading-7 xl:leading-10'>Social profiles</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Projectcount