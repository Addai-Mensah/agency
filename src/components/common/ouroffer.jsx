import React from 'react'
import lady from "../../assets/ladys.png"
import phone from "../../assets/phone.png"
import twitter from "../../assets/twitter.png"
import locate from "../../assets/locate.png"
import email from "../../assets/email.png"

function Ouroffer() {
  return (
    <div className='bg-[#DDE9FF] sm:pb-[5rem]'>
        <div>
            <div className='flex items-center justify-center'>
               <div>
               <h1 className='text-center sm:mt-[10rem] font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem] mt-[1rem] font-bold text-[#159EEC]'>What we offer</h1>
                <p className='font-poppins mt-2 w-[50rem] sm:text-[1rem] hidden sm:block text-[0.8rem]'>If you're ready to take your business to the next level, we're here to help. Contact us today to learn more about our consulting services and how we can help your business achieve its goals. We'll work with you to develop a customized consulting plan that meets your unique needs and delivers results. Let's work together to achieve <span className='pl-[15rem]'>long-term success for your business.</span></p>
               </div>
            </div>
        </div>
    <div className='hidden sm:block '>
    <div className='   h-[70vh]  sm:h-[70vh] sm:block'>     
     <div className=' flex items-center justify-center gap-24 pt-[1rem]'>
     <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Reach out to us</h1>
            <div>
                <div className='flex items-center mt-2  gap-4'>
                    <img src={email} alt="" />
                    <p>@Info / @hr</p>
                    
                </div>
                <div className='flex items-center mt-1  gap-4'>
                    <img src={phone} alt="" />
                    <p>5872159210</p>
                    
                </div>
                

            </div>
         
    </div>


      <img className='w-[35rem] h-[35rem] index-50 pl-[10rem]' src={lady} alt="" />

      <div>
      
        
     
      </div>
     </div>
    </div>
    </div>




     <div className='block sm:hidden'>
     <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] mt-[1rem] '>What We Offer</h1>
     <div className='flex items-center justify-center'>
     <p className='font-poppins mt-2 w-[20rem] sm:text-[1rem] text-center text-[0.8rem] '>If you're ready to take your business to the next level, we're here to help. Contact us today to learn more about our consulting services and how we can help your business achieve its goals. We'll work with you to develop a customized consulting plan that meets your unique needs and delivers results. Let's work together to achieve long-term success for your business.</p>
     </div>
     <div className=' flex items-center justify-center'>

     
     <div className='flex flex-col mb-[5rem]'>
     <h1 className='font-poppins mb-[-3rem] mt-[3rem] text-center text-[1.4rem]  font-bold text-[#159EEC]'>Reach out to us</h1>
     <img className='w-[17rem] mx-auto  h-[17rem] index-50' src={lady} alt="" />
     <div>
           
            <div className='flex items-center justify-center'>
                <div>
                <div className='flex items-center mt-3  gap-4'>
                    <img src={email} alt="" />
                    <p>Email Address</p>
                    
                </div>
                <div className='flex items-center mt-2  gap-4'>
                    <img src={phone} alt="" />
                    <p>Phone number</p>
                    
                </div>
                <div className='flex items-center mt-2  gap-4'>
                    <img src={twitter} alt="" />
                    <p>Twitter</p>
                    
                </div>
                <div className='flex items-center mt-2  gap-4'>
                    <img src={locate} alt="" />
                    <p>Location</p>
                    
                </div>
                </div>

            </div>
         
    </div>
    <div>

      
    </div>
     </div>
    
    </div>
     </div>
</div>
  )
}

export default Ouroffer