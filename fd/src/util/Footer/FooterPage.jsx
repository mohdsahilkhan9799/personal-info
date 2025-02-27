import React from 'react';
import './FooterPage.css'; // Custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../../Logo/my-logo.png"

const FooterPage = () => {
  return (
   <>
   <footer className="footer-container">
  <div className="footer-content">
    
    {/* Logo & Address Section */}
    <div className="footer-section">
      <h2>
        <div className="logo-animation d-flex gap-5">
          <img 
            src={logo}
            alt="Mohd Sahil Logo" 
            width={130} 
            height={60} 
          />
        </div>
        Mohd Sahil - Portfolio
      </h2>
      <p>Chhattarpur, New Delhi (110074), India</p>
    </div>

    {/* Contact Section */}
    <div className="footer-section">
      <h3>Contact Me</h3>
      <p><i className="fas fa-phone"></i> Phone: (+91) 9720004494</p>
      <p><i className="fas fa-envelope"></i> Email: sksahilkhan111111@gmail.com</p>
      <p><i className="fas fa-globe"></i> <a href="https://mohdsahilportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
    </div>

    {/* Social Media Section */}
    <div className="footer-section">
      <h3>Follow Me</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mohd-sahil-a8762924b/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/mohdsahilkhan9799" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom mb-0">
    <p>© 2025 Mohd Sahil. All Rights Reserved.</p>
  </div>
</footer>

   </>
  );
};

export default FooterPage;
