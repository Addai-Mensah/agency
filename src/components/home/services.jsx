import React from 'react'
import bg from "../../assets/leftbg.png"
import man from "../../assets/man.png"
import { useAnimation, motion } from "framer-motion";


function Services() {


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
    <div className='bg-no-repeat bg-[#DDE9FF] bg-cover h-auto sm:h-[80vh] sm:py-[12rem] '>
        <motion.div
         initial={"offscreen"}
         whileInView={"onscreen"}
         variants={animates}
        className='hidden sm:block '>
       
         <div className=' flex items-center justify-center gap-20  '>
          <img className='w-[20rem] index-50' src={man} alt="" />

          <div>
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Our Services</h1>
            <p className='font-poppins mb-2 w-[25rem]'>Our services are designed to be flexible and scalable, so we  can adapt to meet the needs of businesses of all sizes and  industries. Whether you need a one-time consultation or  ongoing support, we can provide the expertise and guidance  you need to achieve your goals.</p>
            <p className='font-poppins w-[25rem]'>we pride ourselves on our commitment to our  clients and our  results-driven approach. We work tirelessly to deliver tangible,  measurable results that help our clients achieve their goals  and improve their bottom line.</p>
          </div>
         </div>
        </motion.div>




         <div className='block sm:hidden'>
         <motion.h1 
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={text}
         className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-[4rem]'>Our Services</motion.h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <motion.img 
         initial={"offscreen"}
         whileInView={"onscreen"}
         variants={image}
         className='w-[10rem] mx-auto my-5 h-[10rem] index-50' src={man} alt="" />
        
        <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        variants={animates}
        >  
           
            <p className='font-poppins mb-2 w-[20rem] text-[0.8rem]'>Our services are designed to be flexible and scalable, so we  can adapt to meet the needs of businesses of all sizes and  industries. Whether you need a one-time consultation or  ongoing support, we can provide the expertise and guidance  you need to achieve your goals.</p>
            <p className='font-poppins w-[20rem] mb-14 text-[0.8rem]'>we pride ourselves on our commitment to our  clients and our  results-driven approach. We work tirelessly to deliver tangible,  measurable results that help our clients achieve their goals  and improve their bottom line.</p>
        </motion.div>
         </div>
        
        </div>
         </div>
      
    </div>
  )
}

export default Services