import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/heroimage.png";
import heroImage2 from "./Images/girl-laptop.webp";
import heroImage3 from "./Images/girl-laptop2.webp";
import heroImage5 from "./Images/Banner-thumbsup.webp";
import careerImg from "./Images/career-img.jpg";
import datascience from "./Images/data-science.jpg";
import datamarketing from "./Images/digital-marketting.jpg";
import dataanalytics from "./Images/data-analytics.jpg";
import webdevelopment from "./Images/web-development.avif";
import {
  FaUserTie,
  FaCertificate,
  FaProjectDiagram,
  FaComments,
  FaUserClock,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import user1 from "../assets/testimonial-user.jpg";
import user2 from "../assets/testimonial-user.jpg";
import user3 from "../assets/testimonial-user.jpg";
import user4 from "../assets/testimonial-user.jpg";
import user5 from "../assets/testimonial-user.jpg";
import placementImg from "./Images/placement.jpg";
import expertsImg from "./Images/experts.jpg";
import projectsImg from "./Images/project.jpg";

const features = [
  {
    icon: <FaUserClock />,
    title: "Mock Interviews + Contests",
    description:
      "Rigorous interview preparation and contests for real-time practice.",
  },
  {
    icon: <FaComments />,
    title: "24/7 Doubt Support",
    description:
      "Highly active support system for seamless preparation anytime.",
  },
  {
    icon: <FaUserTie />,
    title: "1:1 Expert Mentorship",
    description:
      "Top industry mentors guide you throughout your learning journey.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate of Upskilling",
    description: "Receive industry-recognized certification after completion.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Industry Relevant Projects",
    description:
      "Build your portfolio with live, hands-on industrial projects.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Live Interactive Classes",
    description:
      "Engage in real-time learning with instructors and peers through live sessions.",
  },
];

const courses = [
  {
    title: "Digital Marketing Mastery",
    subtitle: "Complete Guide to SEO, Ads & Social Media Strategies",
    duration: "3 Months",
    rating: 4.6,
    category: "Marketing",
    tag: "Beginner",
    image: datamarketing,
  },
  {
    title: "Data Analytics & Visualization",
    subtitle: "Learn Excel, SQL, Tableau & Power BI from scratch",
    duration: "4 Months",
    rating: 4.8,
    category: "Data",
    tag: "Intermediate",
    image: dataanalytics,
  },
  {
    title: "Full-Stack Web Development",
    subtitle: "HTML, CSS, JS, React, Node, MongoDB & Deployment",
    duration: "5 Months",
    rating: 4.9,
    category: "Development",
    tag: "Beginner",
    image: webdevelopment,
  },
  {
    title: "Data Science Bootcamp",
    subtitle: "Python, Pandas, Machine Learning, and AI tools",
    duration: "6 Months",
    rating: 4.9,
    category: "AI & Data",
    tag: "Advanced",
    image: datascience,
  },
];

const testimonials = [
  {
    quote:
      "🚀 TechGhuru Academy helped me reach new heights with their incredible resources and expert instructors.",
    name: "Jessica Rose",
    role: "Student",
    image: user1,
  },
  {
    quote:
      "💡 The hands-on approach at TechGhuru Academy made all the difference in my learning journey.",
    name: "Rahul Verma",
    role: "Full Stack Developer",
    image: user2,
  },
  {
    quote:
      "🔥 Practical learning, real projects, and amazing support — that's what TechGhuru Academy offers.",
    name: "Aisha Khan",
    role: "Software Engineer",
    image: user3,
  },
  {
    quote:
      "📚 The curriculum is top-notch and always updated. I landed my first dev job thanks to them!",
    name: "Mohan Das",
    role: "Junior Developer",
    image: user4,
  },
  {
    quote:
      "🎯 Loved the live sessions and support. They truly care about your growth.",
    name: "Priya Mehta",
    role: "Frontend Developer",
    image: user5,
  },
];

const cards = [
  {
    image: placementImg,
    title: "100% Placement Assistance",
    text: `TechGhuru offers complete placement support, guiding students from skill development all the way to securing a successful job.`,
  },
  {
    image: expertsImg,
    title: "Learn from the experts of industry",
    text: `Learn directly from industry professionals at TechGhuru, gaining practical insights and the latest knowledge in every training session.`,
  },
  {
    image: projectsImg,
    title: "Work On-Time Projects",
    text: `Take part in real-time projects at TechGhuru to gain hands-on experience and confidently tackle real-world industry challenges.`,
  },
];

const Home = () => {
  const heroImages = [heroImage, heroImage2, heroImage3, heroImage5]; // Add more if needed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % heroImages.length
        );
        setFadeClass("fade-in");
      }, 500); // match the fade-out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.3, // percentage of element visible before triggering
  });

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (visibleIndex + 1) % testimonials.length;
      setVisibleIndex(nextIndex);

      const container = containerRef.current;
      const card = cardRefs.current[nextIndex];

      if (card && container) {
        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleIndex]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section position-relative py-5"
        style={{
          backgroundColor: "#fff7f0",
          overflow: "hidden",
        }}
      >
        {/* Top SVG Curve */}
        <svg
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <path
            fill="#ff6b00"
            fillOpacity="0.08"
            d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,170.7C840,171,960,181,1080,165.3C1200,149,1320,107,1380,85.3L1440,64V0H0Z"
          />
        </svg>

        {/* Floating Icons */}
        <div className="decor-icon sparkle" style={{ top: "10%", left: "8%" }}>
          ✨
        </div>
        <div
          className="decor-icon heart"
          style={{ bottom: "15%", right: "10%" }}
        >
          💖
        </div>
        <div className="decor-icon bulb" style={{ top: "50%", right: "5%" }}>
          💡
        </div>

        {/* Content Container */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center flex-wrap-reverse">
            {/* Left Text */}
            <div
              className="col-lg-6 col-md-12 mt-4 mt-lg-0"
              data-aos="fade-right"
            >
              <h1 className="display-5 fw-bold text-dark animate__animated animate__fadeInDown">
                All the <span className="text-orange">Skills</span> You Need{" "}
                <br className="d-none d-md-block" />
                in One Place
                <br />
                <span className="typing-text text-orange fw-semibold">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "Digital Marketing",
                      2000,
                      "Data Science",
                      2000,
                      "Data Analytics",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p className="lead text-secondary mt-3 animate__animated animate__fadeInLeft">
                🌟 Start your journey with{" "}
                <strong className="text-orange">TechGhuru Academy</strong> <br />
                🚀 Learn at your pace from top-rated instructors.
              </p>
              <Link
                to="/courses"
                className="btn btn-warning text-white fw-bold mt-3 animate__animated animate__fadeInUp"
              >
                🎓 Start Learning
              </Link>
            </div>

            {/* Right Image */}
            <div
              className="col-lg-6 col-md-12 text-center"
              data-aos="fade-left"
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Student Learning"
                className={`img-fluid hero-image ${fadeClass}`}
                style={{
                  borderRadius: "20px",
                  height: "470px",
                  maxWidth: "450px",
                  boxShadow: "0 12px 40px rgba(255, 107, 0, 0.3)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom SVG Curve */}
        <svg
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: 0, left: 0, zIndex: 0 }}
        >
          <path
            fill="#ff6b00"
            fillOpacity="0.05"
            d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,154.7C672,171,768,181,864,176C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224V320H0Z"
          />
        </svg>
      </section>

      {/* Why Choose Us - Updated Features Section */}
      <section className="why-ghuru">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          Why Choose <span className="text-orange">TechGhuru Academy?</span>
        </h2>
        <div className="card-container1">
          {cards.map((card, index) => (
            <div className="info-card1" key={index}>
              <img src={card.image} alt={card.title} className="card-image1" />
              <div className="card-content1">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section className="career-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Image */}
            <div
              className="col-lg-6 mb-4 mb-lg-0 pe-lg-5"
              data-aos="zoom-in-right"
            >
              <div className="career-img-wrapper">
                <img
                  src={careerImg}
                  alt="Career"
                  className="img-fluid rounded career-img"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6" data-aos="fade-left">
              <p className="badge-text">🔥 Trending Career Paths</p>
              <h2 className="career-title text-orange mb-3">
                🚀 Unlock Limitless Career Possibilities
              </h2>
              <p className="career-subtext text-muted mb-3">
                At <strong>TechGhuru Academy</strong>, we bridge the gap between
                learning and earning. Discover practical knowledge,
                industry-ready skills, and expert guidance.
              </p>

              <ul className="career-features list-unstyled text-muted mb-4">
                <li>✔ 4,000+ Expert-Guided Courses & Live Classes</li>
                <li>✔ Project-based Learning for Real-World Skills</li>
                <li>✔ Dedicated 1-on-1 Career Mentorship</li>
                <li>✔ Resume, LinkedIn & Interview Training</li>
                <li>✔ Certificates Recognized by Top Recruiters</li>
              </ul>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/signup" className="btn btn-orange-custom fw-bold">
                  Join Now
                </Link>
                <Link to="/courses" className="btn btn-outline-orange-custom">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-ghurudev-section">
        <h2 className="why-ghurudev-title">
          <span className="highlight">5 Features</span> that make{" "}
          <span className="institute">TechGhuru</span> Unique
        </h2>
        <div className="features-container" data-aos="zoom-in">
          {features.map((feature, idx) => (
            <div
              className="feature-card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bootcamp-section">
        <h2 className="bootcamp-title">Popular Courses</h2>
        <div className="card-container" data-aos="zoom-in">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="course-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card-image">
                <img src={course.image} alt={course.title} />
                <span className="tag">{course.tag}</span>
              </div>
              <div className="card-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-subtitle">{course.subtitle}</p>
                <p className="course-duration">⏱ {course.duration}</p>
                <div className="rating">
                  <span>⭐</span>
                  <span>{course.rating}</span>
                </div>
                <button className="start-button">
                  <span>Start Learning</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-4 d-flex justify-content-center mt-5">
    <div className="course-cta-box">
      <h5>📚 Our courses cover everything from skills to careers</h5>
      <Link
        to="/courses"
        className="btn btn-light text-orange mt-2 fw-bold"
      >
        Find All Courses
      </Link>
    </div>
  </div> */}
      </section>

      {/* Statistics Section */}
      <section className="stats-section" ref={ref} data-aos="fade-up">
        <div className="stats-container">
          <div className="stats-cards">
            {[
              {
                icon: "👨‍🎓",
                count: 40000,
                suffix: "+",
                label: "Learners Trained",
              },
              {
                icon: "🏢",
                count: 5000,
                suffix: "+",
                label: "Hiring Companies",
              },
              {
                icon: "💼",
                count: 19.5,
                suffix: " LPA",
                label: "Highest Salary Drawn",
              },
              {
                icon: "⏱",
                count: 65000,
                suffix: " hrs",
                label: "Training Conducted",
              },
            ].map((stat, index) => (
              <div className="stat-card" key={index} data-aos="zoom-in">
                <div className="stat-icon">{stat.icon}</div>
                <h4 className="stat-number text-orange">
                  {inView ? (
                    <CountUp
                      end={stat.count}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </h4>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="stats-content" data-aos="fade-left">
            <h3 className="fw-bold">
              When The Efforts Are Genuine, Numbers Speak Louder.
            </h3>
            <p>
              At TechGhuru, success isn't just a goal – it's the result of our
              learner-focused commitment. Through expert-led training and
              tailored career development support, we empower individuals with
              the tools, guidance, and confidence to turn their potential into
              real achievement.
            </p>
            <Link
              to="/contact"
              className="btn btn-warning text-white fw-bold mt-3"
            >
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h4 className="fw-bold mb-5 text-orange text-center">
            What Our Students Say
          </h4>
          <div className="testimonial-scroll" ref={containerRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`testimonial-card ${
                  index === visibleIndex ? "active" : "dimmed"
                }`}
              >
                <p className="testimonial-text">“{testimonial.quote}”</p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <br />
                    <span className="text-muted small">{testimonial.role}</span>
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

export default Home;
