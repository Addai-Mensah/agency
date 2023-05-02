import React from 'react'
import serve from "../../assets/serve.png"

function Serviceservice() {
  return (
    <div>
        <div>
          <div className='hidden sm:block '>
        <div className='   h-[70vh]  sm:h-[90vh] sm:block'>     
         <div className=' flex items-center justify-center gap-20 pt-[8rem] flex-row-reverse'>
          <img className='w-[25rem] index-50' src={serve} alt="" />
          <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Our Service</h1>
            <p className='font-poppins mb-2 w-[25rem]'>At Autom-Mon integrated Corp, we offer a range of expert consulting services that are designed to help businesses achieve their goals and reach their full potential. Here are some of the key services we offer.</p>
         
          </div>
         </div>
        </div>
        </div>




         <div className='block sm:hidden'>
         <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-12'>Our Services</h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <img className='w-[10rem] mx-auto my-[2rem] h-[10rem] index-50' src={serve} alt="" />
        <div>
            <p className='font-poppins mb-2 w-[18rem] text-[0.8rem] pb-[8rem]'>At Autom-Mon integrated Corp, we offer a range of expert consulting services that are designed to help businesses achieve their goals and reach their full potential. Here are some of the key services we offer.</p>  
        </div>
         </div>
        
        </div>
         </div>
    </div>
    </div>
  )
}

export default Serviceservice