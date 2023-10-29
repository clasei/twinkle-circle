import React, { useState, useEffect } from 'react';
import './Toast.css';

function Toast({ message, duration = 3000 }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return <div className="toast">{message}</div>;
}

export default Toast;
