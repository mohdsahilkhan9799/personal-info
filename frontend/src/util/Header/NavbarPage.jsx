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

    </>
  );
};

export default NavbarPage;
