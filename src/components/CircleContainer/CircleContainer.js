import React from 'react';
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
            <div className="row-1">
                <Circle color="pink" onClick={() => handleCircleClick("pink")} active={activeCircle === "pink"} />
                <Circle color="green" onClick={() => handleCircleClick("green")} active={activeCircle === "green"} />
            </div>
            <div className="row-2">
                <Circle color="blue" onClick={() => handleCircleClick("blue")} active={activeCircle === "blue"} />
                <Circle color="yellow" onClick={() => handleCircleClick("yellow")} active={activeCircle === "yellow"} />
                </div>
        </div>
    );
}

export default CircleContainer;