import React from 'react';
import './App.css';
import CircleContainer from './components/CircleContainer/CircleContainer';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  const startGame = () => {
      console.log("Game started!");
  };

  return (
      <div className="App">
          <CircleContainer />
          <ControlPanel onStart={startGame} />
      </div>
  );
}

export default App;
