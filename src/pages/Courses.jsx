import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUserCircle, FaClock } from "react-icons/fa";
import img1 from "./Images/fullstack.png";
import img2 from "./Images/datastructures.jpg";
import img3 from "./Images/java.jpg";
import img4 from "./Images/react-cover.png";
import img5 from "./Images/datascience.jpg";
import img6 from "./Images/uiux.png";
import "./Courses.css";

const courseData = [
  {
    title: "Full Stack Web Development",
    image: img1,
    desc: "Master frontend & backend with HTML, CSS, React, Node.js, and MongoDB.",
    duration: "4.5 Hrs",
    students: 100,
  },
  {
    title: "Data Structures & Algorithms",
    image: img2,
    desc: "Ace problem-solving with Java-based DSA modules and real-time coding.",
    duration: "5 Hrs",
    students: 85,
  },
  {
    title: "Java Programming Mastery",
    image: img3,
    desc: "Core Java, OOPs, JDBC, Threads, and project-based learning.",
    duration: "6 Hrs",
    students: 120,
  },
  {
    title: "React Frontend Design",
    image: img4,
    desc: "Hands-on projects using ReactJS, hooks, routing, and design patterns.",
    duration: "4 Hrs",
    students: 95,
  },
  {
    title: "Python for Data Science",
    image: img5,
    desc: "Master NumPy, Pandas, Matplotlib with real-world datasets.",
    duration: "5.5 Hrs",
    students: 110,
  },
  {
    title: "UI/UX Design & Prototyping",
    image: img6,
    desc: "Learn design principles, Figma, wireframes, color theory, and prototyping.",
    duration: "3.5 Hrs",
    students: 75,
  },
];

const Courses = () => {
  return (
    <>
      <Navbar />

      <section className="courses-header">
        <h2> Available Courses</h2>
      </section>

      <section className="courses-grid">
        <div className="container">
          <div className="row">
            {courseData.map((course, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="course-img-card">
                  <div className="img-box">
                    <img src={course.image} alt={course.title} />
                    <div className="overlay-top">
                      <span>
                        <FaUserCircle /> {course.students}
                      </span>
                      <span>
                        <FaClock /> {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="course-details">
                    <h5>{course.title}</h5>
                    <p>{course.desc}</p>
                    <Link to="/signup" className="btn-view">
                      View Course →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
