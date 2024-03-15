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
import Modal from './components/Modal'; // Your generic Modal component

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Function to toggle the Waitlist modal
  const toggleWaitlist = () => {
    setIsWaitlistOpen(!isWaitlistOpen);
  };

  return (
    <Router>
      <div>
        {/* Pass toggleWaitlist to Navbar */}
        <Navbar toggleWaitlist={toggleWaitlist} />
        <Routes>
          <Route path="/" element={
            <>
              <CallToAction />
              <PillowFeatures />
              <TrackerFeatures />
              <AppFeatures />
              <Unique />
              <Interlude />
              <Interlude2 />
              <Steps />
              <MoreInfo />
              <Footer />
            </>
          } />
          {/* No need for a separate Waitlist route since it's a modal now */}
        </Routes>
        {/* Modal for the Waitlist */}
        <Modal isOpen={isWaitlistOpen} onClose={toggleWaitlist}>
          <Waitlist onClose={toggleWaitlist} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
