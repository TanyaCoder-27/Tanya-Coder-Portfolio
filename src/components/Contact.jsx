import { forwardRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  const [state, handleSubmit] = useForm("xnnoawqw");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    await handleSubmit(e);
    if (state.succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  Contact.displayName = 'Contact';

  return (
    <div className="bg-black text-white py-20" id="contact" ref={ref}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>You can contact me&apos;</h3>
            <p>I am open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:tanyakonapala@gmail.com" className='hover:underline'>tanyakonapala@gmail.com</a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+91 6302601497</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>Tadepalligudem, West Godavari, Andhra Pradesh, India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            {state.succeeded && (
              <div className="mb-4 p-4 bg-green-800 text-green-200 rounded">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            {state.errors && state.errors.length > 0 && (
              <div className="mb-4 p-4 bg-red-800 text-red-200 rounded">
                Something went wrong. Please try again.
              </div>
            )}
            <form className='space-y-4' onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className={`w-full p-2 rounded bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:border-green-400`}
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full p-2 rounded bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:border-green-400`}
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  className={`w-full p-2 rounded bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:border-green-400`}
                  rows="5"
                  placeholder='Enter Your Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
