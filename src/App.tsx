import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/Intro';
import About from './components/about';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-top';
import Preloader from './components/preloader';
import Modal from 'react-modal';


Modal.setAppElement('#modal-root');

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <BackToTop />
      <Preloader />
    </React.Fragment>
  );
}

export default App;
