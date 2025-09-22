import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: transparent; /* Fundo transparente para o navbar */
  padding: ${props => props.theme.spacing.medium} 0;
  position: absolute; /* Posiciona o navbar absolutamente */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Garante que fique acima de outros elementos */
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between; /* Jacob à esquerda, links à direita */
  align-items: center;
`;

const Logo = styled.a`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8em;
  font-weight: 700;
  color: ${props => props.theme.colors.primary}; /* Cor do logo Jacob */
  &:hover {
    color: ${props => props.theme.colors.buttonHover};
    text-decoration: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing.large};

  @media (max-width: 768px) {
    display: none; /* Oculta em telas pequenas para uma abordagem mobile-first (menu hambúrguer seria ideal) */
  }
`;

const NavItem = styled.li`
  a {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    font-size: 1.1em;
    padding: 5px 0;
    position: relative;
    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
    /* Indicador azul sublinhado no hover */
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo href="#">Andiara.</Logo> {/* Seu nome como logo */}
        <NavList>
          <NavItem><a href="#about">Sobre</a></NavItem>
          <NavItem><a href="#journey">Jornada</a></NavItem> {/* Nova seção Journey */}
          <NavItem><a href="#skills">Habilidades</a></NavItem>
          <NavItem><a href="#projects">Projetos</a></NavItem>
          <NavItem><a href="#contact">Contato</a></NavItem>
        </NavList>
        {/* Aqui você poderia adicionar um ícone de menu hambúrguer para mobile */}
      </NavContainer>
    </NavWrapper>
  );
}

export default Navbar;