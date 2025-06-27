import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "./Images/FAQ.webp";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import "./Contact.css"; // Use the CSS below in this file

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <section className="contact-header" data-aos="fade-down">
          <h2>Contact</h2>
        </section>

        <section className="simple-contact-info" data-aos="fade-up">
          <div className="info-flex">
            <div className="info-column">
              <h4>📍 Location</h4>
              <p>
                <strong>Address:</strong>
                <br />
                #12, North Road, near Nandhi Statue,
                <br />
                CIT Nagar West, Chennai, Tamil Nadu 600035
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                chn.cit@elysiumacademy.org
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                9941161919
              </p>
              <div className="social-icons">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>

            <div className="info-column">
              <h4>⏰ Working Days and Hours</h4>
              <ul className="info-list">
                {[
                  ["Sunday", "10:00 am – 3:00 pm"],
                  ["Monday", "9:00 am – 7:00 pm"],
                  ["Tuesday", "9:00 am – 7:00 pm"],
                  ["Wednesday", "9:00 am – 7:00 pm"],
                  ["Thursday", "9:00 am – 7:00 pm"],
                  ["Friday", "9:00 am – 7:00 pm"],
                  ["Saturday", "9:00 am – 7:00 pm"],
                ].map(([day, time], i) => (
                  <li key={i}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-column">
              <h4>🌟 Features</h4>
              <ul className="info-list features">
                {[
                  "Comprehensive Curriculum",
                  "Real-World Projects",
                  "Personalized Learning Paths",
                  "Updated Course Material",
                  "Dedicated Support Team",
                  "Networking Opportunities",
                  "Seminar & Workshops",
                  "Job Placement Assistance",
                ].map((item, idx) => (
                  <li key={idx}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-hero">
          <div className="hero-container">
            <div className="hero-image-wrapper">
              <div className="circle-decor"></div>
              <img
                src={heroImage}
                alt="Career Consultant"
                className="hero-image"
              />
            </div>

            <div className="hero-form-box">
              <h2>Get In Touch</h2>
              <p>Fill the form to get free career counselling</p>
              <form>
                <input type="text" placeholder="Your Name *" required />
                <input type="email" placeholder="Enter Your Email *" required />
                <input type="text" placeholder="Enter Your Mobile Number" />
                <input type="text" placeholder="Enquiry For" />
                <button type="submit" className="orange-button">
                  Submit Message <span className="arrow">→</span>
                </button>
              </form>
              <div className="form-icons">
                <i className="fas fa-map-marker-alt"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-envelope"></i>
                <i className="fas fa-search"></i>
                <i className="fas fa-users"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
