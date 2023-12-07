import React, { useState } from 'react';

import BalanceProvider from './balancecontext';

<BalanceProvider/>
const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
    
    setFormData({
      name: '',
      email: '',
      
    });
  };

  return (
    <> 
    <div className='text-center div2'>
      <h2 className='con text-success'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label    htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className='name1'
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className='email1'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
       
        <button type="submit" className='btn4  m-4 btn-sm'>Submit</button>
      </form>
     
    </div>
    </>
  );
};

export default ContactForm;
