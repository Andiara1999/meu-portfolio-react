import React from 'react';
import './About.css'; // Vamos criar este CSS depois

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Sou Andiara Ramos da Silva, uma Desenvolvedora Full Stack apaixonada por construir soluções web inovadoras e eficientes. Com experiência em React, Angular, JavaScript, PHP e Laravel, busco aplicar e expandir minhas competências para desenvolver sistemas de alta qualidade e escalabilidade.
        </p>
        <p>
          Minha formação em Engenharia de Software e Análise e Desenvolvimento de Sistemas, aliada à experiência em projetos Full Stack na Confederação Nacional de Municípios (CNM), me permite atuar em todo o ciclo de vida do desenvolvimento, desde a análise e projeto até a implementação e manutenção. Adoro aprender e estou sempre em busca de novos desafios na área de Tecnologia da Informação.
        </p>
        {/* Adicione uma imagem sua aqui se quiser */}
        {/* <img src="URL_DA_SUA_FOTO.jpg" alt="Andiara Ramos da Silva" className="profile-photo" /> */}
      </div>
    </section>
  );
}

export default About;