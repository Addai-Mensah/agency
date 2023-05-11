import React from 'react'
import man from "../../assets/Group.png"
import { useAnimation, motion } from "framer-motion";

function Aboutwe() {


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
          <div className='hidden sm:block '>
        <div className='   h-[70vh]  sm:h-[90vh] sm:block'>     
         <div className=' flex items-center justify-center gap-20 pt-[8rem] flex-row-reverse'>
          <motion.img
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount:0.3}}
          variants={image}

          className='w-[25rem] index-50' src={man} alt="" />

          <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false}}
          variants={animates}

          >
            <h1 className='font-poppins hidden sm:block mb-0  sm:mb-4  text-[1.7rem]  font-bold text-[#159EEC]'>About Us</h1>
            <p className='font-poppins mb-2 w-[25rem]'>At Autom-Mon integrated Corp, we're dedicated to helping businesses of all sizes and industries achieve their goals and reach their full potential. We provide expert consulting services in a wide range of areas, including operations management, marketing, technology, and strategic planning. Our team of experienced consultants has a track record of success in helping businesses improve their bottom line and achieve long-term success. </p>
         
          </motion.div>
         </div>
        </div>
        </div>




         <div className='block sm:hidden'>
         <motion.h1
         initial={"offscreen"}
         whileInView={"onscreen"}
         viewport={{once:false}}
         variants={animates}
         className='font-poppins mb-0  sm:mb-4  text-[1.4rem] text-center font-bold text-[#159EEC] pt-12'>About Us</motion.h1>
         <div className=' flex items-center justify-center'>
    
         
         <div className='flex flex-col'>
       
         <motion.img
         initial={"offscreen"}
         whileInView={"onscreen"}
         viewport={{once:false, amount:0.3}}
         variants={image}
         className='w-[20rem] mx-auto my- h-[20rem] index-50' src={man} alt="" />
       
       
        <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false}}
        variants={animates}
        >
            <p className='font-poppins mb-2 px-[1rem] w-[19rem] text-[0.8rem] pb-[4rem]'>At Autom-Mon integrated Corp, we're dedicated to helping businesses of all sizes and industries achieve their goals and reach their full potential. We provide expert consulting services in a wide range of areas, including operations management, marketing, technology, and strategic planning. Our team of experienced consultants has a track record of success in helping businesses improve their bottom line and achieve long-term success.</p>  
        </motion.div>
         </div>
        
        </div>
         </div>
    </div>
  )
}

export default Aboutwe