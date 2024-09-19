import React from 'react';
import BoxRevealDemo from '../Components/BoxReveal/BoxReveal'; 
import '../Styles/Home.css';
import ReverseContent from '../Components/ReverseContent';
import HeroSection from '../Components/HeroSection';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div> 
      <div className="content-overlay">
        <BoxRevealDemo />
        <div style={{ marginTop: '7rem' }}>
          <ReverseContent />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};
