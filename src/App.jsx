import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
