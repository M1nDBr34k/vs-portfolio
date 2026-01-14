import React from 'react';
import './Projects.css';
import smartTanomImage from '../Smartanom.png';
import webUIImage from '../WebUI.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SmarTanom: IoT Hydroponics Monitoring',
      year: '2025',
      category: 'Capstone Project',
      description: [
        'Contributed to system requirements, documentation, analysis, and investment support.'
      ],
      tags: ['IoT', 'Hydroponics', 'Monitoring System', 'Documentation'],
      image: smartTanomImage,
      link: 'https://smartanom.me/'
    },
    {
      id: 2,
      title: 'Web Development',
      category: 'Frontend Project',
      description: [
        'Assisted in developing responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.',
        'Created simple layouts and components following basic UI/UX principles.',
        'Implemented basic interactivity such as form handling, button actions, and input validation.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
      image: webUIImage,
      link: 'https://fanpage-brown.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.year && <span className="project-year">{project.year}</span>}
              </div>
              <p className="project-category">{project.category}</p>
              <div className="project-description">
                {project.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
