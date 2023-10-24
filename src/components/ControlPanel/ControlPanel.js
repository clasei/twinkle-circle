import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart, gameSpeed, onSpeedChange }) => {
  return (
    <div className="control-panel">
      <p>watch & repeat — that's it</p>
      <button onClick={onStart}>play</button>
      <p>- adapt the speed -</p>
      <input
          type="range"
          min="200"
          max="1000"
          value={gameSpeed}
          onChange={onSpeedChange}
          id="speedSlider"
      />
      <span>{gameSpeed}ms</span>
    </div>
  );
}

export default ControlPanel;