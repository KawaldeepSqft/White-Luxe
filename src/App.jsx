import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';

import HeroSection from './components/HeroSection';
import DiscoverProperties from './components/DiscoverProperties';
import Services from './components/Services';
import ReqCallBack from './components/ReqCallBack';
import WhoWeAre from './components/WhoWeAre';
import Clients from './components/Clients';
import FAQSection from './components/FAQSection';

import TarcIshva from './components/Property/TarcIshva';
import GodrejAstra from './components/Property/GodrejAstra';
import TulipMonsella from './components/Property/TulipMonsella';
import AiplAutograph from './components/Property/AiplAutograph';
import DLFPrivanaNorth from './components/Property/DLFPriveNorth';

// Separate policy pages
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalDisclaimer from './components/LegalDisclaimer';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>
          White Luxe Real Estate | Luxury Property Consultants in Gurgaon
        </title>
        <meta
          name="description"
          content="White Luxe Real Estate is a trusted luxury property consultant in Gurgaon offering premium residential, commercial & investment properties with transparent advisory."
        />
        <meta
          name="keywords"
          content="White Luxe Real Estate, luxury real estate Gurgaon, property consultants Gurgaon, luxury apartments Gurgaon, commercial property Gurgaon, real estate advisors"
        />
        <link rel="canonical" href="https://www.whiteluxerealestate.com/" />
        <meta
          property="og:title"
          content="White Luxe Real Estate | Trusted Luxury Property Advisors"
        />
        <meta
          property="og:description"
          content="Discover premium residential & commercial properties in Gurgaon with White Luxe Real Estate. Ethical advisory. Transparent deals."
        />
        <meta
          property="og:image"
          content="https://www.whiteluxerealestate.com/img/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.whiteluxerealestate.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="White Luxe Real Estate | Luxury Property Consultants"
        />
        <meta
          name="twitter:description"
          content="Expert real estate consultancy in Gurgaon for luxury homes, commercial spaces & investments."
        />
        <meta
          name="twitter:image"
          content="https://www.whiteluxerealestate.com/img/logo.png"
        />
      </Helmet>

      <Router>
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <WelcomeModal />
                <div id="home">
                  <HeroSection />
                </div>
                <div id="discover">
                  <DiscoverProperties />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="reqCallBack">
                  <ReqCallBack />
                </div>
                <div id="whoWeAre">
                  <WhoWeAre />
                </div>
                <div id="clients">
                  <Clients />
                </div>
                <div id="faq">
                  <FAQSection />
                </div>
              </>
            }
          />

          {/* PROPERTY ROUTES */}
          <Route path="/properties/Tarc-Ishva" element={<TarcIshva />} />
          <Route path="/properties/Godrej-Astra" element={<GodrejAstra />} />
          <Route path="/properties/Tulip-Monsella" element={<TulipMonsella />} />
          <Route path="/properties/Aipl-Autograph" element={<AiplAutograph />} />
          <Route path="/properties/DLF-Privana-North" element={<DLFPrivanaNorth />} />

          {/* LEGAL PAGES */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        </Routes>

        <div id="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
