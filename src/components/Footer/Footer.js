import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
        <footer>
            <span id="currentYear">{{ currentYear }}</span>
            // built by <a href="https://github.com/clasei" target="_blank" rel="noopener noreferrer">clara </a>
            <span id="rocketIcon">🚀</span>
            pragmatic front-end developer <a href="https://bio.link/claraseijo" target="_blank" rel="noopener noreferrer">→ clara seijo</a>
        </footer>
    </div>
  );
}

export default Footer;
