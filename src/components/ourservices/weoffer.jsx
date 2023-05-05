import React from 'react'
import frame1 from "../../assets/Frame1.png"
import frame2 from "../../assets/Frame2.png"
import frame3 from "../../assets/Frame3.png"
import frame4 from "../../assets/Frame4.png"
import frame5 from "../../assets/Frame5.png"
import frame6 from "../../assets/download.jpeg"
import { useAnimation, motion } from "framer-motion";

function Weoffer() {

    
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
    <div className='bg-[#DDE9FF]'>
        <div className='pt-[4rem] pb-[2rem]'>

<div className='flex items-center justify-center mb-[3rem]'>
    <motion.div
    initial={"offscreen"}
    whileInView={"onscreen"}
    variants={animates}
    >
    <h1 className='text-center text-[#159EEC] font-bold font-poppins text-[1.5rem] leading-1'>What We Offer</h1>
    <p className='text-[0.9rem] font-poppins '>Our consulting services cover a wide range of areas.</p>
    </motion.div>
</div>



<div className='hidden sm:block'>
<motion.div
 initial={"offscreen"}
 whileInView={"onscreen"}
 variants={animates}
className='flex items-center justify-center gap-10 '>

    <div className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem]'>
    <div className=' flex items-center justify-center rounded mb-2'>
    <div className=''>
    <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame1} alt="" />
        <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Marketing Consulting</h5>
        <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our marketing consulting services are designed to help businesses attract new customers, increase brand awareness, and drive revenue growth. We work with businesses to develop a comprehensive marketing strategy that's tailored to their unique needs and goals.</p>
    </div>
    </div>
    </div>

    <div className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem]  h-[21rem]'>
    <div className=' flex items-center justify-center rounded mb-2'>
    <div className=''>
    <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame2} alt="" />
        <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Operations Management <br /> Consulting</h5>
        <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>We work closely with businesses to identify areas for improvement, and develop customized solutions that streamline processes, reduce costs, and increase productivity. </p>
    </div>
    </div>
    </div>

    <div className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem]'>
    <div className=' flex items-center justify-center rounded mb-2'>
    <div className=''>
    <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame3} alt="" />
        <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Strategic Planning</h5>
        <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>We believe that long-term success begins with a comprehensive strategic plan. Our strategic planning services are designed to help businesses develop a roadmap for success that's aligned with their unique needs and goals.</p>
    </div>
    </div>
    </div>

    </motion.div>



    <motion.div
     initial={"offscreen"}
     whileInView={"onscreen"}
     variants={animates}
    className='hidden sm:block mt-10'>
    <div className='flex items-center justify-center gap-10 '>  
    <div className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem]'>
    <div className=' flex items-center justify-center rounded mb-2'>
    <div className=''>
    <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame4} alt="" />
        <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Financial analysis</h5>
        <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our financial analysis services are designed to help businesses gain a deeper understanding of their financial performance and identify areas for improvement. by analyze their financial statements, identify key performance indicators.</p>
    </div>
    </div>
    </div>


    <div className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem]'>
    <div className=' flex items-center justify-center rounded mb-2'>
    <div className=''>
    <img className='mx-auto w-[7rem] h-[8rem] rounded-tl-[0.5rem]  mt-[2rem]' src={frame6} alt="" />
        <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Procurement Solutions</h5>
        <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our procurement solution streamlines your purchasing process, saving you time and money. We offer customized solutions tailored to your specific needs.</p>
    </div>
    </div>
    </div>

    </div>
    </motion.div>
</div>





    <div className='flex items-center justify-center sm:hidden '>
        <div>
        
    <motion.div
    
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.3}}
    variants={animates}
    
     className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem] mb-4'>
        <div className=' flex items-center justify-center rounded mb-2'>
            <div className=''>
               <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame1} alt="" />
                <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Marketing Consulting</h5>
                <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our marketing consulting services are designed to help businesses attract new customers, increase brand awareness, and drive revenue growth. We work with businesses to develop a comprehensive marketing strategy that's tailored to their unique needs and goals.</p>
            </div>
        </div>
    </motion.div>

    <motion.div
    
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.3}}
    variants={animates}

     className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem]  h-[21rem] mb-4'>
        <div className=' flex items-center justify-center rounded mb-2'>
            <div className=''>
                <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame2} alt="" />
                <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Operations Management <br /> Consulting</h5>
                <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>We work closely with businesses to identify areas for improvement, and develop customized solutions that streamline processes, reduce costs, and increase productivity. </p>
            </div>
        </div>
    </motion.div>

    <motion.div
    
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.3}}
    variants={animates}

    className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[21rem] mb-4'>
        <div className=' flex items-center justify-center rounded mb-2'>
            <div className=''>
                <img className='mx-auto w-[7rem]  mt-[2rem]' src={frame3} alt="" />
                <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Strategic Planning</h5>
                <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>We believe that long-term success begins with a comprehensive strategic plan. Our strategic planning services are designed to help businesses develop a roadmap for success that's aligned with their unique needs and goals.</p>
            </div>
        </div>
    </motion.div>


    <motion.div
    
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.3}}
    variants={animates}
    
    className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[20rem] mb-4'>
            <div className=' flex items-center justify-center rounded mb-2'>
                <div className=''>
                   <img className='mx-auto mt-[2rem] w-[7rem]' src={frame4} alt="" />
                    <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Financial analysis</h5>
                    <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our financial analysis services are designed to help businesses gain a deeper understanding of their financial performance and identify areas for improvement. by analyze their financial statements, identify key performance indicators.</p>
                </div>
            </div>
    </motion.div>

    <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.3}}
        variants={animates}
        className='bg-[white] rounded-tl-[2rem] border-[1px] w-[14rem] h-[20rem] mb-4'>
            <div className=' flex items-center justify-center rounded mb-2'>
                <div className=''>
                   <img className='mx-auto mt-[2rem] w-[7rem]' src={frame6} alt="" />
                    <h5 className='text-center font-poppins  font-bold text-[1rem] my-2'>Procurement Solutions</h5>
                    <p className='text-[0.7rem] text-center font-poppins w-[12rem]'>Our procurement solution streamlines your purchasing process, saving you time and money. We offer customized solutions tailored to your specific needs.</p>
                </div>
            </div>
    </motion.div>

    
        </div>
    </div>


</div>
    </div>
  )
}

export default Weoffer