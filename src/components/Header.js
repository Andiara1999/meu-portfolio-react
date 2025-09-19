import React from 'react';
import './Header.css'; // Vamos criar este CSS depois

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Andiara Ramos da Silva</h1>
        <p className="role">Desenvolvedora Full Stack | React | Angular | Laravel</p>
        <nav className="navbar">
          <ul>
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/SEU_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SEU_GITHUB" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:andiara.20014@gmail.com">Email</a>
        </div>
      </div>
    </header>
  );
}

export default Header;