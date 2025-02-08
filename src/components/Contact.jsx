import { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_4xtohnd', 'template_99wn9fc', { name, email, message: `From: ${email}\n\nMessage: ${message}` }, '-rCWyXlIQbA9hHrNy')

      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
      });
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
              <form className='space-y-4' onSubmit={sendEmail}>

              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />

              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows="5" placeholder='Enter Your Message' value={message} onChange={(e) => setMessage(e.target.value)} />

              </div>
              <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
