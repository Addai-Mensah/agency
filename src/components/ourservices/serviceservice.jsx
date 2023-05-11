import React from 'react'
import serve from "../../assets/serve.png"
import { useAnimation, motion } from "framer-motion";

function Serviceservice() {

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
    <div>
        <div>
          <div className='hidden sm:block '>
        <div className='   h-[70vh]  sm:h-[90vh] sm:block'>     
         <div className=' flex items-center justify-center gap-20 pt-[8rem] flex-row-reverse'>
          <motion.img
           initial={"offscreen"}
           whileInView={"onscreen"}
           variants={image}
          className='w-[25rem] index-50' src={serve} alt="" />
          <div>
            <motion.h1 
             initial={"offscreen"}
             whileInView={"onscreen"}
             variants={text}
            className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>Our Service</motion.h1>
            <motion.p
             initial={"offscreen"}
             whileInView={"onscreen"}
             variants={text}
            className='font-poppins mb-2  w-[25rem]'>At Autom-Mon integrated Corp, we offer a range of expert consulting services that are designed to help businesses achieve their goals and reach their full potential. Here are some of the key services we offer.</motion.p>
         
          </div>
         </div>
        </div>
        </div>




         <div className='block sm:hidden'>
         <h1 className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-12'>Our Services</h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <motion.img
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={image}
         className='w-[10rem] mx-auto my-[2rem] h-[10rem] index-50' src={serve} alt="" />
        <div>
            <motion.p 
             initial={"offscreen"}
             whileInView={"onscreen"}
             variants={animates}
            className='font-poppins mb-2 w-[18rem] text-[0.8rem] pb-[8rem]'>At Autom-Mon integrated Corp, we offer a range of expert consulting services that are designed to help businesses achieve their goals and reach their full potential. Here are some of the key services we offer.</motion.p>  
        </div>
         </div>
        
        </div>
         </div>
    </div>
    </div>
  )
}

export default Serviceservice