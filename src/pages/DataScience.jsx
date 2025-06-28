import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/data-science-course.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import pythonIcon from './Images/python.svg';
import tableauIcon from './Images/Tableau-Logo.png';
import sqlIcon from './Images/sql.png';
import hadoopIcon from './Images/hadoop-original.png';
import tensorflowIcon from './Images/tensorflow_logo.svg-9036044.png';
import kafkaIcon from './Images/cq5dam.web.1280.1280.png';
import ProgramAdvantage from "../components/ProgramAdvantage";
import aiImage from './Images/images1/datascience.webp';

const aiBenefits = [
  "This course trains students to analyze large data sets using Python, SQL, and key data science libraries like Pandas, NumPy, and Matplotlib.",
  "You’ll explore predictive modeling, data visualization, machine learning, and business intelligence tools like Power BI or Tableau.",
  "Real-life case studies include marketing analysis, churn prediction, and sales forecasting.",
  "Students also learn data storytelling, dashboards, and end-to-end project pipelines.",
  "Ideal for aspiring data scientists, business analysts, and anyone transitioning to a data-driven career."
];

const modules = [
  {
    title: "Introduction to Data Science & Analytics",
    duration: "1 Week",
    contents: [
      "What is Data Science & Analytics?",
      "Applications Across Industries",
      "Types of Analytics: Descriptive, Predictive, Prescriptive",
      "Roles: Analyst vs Scientist vs Engineer"
    ]
  },
  {
    title: "Python Programming for Data",
    duration: "2 Weeks",
    contents: [
      "Python Basics (Variables, Loops, Functions)",
      "Data Structures (Lists, Dictionaries)",
      "Working with Libraries: NumPy, Pandas",
      "Jupyter Notebook Usage"
    ]
  },
  {
    title: "Data Wrangling & Cleaning",
    duration: "1.5 Weeks",
    contents: [
      "Handling Missing Data",
      "Data Type Conversions",
      "Filtering & Sorting",
      "Data Aggregation & Merging"
    ]
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    duration: "1.2 Weeks",
    contents: [
      "Descriptive Statistics",
      "Correlation & Covariance",
      "Outlier Detection",
      "EDA with Pandas & Seaborn"
    ]
  },
  {
    title: "Data Visualization",
    duration: "1.3 Weeks",
    contents: [
      "Matplotlib & Seaborn",
      "Bar, Line, Scatter, Heatmaps",
      "Dashboards with Plotly",
      "Best Practices in Visualization"
    ]
  },
  {
    title: "SQL for Analytics",
    duration: "1 Week",
    contents: [
      "Basic Queries & Joins",
      "Aggregations, Group By, Subqueries",
      "Window Functions",
      "Data Manipulation with SQL"
    ]
  },
  {
    title: "Statistics & Probability",
    duration: "1.5 Weeks",
    contents: [
      "Descriptive & Inferential Stats",
      "Probability Theory",
      "Hypothesis Testing",
      "Confidence Intervals"
    ]
  },
  {
    title: "Machine Learning with Python",
    duration: "2 Weeks",
    contents: [
      "Supervised Learning: Regression & Classification",
      "Unsupervised Learning: Clustering",
      "Model Evaluation Metrics",
      "Scikit-learn Pipelines"
    ]
  },
  {
    title: "Data Analytics Tools & BI",
    duration: "1.5 Weeks",
    contents: [
      "Power BI / Tableau Basics",
      "Connecting to Data Sources",
      "Building Dashboards & Reports",
      "Publishing & Sharing Insights"
    ]
  },
  {
    title: "Big Data & Cloud Tools",
    duration: "1.3 Weeks",
    contents: [
      "Basics of Hadoop, Spark, and Kafka",
      "Working with AWS/GCP for Data",
      "Notebooks on Cloud (Google Colab, SageMaker)"
    ]
  },
  {
    title: "AI & Deep Learning Foundations",
    duration: "1.3 Weeks",
    contents: [
      "Introduction to Neural Networks",
      "TensorFlow / Keras Basics",
      "Building Simple Models",
      "AI Use Cases in Data Science"
    ]
  },
  {
    title: "Capstone Project",
    duration: "2 Weeks",
    contents: [
      "Problem Framing & Dataset Selection",
      "End-to-End Model Building",
      "Dashboard or App Deployment",
      "Presentation & Reporting"
    ]
  }
];


const DataScience = () => {
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
          {/* Left Content */}
          <div className="datascience-left">
            <div className="datascience-breadcrumb">
              HOME / COURSE / ADVANCED DATA SCIENCE, ANALYTICS & AI
            </div>
            <h1 className="datascience-heading">
              A Career-Focused <span className="highlight">Data Science & Analytics With AI</span> Course Built to Make You Industry-Ready
            </h1>
            <div className="datascience-association-badge">
              <span className="badge-pulse"></span>
              <p className="datascience-subheading">In association with :</p>
            </div>
            <div className="datascience-logos">
              <img src={expert} alt="NSDC" className="logo" />
              <img src={expert} alt="Skill India" className="logo" />
              <img src={expert} alt="IBM" className="logo" />
            </div>
            <div className="datascience-info">
              <div className="info-box">
                <p className="info-label">Duration :</p>
                <strong className="info-value">8–10 Month</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Classroom & Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Our curriculum is designed to give you hands-on experience in data analysis, AI integration, real-world business problem-solving, and capstone projects guided by top-tier mentors.
            </p>
            <button
              className="datascience-button brochure-animate"
              onClick={handleBrochureClick}
            >
              Download Brochure <span role="img">📄</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="Data Science Visual" className="datascience-side-img" />
          </div>
        </div>
      </section>

      <section className="ai-benefits-section">
            <div className="ai-benefits-container">
              <div className="ai-benefits-right">
                <img src={aiImage} alt="AI Marketing" className="ai-image" style={{width:"550px",height:"550px"}} />
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
        <div className="tool-item"><img src={pythonIcon} alt="Python" /> Python</div>
        <div className="tool-item"><img src={tableauIcon} alt="Tableau" /> Tableau</div>
        <div className="tool-item"><img src={sqlIcon} alt="SQL" /> SQL</div>
        <div className="tool-item"><img src={hadoopIcon} alt="Hadoop" /> Hadoop</div>
        <div className="tool-item"><img src={tensorflowIcon} alt="TensorFlow" /> TensorFlow</div>
        <div className="tool-item"><img src={kafkaIcon} alt="Kafka" /> Kafka</div>
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

export default DataScience;
