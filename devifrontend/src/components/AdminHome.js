// src/components/AdminHome.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Dashboard from './Dashboard';
import NotAuthorized from './NotAuthorized';
import Booking from './Booking';
import Upload from './Upload';

const AdminHome = () => {

    const isAuthenticated = localStorage.getItem('authenticated');
    
 
    const [activeLink, setActiveLink] = useState(null);
    const handleLogout = () => {
        // Remove the "authenticated" flag from localStorage
        localStorage.removeItem('authenticated');
        Swal.fire(
            'Will Meet Back Soon !',
            'You logged out of Admin Console!',
            'success'
        ).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
        
      };
    const handleClick = (sectionId) => {
        // Display an alert when a link is clicked
        //   alert(`You clicked on ${sectionId}`);
        setActiveLink(sectionId);
        //   const storedUserName = localStorage.getItem('user');
        // console.log('stored anme  '+storedUserName); // Outputs 'John Doe'
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const menuClasses = `navbar-collapse ${isMenuOpen ? 'show' : ''}`;

    if (!isAuthenticated) {
        return <NotAuthorized/>
    } else {
      
  
 
        return (
            <div>
                <nav id="navbar-example" className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand titleicon" href="#home" onClick={() => handleClick('')}><span className='title-highlight-icon'>DEVI</span> ART <span className='title-highlight-icon'>FACTORY</span></a>
                
             
                        <button className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={menuClasses} id="navbarNav">
                            <ul className="navbar-nav adminnav">
                                {/* <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li> */}
                                <li className="nav-item">
                                    <a className={activeLink === 'home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={() => handleClick('home')}>Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeLink === 'booking' ? 'nav-link active' : 'nav-link'} href="#booking" onClick={() => handleClick('booking')}>Bookings Enquiry</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeLink === 'uploaddata' ? 'nav-link active' : 'nav-link'} href="#uploaddata" onClick={() => handleClick('uploaddata')}>Upload</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link"   onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" className="scrollspy-example">
                    <div id="home"  >
                        <Dashboard />
                  
                    </div>
                    <hr />
                    <div id="booking" className='contentsection'>
                        <Booking/>
                    
                    
                    </div>
                    <hr />
                    
            
                    <div id="uploaddata" className='contentsection'  >
                
                        <Upload/>
                    </div>
                   
                </div>
          
            </div>
        );
    };
}

export default AdminHome;
