import React from 'react';
import styled from 'styled-components';

const JourneySection = styled.section`
  background-color: ${props => props.theme.colors.background}; /* Fundo principal */
  padding: ${props => props.theme.spacing.xlarge} 0;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xlarge};

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const JourneyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xlarge};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JourneyColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large};
`;

const JourneyCard = styled.div`
  background-color: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-left: 5px solid ${props => props.theme.colors.primary}; /* Barra azul lateral */
  border-radius: 8px;
  padding: ${props => props.theme.spacing.large};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.3em;
  margin-bottom: ${props => props.theme.spacing.small};
  text-align: left;
`;

const CardSubtitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9em;
  margin-bottom: ${props => props.theme.spacing.small};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1em;
`;

function Journey() {
  return (
    <JourneySection id="journey">
      <div className="container">
        <SectionTitle>Minha <span>Jornada</span></SectionTitle>
        <JourneyGrid>
          <JourneyColumn>
            <CardTitle>Educação</CardTitle>
            {/* Educação 1 */}
            <JourneyCard>
              <CardTitle>Pós-graduação em Engenharia de Software</CardTitle>
              <CardSubtitle>Universidade Estácio de Sá | Janeiro de 2023 - Dezembro de 2023</CardSubtitle>
              <CardDescription>
                Aprofundamento em metodologias de desenvolvimento de software, arquitetura de sistemas e gestão de projetos, preparando para desafios complexos.
              </CardDescription>
            </JourneyCard>
            {/* Educação 2 */}
            <JourneyCard>
              <CardTitle>Tecnólogo em Análise e Desenvolvimento de Sistemas</CardTitle>
              <CardSubtitle>Universidade Estácio de Sá | Janeiro de 2020 - Junho de 2022</CardSubtitle>
              <CardDescription>
                Formação abrangente em desenvolvimento de sistemas, incluindo levantamento de requisitos, modelagem de dados, programação e testes.
              </CardDescription>
            </JourneyCard>
            {/* Adicione mais itens de educação se houver */}
          </JourneyColumn>

          <JourneyColumn>
            <CardTitle>Experiência</CardTitle>
            {/* Experiência 1 */}
            <JourneyCard>
              <CardTitle>Desenvolvedora Full Stack</CardTitle>
              <CardSubtitle>Confederação Nacional de Municípios (CNM) | 2021 - 2024</CardSubtitle>
              <CardDescription>
                Desenvolvimento e manutenção de sistemas web utilizando React, Vue.js e Laravel. Implementação de novas funcionalidades, correção de bugs e garantia de qualidade e escalabilidade das aplicações.
              </CardDescription>
            </JourneyCard>
            {/* Experiência 2 */}
            <JourneyCard>
              <CardTitle>Analista de Desenvolvimento de Sistemas</CardTitle>
              <CardSubtitle>GSI Sistemas | 2019 - 2020</CardSubtitle>
              <CardDescription>
                Análise e projeto de sistemas de informação em PHP, além de ministrar treinamentos de uso para clientes e equipes internas.
              </CardDescription>
            </JourneyCard>
            {/* Adicione mais itens de experiência se houver */}
          </JourneyColumn>
        </JourneyGrid>
      </div>
    </JourneySection>
  );
}

export default Journey;