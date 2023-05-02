import React from 'react'
import Nav from '../../common/nav'
import Abouthero from '../../aboutUs/abouthero'
import Aboutwe from '../../aboutUs/aboutwe'
import Approach from '../../aboutUs/approach'
import Ouroffer from '../../common/ouroffer'
import Otherbusiness from '../../common/otherbusiness'
import Faq from '../../common/faq'
import Footer from '../../common/footer'

function About() {
  return (
    <div>
        <Nav/>
        <Abouthero/>
        <Aboutwe/>
        <Approach/>
        <Ouroffer/>
        <Otherbusiness/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default About