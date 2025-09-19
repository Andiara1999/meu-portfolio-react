import React from 'react';
import './ProjectCard.css'; // Vamos criar este CSS depois

function ProjectCard({ title, description, technologies, githubLink, demoLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="technologies"><strong>Tecnologias:</strong> {technologies.join(', ')}</p>
      <div className="project-links">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo Ao Vivo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;