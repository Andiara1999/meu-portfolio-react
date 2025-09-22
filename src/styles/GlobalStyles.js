import { createGlobalStyle } from 'styled-components';

// Defina seu tema de cores e fontes aqui
export const theme = {
  colors: {
    background: '#091b29', // Um azul escuro quase preto
    primary: '#0e76fd',   // O azul vibrante principal
    secondary: '#cbd5e0', // Um cinza claro para textos secundários
    text: '#f7fafc',      // Branco para texto principal
    cardBg: '#2d3748',    // Fundo dos cartões (um pouco mais claro que o background)
    borderColor: '#4a5568', // Borda para elementos
    buttonHover: '#0a64e2', // Azul mais escuro no hover do botão
  },
  fonts: {
    body: 'Inter, sans-serif', // Use 'Inter' ou 'Montserrat'
    heading: 'Montserrat, sans-serif', // Use 'Montserrat' ou 'Inter'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '48px',
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.medium};
    text-align: center;
  }

  h1 { font-size: 3.5em; }
  h2 { font-size: 2.5em; }
  h3 { font-size: 1.8em; }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.colors.buttonHover};
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  section {
    padding: ${props => props.theme.spacing.xlarge} 0;
  }
`;

export default GlobalStyles;