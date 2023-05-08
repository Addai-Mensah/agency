import React from 'react'
import { useEffect } from 'react'
import Nav from '../common/nav'
import { Link } from 'react-router-dom'
import rectangle1 from "../../assets/groups.png"
import rectangle2 from "../../assets/rec.png"
import { useAnimation, motion } from "framer-motion";

 


function Hero() {
  
  const animates = {
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
    <Nav/>

    <div className='relative  hidden sm:block'>
            <div className='bg-no-repeat bg-cover h-[70vh] sm:h-auto' style={{backgroundImage: `url(${rectangle2})`}}>
                <div className='bg-no-repeat bg-cover h-[70vh] sm:h-auto ' style={{backgroundImage: `url(${rectangle1})`}}>
                    
                    <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:0.3}}
                    variants={animates}

                    className='sm:pt-[9rem] bannerMain sm:pl-[10rem]'>
                       <h1 className='text-white font-bold sm:text-[2.5rem] k break-keep mb-4 sm:mb-6 leading-10'>Improve Your <span className='text-[#1F2B6C]'> Business</span> <br /> With <span className='text-[#1F2B6C]'>Expert Consulting</span> <br />Services</h1>
                        <p className='text-white k '>We understand that every business has its own set of challenges <br /> and opportunities. That's why we offer tailored consulting <br /> servicws that are designed to meet the unique needs of your <br /> business. Wheather you're just startingout or looking to take your <br /> company to the next level, our experienced consultants can help <br /> you achieve your goals and improve your bottom line.</p>
                        <div className='mx-[6rem] mt-4'>
                       <Link to="/contact"><button className='text-white w-[10rem] h-[2rem] bg-[#1F2B6C] mb-[12rem]'>Get started</button></Link> 
                        </div> 
                    </motion.div>
                      
                </div>
            </div>        
    </div>



    <div className=' sm:hidden'>
            <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[90vh] first-line:' style={{backgroundImage: `url(${rectangle2})`}}>
                <div className='bg-no-repeat bg-cover h-[80vh] sm:h-[90vh] bg-opacity-50' style={{backgroundImage: `url(${rectangle1})`}}>
                    <div className='pt-[2.5rem]'>
                    
                    <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:0.3}}
                    variants={animates}
                    className=''>

                    <h1 className='text-white text-center font-bold text-[1.5rem] sm:text-[3.5rem] font-poppins k mb-6'>Improve Your <span className='text-[#1F2B6C] leading-6'> Business</span> With  <br  />  <span className='text-[#1F2B6C] flex items-center justify-center leading-6'>Expert Consulting</span> <br /><span className='flex items-center justify-center mt-[-2rem]'>Services</span></h1>
                      
                      <div className='flex items-center justify-center'>
                      <p className='text-white font-poppins px-5 text-[0.94rem] k'>we understand that every business has its own set of challenges  and opportunities. That's why we offer tailored consulting servicws that are designed to meet the unique needs of your <br /> business. Wheather you're just startingout or looking to take your company to the next level, our experienced consultants can help you achieve your goals and improve your bottom line.</p>
                      </div>
                      
                      
                      <div className='mb-[10rem]'>
                      <Link className="no-underline" to="/contact"><div className='mx-[6rem] mt-4'>
                              <button className='text-white w-[10rem] h-[2rem]  bg-[#1F2B6C]'>Get started</button>
                    </div></Link>
                      </div>
                     
                     </motion.div>
                  
                    </div>
                    
                </div>
            </div>        
    </div>

    </div>
  )
}

export default Hero