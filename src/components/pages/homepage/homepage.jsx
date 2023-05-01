import React from 'react'
import Hero from '../../home/hero'
import Offer from '../../home/offer'
import Services from '../../home/services'
import Otherbusiness from '../../common/otherbusiness'
import Faq from '../../common/faq'
import Footer from '../../common/footer'

function Homepage() {
  return (
    <div>
        <Hero/>
         <Offer/>
         <Services/>
         <Otherbusiness/>
         <Faq/>
         <Footer/>
    </div>
  )
}

export default Homepage