import React from 'react';

import './Footer.css';

function Footer() {

  return (

    <footer className='footer'>

      {/* Left Side */}

      <div className='footer-left'>

        <p>
          © 2025 Aniket Ghorpade.
          All rights reserved.
        </p>

      </div>

      {/* Center */}

      <div className='footer-center'>

        {/* Privacy Policy */}

        <a
          href='/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy Policy
        </a>

        {/* Accessibility */}

        <a
          href='/accessibility-statement'
          target='_blank'
          rel='noreferrer'
        >
          Accessibility Statement
        </a>

      </div>

      {/* Right Side */}

      <div className='footer-right'>

        <a
          href='/Aniket-Ghorpade-Cv.pdf'
          target='_blank'
          rel='noreferrer'
          className='resume-btn'
        >
          Download Resume
        </a>

      </div>

    </footer>

  );
}

export default Footer;