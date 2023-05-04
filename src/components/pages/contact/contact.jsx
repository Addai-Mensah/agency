import React from 'react'
import Nav from '../../common/nav'
import ContactHero from '../../contactUs/contacthero'
import Contactinpute from '../../contactUs/contactinpute'
import Ouroffer from '../../common/ouroffer'
import Otherbusiness from '../../common/otherbusiness'
import Faq from '../../common/faq'
import Footer from '../../common/footer'
function Contact() {
  return (
    <div>
      <Nav/>
      <ContactHero/>
     <Contactinpute/>
     <Ouroffer/>
     <Otherbusiness/>
     <Faq/>
     <Footer/>
     
     
    </div>
  )
}

export default Contact