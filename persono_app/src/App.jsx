import React, { useState } from 'react';
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
import Modal from './components/Modal'; 

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  
  const toggleWaitlist = () => {
    setIsWaitlistOpen(!isWaitlistOpen);
  };

  return (
    <Router>
      <div>
        <Navbar toggleWaitlist={toggleWaitlist} />
        <Routes>
          <Route path="/" element={
            <>
              <CallToAction />
              <PillowFeatures />
              <TrackerFeatures />
              <AppFeatures />
              <Interlude />
              <Unique />
              <Interlude2 />
              <Steps />
              <MoreInfo />
              <Footer />
            </>
          } />
        </Routes>
        <Modal isOpen={isWaitlistOpen} onClose={toggleWaitlist}>
          <Waitlist onClose={toggleWaitlist} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
