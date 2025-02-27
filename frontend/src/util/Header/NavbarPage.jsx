import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarPage.css"; // Custom CSS
import logo from "../../Logo/my-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const NavbarPage = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Single scroll listener to update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu on item click

    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
 

  const [state, handleSubmit] = useForm("mwkgbqbo"); // Replace with your Formspree ID
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // When submission succeeds, show the toast notification for 3 seconds.
  useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);
  return (
    <>
      <nav
        className={`navbar backgodnav fixed-top navbar-expand-lg ${
          navbarScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left Logo */}
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
          >
            <img src={logo} alt="Logo" className="logo-left" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler black-toggle bg-white"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => handleMenuClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => handleMenuClick(e, "about")}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => handleMenuClick(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => handleMenuClick(e, "skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => handleMenuClick(e, "education")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item px-3">
                <Link
                  to="#"
                  className="btn appointment-btn nav-link px-4"
                 
                  onClick={(e) => handleMenuClick(e, "contact")}

                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center textde">
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohd-sahil-a8762924b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-center"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/mohdsahilkhan9799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-center"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100006566191706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-center"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/mohd_sahil_khan9799/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-center"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Registration */}
      <div
      className="modal fade enquiry-modal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modaltrs" data-aos="zoom-in">
          <button
            type="button"
            className="btn-close ms-auto px-4 pt-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="p-4 backteck">
              <div className="card-body text-center">
                <div className="icon-wrapper">
                  <i
                    className="feather icon-user-plus auth-icon"
                    style={{ fontSize: "2.5rem", color: "#007bff" }}
                  ></i>
                </div>
                <h3 className="mb-4 chektest">Enquire</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control rounded-pill" 
                        placeholder="Your Name" 
                        required 
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name" 
                        errors={state.errors} 
                        className="error"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control rounded-pill" 
                        placeholder="Your Email" 
                        required 
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email" 
                        errors={state.errors} 
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      name="subject" 
                      className="form-control rounded-pill" 
                      placeholder="Subject" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <textarea 
                      name="message" 
                      className="form-control" 
                      rows="5" 
                      placeholder="Message" 
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message" 
                      errors={state.errors} 
                      className="error"
                    />
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      disabled={state.submitting} 
                      className="submit-button"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showNotification && (
        <div className="toast-notification" data-aos="fade-up">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8NrkQQ3JdnSafmj1OxzwRWOmN2LU91W05Ruqn-Ym05ucVOizo7429SK668id7JrGrgo&usqp=CAU"
            alt="Success"
            className="toast-image"
          />
          <p className="toast-message">
            Thank you for your message! 😊 We will get back to you soon!
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default NavbarPage;
