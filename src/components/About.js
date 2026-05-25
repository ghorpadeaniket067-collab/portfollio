import React from 'react';

import {
  FaGraduationCap,
  FaBolt
} from 'react-icons/fa';

import './About.css';

function About() {

  return (

    <section
      className='about'
      id='about'
    >

      {/* Title */}

      <h1 className='about-title'>
        About Me
      </h1>

      <div className='underline'></div>

      {/* Content */}

      <div className='about-content'>

        <h2>
          About My Journey
        </h2>

        <p>
          I am a passionate MEAN & MERN Stack
          Developer from Pune, Maharashtra,
          with a strong foundation in full-stack
          web development.
        </p>

        <p>
          My journey in technology started during
          my Bachelor of Computer Applications (BCA),
          where I developed a deep interest in creating
          modern and user-friendly web applications.
        </p>

        <p>
          To strengthen my practical knowledge,
          I completed professional training in
          MEAN & MERN Stack Development at
          The Full Stack Guru, Pune.
        </p>

        <p>
          During this journey, I gained hands-on
          experience in Angular, React.js,
          Node.js, Express.js, and MongoDB while
          building real-world applications and REST APIs.
        </p>

        <p>
          I have worked on projects like a
          Gym Management System and a
          Task Management System, where
          I implemented CRUD operations,
          authentication systems, responsive UI
          designs, and backend API integrations.
        </p>

        <p>
          These projects helped me improve my
          problem-solving skills, teamwork,
          and understanding of scalable
          web applications.
        </p>

        <p>
          As a fresher, I am eager to start my
          professional career, contribute to
          innovative projects, and continuously
          learn new technologies in the software
          development industry.
        </p>

      </div>

      {/* Cards */}

      <div className='about-cards'>

        {/* Card 1 */}

        <div className='about-card'>

          <FaGraduationCap
            className='icon'
          />

          <h2>
            BCA Graduate
          </h2>

        </div>

        {/* Card 2 */}

        <div className='about-card'>

          <h1>20+</h1>

          <p>
            Projects Completed
          </p>

        </div>

        {/* Card 3 */}

        <div className='about-card'>

          <h1>8+</h1>

          <p>
            Technologies
          </p>

        </div>

        {/* Card 4 */}

        <div className='about-card'>

          <FaBolt
            className='icon'
          />

          <h2>
            Quick Learner
          </h2>

        </div>

      </div>

    </section>

  );
}

export default About;