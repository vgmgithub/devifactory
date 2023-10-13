import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const facebooklink = "https://www.facebook.com/saranya.devi.7399";
    // const twitterProfileLink = "https://www.facebook.com/saranya.devi.7399";
    const linkedinlink = "https://www.linkedin.com/in/saranya-devi-43107315a/";
    const instalink = "https://www.instagram.com/saranya_devi_/";
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p> &copy; {new Date().getFullYear()} Devi Art Factory. All rights reserved. Designed by VGM.</p>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
                <a href={facebooklink} target="_blank" className='sociallink'  rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} /> 
                </a>
                {/* <a href={twitterProfileLink} target="_blank"  className='sociallink' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter}/>
                </a> */}
                <a href={instalink} target="_blank"  className='sociallink' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href={linkedinlink} target="_blank"  className='sociallink' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
