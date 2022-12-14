import React from 'react'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../organisms/navbar/Navbar'
import Services from '../Services/Services'
import { MainWrapper } from './MainStyle'


const Main = () => {
  return (
    <div>
    <MainWrapper>
      <Navbar/>
      <Hero/>
    </MainWrapper>
      <Services/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Main