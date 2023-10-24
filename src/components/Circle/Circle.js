import React from 'react';
import './Circle.css';

const Circle = ({ color, onClick, active }) => {
    const circleStyle = {
        backgroundColor: color,
        opacity: active ? 1 : 0.2,
        transform: active ? 'scale(1.1)' : 'scale(1)',
    };

    return <div className="circle" style={circleStyle} onClick={onClick}></div>;
}

export default Circle;

