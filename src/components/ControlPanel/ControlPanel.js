import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart }) => {
  return (
    <div className="control-panel">
      <p>watch & repeat — that's it</p>
      <button onClick={onStart}>play</button>
    </div>
  );
}

export default ControlPanel;