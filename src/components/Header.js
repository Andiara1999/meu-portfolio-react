import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/1718826406590.jpg'; // Certifique-se que o caminho e nome da imagem estão corretos

// --- IMPORTAÇÕES DO FONT AWESOME ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Ícones de marcas - adicione outros se precisar
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// Ícones sólidos (como faEnvelope para e-mail, se quiser adicionar)
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// -------------------------------------------------------------------
// --- DEFINIÇÕES DOS SEUS STYLED COMPONENTS ---
// ESTAS DEFINIÇÕES DEVEM ESTAR SEMPRE ANTES DA FUNÇÃO DO COMPONENTE HEADER
// -------------------------------------------------------------------

const HeroSection = styled.header`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xlarge} 0;
  padding-top: 100px; /* Ajuste este valor conforme a altura do seu Navbar */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  /* Estilo para o brilho azulado de fundo */
  &::before {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, ${props => props.theme.colors.primary} 0%, rgba(14, 118, 253, 0) 100%);
    filter: blur(150px);
    opacity: 0.5;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    min-height: unset;
    padding-top: 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  text-align: left;
  margin-right: ${props => props.theme.spacing.xlarge};
  position: relative; /* Para garantir que o conteúdo fique acima do brilho de fundo */
  z-index: 1; /* Garante que o conteúdo fique acima do brilho de fundo */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: ${props => props.theme.spacing.large};
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.small};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.5em;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.2em;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.1em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.large};
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledButton = styled.a`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHover};
    text-decoration: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-top: ${props => props.theme.spacing.xlarge};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5em;
  transition: color 0.3s ease;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%; /* Imagem redonda */
  object-fit: cover;
  /* Borda removida como solicitado */

  position: relative; /* Essencial para posicionar o pseudo-elemento sobre a imagem */
  z-index: 1; /* Garante que a imagem e seu overlay fiquem acima do brilho de fundo */

  /* Adiciona o overlay azulado sobre a imagem */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit; /* Herda o border-radius para ser redondo */
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, rgba(14, 118, 253, 0) 50%);
    mix-blend-mode: overlay; /* Modo de mesclagem para que o azul se integre com a imagem */
    opacity: 0.6; /* Intensidade do brilho (ajuste de 0 a 1) */
    pointer-events: none; /* Garante que o overlay não impeça interações com a imagem */
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-top: ${props => props.theme.spacing.large};
  }
`;

// -------------------------------------------------------------------
// --- FUNÇÃO DO COMPONENTE HEADER ---
// -------------------------------------------------------------------

function Header() {
  return (
    <HeroSection>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <HeroContent>
          <Title>Olá, sou Andiara</Title>
          <Subtitle>Desenvolvedora Full Stack</Subtitle>
          <Description>
            Sou uma Desenvolvedora Full Stack apaixonada por criar soluções web inovadoras e eficientes. Com foco em React, Angular, JavaScript, PHP e Laravel, transformo ideias em experiências digitais robustas e escaláveis.
          </Description>
          <ButtonGroup>
            <StyledButton href="#projects">Ver Projetos</StyledButton>
            <StyledButton href="#contact">Vamos Conversar</StyledButton>
          </ButtonGroup>
          <SocialLinks>
            {/* Ícones sociais do Font Awesome */}
            <SocialLink href="https://www.linkedin.com/in/andiararamos/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialLink>
            <SocialLink href="https://github.com/Andiara1999?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            {/* Exemplo de email com ícone sólido, se você instalou o pacote: */}
            {/* <SocialLink href="mailto:andiara.20014@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </SocialLink> */}
          </SocialLinks>
        </HeroContent>
        <ProfileImage src={profileImage} alt="Andiara Ramos da Silva" />
      </div>
    </HeroSection>
  );
}

export default Header;