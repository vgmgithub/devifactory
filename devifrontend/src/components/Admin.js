// src/components/AdminForm.js
import React, { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const Admin = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
 
    const intialstate ={
        username: '',
        password: '',
       
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
    
    // Handle form submission, e.g., send data to server or display a success message
      console.log('Form data:', formData);




      fetch(`http://${BASE_URL}:5000/api/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response here (success or error)
          console.log(data.status);
          // localStorage.setItem('admin', formData.username);
          if (data.status === 200) {
            localStorage.setItem('authenticated', 'true');
            Swal.fire({
              title: 'Welcome ' + formData.username,
              text: 'You have successfully logged in!',
              icon: 'success',
              confirmButtonColor: '#f6563b', // Set the button color here
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/home');
              }
            })
            
          } else {
            Swal.fire(
              'Sorry',
              'You dont have access to login!',
              'danger'
            )
            setFormData(intialstate);
          }
         
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
          Swal.fire(
            'Sorry',
            'You dont have access to login!',
            'danger'
          )
        });
      
      
      
  };

    return (
        <>
        <div className='body'>
            <div className="admin-form" style={{width:"400px"}}>
            <div className="container mt-5">
              
                
              
                <div className='row'>
                  <div className='card' style={{boxShadow:"1px 1px 10px #0000007d",bottom:"100px"}}>
                  <div className='card-body'>
                    <center>
                      <a className="navbar-brand loginicon"  href="/admin"  ><span className='title-highlight-loginicon' >DEVI</span> ART <span className='title-highlight-loginicon' >FACTORY</span></a>
                    
             
                    <br /><br />
                    <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                              
                              <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              maxLength="15"
                              placeholder='Username'
                              required
                              />
                              </div>
                              <div className="mb-3">
                                 
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    maxLength="15"
                                    placeholder='Password'
                                    required
                                    />
                              </div>
                              
                              <button type="submit"  className="btn btn-primary adminbtn">
                                  Login
                              </button>
                      </form>
                      </center>
                    </div>
                  </div>
                </div>
                 </div>
            </div>
            
        </div>
        <Footer/>
        </>
  );
};

export default Admin;
