import React, { useState, useEffect, useRef, forwardRef } from 'react';
import './Header.css';

function Header(props, ref) {
    const titleText = 'twinkleCircle';

    // disorder header letters
    const shuffle = (str) => {
        let arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    // title starts disordered
    const [displayedTitle, setDisplayedTitle] = useState(shuffle(titleText));
    const displayedTitleRef = useRef(displayedTitle);

    useEffect(() => {
        displayedTitleRef.current = displayedTitle;
    }, [displayedTitle]);

    useEffect(() => {
        let letters = titleText.split('');
        let shuffledTitle = displayedTitleRef.current.split('');
        let alreadyPlacedIndices = new Set();  // check letters right placed

    letters.forEach((letter, i) => {
        setTimeout(() => {
            let availableIndices = shuffledTitle.map((el, idx) => (el === letter && !alreadyPlacedIndices.has(idx)) ? idx : -1).filter(idx => idx !== -1);
            
            if (availableIndices.length > 0) {
                let indexInShuffled = availableIndices[0];
                if (indexInShuffled !== i) {
                    shuffledTitle[indexInShuffled] = shuffledTitle[i];
                    shuffledTitle[i] = letter;
                    setDisplayedTitle(shuffledTitle.join(''));
                    alreadyPlacedIndices.add(i);
                }
            }
        }, i * 500); // interval ms
    });
}, []);

    return (
        <div className="header" ref={ref}>
            <h1 className="title">{displayedTitle}</h1>
        </div>
    );
}

export default forwardRef(Header);


