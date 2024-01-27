import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Unlock the door to endless possibilities and embark on a journey of innovation and discovery. Imagine a world where boundaries dissolve, where creativity knows no limits, and where every dream is within reach. With GPT-3, the possibilities are as vast as the universe itself. From revolutionizing industries to empowering individuals, seize the opportunity to shape the future and realize the extraordinary. Dare to dream, dare to explore, and dare to unleash the power of imagination.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;