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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
            
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
