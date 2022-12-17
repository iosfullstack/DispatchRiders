import React from 'react'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../organisms/navbar/Navbar'
import Service from '../Services/Service'
import { MainWrapper } from './MainStyle'


const Main = () => {
  return (
    <div>
    <MainWrapper>
      <Navbar/>
      <Hero/>
    </MainWrapper>
    <Service/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Main