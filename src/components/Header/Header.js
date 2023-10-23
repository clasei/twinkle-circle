import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [displayedTitle, setDisplayedTitle] = useState('');

    useEffect(() => {
        const titleText = 'twinkleCircle';
        let letters = titleText.split('');

        // array with the letters, random order
        let indexes = Array.from({length: letters.length}, (_, i) => i);
        indexes.sort(() => Math.random() - 0.5);

        let newTitle = '';
        indexes.forEach((index, i) => {
            setTimeout(() => {
                newTitle += letters[index];
                setDisplayedTitle(prev => prev + letters[index]);
            }, i * 100); // interval ms
        });
    }, []);

    return (
        <div className="header">
            <h1 className="title">{displayedTitle}</h1>
        </div>
    );
}

export default Header;
