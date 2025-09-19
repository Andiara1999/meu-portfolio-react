import React from 'react';
import './Footer.css'; // O arquivo CSS para estilizar o rodapé

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Andiara Ramos da Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;