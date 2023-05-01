import React from 'react'
import logo from "../../assets/logo2.png"

function Footer() {
  return (
    <div className='bg-[#1F2B6C] sm:h-[20rem] pb-14'>
      <div className='pt-[4rem] px-[5rem] sm:flex flex-row sm:items-center sm:gap-40 '>
    
        <div className='mb-7 sm:mb-0'>
        <img className='w-[6rem] mb-3' src={logo} alt="" />
            <h6 className='px-16 my-1 font-bold text-[#159EEC]'>About</h6>
            <p className='w-[15rem] text-white text-[0.9rem] sm:text-[0.7rem] font-poppins'>We can help your business grow by providing customized solutions that address your specific needs. We work closely with you to understand your goals and develop a strategy that will help you achieve them.</p>
        </div>


        <div className="  sm:flex flex-row sm:items-center sm:justify-center gap-10">
            <div className='mb-7 sm:mb-0 '>
            <h6 className='px-16 my-1 font-bold text-[#159EEC]'>Contact us</h6>
            <a className='w-[15rem] text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-5' href="tel:09162993656">Call us at 09162993656</a>
            </div>

            <div className=' mb-7 sm:mb-0'>
            <h6 className='px-16 my-1 font-bold text-[#159EEC]'>Locations</h6>
            <a className='w-[15rem] text-white text-[0.68rem] sm:text-[0.7rem] font-poppins pl-5' href="tel:09162993656">Call us at 09162993656</a>
            </div>

            <div className='mb-7 sm:mb-0 '>
            <h6 className=' my-1 font-bold text-[#159EEC] text-center'>Explore</h6>
            <a className='w-[15rem] text-white text-[0.9rem]  sm:text-[0.7rem]  font-poppins text-center p-6 ' href="">Our Services</a>
            <h1 className='w-[15rem] text-white text-[0.9rem]  sm:text-[0.7rem]  font-poppins text-center mt-1' href="">Get Started</h1>
            <h1 className='w-[15rem] text-white text-[0.9rem]  sm:text-[0.7rem]  font-poppins text-center' href="">About Us</h1>

            </div>
        </div>


      </div>
    </div>
  )
}

export default Footer