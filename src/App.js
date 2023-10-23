import React, { useEffect } from 'react';
import './App.css';
import CircleContainer from './components/CircleContainer/CircleContainer';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  const startGame = () => {
      console.log("Game started!");
  };

  useEffect(() => {
        particlesJS.load('particles-js', './assets/particles.json', function() {
            console.log('particles.js loaded - callback');
        });
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
