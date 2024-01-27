import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Enhanced Communication',
    text: 'Experience a revolution in communication. Break barriers and foster connections with enhanced clarity and understanding. From personal interactions to professional collaborations, unlock the power of seamless communication.',
  },
  {
    title: 'Empowering Productivity',
    text: 'Unlock your full potential and achieve more with less effort. Seamlessly navigate tasks, streamline workflows, and boost productivity with intuitive tools and intelligent automation. Empower yourself to accomplish your goals faster and more efficiently than ever before.',
  },
  {
    title: 'Revolutionizing Education',
    text: 'Transform the way you learn and teach. Access a wealth of knowledge, personalized insights, and interactive learning experiences tailored to your needs. Whether you’re a student, educator, or lifelong learner, embrace the future of education and unlock new realms of understanding and discovery.',
  },
  {
    title: 'Innovative Problem-Solving',
    text: 'Redefine problem-solving with innovative approaches and intelligent solutions. Harness the power of advanced algorithms and machine learning to tackle complex challenges and uncover creative solutions. From decision-making to strategic planning, revolutionize your approach and drive success.',
  },
];


const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;