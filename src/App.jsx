import { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

const App = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar contactRef={contactRef} />
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
