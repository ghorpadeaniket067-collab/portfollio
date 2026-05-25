import React from 'react';

import {
  FaUserTie,
  FaLinkedin
} from 'react-icons/fa';

import './Navbar.css';

function Navbar({

  setShowProjects,
  setShowContact

}) {

  // Projects Button

  const handleProjects = () => {

    setShowProjects(true);

    setShowContact(false);
  };

  // Contact Button

  const handleContact = () => {

    setShowContact(true);

    setShowProjects(false);
  };

  // Home Button

  const handleHome = () => {

    setShowProjects(false);

    setShowContact(false);
  };

  return (

    <nav className='navbar'>

      {/* Logo */}

      <div className='logo'>

        <FaUserTie className='logo-icon' />

        <h1>
          ANIKET GHORPADE
        </h1>

      </div>

      {/* Nav Links */}

      <ul className='nav-links'>

        {/* Home */}

        <li>

          <button
            className='project-btn'
            onClick={handleHome}
          >
            Home
          </button>

        </li>

        {/* Resume */}

        <li>

          <a
            href='/Aniket-Ghorpade-Cv.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>

        </li>

        {/* Projects */}

        <li>

          <button
            className='project-btn'
            onClick={handleProjects}
          >
            Projects
          </button>

        </li>

        {/* Contact */}

        <li>

          <button
            className='project-btn'
            onClick={handleContact}
          >
            Contact
          </button>

        </li>

        {/* LinkedIn */}

        <li>

          <a
            href='https://linkedin.com/in/aniket-ghorpade-0a142a3a3'
            target='_blank'
            rel='noreferrer'
          >

            <FaLinkedin
              className='linkedin-icon'
            />

          </a>

        </li>

      </ul>

    </nav>

  );
}

export default Navbar;