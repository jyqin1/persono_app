import React from 'react';
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

function App() {
  return (
    <div>
      <Navbar />,
      <CallToAction />,
      <PillowFeatures />,
      <Interlude />,
      <TrackerFeatures />,
      <AppFeatures />,
      <Steps />,
      <Interlude2 />,
      <Unique />,
      <MoreInfo />,
      <Footer />,
    </div>
  );
}

export default App;