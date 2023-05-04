import React from 'react'
import bg from "../../assets/leftbg.png"
import man from "../../assets/man.png"

function Services() {
  return (
    <div className='bg-no-repeat bg-[#DDE9FF] bg-cover h-auto sm:h-[80vh] sm:py-[12rem] '>
        <div className='hidden sm:block '>
       
         <div className=' flex items-center justify-center gap-20  '>
          <img className='w-[20rem] index-50' src={man} alt="" />

          <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Our Services</h1>
            <p className='font-poppins mb-2 w-[25rem]'>Our services are designed to be flexible and scalable, so we  can adapt to meet the needs of businesses of all sizes and  industries. Whether you need a one-time consultation or  ongoing support, we can provide the expertise and guidance  you need to achieve your goals.</p>
            <p className='font-poppins w-[25rem]'>we pride ourselves on our commitment to our  clients and our  results-driven approach. We work tirelessly to deliver tangible,  measurable results that help our clients achieve their goals  and improve their bottom line.</p>
          </div>
         </div>
        </div>




         <div className='block sm:hidden'>
         <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-8'>Our Services</h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <img className='w-[10rem] mx-auto my-5 h-[10rem] index-50' src={man} alt="" />
        <div>
          
            <p className='font-poppins mb-2 w-[18rem] text-[0.8rem]'>Our services are designed to be flexible and scalable, so we  can adapt to meet the needs of businesses of all sizes and  industries. Whether you need a one-time consultation or  ongoing support, we can provide the expertise and guidance  you need to achieve your goals.</p>
            <p className='font-poppins w-[18rem] mb-14 text-[0.8rem]'>we pride ourselves on our commitment to our  clients and our  results-driven approach. We work tirelessly to deliver tangible,  measurable results that help our clients achieve their goals  and improve their bottom line.</p>
        </div>
         </div>
        
        </div>
         </div>
      
    </div>
  )
}

export default Services