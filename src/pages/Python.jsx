import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/python.webp';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import pythonIcon from './Images/python.svg';
import tableauIcon from './Images/Tableau-Logo.png';
import sqlIcon from './Images/sql.png';
import flaskIcon from './Images/flask.png';
import pandasIcon from './Images/pandas.png';
import jupyterIcon from './Images/jypter.png';
import ProgramAdvantage from "../components/ProgramAdvantage";


const modules = [
  {
    title: "Introduction to Programming with Python",
    duration: "1 Week",
    contents: [
      "Python Setup & Environment",
      "Variables, Data Types & Operators",
      "Control Flow (if, loops)",
      "Functions and Modules"
    ]
  },
  {
    title: "Object-Oriented Programming in Python",
    duration: "1.2 Weeks",
    contents: [
      "Classes and Objects",
      "Inheritance & Polymorphism",
      "Encapsulation",
      "Error Handling & Exceptions"
    ]
  },
  {
    title: "Working with Data in Python",
    duration: "1.5 Weeks",
    contents: [
      "File Handling (CSV, JSON)",
      "Python Libraries: `os`, `datetime`, `random`",
      "List, Dict & Set Comprehensions"
    ]
  },
  {
    title: "Database Integration",
    duration: "1.3 Weeks",
    contents: [
      "SQL Basics",
      "Connecting Python with MySQL/PostgreSQL",
      "CRUD Operations",
      "Using SQLite"
    ]
  },
  {
    title: "Web Development with Flask",
    duration: "2 Weeks",
    contents: [
      "Routing & Templates",
      "Forms and Validation",
      "Connecting with a Database",
      "Deploying Flask App"
    ]
  },
  {
    title: "API Development",
    duration: "1.2 Weeks",
    contents: [
      "REST API Concepts",
      "Building APIs using Flask/ FastAPI",
      "Testing with Postman"
    ]
  },
  {
    title: "Version Control and Collaboration",
    duration: "0.5 Week",
    contents: [
      "Git Basics",
      "GitHub Collaboration",
      "Branching & Merging"
    ]
  },
  {
    title: "Automating Tasks with Python",
    duration: "1 Week",
    contents: [
      "Web Scraping with BeautifulSoup",
      "Automating Emails & Files",
      "Scheduling with `cron` or `schedule`"
    ]
  },
  {
    title: "Testing & Debugging",
    duration: "0.8 Weeks",
    contents: [
      "Unit Testing with `unittest` & `pytest`",
      "Debugging Tools & Techniques"
    ]
  },
  {
    title: "Capstone Project & Deployment",
    duration: "1.5 Weeks",
    contents: [
      "End-to-End Project Build",
      "Code Optimization",
      "Deployment on Heroku/Vercel",
      "Resume & Portfolio Preparation"
    ]
  }
];


const Python = () => {
  const brochureRef = useRef();
    
      const [openIndex, setOpenIndex] = useState(null);
    
       const toggleModule = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const handleBrochureClick = () => {
        if (brochureRef.current) {
          brochureRef.current.openModal();
        }
      };

  return (
    <>
      <Navbar />
      <BrochureModal ref={brochureRef} />
      <section className="datascience-section">
        <div className="datascience-container">
          <div className="datascience-left">
            <div className="datascience-breadcrumb">
              HOME / COURSE / PYTHON PROGRAMMING
            </div>
            <h1 className="datascience-heading">
              Become a Professional <span className="highlight">Python Developer</span> With Real-World Skills
            </h1>
            <div className="datascience-association-badge">
              <span className="badge-pulse"></span>
              <p className="datascience-subheading">In association with :</p>
            </div>
            <div className="datascience-logos">
              <img src={expert} alt="Partner" className="logo" />
            </div>
            <div className="datascience-info">
              <div className="info-box">
                <p className="info-label">Duration :</p>
                <strong className="info-value">6 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn Python from basics to advanced, including web development, automation, data handling, and scripting.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="Python Course" className="datascience-side-img" />
          </div>
        </div>
              <section className="tools-section">
  <div className="tools-content">
    <p className="tools-subtitle">Curriculum built for real-world impact</p>
    <h2 className="tools-heading">Learn in-demand tools & technologies</h2>
    <p className="tools-desc">
      Enrich your skills with a curriculum built and delivered by industry experts.
    </p>
  </div>
  <div className="tools-icons">
    <div className="tools-icons">
  <div className="tool-item"><img src={pythonIcon} alt="Python" /> Python</div>
  <div className="tool-item"><img src={tableauIcon} alt="Tableau" /> Tableau</div>
  <div className="tool-item"><img src={sqlIcon} alt="SQL" /> SQL</div>
 <div className="tool-item"><img src={flaskIcon} alt="Flask" /> Flask</div>
  <div className="tool-item"><img src={pandasIcon} alt="Pandas" /> Pandas</div>
  <div className="tool-item"><img src={jupyterIcon} alt="Jupyter" /> Jupyter</div>
</div>

  </div>
</section>
      </section>

      {/* ===== Curriculum Section ===== */}
            <section className="curriculum-section">
              <div className="curriculum-container">
                <div className="curriculum-left">
                  <h3>Industry Oriented Curriculum</h3>
                  <p>
                    Explore each topic in-depth through interactive sessions, real-world use cases, and tool-based learning.
                  </p>
                  <div className="curriculum-boxes">
                    <div className="curriculum-box">10+<br />Case Studies & Projects</div>
                    <div className="curriculum-box">30+<br />Tools</div>
                    <div className="curriculum-box">100+<br />Live Sessions</div>
                  </div>
                </div>
      
                <div className="curriculum-right">
                  {modules.map((mod, index) => (
                    <div key={index} className="curriculum-module">
                      <div className="module-header" onClick={() => toggleModule(index)}>
                        <h4>{mod.title}</h4>
                        <span className="module-duration">📅 {mod.duration}</span>
                      </div>
                      {openIndex === index && (
                        <ul className="module-contents">
                          {mod.contents.map((item, idx) => (
                            <li key={idx}> {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
                  
            <ProgramAdvantage/>
             <section className="certificate-wrapper">
            <h2 className="certificate-heading">Get Certified in Data Science, Analytics & AI</h2>
      
            <div className="certificate-flex">
              {/* Left Side Text */}
              <div className="certificate-left">
                <h3 className="cert-title">Techghuru Certificate</h3>
                <h4 className="cert-subtitle">Advanced Certification in Data Science, Analytics & AI</h4>
                <p className="cert-description">
                  Our comprehensive program provides you with the industry-relevant tools, real-time projects,
                  and mentorship needed to become a successful Data Scientist. With practical exposure to Python,
                  Machine Learning, Power BI, and AI, you gain the competitive edge to lead in the data-driven world.
                </p>
                <p className="cert-description">
                  Upon completion, you will receive a globally valid certificate from Techghuru and additional badges
                  from IBM and NSDC, validating your expertise in Data Science and Analytics.
                </p>
                <button className="cert-button">Enquire Now →</button>
              </div>
      
              {/* Right Side Image */}
              <div className="certificate-right">
                <img src={certificateImage} alt="Techghuru Certificate" className="cert-image" />
              </div>
            </div>
          </section>
      
      <Footer />
    </>
  );
};

export default Python;
