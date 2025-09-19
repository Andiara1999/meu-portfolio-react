import React from 'react';
import './Skills.css'; // Vamos criar este CSS depois

function Skills() {
  const frontendSkills = ['React', 'Angular', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Acessibilidade Web'];
  const backendSkills = ['PHP', 'Laravel', 'Node.js (básico/em aprendizado)', 'API RESTful'];
  const databaseSkills = ['MySQL', 'PostgreSQL', 'MongoDB (básico/em aprendizado)'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Composer', 'npm', 'yarn', 'Docker (básico/em aprendizado)'];
  const methodologies = ['Gestão Ágil', 'Desenvolvimento Full Stack'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-category">
          <h3>Frontend</h3>
          <ul>
            {frontendSkills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <ul>
            {backendSkills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Banco de Dados</h3>
          <ul>
            {databaseSkills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Ferramentas</h3>
          <ul>
            {toolsSkills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Metodologias & Outros</h3>
          <ul>
            {methodologies.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;