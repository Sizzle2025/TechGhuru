import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/java2.avif';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import javaIcon from './Images/java1.webp';
import springIcon from './Images/spring.png';
import mysqlIcon from './Images/mysql.png';
import hibernateIcon from './Images/hiberate.png';
import ProgramAdvantage from "../components/ProgramAdvantage";
import aiImage from './Images/images1/java.png';

const aiBenefits = [
  "This Java Full Stack course bridges frontend and backend development using HTML, CSS, JavaScript, Spring Boot, and MySQL.",
  "Students learn how to build enterprise-level web applications with a focus on layered architecture and secure REST APIs.",
  "Spring Boot, Hibernate, and JPA are covered in-depth along with tools like Postman, Maven, and Git.",
  "Real-time projects teach you how to manage user authentication, database integration, and deployment.",
  "Ideal for aspiring backend or full stack Java developers looking to work in enterprise environments."
];

const modules = [
  {
    title: "Introduction to Java",
    duration: "1 Week",
    contents: [
      "Java Platform & Features",
      "JDK, JRE, JVM",
      "First Java Program",
      "IDE Setup (IntelliJ / Eclipse)"
    ]
  },
  {
    title: "Core Java Fundamentals",
    duration: "1.5 Weeks",
    contents: [
      "Data Types & Variables",
      "Operators & Control Flow",
      "Loops (for, while, do-while)",
      "User Input & Basic Programs"
    ]
  },
  {
    title: "Object-Oriented Programming (OOP)",
    duration: "2 Weeks",
    contents: [
      "Classes & Objects",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction",
      "Constructors & 'this' Keyword"
    ]
  },
  {
    title: "Advanced Java Concepts",
    duration: "1.2 Weeks",
    contents: [
      "Static & Final Keywords",
      "Inner Classes",
      "Wrapper Classes",
      "Packages & Access Modifiers"
    ]
  },
  {
    title: "Exception Handling & File I/O",
    duration: "1.2 Weeks",
    contents: [
      "try-catch-finally",
      "Custom Exceptions",
      "FileReader/FileWriter",
      "BufferedReader/Scanner"
    ]
  },
  {
    title: "Collections Framework",
    duration: "1.5 Weeks",
    contents: [
      "List, Set, Map Interfaces",
      "ArrayList, HashSet, HashMap",
      "Iterators & For-each Loop",
      "Sorting & Comparable"
    ]
  },
  {
    title: "Multithreading & Concurrency",
    duration: "1.2 Weeks",
    contents: [
      "Thread Lifecycle",
      "Runnable Interface",
      "Synchronization",
      "ExecutorService"
    ]
  },
  {
    title: "Java 8+ Features",
    duration: "1 Week",
    contents: [
      "Lambda Expressions",
      "Streams API",
      "Functional Interfaces",
      "Optional & Method References"
    ]
  },
  {
    title: "JDBC & Database Integration",
    duration: "1.2 Weeks",
    contents: [
      "JDBC Setup & Connection",
      "CRUD Operations",
      "Prepared Statements",
      "Connection Pooling"
    ]
  },
  {
    title: "Project & Deployment",
    duration: "1.5 Weeks",
    contents: [
      "Build Mini Java Projects (e.g., Bank App)",
      "Version Control with Git",
      "Packaging with JAR",
      "Deploy using Heroku / Local Server"
    ]
  }
];



const Java = () => {
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
              HOME / COURSE / JAVA PROGRAMMING MASTERCLASS
            </div>
            <h1 className="datascience-heading">
              Become a <span className="highlight">Java Developer</span> With Core to Advanced Skills
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
                <strong className="info-value">6–8 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn Java, OOP, JDBC, Servlets, Collections, and Spring Boot to build scalable Java applications.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="Java Course" className="datascience-side-img" />
          </div>
        </div>
      </section>

        <section className="ai-benefits-section">
              <div className="ai-benefits-container">
                <div className="ai-benefits-right">
                  <img src={aiImage} alt="AI Marketing" className="ai-image"/>
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
  <div className="tool-item"><img src={javaIcon} alt="Java" /> Java</div>
  <div className="tool-item"><img src={springIcon} alt="Spring Boot" /> Spring Boot</div>
  <div className="tool-item"><img src={mysqlIcon} alt="MySQL" /> MySQL</div>
  <div className="tool-item"><img src={hibernateIcon} alt="Hibernate" /> Hibernate</div>
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

export default Java;
