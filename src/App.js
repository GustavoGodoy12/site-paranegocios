import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
