import React from 'react';

import './Projects.css';

function Projects() {

  return (

    <section
      className='projects'
      id='projects'
    >

      <h1 className='project-title'>
        Projects
      </h1>

      {/* ========================= */}
      {/* Gym Management System */}
      {/* ========================= */}

      <div className='project-card'>

        <h2>
          Gym Management System
        </h2>

        {/* Tech Stack */}

        <p>

          <strong>
            Tech Stack:
          </strong>

          Angular, TypeScript,
          HTML5, CSS3, Node.js,
          Express.js, MongoDB

        </p>

        {/* Description */}

        <p>

          <strong>
            Description:
          </strong>

          A full-stack Gym Management
          System developed using the
          MEAN stack.

          The application helps gym
          administrators manage members,
          attendance, and payments efficiently
          through a responsive and
          user-friendly interface.

          It includes secure backend APIs
          and complete CRUD functionality
          using MongoDB.

        </p>

        {/* Features */}

        <h3>
          Key Features:
        </h3>

        <ul>

          <li>
            Add, update, and manage gym members.
          </li>

          <li>
            Track member attendance records.
          </li>

          <li>
            Manage payment details and subscriptions.
          </li>

          <li>
            Secure REST API integration.
          </li>

          <li>
            Full CRUD operations with MongoDB.
          </li>

          <li>
            Responsive and user-friendly interface.
          </li>

        </ul>

        {/* Buttons */}

        <div className='project-buttons'>

          {/* Visit */}

          <a
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'
            className='visit-btn'
          >
            Visit Project
          </a>

          {/* Download */}

       

        </div>

      </div>

      {/* ========================= */}
      {/* Task Management System */}
      {/* ========================= */}

      <div className='project-card'>

        <h2>
          Task Management System
        </h2>

        {/* Tech Stack */}

        <p>

          <strong>
            Tech Stack:
          </strong>

          React.js, JavaScript,
          HTML5, CSS3, Node.js,
          Express.js, MongoDB

        </p>

        {/* Description */}

        <p>

          <strong>
            Description:
          </strong>

          A full-stack Task Management
          System built using the MERN stack.

          The application allows users
          to create, update, complete,
          and manage tasks efficiently
          with secure authentication
          and responsive UI design.

        </p>

        {/* Features */}

        <h3>
          Key Features:
        </h3>

        <ul>

          <li>
            Create and manage daily tasks.
          </li>

          <li>
            Update and delete tasks instantly.
          </li>

          <li>
            User authentication and authorization.
          </li>

          <li>
            REST API integration.
          </li>

          <li>
            Complete CRUD functionality.
          </li>

          <li>
            Responsive and modern UI design.
          </li>

        </ul>

        {/* Buttons */}

        <div className='project-buttons'>

          {/* Visit */}

          <a
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'
            className='visit-btn'
          >
            Visit Project
          </a>

          {/* Download */}

          <a
            href='/task-synopsis.pdf'
            download
            className='download-btn'
          >
            Download Synopsis
          </a>

          {/* View */}

          <a
            href='/task-synopsis.pdf'
            target='_blank'
            rel='noreferrer'
            className='view-btn'
          >
            View Synopsis
          </a>

        </div>

      </div>

    </section>

  );
}

export default Projects;