import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onStart }) => {
  return (
    <div className="control-panel">
      <button onClick={onStart}>Play</button>
    </div>
  );
}

export default ControlPanel;
