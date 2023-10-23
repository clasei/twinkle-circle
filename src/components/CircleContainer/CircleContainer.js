import React, { useState } from 'react';
import Circle from '../Circle/Circle';
import './CircleContainer.css';

const CircleContainer = ({ activeCircle, setActiveCircle, onCircleClick  }) => {
    
    const handleCircleClick = (color) => {
        console.log(`${color} circle clicked!`);
        setActiveCircle(color);
        onCircleClick(color);
    };

    return (
        <div className="container">
            <Circle color="pink" onClick={() => handleCircleClick("pink")} active={activeCircle === "pink"} />
            <Circle color="green" onClick={() => handleCircleClick("green")} active={activeCircle === "green"} />
            <Circle color="blue" onClick={() => handleCircleClick("blue")} active={activeCircle === "blue"} />
            <Circle color="yellow" onClick={() => handleCircleClick("yellow")} active={activeCircle === "yellow"} />
        </div>
    );
}

export default CircleContainer;


