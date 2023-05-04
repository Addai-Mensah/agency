import React from 'react'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  export default function ContactForm() {
    return (
   <div className='sm:ml-[10rem] '>
       <Card color="transparent" shadow={false}>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
          <label className='mb-[-1.5rem] text-[0.8rem] font-bold' htmlFor="">Full Name</label>
            <Input size="lg" label="Enter Full Name" />
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Company Name</label>
            <Input size="lg" label="Enter Company Name" />
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Email</label>
            <Input size="lg" label="Enter Email" />
            <label className='mb-[-1.5rem] font-bold text-[0.8rem]' htmlFor="">Phone Number</label>
            <Input size="lg" label="Enter Phone Number" />
            <label className='mb-[-1.5rem]  font-bold text-[0.8rem]' htmlFor="">Country</label>
            <Input size="lg" label="Enter Country" />
            <label className='mb-[-1.5rem] font-poppins font-bold text-[0.8rem]' htmlFor="">Your Message</label>
            <Textarea className='h-[22rem]' size="lg" label="Enter your Message" />
            
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
             
           
        
          <Button className="mt-6" fullWidth>
            Contact Us
          </Button>
        </form>
      </Card>
   </div>
    );
  }