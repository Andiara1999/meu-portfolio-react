import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/1718826406590.jpg'; // Reutilize sua foto de perfil ou adicione outra

const AboutSection = styled.section`
  background-color: ${props => props.theme.colors.cardBg}; /* Fundo ligeiramente mais claro */
  padding: ${props => props.theme.spacing.xlarge} 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xlarge};
  text-align: center; /* Garante que o título "About Me" esteja centralizado */

  /* Para destacar "Me" como na imagem */
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.1em;
  max-width: 800px;
  margin: 0 auto ${props => props.theme.spacing.large} auto;
`;

const ReadMoreButton = styled.a`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHover};
    text-decoration: none;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle>Sobre <span>Mim</span></SectionTitle> {/* Separado para estilizar "Mim" */}
        <ProfilePicture src={profileImage} alt="Andiara Ramos da Silva" />
        <Subtitle>Desenvolvedora Full Stack!</Subtitle>
        <Description>
          Minha jornada profissional e acadêmica me proporcionou uma sólida base em desenvolvimento web. Como Desenvolvedora Full Stack na Confederação Nacional de Municípios (CNM), fui responsável por desenvolver e manter sistemas web complexos utilizando React, Vue.js e Laravel, garantindo a qualidade e escalabilidade das aplicações. Minha experiência inclui a implementação de novas funcionalidades, correção de bugs e otimização de sistemas, sempre com foco em entregar soluções robustas e eficientes.
        </Description>
        <Description>
          Sou apaixonada por aprender e estou em constante atualização com as últimas tecnologias do mercado, buscando aplicar as melhores práticas em cada projeto. Minha paixão por tecnologia vai além do código; adoro colaborar em equipes e contribuir significativamente para o sucesso dos projetos.
        </Description>
        <ReadMoreButton href="#contact">Vamos Conversar</ReadMoreButton> {/* Ou link para uma página mais detalhada se tiver */}
      </div>
    </AboutSection>
  );
}

export default About;