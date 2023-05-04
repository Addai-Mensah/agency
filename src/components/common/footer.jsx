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
            <h6 className='sm:px-2 px-[5rem] my-1  font-bold text-[#159EEC]'>About</h6>
            <p className='sm:w-[20rem] text-white text-[0.7rem] sm:text-[0.7rem] font-poppins'>Autom-Mon Integrated Corp is a business consultancy firm that specializes in providing strategic solutions to organizations. Our team of experts has extensive experience in the industry and is committed to delivering customized services that will optimize your overall business performance. We believe that our success is closely tied to the success of our clients, and we aim to exceed their expectations at every turn. Contact us today and let us help you achieve your business objectives.</p>
         </div>

            <div className='mb-[5rem] sm:mb-0  '>
               <h6 className='  my-1 font-bold sm:px-2 px-[5rem] text-[#159EEC]'>Contact us</h6>
            <div className=''>
           
             <div className=''>
             <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0 mt-2' href="tel:09162993656">Call us at 5872159210</a>
             </div>

             <div>
             <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0 mt-2 ' href="">info@</a>
             </div>

             <div>
             <a className='w-[15rem]  text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0 mt-2 ' href="">Hr@</a>
             </div>
            </div>
         </div>

            <div className=' mb-[5rem] mt-[-2.5rem] sm:mb-0'>
            <h6 className='sm:px-2 ml-[-4.5rem] my-1 font-bold text-[#159EEC] text-center'>Locations</h6>
            <div className=''>
           
           <div className=''>
           <a className='w-[15rem] text-white text-[0.7rem]  sm:text-[0.7rem] font-poppins pl-[3.5rem] sm:pl-0' href="tel:09162993656">Bay 10, 3620 29 street NE, Calgary</a>
           </div>

           
          </div>
          
            </div>
            
        </div>


      </div>
    </div>
  )
}

export default Footer