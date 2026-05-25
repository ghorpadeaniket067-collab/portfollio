import React from 'react';

import './Contact.css';

function Contact() {

  return (

    <section className='contact-section'>

      {/* Title */}

      <h1 className='contact-title'>
        Get In Touch
      </h1>

      <p className='contact-subtitle'>

        Feel free to contact me for
        internships, freelance work,
        projects, or collaboration
        opportunities.

      </p>

      {/* Contact Container */}

      <div className='contact-container'>

        {/* Left Side */}

        <div className='contact-info'>

          <h2>
            Contact Information
          </h2>

          <p>
            📧 Email:
            aniketghorpade1860@gmail.com
          </p>

          <p>
            📞 Phone:
            +91 9322846359
          </p>

          <p>
            📍 Location:
            Pune, Maharashtra
          </p>

          <p>

            🔗 LinkedIn:

            <a
              href='https://linkedin.com/in/aniket-ghorpade-0a142a3a3'
              target='_blank'
              rel='noreferrer'
            >
              linkedin.com/in/aniket-ghorpade-0a142a3a3
            </a>

          </p>

          <p>

            💻 GitHub:

            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
            >
              Your GitHub Link
            </a>

          </p>

        </div>

        {/* Right Side Form */}

        <form className='contact-form'>

          {/* Full Name */}

          <input
            type='text'
            placeholder='Full Name'
          />

          {/* Email */}

          <input
            type='email'
            placeholder='Email Address'
          />

          {/* Subject */}

          <input
            type='text'
            placeholder='Subject'
          />

          {/* Message */}

          <textarea
            rows='6'
            placeholder='Message'
          ></textarea>

          {/* Button */}

          <button type='submit'>

            Send Message

          </button>

        </form>

      </div>

    </section>

  );
}

export default Contact;