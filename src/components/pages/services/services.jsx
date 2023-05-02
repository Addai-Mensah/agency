import React from 'react'
import Nav from '../../common/nav'
import Servicehero from '../../ourservices/servicehero'
import Serviceservice from '../../ourservices/serviceservice'
import Weoffer from '../../ourservices/weoffer'
import Ouroffer from '../../common/ouroffer'
import Otherbusiness from '../../common/otherbusiness'
import Faq from '../../common/faq'
import Footer from '../../common/footer'

function Services() {
  return (
    <div>
      <Nav/>
      <Servicehero/>
      <Serviceservice/>
      <Weoffer/>
      <Ouroffer/>
      <Faq/>
      <Footer/>


    </div>
  )
}

export default Services