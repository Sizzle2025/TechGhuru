import React, { useState , useRef } from "react";
import "./DataScience.css";
import expert from './Images/experts.jpg';
import Banner from './Images/DSA.jpg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrochureModal from '../components/BrochureModal';
import certificateImage from './Images/certificate.jpg'; 
import pythonIcon from './Images/python.svg';
import javaIcon from './Images/java1.webp';
import leetcodeIcon from './Images/leetcode.webp';
import ProgramAdvantage from "../components/ProgramAdvantage";


const modules = [
  {
    title: "Introduction to Programming & Time Complexity",
    duration: "1 Week",
    contents: [
      "Basics of Programming Logic",
      "Time & Space Complexity",
      "Big O Notation",
      "Code Optimization Principles"
    ]
  },
  {
    title: "Arrays and Strings",
    duration: "1.2 Weeks",
    contents: [
      "1D and 2D Arrays",
      "String Manipulation",
      "Sliding Window Technique",
      "Two Pointers Technique"
    ]
  },
  {
    title: "Searching and Sorting",
    duration: "1.5 Weeks",
    contents: [
      "Binary Search & Variants",
      "Merge Sort, Quick Sort",
      "Counting Sort, Radix Sort",
      "In-place Sorting Algorithms"
    ]
  },
  {
    title: "Recursion and Backtracking",
    duration: "1.3 Weeks",
    contents: [
      "Recursion Fundamentals",
      "Backtracking Problems",
      "Subsets, Permutations",
      "N-Queens, Sudoku Solver"
    ]
  },
  {
    title: "Hashing and Hashmaps",
    duration: "1 Week",
    contents: [
      "HashTables in Python/C++/Java",
      "Frequency Counters",
      "Prefix Sums",
      "Common Interview Patterns"
    ]
  },
  {
    title: "Stacks and Queues",
    duration: "1.2 Weeks",
    contents: [
      "Stack Operations & Applications",
      "Queue, Deque Implementations",
      "Monotonic Stack",
      "Sliding Window Maximum"
    ]
  },
  {
    title: "Linked Lists",
    duration: "1.3 Weeks",
    contents: [
      "Singly and Doubly Linked List",
      "Cycle Detection",
      "Reversals & Palindrome Check",
      "Merge Two Sorted Lists"
    ]
  },
  {
    title: "Trees and Binary Search Trees",
    duration: "2 Weeks",
    contents: [
      "Binary Trees & Traversals",
      "BST Operations",
      "Lowest Common Ancestor",
      "Balanced Trees (AVL, Red-Black)"
    ]
  },
  {
    title: "Heaps and Tries",
    duration: "1 Week",
    contents: [
      "Min Heap & Max Heap",
      "HeapSort",
      "Trie Construction",
      "Auto-Complete Systems"
    ]
  },
  {
    title: "Graphs and Dynamic Programming",
    duration: "2.5 Weeks",
    contents: [
      "BFS and DFS",
      "Shortest Path Algorithms (Dijkstra, Bellman-Ford)",
      "Topological Sorting",
      "DP: Knapsack, LIS, Matrix Paths"
    ]
  }
];


const DSA = () => {
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
      <Navbar/>
      <BrochureModal ref={brochureRef} />
      <section className="datascience-section">
        <div className="datascience-container">
          <div className="datascience-left">
            <div className="datascience-breadcrumb">
              HOME / COURSE / DATA STRUCTURES & ALGORITHMS
            </div>
            <h1 className="datascience-heading">
              Crack Interviews With <span className="highlight">Data Structures & Algorithms</span> in Java/Python
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
                <strong className="info-value">5 Months</strong>
              </div>
              <div className="info-box">
                <p className="info-label">Mode of Training:</p>
                <strong className="info-value">Online</strong>
              </div>
            </div>
            <p className="datascience-description">
              Build strong foundations in arrays, trees, graphs, and algorithms with mock interviews and coding platforms.
            </p>
            <button className="datascience-button brochure-animate" onClick={handleBrochureClick}>
              Download Brochure 📄
            </button>
          </div>
          <div className="datascience-image-wrapper">
            <img src={Banner} alt="DSA Course" className="datascience-side-img" />
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
  <div className="tool-item"><img src={javaIcon} alt="Java" /> Java</div>
  <div className="tool-item"><img src={pythonIcon} alt="Python" /> Python</div>
  <div className="tool-item"><img src={leetcodeIcon} alt="LeetCode" /> LeetCode</div>

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

export default DSA;
