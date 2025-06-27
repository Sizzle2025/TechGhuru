import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/fullstack.webp';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import htmlIcon from './Images/html.webp';
import cssIcon from './Images/css.png';
import jsIcon from './Images/javascript.png';
import reactIcon from './Images/react.png';
import nodeIcon from './Images/node.png';
import mongoIcon from './Images/mongodb.png';
import ProgramAdvantage from "../components/ProgramAdvantage";


const modules = [
  {
    title: "Web Development Fundamentals",
    duration: "1 Week",
    contents: [
      "How the Web Works",
      "HTTP, HTTPS, DNS, Hosting Basics",
      "DevTools & VS Code Setup",
      "Intro to Full Stack Architecture"
    ]
  },
  {
    title: "HTML & CSS Mastery",
    duration: "1.5 Weeks",
    contents: [
      "HTML5 Semantic Tags",
      "CSS Flexbox & Grid",
      "Responsive Design (Media Queries)",
      "CSS Animations & Transitions"
    ]
  },
  {
    title: "JavaScript (ES6+) Essentials",
    duration: "2 Weeks",
    contents: [
      "Variables, Data Types, Functions",
      "DOM Manipulation",
      "ES6 Features (Arrow Functions, Spread, Destructuring)",
      "Fetch API & Async/Await"
    ]
  },
  {
    title: "Version Control & Deployment",
    duration: "0.7 Weeks",
    contents: [
      "Git Basics & GitHub",
      "Branching, Merging",
      "Deploying Static Sites (Netlify, Vercel)"
    ]
  },
  {
    title: "React.js – Frontend Framework",
    duration: "2.5 Weeks",
    contents: [
      "JSX & Component Architecture",
      "State, Props, useEffect",
      "React Router",
      "Conditional Rendering, Forms"
    ]
  },
  {
    title: "Advanced React & UI Libraries",
    duration: "1.3 Weeks",
    contents: [
      "Context API",
      "Custom Hooks",
      "UI Libraries: MUI, Tailwind CSS",
      "Responsive Components"
    ]
  },
  {
    title: "Backend Development with Node.js",
    duration: "1.5 Weeks",
    contents: [
      "Node Core Modules",
      "NPM & Express.js",
      "Middleware & Routing",
      "File Handling & Basic APIs"
    ]
  },
  {
    title: "MongoDB & Mongoose",
    duration: "1.2 Weeks",
    contents: [
      "CRUD with MongoDB",
      "Schema Design",
      "Mongoose ODM",
      "Connecting Backend to DB"
    ]
  },
  {
    title: "Authentication & Authorization",
    duration: "1.2 Weeks",
    contents: [
      "JWT & Sessions",
      "Password Hashing (bcrypt)",
      "Login/Signup Flow",
      "Role-Based Access Control"
    ]
  },
  {
    title: "Deployment & DevOps Basics",
    duration: "1.1 Weeks",
    contents: [
      "Deploy MERN App on Render / Vercel",
      "Using PM2 & NGINX (optional)",
      "CI/CD Basics",
      "Working with .env files & GitHub Actions"
    ]
  },
  {
    title: "Final Capstone Project",
    duration: "1.5 Weeks",
    contents: [
      "Build & Host a Full Stack Web App",
      "Integrate Authentication & Database",
      "Deploy Frontend + Backend",
      "Create a Portfolio & GitHub Repo"
    ]
  }
];



const FullStack = () => {
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
              HOME / COURSE / FULL STACK WEB DEVELOPMENT
            </div>
            <h1 className="datascience-heading">
              Become a Professional <span className="highlight">Full Stack Developer</span> With MERN Mastery
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
                <strong className="info-value">9–12 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online & Offline</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and deploy full-stack apps with real-time projects.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="Full Stack Course" className="datascience-side-img" />
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
  <div className="tool-item"><img src={htmlIcon} alt="HTML" /> HTML</div>
  <div className="tool-item"><img src={cssIcon} alt="CSS" /> CSS</div>
  <div className="tool-item"><img src={jsIcon} alt="JavaScript" /> JavaScript</div>
  <div className="tool-item"><img src={reactIcon} alt="React" /> React</div>
  <div className="tool-item"><img src={nodeIcon} alt="Node.js" /> Node.js</div>
  <div className="tool-item"><img src={mongoIcon} alt="MongoDB" /> MongoDB</div>
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

export default FullStack;
