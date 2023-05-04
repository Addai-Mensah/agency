import React from 'react'
import servicebg from "../../assets/servicebg.png"
import otherbg from "../../assets/otherbg.png"

function Servicehero() {
  return (
    <div>
         <div className='relative  hidden sm:block'>
            <div className='bg-no-repeat bg-cover h-[70vh] sm:h-[90vh]' style={{backgroundImage: `url(${servicebg})`}}>
                <div className='bg-no-repeat bg-cover h-[70vh] sm:h-[90vh] ' style={{backgroundImage: `url(${otherbg})`}}>
                    <div className='sm:pt-[9rem] sm:pl-[10rem]'>
                       
                   
                       <h1 className='text-white font-bold sm:text-[2.5rem] font-poppins mb-4 sm:mb-6 leading-10'>Expert Consulting <br /> <span className='text-[#1F2B6C]'> Services</span> to Propel <br /> Your <span className='text-[#1F2B6C]'>Business Forward</span></h1>


                    </div>
                    
                </div>
            </div>        
    </div>



    <div className=' sm:hidden'>
            <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[87vh] first-line:' style={{backgroundImage: `url(${servicebg})`}}>
                <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[90vh] bg-opacity-50' style={{backgroundImage: `url(${otherbg})`}}>
                    <div className='pt-[5rem]'>
                     <div className=''>
                      <h1 className='text-white text-center font-bold text-[1.5rem] sm:text-[3.5rem] font-poppins pt-[6rem] mb-6'>Expert<span className='text-[#1F2B6C] leading-6'> Consulting</span>    <span className='text-[#1F2B6C] '>Services</span> <br /> to Propel Your <span className=' mt-[-2rem] text-[#1F2B6C]'>Business Forward</span></h1>
                     </div>
                    </div>
                    
                </div>
            </div>        
    </div>

    </div>
  )
}

export default Servicehero