import React, { useState, useEffect } from 'react';
import './App.css';
import background from './assets/Background (2).jpg'; // Use the correct filename and path

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  );
}

function App() {
  const handleCodingRoundClick = () => {
    window.open('https://leetcode-clone-youtube-8fafsn6tv-burakorkmez.vercel.app/', '_blank');
  };

  const handleChatbotClick = () => {
    window.open('https://bujith-projct.netlify.app/', '_blank');
  };

  const handleGrammarClick = () => {
    window.open('https://nan-placement.vercel.app/', '_blank');
  };

  return (
    <div className="app-container">
      <div className="clock-container">
        <Clock />
      </div>
      <h1 className="title">Welcome to Placement Training</h1>
      <div className="button-container">
        <button className="btn" onClick={handleGrammarClick}>Grammar</button>
        <button className="btn">DSA</button>
        <button className="btn" onClick={handleCodingRoundClick}>Coding Round</button>
      </div>
      <button className="btn chatbot" onClick={handleChatbotClick}>Chatbot</button>
    </div>
  );
}

export default App;
