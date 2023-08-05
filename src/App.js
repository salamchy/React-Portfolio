import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer  from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />

    </div>
  )
}

export default App;
