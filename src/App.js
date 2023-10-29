import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import particlesConfig from './assets/particles.js';
import Header from './components/Header/Header';
import CircleContainer from './components/CircleContainer/CircleContainer';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';

function App() {
  // state variables for the game logic
  const [gameSequence, setGameSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(500);

  const colors = ["pink", "blue", "green", "yellow"];
  const [activeCircle, setActiveCircle] = useState("");

  // utility function to pause execution for specified duration
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const headerRef = useRef(null);

  const [toastMessage, setToastMessage] = useState("");

  // generate a random color from the available colors array
  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleSpeedChange = (event) => {
    setGameSpeed(event.target.value);
  };  

  // function to initiate the game
  const startGame = () => {
    console.log("Game has started!");
    setIsGameActive(true);
    setPlayerSequence([]);
    const newColor = generateRandomColor();
    setGameSequence([newColor]);
    playSequence([newColor]);
  };

  // playback the generated sequence to the player
  const playSequence = async (sequence) => {
    setActiveCircle("");
    await sleep(800);

    for (let color of sequence) {
      setActiveCircle(color);
      await sleep(gameSpeed);
      setActiveCircle("");
      await sleep(200);
    }
  };

  // handle circle clicks and game logic
  const handleCircleClick = (color) => {
    if (!isGameActive) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== gameSequence[newPlayerSequence.length - 1]) {
      setIsGameActive(false);
      setActiveCircle("");
      setToastMessage("practice is the way, give it another go");
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

  // initialize the particles background on component mount
  useEffect(() => {
      window.particlesJS('particles-js', particlesConfig);
  }, []);

  // handle the display duration of toast messages
  useEffect(() => {
      if (toastMessage) {
        const timer = setTimeout(() => {
            setToastMessage("");
        }, 5000);

        return () => clearTimeout(timer);
      }
}, [toastMessage]);


  return (
    <div className="App">
        <div id="particles-js"></div>
        <div className="Content" style={{ flex: 1 }}>
            <Header ref={headerRef} />
            <CircleContainer 
                activeCircle={activeCircle}
                setActiveCircle={setActiveCircle}
                onCircleClick={handleCircleClick}
            />
            <ControlPanel onStart={startGame} gameSpeed={gameSpeed} onSpeedChange={handleSpeedChange} />
            <Info headerRef={headerRef} />
            <Footer />
            {toastMessage && <Toast message={toastMessage} />}
          </div>
    </div>
 );
}

export default App;
