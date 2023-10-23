import React, { useEffect } from 'react';
import './App.css';
import 'particles.js';
import particlesConfig from './assets/particles.js';
import Header from './components/Header/Header';
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
        <Header />
        <CircleContainer />
        <ControlPanel onStart={startGame} />
    </div>
 );
}

export default App;
