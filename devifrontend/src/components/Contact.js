// src/components/ContactForm.js
import React, { useState } from 'react';
import Footer from './Footer';





const Contact = () => {

    

    const interest = ['Potrait', 'Illustration', 'Painting', 'Digital Potrait'];
    interest.sort();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: '',
        message: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
 

  const handleSubmit = (e) => {
      e.preventDefault();
       // Perform form validation here
    if (formData.interest === '') {
        alert('Please select a interest.');
        return;
      }
    // Handle form submission, e.g., send data to server or display a success message
      console.log('Form data:', formData);
      localStorage.setItem('user', formData.name);
      window.location.reload();
  };

    return (
        <>
        <div className='body'>
            <div className="contact-form">
                <div className="container mt-5">
                    <h2 style={{height:"55px"}} className='deviborder'>One Click Away</h2><p className='contacttag'>Take a small step ahead and join my World</p><br/><br/>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            maxLength="15"
                            required
                            />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    className="form-control"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="interest" className="form-label">
                                    Looking for
                                </label>
                                <select name='interest' className='form-control' onChange={handleChange}>
                                    <option  value=''>Select your Interest</option>
                                    <option  value='general'>General Topic</option>
                                    {interest.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                    </form>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
  );
};

export default Contact;
