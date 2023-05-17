import {React, useState, useRef } from 'react'
import { useAnimation, motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  export default function ContactForm() {

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


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    if(name.length == 0 ||  email.length == 0 ||  country.length == 0 || message.length == 0 || phone.length == 0 || company.length == 0 ){
      setError(true)
    }

      else{
        emailjs.sendForm('service_k68xzlu', 'template_kqanrfo', form.current, 'HJUQ-maen7pOaJn2A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);       
      });

      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'success',
        title: 'Message has been sent',
        showConfirmButton: false,
        timer: 2500
      })
      }
 
     
  }

 
 

   
    return (
   <div className='sm:ml-[10rem] '>
       <Card color="transparent" shadow={false}>
        <motion.form ref={form}
        onSubmit={sendEmail}

         initial={"offscreen"}
         whileInView={"onscreen"}
         viewport={{once:false, amount:0.2}}
         variants={animates}        
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

          <div className="mb-1 flex flex-col gap-6">
          <label className='mb-[-1.5rem] text-[0.8rem] font-bold' htmlFor="">Full Name</label>
            <Input  size="lg" label="Enter Full Name" name='user_name' onChange={e=> setName(e.target.value)}/>
            {error && name.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Name can't be empty</span>: ""
            }
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Company Name</label>
            <Input size="lg" label="Enter Company Name" name='user_company'   onChange={e=> setCompany(e.target.value)}/>  
            {error && company.length <=0?
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Country Name can't be empty</span>: ""
            }       
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Email</label>
            <Input size="lg" label="Enter Email" name='user_email'  onChange={e=> setEmail(e.target.value)}  />
            {error && email.length <=0?
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Email can't be empty</span>: ""
            }
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Phone Number</label>
            <Input size="lg" label="Enter Phone Number" name='user_phone'  onChange={e=> setPhone(e.target.value)} />
            {error && phone.length <=0?
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Phone Number can't be empty</span>: ""
            }
            <label className='mb-[-1.5rem]  font-bold text-[0.8rem]' htmlFor="">Country</label>
            <Input size="lg" label="Enter Country" name='user_country'   onChange={e=> setCountry(e.target.value)} />
            {error && country.length <=0?
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Country can't be empty</span>: ""
            }
            <label className='mb-[-1.5rem] font-poppins font-bold text-[0.8rem]' htmlFor="">Your Message</label>
            <Textarea className='h-[22rem]' size="lg" label="Enter your Message" name='message'   onChange={e=> setMessage(e.target.value)} />
            {error && message.length <=0?
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Message can't be empty</span>: ""
            }
            
          </div>


           

                <Typography
                  variant="small"
                  color="gray"
                  className=""
                >
                 <h4 className='font-poppins font-bold font-[0.7rem'>Office Hours</h4>
                  <p className='text-[0.8rem] font-poppins'>Our office hours are 9am to 4pm. If you need to reach us outside of our regular business hours, please leave us a message and we'll get back to you as soon as possible.</p>
                  <p className='text-[0.8rem] font-poppins pt-2'>If you prefer to contact us online, you can fill out our contact form. One of our representatives will get back to you within 30 minutes to answer any questions you may have.</p>
                </Typography>
             
           
        
          <Button type='submit ' value="Send" className="mt-6" fullWidth>
            Send
          </Button>
        </motion.form>
      

      </Card>
   </div>
    );
  }