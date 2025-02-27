import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS
import mohdSahilImg from '../../Logo/WhatsApp Image 2025-02-26 at 11.01.05 AM.jpeg';
import './HomePage.css';  // Custom CSS
import reactIcon from '../../Logo/icone/image.png';  // Replace with your own icons
import reduxIcon from '../../Logo/icone/download (1).png';
import jsIcon from '../../Logo/icone/download (2).png';
import nodeIcon from '../../Logo/icone/download (3).png';
import expressIcon from '../../Logo/icone/download (4).png';
import htmlIcon from '../../Logo/icone/download (6).png';
import cssIcon from '../../Logo/icone/download (7).png';
import tailwindIcon from '../../Logo/icone/download (8).png';
import bootstrapIcon from '../../Logo/icone/download (9).png';
import materialUiIcon from '../../Logo/icone/download (10).png';
import mongoIcon from '../../Logo/icone/download (11).png';
import githubIcon from '../../Logo/icone/download (12).png';
import gitIcon from '../../Logo/icone/download (13).png';
import netlifyIcon from '../../Logo/icone/download (14).png';
import vercelIcon from '../../Logo/icone/download (14).png';
import { Button, Modal } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdf from '../../Logo/pdf/MOHD-SAHIL-resume.pdf';
import myvideo from "../../Logo/0_Man_Singing_1080x1080.mp4"
import { useForm, ValidationError } from '@formspree/react';

const skills = [
  { name: 'React JS', icon: reactIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express.js', icon: expressIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Material UI', icon: materialUiIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Git VCS', icon: gitIcon },
  { name: 'Netlify', icon: netlifyIcon },
  { name: 'Vercel', icon: vercelIcon },
];
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setNavbarScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
   
  
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
        const offset = 80; // Adjust this if your navbar height is different
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
 
  const projectsData = [
    {
      id: 1,
      title: 'Knowledge Tribal Portal',
      date: 'Unknown',
      codeLink: '', // No code link provided
      liveLink: 'https://knowledge.tribal.gov.in/',
      image: "https://knowledge.tribal.gov.in/wp-content/uploads/digital-knowledge-repository-logo.jpg", // Replace with your actual project image
      description:
        'A government knowledge-sharing portal designed to provide insights into tribal governance and policies. Key features include a discussion forum and efficient handling of large datasets.',
    },
    {
      id: 2,
      title: 'Verdical ERP',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://erp.verdical.in/login',
      image: "https://erp.verdical.in/images/icons/Verdical-Fab-Icon.png",
      description:
        'An ERP solution built with the MERN stack and Tailwind CSS to streamline accounting and financial operations. Features include financial management, a user dashboard, and performance optimization.',
    },
    {
      id: 3,
      title: 'Dr. Archika Web-Application',
      date: 'Nov 2022',
      codeLink: 'https://github.com/mohdsahilkhan9799/dr-archika',
      liveLink: 'https://drarchikadidi.com/',
      image: "https://api.drarchikadidi.com/public/images/image_6-1729663249146-724288781.webp",
      description:
        'A comprehensive web application developed for a health and wellness client. It features an admin panel with Redux for state management, responsive design using Bootstrap and Material UI, and efficient data fetching with Axios.',
    },
    {
      id: 4,
      title: 'Anugami E-commerce Website',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://anugami.com/',
      image: "https://anugami.com/uploads/media/2024/anugmai_text_with_space_bold-03.svg",
      description:
        'A dynamic e-commerce platform for purchasing clothing and accessories. Built with Node.js, Nodemailer, and Cron jobs, it features real-time product listings, secure payment gateway integration, and automated order processing.',
    },
    {
      id: 5,
      title: 'BFSI Skoch',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://bfsi.skoch.in/',
      image: "https://bfsi.skoch.in/images/skoch-bfsi-award-design-image.png",
      description:
        'A website dedicated to the Banking, Financial Services, and Insurance (BFSI) sector, offering industry insights, case studies, and a comprehensive resource hub.',
    },
    {
      id: 6,
      title: 'ESG Skoch',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://esg.skoch.in/',
      image: "https://esg.skoch.in/images/skoch-esg-award-design-image.png",
      description:
        'A platform focused on Environmental, Social, and Governance (ESG) initiatives. It delivers detailed reports, charts, and insights into sustainable business practices.',
    },
    {
      id: 7,
      title: 'Portfolio Website',
      date: 'Oct 2023',
      codeLink: '', // Code not specified
      liveLink: 'https://mohdsahilportfolio.vercel.app/',
      image: "https://mohdsahilportfolio.vercel.app/static/media/nav_logo.a5819e918c71eb4f5a8f.png",
      description:
        'A personal portfolio website showcasing projects and skills, built using React.js and Material UI.',
    },
    {
      id: 8,
      title: 'S-Mart Multi-Vendor Platform',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://s-martweb.vercel.app/',
      image: "https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...6BpBdJnBnJwXs1M3EMoAJtlyIqhfZv8...4y",
      description:
        'A multi-vendor e-commerce platform supporting multiple vendor admins and a super admin. Features include robust inventory management, secure payment integration, and automated email notifications using Nodemailer and Cron jobs.',
    },
    {
      id: 9,
      title: 'Magnety',
      date: 'Unknown',
      codeLink: '', // Code not specified
      liveLink: 'https://magnety.vercel.app/',
      image: "https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...6GrhRHmh...JwXs1M3EMoAJtlyMqh...Bq...fw4",
      description:
        'A dynamic web application showcasing innovative UI/UX design and modern web development techniques.',
    },
  ];

  // Modal state
  const [selectedProject, setSelectedProject] = useState(null);
  const [state, handleSubmit] = useForm("mwkgbqbo");

  if (state.succeeded) {
    return (
      <div className="success-container" style={{ marginTop: "150px", textAlign: "center" }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8NrkQQ3JdnSafmj1OxzwRWOmN2LU91W05Ruqn-Ym05ucVOizo7429SK668id7JrGrgo&usqp=CAU" 
          alt="Thank You" 
          className="success-image" 
        />
        <p className="success-message">
          Thank you for your message! 😊 We will get back to you soon!
        </p>
      </div>
    );
  }
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" id='home'>
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <h1 className="animated-text">
                <Typewriter
                  options={{
                    strings: [
                      'Hello, I’m Mohd Sahil',
                      'I have 3 years of experience',
                      'I am into Software Development',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </h1>

              <p className="hero-description">
                I create modern, high-performance, and visually appealing applications that enhance user experience and efficiency.
              </p>

              <div className="btn-group mt-3">
                <button className="btn btn-primary me-3"onClick={(e) => handleMenuClick(e, "contact")}>Hire Me</button>
                <button className="btn btn-outline-light">
                  <a
                    href={pdf}
                    style={{ textDecoration: 'none', color: 'white' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Resume
                  </a>
                </button>
              </div>

              <div className="exp mt-4">
                <p>5+ Years Experience | 50+ Projects Completed | 50+ Happy Clients</p>
              </div>
            </div>

            {/* Right Side: Circular, Bouncing Image */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src={mohdSahilImg}
                alt="Profile"
                className="img-fluid bouncing-img"
                style={{ opacity: '0.9' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ABOUT SECTION */}

    <section className="about-section py-5" id='about'>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="mb-3">About</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            I am a Full Stack Developer and Designer based in Delhi, India.
            Fascinated by knowledge, constantly learning, and pushing the boundaries of modern web development.
          </p>
        </div>

        {/* Main Row */}
        <div className="row align-items-center ">
          {/* Left Column: Video */}
          <div className="col-lg-5 mb-4 mb-lg-0 " data-aos="fade-right">
            <video className="w-100 side-video" autoPlay muted loop playsInline>
              <source
                src={myvideo}
                type="video/mp4"
              />
              {/* If you have a local video, you could do:
                  <source src={localVideo} type="video/mp4" /> */}
            </video>
          </div>

          {/* Right Column: About Me Content */}
          <div className="col-lg-7 " data-aos="fade-left">
            <h2 className="fw-bold mb-3">Full Stack &amp; Web Developer</h2>
            <p className="text-secondary">
              I am a Full Stack Developer and Designer based in Delhi, India, fluent in spoken, written, and reading English.
              Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in building ethereal and
              responsive front-end interfaces, writing cross-browser code, and converting elegant designs into working HTML &amp; CSS.
              My passion lies in creating high-performance, reusable UI components that look great across all resolutions—iPhone,
              iPad, tablets, etc. I’m also enthusiastic about working in startups and contributing to meaningful projects.
            </p>

            {/* Info Box */}
            <div className="bg-light p-4 rounded shadow info-box mt-4" data-aos="zoom-in">
              <div className="row mb-2">
                <div className="col-sm-4 fw-bold">Name:</div>
                <div className="col-sm-8">MOHD SAHIL</div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 fw-bold">Phone:</div>
                <div className="col-sm-8">+91 9720004494</div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 fw-bold">Age:</div>
                <div className="col-sm-8">25 Years</div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 fw-bold">Email:</div>
                <div className="col-sm-8">email@example.com</div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 fw-bold">Position:</div>
                <div className="col-sm-8">Software Engineer</div>
              </div>
            </div>

            {/* Signature */}
            <div className="signature mt-4">
              <p className="mb-0 fw-bold">Mohd Sahil</p>
            </div>
          </div>
        </div>

        {/* Key Highlights / Premium Features */}
        <div className="row premium-highlights mt-5" data-aos="fade-up">
          <h3 className="text-center mb-4">Key Highlights</h3>
          <div className="col-md-6">
            <div className="highlight-box d-flex align-items-start mb-3">
              <FontAwesomeIcon icon="fa-solid fa-check-circle" className="highlight-icon me-3 text-success" />
              <p className="highlight-text">
                Proven track record in building <strong>scalable</strong> web applications focusing on performance.
              </p>
            </div>
            <div className="highlight-box d-flex align-items-start mb-3">
              <FontAwesomeIcon icon="fa-solid fa-check-circle" className="highlight-icon me-3 text-success" />
              <p className="highlight-text">
                Experience with <strong>REST APIs</strong> and modern deployment processes.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="highlight-box d-flex align-items-start mb-3">
              <FontAwesomeIcon icon="fa-solid fa-check-circle" className="highlight-icon me-3 text-success" />
              <p className="highlight-text">
                Deep understanding of <strong>UI/UX</strong> best practices and cross-platform compatibility.
              </p>
            </div>
            <div className="highlight-box d-flex align-items-start mb-3">
              <FontAwesomeIcon icon="fa-solid fa-check-circle" className="highlight-icon me-3 text-success" />
              <p className="highlight-text">
                Proficient in <strong>Git</strong> workflows for efficient team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="skills-section" id='skills'>
      <div className="container">
        {/* Header */}
        <div className="skills-header" data-aos="fade-up">
          <h2>My Skills &amp; Abilities</h2>
          <p className="subheading">
            The tools and technologies I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skill Pill Bubbles */}
        <div className="skill-pill-bubbles" data-aos="fade-up">
          <div className="pill">Responsive Design</div>
          <div className="pill">Modern UI/UX</div>
          <div className="pill">Performance Optimization</div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" data-aos="zoom-in" key={index}>
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="projects-section" id='projects'>
      <div className="container">
        <h2 className="section-heading" data-aos="fade-up" style={{ overflow: 'hidden' }}>
          Our Projects
        </h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              className="project-card"
              key={project.id}
              data-aos="flip-up"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
              </div>
              <div className="arrow-down">
                ▼ <FontAwesomeIcon icon="fa-solid fa-eye" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
            <span className="close-modal" onClick={() => setSelectedProject(null)}>
              &times;
            </span>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h3>{selectedProject.title}</h3>
            <p className="modal-designation">{selectedProject.date}</p>
            <p className="modal-description">{selectedProject.description}</p>
            {selectedProject.codeLink && (
              <p>
                <strong>Project Code: </strong>
                <a href={selectedProject.codeLink} target="_blank" rel="noreferrer">
                  {selectedProject.codeLink}
                </a>
              </p>
            )}
            {selectedProject.liveLink && (
              <p>
                <strong>Live Project: </strong>
                <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">
                  {selectedProject.liveLink}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </section>


   <section className="contact-section py-5" id='contact'>
      <div className="container">
        {/* Header */}
        <div className="contact-header text-center mb-5" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p className="subheading">
            I'm available for freelance work and collaborations. Drop me a message!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="row contact-info-row" data-aos="fade-up">
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" size="2x" className="icon" />
              <h5>Address</h5>
              <p>Chhatterpur New Delhi 110074</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <FontAwesomeIcon icon="fa-solid fa-phone" size="2x" className="icon" />
              <h5>Phone</h5>
              <p>+91 9720004494</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <FontAwesomeIcon icon="fa-solid fa-envelope" size="2x" className="icon" />
              <h5>Email</h5>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
      <div className="row">
        <div className="col-md-6 mb-3">
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="col-md-6 mb-3">
          <input 
            type="email" 
            name="email" 
            className="form-control" 
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
          className="form-control" 
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
    </section>
    </>
  );
};

export default HomePage;
