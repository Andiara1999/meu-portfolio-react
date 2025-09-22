import React from 'react';
import './Contact.css'; // O arquivo CSS para estilizar a seção de contato

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <p>Estou aberta a novas oportunidades e adoro discutir ideias. Sinta-se à vontade para entrar em contato!</p>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:andiara.20014@gmail.com">andiara.20014@gmail.com</a></p>
          <p><strong>Telefone:</strong> (61) *****-****</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andiararamos/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/andiararamos/</a></p> {/* SUBSTITUA PELO SEU LINK DO LINKEDIN */}
          <p><strong>GitHub:</strong> <a href="https://github.com/Andiara1999?tab=repositories" target="_blank" rel="noopener noreferrer">https://github.com/Andiara1999?tab=repositories</a></p> {/* SUBSTITUA PELO SEU LINK DO GITHUB */}
        </div>
        {/*
          Opcional: Você pode adicionar um formulário de contato aqui se quiser.
          Para isso, você precisaria de um serviço de backend (ex: Netlify Forms, Formspree, ou um backend customizado)
          para processar o envio do formulário.

          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem"></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        */}
      </div>
    </section>
  );
}

export default Contact;
