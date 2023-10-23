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

  const colors = ["red", "blue", "green", "yellow"];
  const [activeCircle, setActiveCircle] = useState("");

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const startGame = () => {
    setIsGameActive(true);
    setPlayerSequence([]);
    const newColor = generateRandomColor();
    setGameSequence([newColor]);
    playSequence([newColor]);
  };

  const playSequence = async (sequence) => {
    for (let color of sequence) {
      setActiveCircle(color);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setActiveCircle(null);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const handleCircleClick = (color) => {
    if (!isGameActive) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== gameSequence[newPlayerSequence.length - 1]) {
      setIsGameActive(false);
      alert("try again");
      return;
    }

    if (newPlayerSequence.length === gameSequence.length) {
      const newColor = generateRandomColor();
      setGameSequence([...gameSequence, newColor]);
      playSequence([...gameSequence, newColor]);
      setPlayerSequence([]);
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
        <ControlPanel onStart={startGame} />
    </div>
 );
}

export default App;