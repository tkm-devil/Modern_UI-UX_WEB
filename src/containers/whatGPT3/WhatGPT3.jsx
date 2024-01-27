import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
    <Feature title="What is GPT-3" text="Explore the wonder of GPT-3, a marvel of artificial intelligence that transcends boundaries and redefines what's achievable. Seamlessly blending human-like understanding with computational prowess, GPT-3 opens doors to endless opportunities. From crafting compelling narratives to generating insightful analyses, GPT-3 empowers you to unleash your imagination and realize your boldest ideas with unparalleled precision and finesse." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Engage in seamless conversations and interactions with our AI-powered chatbots. From customer support to virtual assistants, chatbots powered by GPT-3 bring intelligence and efficiency to every conversation" />
      <Feature title="Knowledgebase" text="Unlock a vast repository of knowledge and information with our GPT-3-powered knowledgebase. Access comprehensive insights, explanations, and data on a wide range of topics, empowering you to find answers and solutions quickly and effortlessly." />
      <Feature title="Education" text="Elevate your learning experience with GPT-3-powered education tools. Receive personalized tutoring, generate insightful study materials, and explore interactive learning resources tailored to your needs and interests. Enhance your understanding and mastery of any subject with cutting-edge educational technology." />
    </div>
  </div>
);

export default WhatGPT3;