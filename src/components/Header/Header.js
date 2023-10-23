import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const titleText = 'twinkleCircle';
    // Inicializamos el título mostrado con espacios
    const [displayedTitle, setDisplayedTitle] = useState(new Array(titleText.length).fill(' ').join(''));

    useEffect(() => {
        let letters = titleText.split('');

        // array with the letters, random order
        let indexes = Array.from({length: letters.length}, (_, i) => i);
        indexes.sort(() => Math.random() - 0.5);

        indexes.forEach((index, i) => {
            setTimeout(() => {
                // Reemplazamos el espacio en el índice correspondiente con la letra
                setDisplayedTitle(prev => {
                    let chars = prev.split('');
                    chars[index] = letters[index];
                    return chars.join('');
                });
            }, i * 420); // interval ms
        });
    }, []);

    return (
        <div className="header">
            <h1 className="title">{displayedTitle}</h1>
        </div>
    );
}

export default Header;

