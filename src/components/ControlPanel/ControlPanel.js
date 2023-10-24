import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart, gameSpeed, onSpeedChange }) => {
  return (
    <div className="control-panel">
      
      <button onClick={onStart}>play</button>
      <p>watch & repeat — that's it</p>
      <p><br></br>- adapt the speed -</p>
      <input className="slider"
          type="range"
          min="100"
          max="1300"
          value={gameSpeed}
          onChange={onSpeedChange}
          id="speedSlider"
      />
      <span className="slider-metric">{gameSpeed}ms</span>
      
    </div>
  );
}

export default ControlPanel;