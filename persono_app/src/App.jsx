import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import WhatWeDo from './components/WhatWeDo';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import PillowFeatures from './components/PillowFeatures';
import TrackerFeatures from './components/TrackerFeatures';
import AppFeatures from './components/AppFeatures';
import Unique from './components/Unique';
import Interlude from './components/Interlude';

function App() {
  return (
    <div>
      <Navbar />,
      <CallToAction />,
      <PillowFeatures />,
      <Interlude />,
      <TrackerFeatures />,
      <AppFeatures />,
      <Unique />,
      <WhatWeDo />,
      <DownloadApp />,
      <Footer />
    </div>
  );
}

export default App;