import React from 'react'
import top from "../../assets/topbg.png"
import happy from "../../assets/happy.png"
import Carousels from '../common/carousel.jsx'

function Otherbusiness() {
  return (

    <div className='bg-[#1F2B6C] z-40  mt-[0.1rem] flex items-center justify-center'>
     
        
            <div className='flex items-center justify-center '>
                <div className='mt-[5rem]'>
                <img className='sm:w-[15rem] w-[10rem]' src={happy} alt="" />
                </div>

                <div className=' '>
                    <Carousels/>
                </div>
           </div>         
      </div>
    
    
  )
}

export default Otherbusiness