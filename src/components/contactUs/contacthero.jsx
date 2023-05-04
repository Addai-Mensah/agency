import React from 'react'
import bg from "../../assets/grouping.png"

function ContactHero() {
  return (
    <div>
        <div>

<div className='relative  hidden sm:block'>
            <div className='bg-no-repeat bg-cover h-[70vh] sm:h-[90vh] flex items-center' style={{backgroundImage: `url(${bg})`}}>
                    <div className='sm:pt-[-5rem] '>        
                    <h1 className='text-white sm:pl-[10rem] font-bold sm:text-[2.5rem] font-poppins mb-4 sm:mb-6 leading-10'>Get  <span className='text-[#159EEC]'> Intouch </span> <br /> <span className='text-[#159EEC]'></span>With Us <span className='text-[#159EEC]'> Today </span></h1>    
                </div>
            </div>        
    </div>



    <div className=' sm:hidden'>
            <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[87vh] first-line:' style={{backgroundImage: `url(${bg})`}}>
              
                    <div className='pt-[5rem]'>
                    <div className='flex items-center justify-center'>
                    <h1 className='text-white sm:pl-[10rem] font-bold text-[2rem] font-poppins mb-4 sm:mb-6 leading-10'>Get  <span className='text-[#159EEC]'> Intouch </span> <br /> <span className='text-[#159EEC]'></span>With Us <span className='text-[#159EEC]'> Today </span></h1>    
                    </div>          
                </div>
            </div>        
    </div>

</div>
    </div>
  )
}

export default ContactHero