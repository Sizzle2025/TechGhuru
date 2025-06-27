import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/uiux.avif';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import figmaIcon from './Images/figma.png';
import xdIcon from './Images/xd.jpeg';
import sketchIcon from './Images/sketch.png';
import photoshopIcon from './Images/photoshop.png';
import ProgramAdvantage from "../components/ProgramAdvantage";


const modules = [
  {
    title: "Introduction to UI/UX Design",
    duration: "1 Week",
    contents: [
      "Understanding UI vs UX",
      "Design Thinking Process",
      "UX Design Principles",
      "User-Centered Design"
    ]
  },
  {
    title: "User Research & Analysis",
    duration: "1.2 Weeks",
    contents: [
      "Types of User Research",
      "Creating User Personas",
      "Empathy Mapping",
      "User Journey Mapping"
    ]
  },
  {
    title: "Wireframing & Information Architecture",
    duration: "1.2 Weeks",
    contents: [
      "Site Mapping & Content Structuring",
      "Wireframing with Low/Mid Fidelity",
      "Best Practices for Layouts",
      "Tools: Balsamiq, Figma"
    ]
  },
  {
    title: "UI Design Fundamentals",
    duration: "2 Weeks",
    contents: [
      "Typography, Color Theory, Iconography",
      "Designing Layouts & Grids",
      "Accessibility in UI",
      "Design Systems & UI Kits"
    ]
  },
  {
    title: "Prototyping & Interaction Design",
    duration: "1.5 Weeks",
    contents: [
      "Interactive Prototyping",
      "Microinteractions & Animation",
      "Figma Prototyping",
      "InVision & Adobe XD"
    ]
  },
  {
    title: "Design Tools Mastery",
    duration: "1.5 Weeks",
    contents: [
      "Figma Advanced Techniques",
      "Adobe XD & Illustrator Basics",
      "Plugins & Productivity Tools",
      "Design Hand-off with Zeplin"
    ]
  },
  {
    title: "Usability Testing & Feedback",
    duration: "1 Week",
    contents: [
      "Heuristic Evaluation",
      "Conducting Usability Tests",
      "Collecting & Analyzing Feedback",
      "Iterating Based on Insights"
    ]
  },
  {
    title: "UI/UX for Mobile & Web",
    duration: "1.3 Weeks",
    contents: [
      "Responsive Design",
      "Mobile-First Design",
      "iOS & Android Design Guidelines",
      "Web Design Best Practices"
    ]
  },
  {
    title: "Portfolio Building & Freelancing",
    duration: "1 Week",
    contents: [
      "Creating Dribbble/Behance Portfolios",
      "Case Study Presentation",
      "Freelancing Platforms",
      "Pitching & Client Communication"
    ]
  },
  {
    title: "Capstone Project & Job Preparation",
    duration: "1.5 Weeks",
    contents: [
      "Real-World Project Execution",
      "UI/UX Design Challenges",
      "Mock Interviews & Feedback",
      "LinkedIn & Resume for Designers"
    ]
  }
];



const UIUX = () => {
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
              HOME / COURSE / UI/UX DESIGN MASTERCLASS
            </div>
            <h1 className="datascience-heading">
              Master the Art of <span className="highlight">UI/UX Design</span> for Web & Mobile
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
                <strong className="info-value">4–6 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Classroom & Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn tools like Figma, Adobe XD, and master the complete user experience design process with live projects.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="UIUX Course" className="datascience-side-img" />
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
  <div className="tool-item"><img src={figmaIcon} alt="Figma" /> Figma</div>
  <div className="tool-item"><img src={xdIcon} alt="Adobe XD" /> Adobe XD</div>
  <div className="tool-item"><img src={sketchIcon} alt="Sketch" /> Sketch</div>
  <div className="tool-item"><img src={photoshopIcon} alt="Photoshop" /> Photoshop</div>
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

export default UIUX;
