import React from 'react'
import bg from "../../assets/abtbg.png"
import bg2 from "../../assets/abtbg2.png"
import { useAnimation, motion } from "framer-motion";

function Abouthero() {

    const animates = {
        offscreen:{
            x:100,
            opacity:0
        },
    
        onscreen:{
            x:0,
            opacity:1,
            transition:{
                type:"spring",
               
                duration:2}
        }   
     }

     const animated = {
        offscreen:{
            x:-100,
            opacity:0
        },
    
        onscreen:{
            x:0,
            opacity:1,
            transition:{
                type:"spring",
               
                duration:2}
        }   
     }



  return (
    <div>

        <div
       
         className='relative  hidden sm:block'>
                    <div className='bg-no-repeat bg-cover h-[70vh] sm:h-[90vh]' style={{backgroundImage: `url(${bg})`}}>
                        <div className='bg-no-repeat bg-cover h-[70vh] sm:h-[90vh] flex items-center justify-end' style={{backgroundImage: `url(${bg2})`}}>
                            <div className='sm:pt-[-5rem] sm:pr-[10rem]'>
                            
                        
                            <motion.h1
                             initial={"offscreen"}
                             whileInView={"onscreen"}
                             viewport={{once:false, amount:0.3}}
                             variants={animates}
                            className='text-white font-bold sm:text-[2.5rem] font-poppins mb-4 sm:mb-6 leading-10'>Businesses <span className='text-[#159EEC]'> Thrive</span> <br /> <span className='text-[#159EEC]'>Through</span> Expert</motion.h1>
                                
                            
                            </div>
                            
                        </div>
                    </div>        
            </div>



            <div className=' sm:hidden'>
                    <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[80vh] first-line:' style={{backgroundImage: `url(${bg})`}}>
                        <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[70vh] bg-opacity-50' style={{backgroundImage: `url(${bg2})`}}>
                            <div className='pt-[5rem]'>
                            <div className='flex items-center justify-center'>

                            <motion.h1
                             initial={"offscreen"}
                             whileInView={"onscreen"}
                             viewport={{once:false, amount:0.3}}
                             variants={animated}
                            className='text-white font-bold text-[1.9rem] pt-[6rem] font-poppins mb-4 sm:mb-6 leading-7'>Businesses <span className='text-[#159EEC]'> Thrive</span> <br /> <span className='text-[#159EEC]'>Through</span> Expert</motion.h1>
                                
                               
                            </div>
                            </div>
                            
                        </div>
                    </div>        
            </div>

    </div>
  )
}

export default Abouthero