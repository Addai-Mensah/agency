import React from 'react'
import man from "../../assets/Group.png"

function Aboutwe() {
  return (
    <div>
          <div className='hidden sm:block '>
        <div className='   h-[70vh]  sm:h-[90vh] sm:block'>     
         <div className=' flex items-center justify-center gap-20 pt-[8rem] flex-row-reverse'>
          <img className='w-[25rem] index-50' src={man} alt="" />

          <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>About Us</h1>
            <p className='font-poppins mb-2 w-[25rem]'>At Autom-Mon integrated Corp, we're dedicated to helping businesses of all sizes and industries achieve their goals and reach their full potential. We provide expert consulting services in a wide range of areas, including operations management, marketing, technology, and strategic planning. Our team of experienced consultants has a track record of success in helping businesses improve their bottom line and achieve long-term success. </p>
         
          </div>
         </div>
        </div>
        </div>




         <div className='block sm:hidden'>
         <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-12'>About Us</h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <img className='w-[20rem] mx-auto my- h-[20rem] index-50' src={man} alt="" />
        <div>
            <p className='font-poppins mb-2 w-[18rem] text-[0.8rem] pb-[4rem]'>At Autom-Mon integrated Corp, we're dedicated to helping businesses of all sizes and industries achieve their goals and reach their full potential. We provide expert consulting services in a wide range of areas, including operations management, marketing, technology, and strategic planning. Our team of experienced consultants has a track record of success in helping businesses improve their bottom line and achieve long-term success.</p>  
        </div>
         </div>
        
        </div>
         </div>
    </div>
  )
}

export default Aboutwe