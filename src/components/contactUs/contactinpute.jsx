import React from 'react'
import ContactForm from './contactfrom'
import { useAnimation, motion } from "framer-motion";

function Contactinpute() {

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
    <div className='my-[4rem]'>
        <div className='flex justify-center gap-[5rem]'>
            <div>
                <motion.h2
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:0.5}}
                variants={animates}
                   
                className='mb-[1rem] text-[#159EEC] text-center font-poppins font-bold text-[1.3rem]'>Contact Information</motion.h2>
                <ContactForm/>
            </div>


             <motion.div

          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount:0.5}}
          variants={animates}
             
             className='hidden sm:block '>
             <div className=' rounded-lg w-[25rem] mt-[10rem] shadow h-[15rem] flex items-center justify-center'>
                <div className='w-[20rem] '>
                    <h3 className='text-[#222057] text-center font-poppins font-bold mb-2'>Contact Us</h3>
                    <p className=' px-[2rem] text-center  text-[0.8rem]'>If you're interested in learning more about our services, or if you have any questions or concerns, please don't hesitate to contact us. Here's how to get in touch:</p>
                </div>
            </div>
             </motion.div>
           
        </div>
    </div>
  )
}

export default Contactinpute