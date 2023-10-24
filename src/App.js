import React, { useEffect, useState } from 'react';
import './App.css';
import 'particles.js';
import particlesConfig from './assets/particles.js';
import Header from './components/Header/Header';
import CircleContainer from './components/CircleContainer/CircleContainer';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  const [gameSequence, setGameSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);

  const [gameSpeed, setGameSpeed] = useState(500);

  const colors = ["pink", "blue", "green", "yellow"];
  const [activeCircle, setActiveCircle] = useState("");

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleSpeedChange = (event) => {
    setGameSpeed(event.target.value);
  };  

  const startGame = () => {
    setIsGameActive(true);
    setPlayerSequence([]);
    const newColor = generateRandomColor();
    setGameSequence([newColor]);
    playSequence([newColor]);
  };

  const playSequence = async (sequence) => {
    setActiveCircle("");
    await new Promise(resolve => setTimeout(resolve, 1000));

    for (let color of sequence) {
      setActiveCircle(color);
      await new Promise(resolve => setTimeout(resolve, gameSpeed));
      setActiveCircle(null);
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  };

  const handleCircleClick = (color) => {
    if (!isGameActive) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== gameSequence[newPlayerSequence.length - 1]) {
      setIsGameActive(false);
      alert("practice is the way, give it another go (:");
      return;
    }

    if (newPlayerSequence.length === gameSequence.length) {
      const newColor = generateRandomColor();
      setTimeout(() => {
        setGameSequence([...gameSequence, newColor]);
        playSequence([...gameSequence, newColor]);
        setPlayerSequence([]);
      }, 500);
    }
  };

  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig);
}, []);

  return (
    <div className="App">
        <div id="particles-js"></div>
        <Header />
        <CircleContainer 
            activeCircle={activeCircle}
            setActiveCircle={setActiveCircle}
            onCircleClick={handleCircleClick}
        />
        <ControlPanel onStart={startGame} gameSpeed={gameSpeed} onSpeedChange={handleSpeedChange} />
    </div>
 );
}

export default App;
