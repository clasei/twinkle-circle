import React from 'react';
import './Info.css';

function Info({ headerRef }) {
    const scrollToGame = () => {
      if (headerRef && headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className="info-container">
      <h2>Hack Your RAM</h2>
      <p>Discover <strong>twinkleCircle</strong>.</p>
      <p>A modern twist on a classic to test your own random access memory.</p>
      <p>It's more than a challenge.</p>
      <p>It's a test for your brain's very own RAM.</p>
      <p>Immerse yourself in the subtle flow of <a href="https://vincentgarreau.com/particles.js/">Particles.js</a>, with a background crafted to keep you in the zone.</p>
      <p>Every sequence is a step towards mastering your mind.</p>
      <p>Engage, play, and elevate your cognitive skills.</p>
      <p>In a world filled with noise, find your focus.</p>

      <button onClick={scrollToGame} className="scroll-to-top-button">
        to the game
      </button>

      <p><strong>Press play. Dive in.</strong></p>
    </div>
  );
}

export default Info;
