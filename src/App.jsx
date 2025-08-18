import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/Services';
import WhoWeAre from './components/WhoWeAre';
import ReqCallBack from './components/ReqCallBack';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import DiscoverProperties from './components/DiscoverProperties';
import Clients from './components/Clients';
import TarcIshva from './components/Property/TarcIshva';
import GodrejAstra from './components/Property/GodrejAstra';
import TulipMonsella from './components/Property/TulipMonsella';
import AiplAutograph from './components/Property/AiplAutograph';
import DLFPrivanaNorth from './components/Property/DLFPriveNorth';
import { Helmet } from 'react-helmet';
import WelcomeModal from './components/WelcomeModal';

function App() {
  return (
    <>
    <Helmet>
        <title>White Luxe Real Estate - Discover Luxury Living in Gurgaon</title>
        <meta
          name="description"
          content="Explore premium residential, commercial, and retail properties in Gurugram with White Luxe — your trusted real estate consultancy."
        />
        <meta
          name="keywords"
          content="White Luxe, real estate Gurgaon, luxury homes, commercial property, retail leasing, property investment"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="White Luxe Real Estate" />
        <link rel="canonical" href="https://www.whiteluxe.com" />
      </Helmet>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomeModal/>
              <HeroSection />
              <DiscoverProperties />
              <Services />
              <ReqCallBack />
              <WhoWeAre />
              <Clients />
              <FAQSection />
            </>
          }
        />
       
        <Route path="/properties/Tarc-Ishva" element= {<TarcIshva/>} />
       <Route path="/properties/Godrej-Astra" element= {<GodrejAstra/>} />
       <Route path="/properties/Tulip-Monsella" element= {<TulipMonsella/>}/>
       <Route path="/properties/Aipl-Autograph" element= {<AiplAutograph/>}/>
       <Route path="/properties/DLF-Privana-North" element= {<DLFPrivanaNorth/>}/>
      </Routes>
      <Footer />
    </Router>
    </>

  );
}

export default App;
