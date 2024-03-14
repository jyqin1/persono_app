import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import PillowFeatures from './components/PillowFeatures';
import TrackerFeatures from './components/TrackerFeatures';
import AppFeatures from './components/AppFeatures';
import Unique from './components/Unique';
import Interlude from './components/Interlude';
import Interlude2 from './components/Interlude2';
import Steps from './components/Steps';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';
import Waitlist from './components/Waitlist'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <CallToAction />
              <PillowFeatures />
              <Interlude />
              <TrackerFeatures />
              <AppFeatures />
              <Steps />
              <Interlude2 />
              <Unique />
              <MoreInfo />
              <Footer />
            </>
          } />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
