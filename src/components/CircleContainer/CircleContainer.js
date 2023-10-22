import React from 'react';
import Circle from '../Circle/Circle';
import './CircleContainer.css';

const CircleContainer = () => {
    return (
        <div className="container">
            <div className="circle-row">
                <Circle color="pink" onClick={() => console.log('Pink circle clicked!')} />
                <Circle color="green" onClick={() => console.log('Green circle clicked!')} />
            </div>
            <div className="circle-row">
                <Circle color="blue" onClick={() => console.log('Blue circle clicked!')} />
                <Circle color="yellow" onClick={() => console.log('Yellow circle clicked!')} />
            </div>
        </div>
    );
}

export default CircleContainer;
