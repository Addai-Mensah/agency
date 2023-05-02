import React from 'react'
import man from "../../assets/teach.png"

function Approach() {
  return (
    <div className='bg-[#DDE9FF]'>
        <div className='hidden sm:block '>
        <div className='   h-[70vh]  sm:h-[80vh] sm:block'>     
         <div className=' flex items-center justify-center gap-20 pt-[8rem]'>
          <img className='w-[25rem] index-50' src={man} alt="" />

          <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Our Approach</h1>
            <p className='font-poppins mb-2 w-[25rem]'>At Autom-Mon integrated Corp, we take a collaborative approach to consulting. We work closely with our clients to understand their unique needs and develop customized solutions that deliver results. We believe in building strong, long-term relationships with our clients, based on trust, collaboration, and shared goals.</p>
            <p className='font-poppins mb-2 w-[25rem] pt-2' >Our consultants have a wealth of experience in a variety of industries, and are committed to staying on the leading edge of their fields. We're constantly learning and adapting to new technologies, strategies, and best practices, in order to provide our clients with the best possible consulting services. </p>
         
          </div>
         </div>
        </div>
        </div>




         <div className='block sm:hidden'>
         <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-12'>Our Approach</h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <img className='w-[13rem] mx-auto my-5 h-[13rem] index-50' src={man} alt="" />
        <div>
        <p className='font-poppins mb-2 w-[18rem] text-[0.8rem] '>At Autom-Mon integrated Corp, we take a collaborative approach to consulting. We work closely with our clients to understand their unique needs and develop customized solutions that deliver results. We believe in building strong, long-term relationships with our clients, based on trust, collaboration, and shared goals.</p>
            <p className='font-poppins mb-2 w-[18rem] text-[0.8rem] pb-[4rem]' >Our consultants have a wealth of experience in a variety of industries, and are committed to staying on the leading edge of their fields. We're constantly learning and adapting to new technologies, strategies, and best practices, in order to provide our clients with the best possible consulting services. </p>
          
        </div>
         </div>
        
        </div>
         </div>
    </div>
  )
}

export default Approach