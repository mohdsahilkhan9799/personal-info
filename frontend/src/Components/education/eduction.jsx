import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './education.css';

const experienceData = [
  {
    id: 1,
    company: "Skoch Group",
    period: "Oct 2024 – Present",
    role: "Full Stack Developer",
    description: [
      "Developing high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Spearheading UI/UX improvements with React.js and Material UI to deliver intuitive, responsive interfaces.",
      "Collaborating with cross-functional teams to design scalable digital solutions for socio-economic and business initiatives.",
      "Implementing secure JWT-based authentication and efficient state management with Redux for seamless performance."
    ],
    backgroundImage: "https://via.placeholder.com/1600x600?text=Skoch+Group", // Replace with your actual image
  },
  {
    id: 2,
    company: "Previous Company",
    period: "Mar 2022 - Sep 2023",
    role: "Front-End Developer",
    description: [
      "Designed and implemented responsive, interactive front-end pages using HTML, CSS, and JavaScript.",
      "Collaborated with UX/UI designers to convert wireframes into functional and aesthetically pleasing interfaces.",
      "Ensured cross-browser compatibility and responsive design using Bootstrap and Tailwind CSS.",
      "Utilized Git for efficient version control and team collaboration."
    ],
    backgroundImage: "https://via.placeholder.com/1600x600?text=Previous+Company", // Replace with your actual image
  },
  // Add more experience entries if needed...
];

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const closeModal = () => setSelectedExperience(null);

  return (
    <div className="experience-page">
      {/* Banner Section */}
      <section className="exp-banner">
        <div className="banner-overlay" data-aos="fade">
          <h1>My Professional Experience</h1>
          <p>Building solutions that drive growth</p>
        </div>
      </section>

      {/* Experience Cards Section */}
      <section className="exp-section py-5">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Experience</h2>
          <div className="exp-cards">
            {experienceData.map(exp => (
              <div
                key={exp.id}
                className="exp-card"
                data-aos="flip-up"
                onClick={() => setSelectedExperience(exp)}
              >
                <div
                  className="exp-card-image"
                  style={{ backgroundImage: `url(${exp.backgroundImage})` }}
                ></div>
                <div className="exp-card-info">
                  <h3>{exp.company}</h3>
                  <span>{exp.period}</span>
                  <p>{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Experience Details */}
      {selectedExperience && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div
              className="modal-header"
              style={{ backgroundImage: `url(${selectedExperience.backgroundImage})` }}
            >
              <div className="modal-header-overlay">
                <h2>{selectedExperience.company}</h2>
                <span>{selectedExperience.period}</span>
              </div>
            </div>
            <div className="modal-body">
              <h3>{selectedExperience.role}</h3>
              <ul>
                {selectedExperience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
