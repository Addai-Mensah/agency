import React from 'react'
import lady from "../../assets/ladys.png"
import phone from "../../assets/phone.png"
import twitter from "../../assets/twitter.png"
import locate from "../../assets/locate.png"
import email from "../../assets/email.png"
import { useAnimation, motion } from "framer-motion";

 


function Ouroffer() {

    const animates = {
        offscreen:{
            y:70,
            opacity:0
        },
    
        onscreen:{
            y:0,
            opacity:1,
            transition:{
                type:"spring",
               
                duration:2}
        }
    
        
     }
    
     const text = {
        offscreen:{
            y:50,
            opacity:0
        },
    
        onscreen:{
            y:0,
            opacity:1,
            transition:{
                type:"spring",
               
                duration:2}
        }
    
        
     }
    
     const image = {
      offscreen:{
          x:-100,
          opacity:0
      },
    
      onscreen:{
          x:0,
          opacity:1,
          transition:{
              type:"spring",
              bounce:0.4,
              duration:2}
      }
    
      
    }

  return (
    <div className='bg-[#DDE9FF] sm:pb-[5rem]'>
        <div>
            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false}}
            variants={animates}
            className='flex items-center justify-center'>
               <div>
               <h1 className='text-center sm:mt-[10rem] font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem] mt-[1rem] font-bold text-[#159EEC]'>What we offer</h1>
                <p className='font-poppins mt-2 w-[50rem] sm:text-[1rem] hidden sm:block text-[0.8rem]'>If you're ready to take your business to the next level, we're here to help. Contact us today to learn more about our consulting services and how we can help your business achieve its goals. We'll work with you to develop a customized consulting plan that meets your unique needs and delivers results. Let's work together to achieve <span className='pl-[15rem]'>long-term success for your business.</span></p>
               </div>
            </motion.div>
        </div>
    <div className='hidden sm:block '>
    <div className='   h-[70vh]  sm:h-[70vh] sm:block'>     
     <div className=' flex items-center justify-center gap-24 pt-[1rem]'>
     <div>
            <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false}}
            variants={text}
            className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Reach out to us</motion.h1>
            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false}}
            variants={animates}
            >
                <div className='flex items-center mt-2  gap-4'>
                    <img src={email} alt="" />
                    <p>Autommonintegratedcorp@gmail.com</p>
                    
                </div>
                <div className='flex items-center mt-1  gap-4'>
                    <img src={phone} alt="" />
                    <p>5872159210</p>
                    
                </div>
                

            </motion.div>
         
    </div>


      <motion.img
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false}}
      variants={image}
       className='w-[35rem] h-[35rem] index-50 pl-[10rem]' src={lady} alt="" />

      <div>
      
        
     
      </div>
     </div>
    </div>
    </div>




     <div className='block sm:hidden'>
     <motion.h1
     initial={"offscreen"}
     whileInView={"onscreen"}
     viewport={{once:false}}
     variants={text}
      className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] mt-[1rem] '>What We Offer</motion.h1>
     <div className='flex items-center justify-center'>
     <motion.p 
     initial={"offscreen"}
     whileInView={"onscreen"}
     viewport={{once:false}}
     variants={animates}
     className='font-poppins mt-2 w-[20rem] sm:text-[1rem] text-center text-[0.8rem] '>If you're ready to take your business to the next level, we're here to help. Contact us today to learn more about our consulting services and how we can help your business achieve its goals. We'll work with you to develop a customized consulting plan that meets your unique needs and delivers results. Let's work together to achieve long-term success for your business.</motion.p>
     </div>
     <div className=' flex items-center justify-center'>

     
     <div className='flex flex-col mb-[5rem]'>
     <motion.h1
     initial={"offscreen"}
     whileInView={"onscreen"}
     viewport={{once:false}}
     variants={text}
     className='font-poppins mb-[-3rem] mt-[3rem] text-center text-[1.4rem]  font-bold text-[#159EEC]'>Reach out to us</motion.h1>
     <motion.img 
     initial={"offscreen"}
     whileInView={"onscreen"}
     viewport={{once:false}}
     variants={image}
     className='w-[17rem] mx-auto  h-[17rem] index-50' src={lady} alt="" />
     <div>
           
            <div className='flex items-center justify-center'>
                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false}}
                variants={animates}
                >
                <div className='flex items-center mt-3  gap-4'>
                    <img src={email} alt="" />
                    <p>Automonintegratedcorp@gmail.com</p>
                    
                </div>
                <div className='flex items-center mt-2  gap-4'>
                    <img src={phone} alt="" />
                    <p>5872159210</p>
                    
                </div>
                </motion.div>

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