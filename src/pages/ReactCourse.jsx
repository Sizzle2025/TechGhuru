import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/react1.webp';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import reactIcon from './Images/react.png';
import reduxIcon from './Images/redux.png';
import viteIcon from './Images/vite.png';
import firebaseIcon from './Images/firebase.png';
import tailwindIcon from './Images/tailwind.png';
import ProgramAdvantage from "../components/ProgramAdvantage";
import aiImage from './Images/images1/react.webp';

const aiBenefits = [
  "The React course focuses on real-world application development using React, Node.js, Express, and MongoDB.",
  "Learners gain hands-on experience in building scalable single-page applications (SPAs), RESTful APIs, and dynamic UIs.",
  "This course empowers developers to handle both frontend and backend responsibilities with confidence.",
  "You'll learn essential tools like Redux, JWT, and deployment strategies with platforms like Netlify and Render.",
  "Whether you're a beginner or upgrading your skill set, this course is designed to prepare you for full stack developer roles."
];

const modules = [
  {
    title: "Introduction to React",
    duration: "1 Week",
    contents: [
      "What is React?",
      "JSX Syntax & Rules",
      "Component-Based Architecture",
      "Project Setup with Vite & CRA"
    ]
  },
  {
    title: "Core React Concepts",
    duration: "1.5 Weeks",
    contents: [
      "Functional vs Class Components",
      "Props & State",
      "Conditional Rendering",
      "Lists & Keys"
    ]
  },
  {
    title: "Event Handling & Forms",
    duration: "1 Week",
    contents: [
      "Handling User Inputs",
      "Controlled vs Uncontrolled Forms",
      "Form Validation Techniques",
      "React Hook Form Basics"
    ]
  },
  {
    title: "React Hooks Deep Dive",
    duration: "1.5 Weeks",
    contents: [
      "useState, useEffect",
      "useRef, useMemo, useCallback",
      "Custom Hooks",
      "Best Practices with Hooks"
    ]
  },
  {
    title: "React Router",
    duration: "1 Week",
    contents: [
      "Routing Fundamentals",
      "Dynamic & Nested Routes",
      "Route Params & Query Strings",
      "404 Handling & Navigation Guards"
    ]
  },
  {
    title: "State Management",
    duration: "1.5 Weeks",
    contents: [
      "Lifting State Up",
      "Context API",
      "Redux Toolkit Introduction",
      "Zustand or Recoil (Optional)"
    ]
  },
  {
    title: "APIs & Data Fetching",
    duration: "1.2 Weeks",
    contents: [
      "REST API Integration",
      "Axios & Fetch",
      "Async/Await + Error Handling",
      "Custom Fetch Hooks"
    ]
  },
  {
    title: "Styling in React",
    duration: "1 Week",
    contents: [
      "CSS Modules",
      "Styled Components",
      "Tailwind CSS Basics",
      "Responsive UI with Media Queries"
    ]
  },
  {
    title: "Advanced Patterns & Optimization",
    duration: "1 Week",
    contents: [
      "Lazy Loading & Suspense",
      "Code Splitting",
      "Error Boundaries",
      "Performance Tuning"
    ]
  },
  {
    title: "Final Project & Deployment",
    duration: "1.5 Weeks",
    contents: [
      "Build a Full React App (Blog, E-commerce, etc.)",
      "Version Control with Git",
      "Deploy on Netlify / Vercel",
      "Portfolio Showcase"
    ]
  }
];



const ReactCourse = () => {
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
              HOME / COURSE / ADVANCED REACT DEVELOPMENT
            </div>
            <h1 className="datascience-heading">
              Master the Frontend with <span className="highlight">React.js & Modern Tooling</span>
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
                <strong className="info-value">4–5 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn React, Hooks, Redux, Context API, and deploy SPAs with performance optimization and testing.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="React Course" className="datascience-side-img" />
          </div>
        </div>
         
      </section>

      <section className="ai-benefits-section">
        <div className="ai-benefits-container">
          <div className="ai-benefits-right">
            <img src={aiImage} alt="AI Marketing" className="ai-image" />
          </div>
          <div className="ai-benefits-left">
            <h3 className="ai-benefits-heading">Why Learn AI in Marketing?</h3>
            <div className="ai-benefits-list">
              {aiBenefits.map((point, index) => (
                <div key={index} className="ai-benefit-item">
                  <span className="ai-icon">✨</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
  <div className="tool-item"><img src={reactIcon} alt="React" /> React</div>
  <div className="tool-item"><img src={reduxIcon} alt="Redux" /> Redux</div>
  <div className="tool-item"><img src={viteIcon} alt="Vite" /> Vite</div>
  <div className="tool-item"><img src={firebaseIcon} alt="Firebase" /> Firebase</div>
  <div className="tool-item"><img src={tailwindIcon} alt="Tailwind" /> Tailwind CSS</div>
</div>
</div>
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

export default ReactCourse;
