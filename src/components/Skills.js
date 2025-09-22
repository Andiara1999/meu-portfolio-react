import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles'; 

const SkillsSection = styled.section`
  background-color: ${props => props.theme.colors.cardBg}; /* Fundo mais claro */
  padding: ${props => props.theme.spacing.xlarge} 0;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xlarge};

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xlarge};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const SkillName = styled.p`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.small};
  text-align: left;
`;

const ProgressBarContainer = styled.div`
  background-color: ${props => props.theme.colors.borderColor};
  border-radius: 5px;
  height: 10px;
  width: 100%;
  overflow: hidden; /* Garante que a barra interna não transborde */
`;

const ProgressBarFill = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100%;
  width: ${props => props.percentage || 0}%;
  border-radius: 5px;
  transition: width 1s ease-in-out; /* Animação suave */
`;

function Skills() {
  const codingSkills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'PHP', percentage: 85 },
    { name: 'React', percentage: 90 },
    { name: 'Angular', percentage: 75 },
    { name: 'Vue.js', percentage: 80 },
    { name: 'Laravel', percentage: 85 },
    { name: 'HTML/CSS', percentage: 95 },
  ];

  const professionalSkills = [
    { name: 'Desenvolvimento Full Stack', percentage: 90 },
    { name: 'Análise de Requisitos', percentage: 85 },
    { name: 'Resolução de Problemas', percentage: 90 },
    { name: 'Comunicação', percentage: 80 },
    { name: 'Metodologias Ágeis', percentage: 85 },
    { name: 'Arquitetura de BD', percentage: 75 },
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Minhas <span>Habilidades</span></SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h3 style={{color: theme.colors.text, marginBottom: theme.spacing.large, textAlign: 'left'}}>Habilidades Técnicas</h3>
            {codingSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBarContainer>
                  <ProgressBarFill percentage={skill.percentage} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillCategory>

          <SkillCategory>
            <h3 style={{color: theme.colors.text, marginBottom: theme.spacing.large, textAlign: 'left'}}>Habilidades Profissionais</h3>
            {professionalSkills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBarContainer>
                  <ProgressBarFill percentage={skill.percentage} />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillCategory>
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
}

export default Skills;