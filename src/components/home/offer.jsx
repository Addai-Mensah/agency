import React from 'react'
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"

function Offer() {
  return (
    <div className='mt-[4rem]'>

        <div className='flex items-center justify-center mb-[3rem]'>
            <div>
            <h1 className='text-center text-[#159EEC] font-bold font-poppins text-[1.5rem] leading-1'>What We Offer</h1>
            <p className='text-[0.9rem] font-poppins '>Our consulting services cover a wide range of areas.</p>
            </div>
        </div>



        <div className='hidden sm:block'>
        <div className='flex items-center justify-center gap-10 '>

            <div className='bg-[#BFD2F8] w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Strategic planning</h5>
                <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you   analyze your company's financial data  to identify areas for improvement and develop strategies to improve profitability and cash flow.</p>
            </div>
            </div>

            <div className='bg-[#BFD2F8] w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon2} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Financial analysis</h5>
                <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you  analyze your company's financial data  to identify areas for improvment and  development strategies to improve profitability and cash flow</p>
            </div>
            </div>

            <div className='bg-[#BFD2F8] w-[19rem] h-[16rem] flex items-center justify-center rounded mb-10'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon3} alt="" />
            <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Operations management</h5>
            <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>We can help you streamline your  operations and improve efficiency,  reducing costs and increasing  productivity.</p>
            
            </div>
            </div>

            </div>
        </div>

        <div className='hidden sm:block'>
                <div   className=' flex items-center justify-center flex-row gap-10'>
                <div className='bg-[#BFD2F8] w-[19rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Marketing and branding</h5>
                        <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our marketing experts can help you  develop effective marketing  strategies that increase brand awareness and drive revenue growth.</p>
                    </div>
                </div>
                <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Technology solutions</h5>
                        <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>We can help you leverage the latest  technology to improve your business processes and gain a competitive edge.</p>
                    </div>
                </div>
            </div>
            </div>





            <div className='flex items-center justify-center sm:hidden '>
                <div>
                


                <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
                <div className=''>
                <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                    <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Strategic planning</h5>
                    <p className='text-[0.8rem] text-center font-poppins w-[15rem]'>Our financial experts can help you   analyze your company's financial data  to identify areas for improvement and develop strategies to improve profitability and cash flow.</p>
                </div>
            </div>


            <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon2} alt="" />
                <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Financial analysis</h5>
                <p className='text-[0.8rem] text-center font-poppins'>Our financial experts can help you <br /> analyze your company's financial data <br /> to identify areas for improvment and <br /> development strategies to improve <br />profitability and cash flow</p>
            </div>
            </div>

            <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
            <div className=''>
            <img className='mx-auto w-[4rem]' src={icon3} alt="" />
            <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Operations management</h5>
            <p className='text-[0.8rem] text-center font-poppins'>We can help you streamline your <br /> operations and improve efficiency, <br /> reducing costs and increasing <br /> productivity.</p>  
            </div>
            </div>

            <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-5'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Marketing and branding</h5>
                        <p className='text-[0.8rem] text-center font-poppins'>Our marketing experts can help you <br /> develop effective marketing <br /> strategies that increase brand <br />awareness and drive revenue growth.</p>
                    </div>
                </div>
                <div className='bg-[#BFD2F8] w-[16rem] h-[16rem] flex items-center justify-center rounded mb-20'>
                    <div className=''>
                        <img className='mx-auto w-[4rem]' src={icon1} alt="" />
                        <h5 className='text-center font-poppins text-[#1F2B6C] font-bold text-[1rem] my-2'>Technology solutions</h5>
                        <p className='text-[0.8rem] text-center font-poppins'>We can help you leverage the latest <br /> technology to improve your business <br />processes and gain a competitive edge.</p>
                    </div>
                </div>

                </div>
            </div>


    </div>
  )
}

export default Offer