import React from 'react';
import './Skills.css';
import backgroundImage from '../bacground.jpg';

function Skills() {
  const skillCategories = [
    {
      category: 'IT & System Skills',
      icon: '🖥️',
      skills: ['Hardware and Software Troubleshooting', 'OS Installation and Maintenance', 'Technical Support', 'Technical Documentation']
    },
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java']
    },
    {
      category: 'Frontend / Mobile / Web Technologies',
      icon: '⚛️',
      skills: ['React.js']
    }
  ];

  return (
    <section id="skills" className="skills" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
