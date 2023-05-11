import React,{useEffect, useRef} from 'react'
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import { useAnimation, motion } from "framer-motion";






function Offer() {
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
        y:20,
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
   
      
  return (
    <div  className='mt-[4rem] sm:mt-[4rem]'>

        <div  className='flex items-center justify-center mb-[3rem]'>
            <div
            
            className=' '>
            <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={text} className='text-center    text-[#159EEC] font-bold font-poppins  text-[1.5rem]'>What We Offer</motion.h1>
            <motion.p
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={animates} className='text-[0.9rem]   font-poppins k  '>Our consulting services cover a wide range of areas.</motion.p>
            </div>
        </div>



        <div className='hidden sm:block'>
        <div  className='flex items-center  justify-center gap-10 '>

            <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.3}}
            variants={animates}
            className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Strategic planning</h5>
                <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you   analyze your company's financial data  to identify areas for improvement and develop strategies to improve profitability and cash flow.</p>
            </div>
            </motion.div>

            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.3}}
            variants={animates}
            className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon2} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Financial analysis</h5>
                <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you  analyze your company's financial data  to identify areas for improvment and  development strategies to improve profitability and cash flow</p>
            </div>
            </motion.div>

            <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.3}}
            variants={animates}
            className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon3} alt="" />
            <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Operations management</h5>
            <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>We can help you streamline your  operations and improve efficiency,  reducing costs and increasing  productivity.</p>
            
            </div>
            </motion.div>

            </div>
        </div>

        <div className='hidden sm:block'>
                <div   className=' flex items-center justify-center flex-row gap-10'>
                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:0.3}}
                variants={animates}
                className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Marketing and branding</h5>
                        <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our marketing experts can help you  develop effective marketing  strategies that increase brand awareness and drive revenue growth.</p>
                    </div>
                </motion.div>

                

                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:0.3}}
                variants={animates}
                className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Technology solutions</h5>
                        <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>We can help you leverage the latest  technology to improve your business processes and gain a competitive edge.</p>
                    </div>
                </motion.div>

                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:0.3}}
                variants={animates}
                className='bg-[#BFD2F8]  w-[19rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Procurement solutions</h5>
                        <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>We Streamline your purchasing process, saving you time and money. We offer customized solutions tailored to your needs.</p>
                    </div>
                </motion.div>
            </div>
            </div>

            





            <div className='flex items-center justify-center sm:hidden '>
                <div>
                


                <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.3}}
            variants={animates} className='bg-[#BFD2F8]   w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>

                <motion.div
                 initial={"offscreen"}
                 whileInView={"onscreen"}
                 variants={text}  className=''>
                <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                    <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Strategic planning</h5>
                    <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you   analyze your company's financial data  to identify areas for improvement and develop strategies to improve profitability and cash flow.</p>
                </motion.div>
            </motion.div>


            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={animates}
            viewport={{once:false, amount:0.3}}
            className='bg-[#BFD2F8]   w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
            <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={text}
            className=''>
            <img className='mx-auto w-[4rem]' src={icon2} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Financial analysis</h5>
                <p className='text-[0.8rem] text-center font-poppins'>Our financial experts can help you <br /> analyze your company's financial data <br /> to identify areas for improvment and <br /> development strategies to improve <br />profitability and cash flow</p>
            </motion.div>
            </motion.div>

            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={animates}
            viewport={{once:false, amount:0.3}}
            className='bg-[#BFD2F8]   w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
            <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={text}
            className=''>
            <img className='mx-auto w-[4rem]' src={icon3} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Procurement Solutions</h5>
                <p className='text-[0.8rem] text-center w-[13rem] font-poppins'>We Streamline your purchasing process, saving you time and money. We offer customized solutions tailored to your needs.</p>
            </motion.div>
            </motion.div>

            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={animates}
            viewport={{once:false, amount:0.3}}
            className='bg-[#BFD2F8]   w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
            <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={text}
            className=''>
            <img className='mx-auto w-[4rem]' src={icon3} alt="" />
            <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Operations management</h5>
            <p className='text-[0.8rem] text-center font-poppins'>We can help you streamline your <br /> operations and improve efficiency, <br /> reducing costs and increasing <br /> productivity.</p>  
            </motion.div>
            </motion.div>

            <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={animates}
            viewport={{once:false, amount:0.3}}

            className='bg-[#BFD2F8]   w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
                    <motion.div 
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={text}
                    className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Marketing and branding</h5>
                        <p className='text-[0.8rem] text-center font-poppins'>Our marketing experts can help you <br /> develop effective marketing <br /> strategies that increase brand <br />awareness and drive revenue growth.</p>
                    </motion.div>
                </motion.div>

                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={animates}
                viewport={{once:false, amount:0.3}}
                className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    
                    <motion.div 
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={text} 
                    className=''>
                        <img className='mx-auto w-[4rem]' src={icon2} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Technology solutions</h5>
                        <p className='text-[0.8rem] text-center font-poppins'>We can help you leverage the latest <br /> technology to improve your business <br />processes and gain a competitive edge.</p>
                    </motion.div>
                </motion.div>

                </div>
            </div>


    </div>
  )
}

export default Offer