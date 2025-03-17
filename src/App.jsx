import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

const App = () => {
  const contactRef = useRef(null);

  // Load theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme to document body on mount & theme change
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <div>
      <Navbar contactRef={contactRef} theme={theme} toggleTheme={toggleTheme} />
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
