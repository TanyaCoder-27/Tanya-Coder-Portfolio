import PropTypes from 'prop-types';
import HeroImage from '../assets/hero-image.png';

const Hero = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open('https://drive.google.com/uc?id=11ZZq2b6W64VQlZ20aOxs6HCkVZ_5nwcP', '_blank');
  };

  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Andra Tulasi Lakshmi Tanya</span>, passionate Computer Science student with a focus on building modern and responsive web applications.</h1>
      <p className='mt-4 text-lg text-gray-300'>I am interested in Web development, Data Analysis and GenAI.</p>
      <div className='mt-8 space-x-4'>
        <button onClick={scrollToContact} className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button onClick={openResume} className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  contactRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Hero;
