import React from 'react';
import './Hero.css';

function Hero() {

  return (

    <section className='hero' id='home'>

      {/* Left Side */}

      <div className='hero-left'>

        <h1 className='hero-title'>

          Hi, I'm

          <span> Aniket Ghorpade</span>

        </h1>

        <h2>
          MEAN & MERN Stack Developer
        </h2>

        <p>
          MEAN & MERN Stack Developer
          passionate about building modern,
          responsive, and full-stack web
          applications using Angular,
          React.js, Node.js, Express.js,
          and MongoDB.
        </p>

      </div>

      {/* Right Side */}

      <div className='hero-right'>

        <img
          src='/profile.png'
          alt='Aniket'
        />

      </div>

    </section>

  );
}

export default Hero;