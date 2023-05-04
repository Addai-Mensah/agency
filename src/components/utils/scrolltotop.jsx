import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Scrolltotop() {

    const {location} = useLocation();

    useEffect(() => {
        window.scrollTO(0, 0)
    }, {location})
  return (
    <div>
       
    </div>
  )
}

export default Scrolltotop