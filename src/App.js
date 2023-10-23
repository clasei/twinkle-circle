import React, { useEffect } from 'react';import './App.css';
import particlesConfig from './assets/particles';
import particlesConfig from './assets/particles.js';
import CircleContainer from './components/CircleContainer/CircleContainer';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  const startGame = () => {
      console.log("Game started!");
  };

  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig);
}, []);

  return (
    <div className="App">
        <div id="particles-js"></div>
        <CircleContainer />
        <ControlPanel onStart={startGame} />
    </div>
 );
}

export default App;
