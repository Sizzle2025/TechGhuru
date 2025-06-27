import Navbar from "../components/Navbar";
import "./About.css";
import student1 from "./Images/student1.jpg";
import student2 from "./Images/student2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBolt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  FaBookReader,
  FaFileAlt,
  FaDesktop,
  FaLayerGroup,
  FaStar,
  FaArrowUp,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import user from "./Images/user1.png";
import laptop from "./Images/laptop1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

const recordsData = [
  {
    icon: <FaBookReader />,
    target: 24000,
    label: "Total Students Enrolled",
    color: "purple",
  },
  {
    icon: <FaFileAlt />,
    target: 2000,
    label: "Daily Live Classes",
    color: "orange",
  },
  {
    icon: <FaDesktop />,
    target: 3500000,
    label: "Video Lessons",
    color: "red",
  },
  {
    icon: <FaLayerGroup />,
    target: 75,
    label: "Total Exam Categories",
    color: "blue",
  },
];

const RecordBox = ({ icon, target, label, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = target / 100;
          const duration = 1500;
          const step = Math.ceil(duration / 100);

          const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      className="record-box d-flex flex-column align-items-center text-center"
      ref={ref}
      data-aos="fade-up"
    >
      <div className={`icon ${color}`}>{icon}</div>
      <h3>
        {target >= 1000000
          ? `${(count / 1000000).toFixed(1)}M`
          : target >= 1000
          ? `${Math.floor(count / 1000)}k+ `
          : `${count}+`}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const reviews = [
  {
    name: "Aarthi Krishna",
    feedback:
      "Absolutely loved the course structure and support. Highly recommend!",
    avatar: user,
  },
  {
    name: "Vikram J",
    feedback: "One of the best learning platforms I’ve used!",
    avatar: user,
  },
  {
    name: "Meena S",
    feedback: "Very engaging and well organized. The team is super helpful.",
    avatar: user,
  },
  {
    name: "Rahul Dev",
    feedback:
      "A truly immersive learning experience. The interface is smooth and the content is top-notch.",
    avatar: user,
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "The instructors are excellent, and the platform is easy to navigate. Loved it!",
    avatar: user,
  },
  {
    name: "Anand Reddy",
    feedback:
      "Comprehensive content and great community support. This helped me land my dream job!",
    avatar: user,
  },
];

const About = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const toggleVisibility = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Navbar />

      {/* About Banner */}
      <div className="about-banner">
        <div className="overlay">
          <div className="content" data-aos="fade-up">
            <h1 className="title">About Us</h1>
            <p className="fs-5 home-about">Home &gt; About Us</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefit-section">
        <div className="orange-sketch"></div>
        <div className="black-dots"></div>
        <div className="circle-badge"></div>

        <div className="benefit-content">
          <div className="image-stack" data-aos="fade-right">
            <img src={student1} alt="Student 1" className="img-main" />
            <img src={student2} alt="Student 2" className="img-overlay" />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>
              Including large benefit <br />
              <span className="highlight">when you enroll</span> from our
              courses
            </h2>
            <p className="description">
              If you’ve been researching exactly what skill you want to learn,
              or if you just need one more skill to round out your resume.
              Whether fully virtual, fully in-person or something in between,
              explore.
            </p>
            <div className="features">
              <div className="feature-item">
                <FontAwesomeIcon icon={faBookOpen} />
                <span>Multiple course participation</span>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faBolt} />
                <span>Very fast & easy to create</span>
              </div>
            </div>
            <p className="description">
              If you’ve been researching exactly what skill you want to learn,
              or if you just need one more skill to round out your resume.
              Whether fully virtual.
            </p>
            <a href="#" className="cta">
              Start Learning Now →
            </a>
          </div>
        </div>
      </div>

      {/* Records Section */}
      <section className="records-section">
        <div className="decor-circle yellow"></div>
        <div className="decor-dots"></div>
        <h2 className="section-title" data-aos="zoom-in">
          We have <span className="highlight">Best Records</span>
        </h2>
        <div className="records-container">
          {recordsData.map((record, i) => (
            <RecordBox key={i} {...record} />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-banner">
        <div className="decor-circle decor-pink"></div>
        <div className="decor-dots"></div>
        <div className="video-container" data-aos="zoom-in">
          <img src={laptop} alt="Laptop" className="laptop-image shake" />
          <button
            className="play-button"
            onClick={() => setShowVideo(true)}
            aria-label="Play Video"
          >
            <span className="ripple"></span>
            <span className="ripple"></span>
            <FaPlay />
          </button>
        </div>
        {showVideo && (
          <div className="video-modal">
            <div className="video-content">
              <button
                className="close-button"
                onClick={() => setShowVideo(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <iframe
                src="https://www.youtube.com/embed/D_oQP9LuPek?autoplay=1"
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="decor-star decor-1"></div>
        <div className="decor-zigzag"></div>
        <div className="decor-triangle decor-2"></div>
      </section>

      {/* Reviews Section */}
      <section className="review-section">
        <div className="decor-circle pink"></div>
        <div className="decor-dots-dense"></div>
        <h2 className="review-title" data-aos="fade-up">
          What Our Students Say
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {reviews.map((r, idx) => (
            <SwiperSlide key={idx}>
              <div className="review-card">
                <div className="review-avatar shake">
                  <img src={r.avatar} alt={r.name} />
                </div>
                <h4>{r.name}</h4>
                <p>"{r.feedback}"</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showTopButton && (
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </section>
      <Footer />
    </>
  );
};

export default About;
