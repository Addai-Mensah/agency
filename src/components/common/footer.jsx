import React from 'react'
import logo from "../../assets/logo2.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#1F2B6C] sm:h-[20rem] pb-14 flex items-center justify-center'>
      <div className=' sm:flex flex-row sm:items-center sm:justify-center '>

        <div className=" pt-[4rem] px-[2rem]  sm:flex flex-row sm:items-center sm:justify-center gap-20">
        <div className='mb-7 sm:mb-0'>
        <img className='w-[6rem] mb-3' src={logo} alt="" />
            <h6 className='sm:px-2 px-[5rem] my-1 font-bold text-[#159EEC]'>About</h6>
            <p className='w-[15rem] text-white text-[0.7rem] sm:text-[0.7rem] font-poppins'>We can help your business grow by providing customized solutions that address your specific needs. We work closely with you to understand your goals and develop a strategy that will help you achieve them.</p>
         </div>

            <div className='mb-7 sm:mb-0  '>
               <h6 className='  my-1 font-bold sm:px-2 px-[5rem] text-[#159EEC]'>Contact us</h6>
            <div className=''>
           
             <div className=''>
             <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0 mt-2' href="tel:09162993656">Call us at 09162993656</a>
             </div>

             <div>
             <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0 mt-2 ' href="">Autom-Mon@gmail.com</a>
             </div>
            </div>
         </div>

            <div className=' mb-7 sm:mb-0'>
            <h6 className='sm:px-2 px-[5rem] my-1 font-bold text-[#159EEC] text-center'>Locations</h6>
            <div className=''>
           
           <div className=''>
           <a className='w-[15rem] text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0' href="tel:09162993656">Call us at 09162993656</a>
           </div>

           <div>
           <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0' href="">Autom-Mon@gmail.com</a>
           </div>
          </div>
          
            </div>

            <div className=' mb-7 sm:mb-0'>
            <h6 className='sm:px-1 px-[5rem] my-1 font-bold text-[#159EEC]'>Explore</h6>
            <div className=''>
           
             <div className=''>
              <Link>
              <h1 className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[4.8rem] sm:pl-0 mt-2 '>About us</h1>
              </Link>          
             </div>

             <div>
             <Link>
              <h1 className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[4.8rem] sm:pl-0 mt-2 '>Our services</h1>
              </Link>   
             </div>

             <div>
             <Link>
              <h1 className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[4.8rem] sm:pl-0 mt-2  '>Contact Us</h1>
              </Link>   
             </div>
            </div>
            </div>

            
        </div>


      </div>
    </div>
  )
}

export default Footer