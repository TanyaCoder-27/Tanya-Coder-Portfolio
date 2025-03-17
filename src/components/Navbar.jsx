import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Navbar = ({ contactRef,theme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
      menuButton.addEventListener('click', handleMenuToggle);
    }
    console.log("Current Theme:", theme);
    return () => {
      if (menuButton) {
        menuButton.removeEventListener('click', handleMenuToggle);
      }
    };
  }, [isMenuOpen]);

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Tanya</div>

        {/* Navbar Links */}
        <div className='space-x-6 hidden sm:flex'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Skills</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Button */}
        <button 
          onClick={scrollToContact} 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden sm:inline'
        >
          Contact Me
        </button>

        {/* Mobile Menu Button */}
        <div className='block sm:hidden'>
          <button className='text-white' id='menu-button'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id='menu' className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <a href="#home" className='block px-4 py-2 hover:bg-gray-700'>Home</a>
        <a href="#about" className='block px-4 py-2 hover:bg-gray-700'>About Me</a>
        <a href="#service" className='block px-4 py-2 hover:bg-gray-700'>Skills</a>
        <a href="#project" className='block px-4 py-2 hover:bg-gray-700'>Projects</a>
        <a href="#contact" className='block px-4 py-2 hover:bg-gray-700'>Contact</a>


        <button 
          onClick={scrollToContact} 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full'
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  contactRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};


export default Navbar;
