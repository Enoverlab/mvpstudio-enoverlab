import React from 'react'
import Heromarquee from '../home/Heromarquee'
import Heromarqueemobile from '../home/Heromarqueemobile'

const Heronew = () => {
  return (
    <>
    <section className='relative w-full bg-gradient-to-b from-[#FBECF4] to-[#DDECFF] py-6 z-50 mt-[60px] min-h-[40svh] md:min-h-[50svh]'>
        <div className='w-full flex flex-row p-5 pt-[10vh]'>
            <div className='flex flex-col w-full md:w-1/2 md:pl-10 lg:pl-20'>
            <h1 className='md:font-light text-[20px] sm:text-[34px] lg:text-[35px] xl:text-[42px] md:whitespace-pre'>Our Mvp <span className='font-bold'>Studio</span> Development <br/> <span className='italic'>Services</span></h1> 
            <p className='font-light md:font-normal text-xs md:text-lg'>We sell ready-to-use MVPs. We also create customized website and mobile applications that are tailored to your business needs. </p>
            </div>
            <div className='w-1/2 block justify-center items-center'>
            <img src='/serviceshero.png' className='mx-auto'/>
            </div>
        </div>
        <div className='max-md:hidden'><Heromarquee/></div>
        <div className='md:hidden flex pb-10'><Heromarqueemobile/></div>
    </section>
    </>
  )
}

export default Heronew