import React from 'react';
import './Circle.css';

const Circle = ({ color, onClick, active }) => {
    const circleStyle = {
        backgroundColor: color,
    };

    return <div className="circle" style={circleStyle} onClick={onClick}></div>;
}

export default Circle;
