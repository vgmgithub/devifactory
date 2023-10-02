// src/components/NotAuthorized.js
import React from 'react';
import RandomShuffleText from './RandomShuffleText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const NotAuthorized = () => {

    

 
    return (
        <>
        <div className='body'>
            <div className="contact-form">
                    <div className="container mt-5">
                        <center>
                            <span className='title-highlight' style={{ fontSize: "35px" }}> You are not <RandomShuffleText text={"authenticated"} compstyle={3} />.<br></br> Please log in. </span>
                            <br></br>
                            <Link to={"/admin"}><button className='btn btn-primary authbtn'><FontAwesomeIcon icon={faArrowLeft} /></button></Link>
                        </center>
                    </div>
            </div>
            
        </div>
     
        </>
  );
};

export default NotAuthorized;
