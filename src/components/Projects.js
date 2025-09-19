import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Vamos criar este CSS depois

function Projects() {
  const projectsData = [
    {
      title: "Sistema de Gestão Web (Exemplo CNM)",
      description: "Este projeto demonstra minhas habilidades em desenvolver e manter sistemas web completos. Similar aos que trabalhei na CNM, utiliza React para o frontend e Laravel para o backend. Inclui funcionalidades de CRUD, autenticação de usuários e um sistema de relatórios básicos.",
      technologies: ["React", "Laravel", "PHP", "JavaScript", "MySQL"],
      githubLink: "https://github.com/SEU_GITHUB/nome-do-projeto-cnm", // SUBSTITUA!
      demoLink: "https://SEU_DEMO_CNM.netlify.app" // SUBSTITUA!
    },
    {
      title: "API RESTful com Laravel",
      description: "Desenvolvimento de uma API RESTful robusta para gerenciamento de produtos. Foco na criação de endpoints eficientes, validação de dados e segurança, utilizando JWT para autenticação. Ideal para integração com aplicações frontend e mobile.",
      technologies: ["PHP", "Laravel", "MySQL", "JWT"],
      githubLink: "https://github.com/SEU_GITHUB/api-laravel-produtos", // SUBSTITUA!
      demoLink: null // Se não tiver demo, pode ser null
    },
    {
      title: "Dashboard Interativo com React",
      description: "Uma aplicação frontend que consome dados de uma API (ex: a API de produtos acima ou uma API pública) para exibir um dashboard interativo. Demonstra o uso de componentes reutilizáveis, gerenciamento de estado e boas práticas de UI/UX.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Consumo de API"],
      githubLink: "https://github.com/SEU_GITHUB/dashboard-react", // SUBSTITUA!
      demoLink: "https://SEU_DASHBOARD_REACT.netlify.app" // SUBSTITUA!
    },
    // Adicione mais projetos aqui! Lembre-se de priorizar projetos que mostrem suas habilidades full stack.
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
