import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import WhatWeDo from './components/WhatWeDo';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />,
      <CallToAction />,
      <WhatWeDo />,
      <DownloadApp />,
      <Footer />
    </div>
  );
}

export default App;