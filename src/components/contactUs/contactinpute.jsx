import React from 'react'
import ContactForm from './contactfrom'

function Contactinpute() {
  return (
    <div className='my-[4rem]'>
        <div className='flex justify-center gap-[5rem]'>
            <div>
                <h2 className='mb-[1rem] text-[#159EEC] text-center font-poppins font-bold text-[1.3rem]'>Contact Information</h2>
                <ContactForm/>
            </div>


             <div className='hidden sm:block '>
             <div className=' rounded-lg w-[25rem] mt-[10rem] shadow h-[15rem] flex items-center justify-center'>
                <div className='w-[20rem] '>
                    <h3 className='text-[#222057] text-center font-poppins font-bold mb-2'>Contact Us</h3>
                    <p className=' px-[2rem] text-center  text-[0.8rem]'>If you're interested in learning more about our services, or if you have any questions or concerns, please don't hesitate to contact us. Here's how to get in touch:</p>
                </div>
            </div>
             </div>
           
        </div>
    </div>
  )
}

export default Contactinpute