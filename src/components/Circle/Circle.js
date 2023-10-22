import React from 'react';
import './Circle.css';

const Circle = ({ color, onClick, active }) => {
    const circleStyle = {
        backgroundColor: color,
        // ...otros estilos según sea necesario
    };

    return <div className="circle" style={circleStyle} onClick={onClick}></div>;
}

export default Circle;
