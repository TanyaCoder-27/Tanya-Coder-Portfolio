
import { useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Skills';

const App = () => {
  const contactRef = useRef(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Navbar contactRef={contactRef} toggleTheme={toggleTheme} theme={theme} />
      <Hero contactRef={contactRef} />
      <About />
      <Service />
      <Projects />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
