import React from 'react'
import './App.css'
import Services from './components/Services'
import WhoWeAre from './components/WhoWeAre'
import ReqCallBack from './components/ReqCallBack'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import HeroSection from './components/HeroSection'
import DiscoverProperties from './components/DiscoverProperties'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <DiscoverProperties/>
     <Services/>
     <ReqCallBack/>
     <WhoWeAre/>
     <FAQSection/>
     <Footer/>
    </>
  )
}
export default App
