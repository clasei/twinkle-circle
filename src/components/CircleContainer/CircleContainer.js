import React from 'react';
import Circle from '../Circle/Circle';
import './CircleContainer.css';

const CircleContainer = () => {
    return (
        <div className="container">
            <Circle color="pink" onClick={() => console.log('Pink circle clicked!')} />
            <Circle color="green" onClick={() => console.log('Green circle clicked!')} />
            <Circle color="blue" onClick={() => console.log('Blue circle clicked!')} />
            <Circle color="yellow" onClick={() => console.log('Yellow circle clicked!')} />
        </div>
    );
}

export default CircleContainer;

