import React from 'react';
import Header from './Header';
import HeroImage from './HeroImage';
import ArticlesSection from './ArticlesSection';
import TutorialsSection from './TutorialsSection';
import Footer from './Footer';
import './Main.css';

const Main = () => (
  <div className="main">
    <Header />
    <HeroImage />
    <ArticlesSection />
    <TutorialsSection />
    <Footer />
  </div>
);

export default Main;
