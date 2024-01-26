import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart, gameSpeed, onSpeedChange }) => {

  return (
    <div className="control-panel">
      
      <button onClick={onStart}>play</button>
      
      <p className="instruction">watch & repeat — that's it</p>
     
      <span>- </span>
      <input className="slider"
          type="range"
          min="100"
          max="999"
          value={gameSpeed}
          onChange={onSpeedChange}
          id="speedslider"
          aria-label="Speed Control"
      />
      <span> +</span>

      <p className="speed-adaptation">adapt the speed</p>
    </div>
  );
}

export default ControlPanel;