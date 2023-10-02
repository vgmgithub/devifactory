// src/components/ContactForm.js
import React, { useState } from 'react';
import Footer from './Footer';

import Swal from 'sweetalert2';



const Contact = () => {

    

    const interest = ['Potrait', 'Illustration', 'Painting', 'Digital Potrait'];
    interest.sort();
    const intialstate ={
        name: '',
        email: '',
        mobile: '',
        interest: '',
        message: '',
    }
    const [formData, setFormData] = useState(intialstate);
    
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'you missed to choose your interest!',
             
          })
        return;
      }
    // Handle form submission, e.g., send data to server or display a success message
      console.log('Form data:', formData);




      fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response here (success or error)
          
          localStorage.setItem('user', formData.name);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Enquiry has been noted. Will get back to you!',
            showConfirmButton: false,
            timer: 2500
            
          }).then(() => {
            setTimeout(() => {
                // Scroll to the top of the page
                window.scrollTo({ top: -200, behavior: 'smooth' });
                
                // Reload the page after a short delay (e.g., 500 milliseconds)
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }, 1000);
           
          });
            
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
      
      
      
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
                                How your friends call you ?
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
                                <label htmlFor="mobile" className="form-label">Tell me your WhatsApp ?</label>
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
                                    How to contact you officially ? (via email)
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
                                    Just type your query below
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
                            <button type="submit"  className="btn btn-primary contactbtn">
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
