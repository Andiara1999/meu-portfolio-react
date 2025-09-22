
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './styles/GlobalStyles';

// Importe todos os seus componentes
import Navbar from './components/Navbar'; // <-- IMPORTAR O NAVBAR
import Header from './components/Header';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar /> {/* <-- RENDERIZAR O NAVBAR AQUI */}
      <Header />
      <main>
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;