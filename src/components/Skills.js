import React from 'react';

function Skills() {

  const skills = [
    'React.js',
    'Angular',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'TypeScript'
  ];

  return (

    <section id='skills'>

      <h2>Skills</h2>

      {
        skills.map((skill,index)=>(

          <div
            className='card'
            key={index}
          >
            {skill}
          </div>

        ))
      }

    </section>

  );
}

export default Skills;