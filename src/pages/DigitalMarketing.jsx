import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/digital.webp';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import googleAdsIcon from './Images/googleads.png';
import metaIcon from './Images/meta.webp';
import seoIcon from './Images/seo.jpg';
import hubspotIcon from './Images/hubspot.png';
import mailchimpIcon from './Images/mailchimp.png';
import googleAnalyticsIcon from './Images/googleanalytics.png';
import ProgramAdvantage from "../components/ProgramAdvantage";


const modules = [
  {
    title: "Fundamentals of Digital Marketing",
    duration: "1 Week",
    contents: [
      "Introduction to Marketing",
      "Customer Centricity",
      "Market Research",
      "What is Digital Marketing?"
    ]
  },
  {
    title: "Building a Lead Gen Page",
    duration: "1.1 Weeks",
    contents: ["Creating Landing Pages", "Lead Magnets", "A/B Testing"]
  },
  {
    title: "Search Engine Optimization",
    duration: "2.3 Weeks",
    contents: ["On-page SEO", "Off-page SEO", "Technical SEO"]
  },
  {
    title: "Advertising with Google Ads",
    duration: "1.3 Weeks",
    contents: ["Search Ads", "Display Ads", "Performance Tracking"]
  },
  {
    title: "Build Your Brand Presence with SMM",
    duration: "18.5 Weeks",
    contents: ["Content Strategy", "Engagement Tactics", "Social Metrics"]
  },
  {
    title: "Lead Gen with SMM",
    duration: "1.8 Weeks",
    contents: ["Facebook Ads", "Instagram Campaigns"]
  },
  {
    title: "Build A Funnel Based Strategy",
    duration: "0.2 Weeks",
    contents: ["Funnel Mapping", "Automation Tools"]
  },
  {
    title: "Push Marketing",
    duration: "1.3 Weeks",
    contents: ["Email Campaigns", "WhatsApp Broadcasts"]
  },
  {
    title: "Foster Business Growth with Data Analysis",
    duration: "0.2 Weeks",
    contents: ["Google Analytics", "Dashboard Setup"]
  },
  {
    title: "Artificial Intelligence in Digital Marketing",
    duration: "0.3 Weeks",
    contents: ["Chatbots", "AI Tools for Marketing"]
  }
];



const DigitalMarketing = () => {
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
              HOME / COURSE / DIGITAL MARKETING CERTIFICATION
            </div>
            <h1 className="datascience-heading">
              Become a <span className="highlight">Certified Digital Marketing Expert</span> in Just a Few Months
            </h1>
            <div className="datascience-association-badge">
              <span className="badge-pulse"></span>
              <p className="datascience-subheading">In association with :</p>
            </div>
            <div className="datascience-logos">
              <img src={expert} alt="Partner" className="logo" />
              <img src={expert} alt="Partner" className="logo" />
            </div>
            <div className="datascience-info">
              <div className="info-box">
                <p className="info-label">Duration :</p>
                <strong className="info-value">3–6 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online & Classroom</strong>
              </div>
            </div>
            <p className="datascience-description">
              Learn SEO, Google Ads, Social Media Marketing, Email Campaigns, Analytics, and build your own digital brand portfolio.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="Digital Marketing Course" className="datascience-side-img" />
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
  <div className="tool-item"><img src={googleAdsIcon} alt="Google Ads" /> Google Ads</div>
  <div className="tool-item"><img src={metaIcon} alt="Meta Ads" /> Meta Ads</div>
  <div className="tool-item"><img src={seoIcon} alt="SEO Tools" /> SEO Tools</div>
  <div className="tool-item"><img src={hubspotIcon} alt="Hubspot" /> Hubspot</div>
  <div className="tool-item"><img src={mailchimpIcon} alt="Mailchimp" /> Mailchimp</div>
  <div className="tool-item"><img src={googleAnalyticsIcon} alt="Google Analytics" /> Google Analytics</div>
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

export default DigitalMarketing;
