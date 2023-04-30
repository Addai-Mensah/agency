import React from 'react'
import top from "../../assets/topbg.png"
import happy from "../../assets/happy.png"
import Carousels from '../common/carousel.jsx'

function Otherbusiness() {
  return (

    <div className='bg-[#1F2B6C] z-40 h-[80vh]'>
      <div className='   bg-no-repeat z-0 w-[100vw] h-[13rem] flex items-center justify-center '  style={{backgroundImage: `url(${top})`}}>  
         <div >
            <div className='flex items-center justify-center gap-40 pt-[30rem]'>
                <div>
                <img className='w-[15rem] ' src={happy} alt="" />
                </div>

                <div className=' '>
                    <Carousels/>
                </div>
            </div>
         </div>
      </div>
            
    </div>
    
    
  )
}

export default Otherbusiness