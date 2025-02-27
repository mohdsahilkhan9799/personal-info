import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarPage.css"; // Custom CSS
import logo from "../../Logo/my-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
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
          <Link to="/" className="navbar-brand">
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
                  onClick={(e) => handleMenuClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item px-3">
                <Link
                  to="#"
                  className="btn appointment-btn nav-link px-4"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Enquire
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Registration */}
      <div
        className="modal fade my-5"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modaltrs">
            <button
              type="button"
              className="btn-close ms-auto px-4 pt-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="container d-flex justify-content-center align-items-center">
              <div
                className="p-4"
                style={{
                  maxWidth: "400px",
                  width: "75%",
                  border: "1px solid white",
                  animation: "modalEnter 0.6s ease",
                }}
              >
                <div className="card-body text-center">
                  <div>
                    <i
                      className="feather icon-user-plus auth-icon"
                      style={{ fontSize: "2rem", color: "#007bff" }}
                    ></i>
                  </div>
                  <h3 className="mb-4">Registration</h3>
                  <form>
                    <div className="mb-3">
                      <input
                        name="name"
                        type="text"
                        id="formBasicName"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        name="email"
                        type="email"
                        id="formBasicEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        name="contact"
                        type="tel"
                        id="formBasicContact"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        name="password"
                        type="password"
                        id="formBasicPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                      Sign up
                    </button>
                  </form>
                  <p className="mb-5 text-muted">
                    Already have an account?{" "}
                    <a href="/signup" className="text-primary">
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
