import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useAnimation, motion } from "framer-motion";
import cc from "../../assets/cc.png"

 
function Icon({ id, open }) {

 
   

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Faq() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


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
   <div className="mt-[5rem] mb-[7rem] ">
     <Fragment>

     <motion.h1 
     initial={"offscreen"}
     whileInView={"onscreen"}
     variants={text}
     className='font-poppins mb-[2.5rem] text-[1.2rem]  sm:text-[1.7rem] text-center  font-bold text-[#159EEC]'>Frequently Asked Questions</motion.h1>

        <div className="flex items-center justify-center">
        <div className="sm:w-[80vw]  w-[85vw]">

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <motion.div >
            <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="flex items-center gap-3">
                <img className="w-3  sm:w-4" src={cc} alt="" />
                <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins"> What services does Autom-Man Integrated Corp provide?</h3>
            </div>
            </AccordionHeader>
            </motion.div>
            <AccordionBody>
            Autom-Man Integrated Corp specializes in strategic planning, financial assistance, operations management, marketing and branding, and technology solutions. We offer comprehensive business consultancy services to help businesses achieve their goals.
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            
            <motion.div initial={"offscreen"}
             whileInView={"onscreen"}
             variants={animates}>
            <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="flex items-center gap-3">
                <img className="w-1 sm:w-4" src={cc} alt="" />
                <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins">  How can Autom-Man Integrated Corp help my business grow?</h3>
            </div>
            </AccordionHeader>
            </motion.div>
            <AccordionBody>
            We can help your business grow by providing customized solutions that address your specific needs. We work closely with you to understand your goals and develop a strategy that will help you achieve them.
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
               <motion.div 
              initial={"offscreen"}
             whileInView={"onscreen"}
             variants={animates}>
               <AccordionHeader onClick={() => handleOpen(3)}>
                <div className="flex items-center gap-3">
                    <img className="w-3  sm:w-4" src={cc} alt="" />
                    <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins"> What makes Autom-Man Integrated Corp different from other business consultancy firms?</h3>
                </div>
                </AccordionHeader>
               </motion.div>
                <AccordionBody>
                We have a team of experienced consultants who have worked in various industries and have a deep understanding of business operations. We take a collaborative approach with our clients, working closely with them to understand their unique challenges and develop solutions that work for them.
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
           <motion.div
           initial={"offscreen"}
           whileInView={"onscreen"}
           variants={animates}
           >
           <AccordionHeader onClick={() => handleOpen(4)}>
            <div className="flex items-center gap-3">
                <img className="w-3  sm:w-4" src={cc} alt="" />
                <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins"> How do I get started with Autom-Man Integrated Corp?</h3>
            </div>
            </AccordionHeader>
           </motion.div>


            <AccordionBody>
            To get started with Autom-Man Integrated Corp, simply contact us through our website or give us a call. We will set up a consultation to discuss your needs and determine how we can help.
            </AccordionBody>
        </Accordion>


                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                 <motion.div
                 initial={"offscreen"}
                 whileInView={"onscreen"}
                 variants={animates}>
                 <AccordionHeader onClick={() => handleOpen(5)}>
                <div className="flex items-center gap-3">
                    <img className="w-3  sm:w-4" src={cc} alt="" />
                    <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins"> How long does it take to see results from Autom-Man Integrated Corp's services?</h3>
                </div>
                </AccordionHeader>
                 </motion.div>
                <AccordionBody>
                The timeline for seeing results varies depending on the scope of the project and your specific needs. Our team will work with you to set realistic expectations and develop a timeline that works for you.
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
               <motion.div
               initial={"offscreen"}
               whileInView={"onscreen"}
               variants={animates}>
               <AccordionHeader onClick={() => handleOpen(6)}>
                <div className="flex items-center gap-3">
                    <img className="w-3  sm:w-4" src={cc} alt="" />
                    <h3 className="text-[0.8rem] sm:[1.4rem] font-poppins"> How much does Autom-Man Integrated Corp's services cost?</h3>
                </div>
                </AccordionHeader>
               </motion.div>
                <AccordionBody>
                The cost of our services varies depending on the scope of the project and the services you require. We offer customized solutions that are tailored to your needs, and our pricing is competitive and transparent. We will provide you with a detailed proposal outlining the costs involved before starting any work.
                </AccordionBody>
        </Accordion>

        </div>
        </div>
 </Fragment>
   </div>
  );
}