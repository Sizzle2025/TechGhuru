import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

// Icons
import {
  FaLock,
  FaUserPlus,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar shadow-sm">
      <div className="container py-2 d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-text ms-2">TechGhuru Academy</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto text-center gap-lg-4">
            <li className="nav-item">
              <Link
                className="nav-link nav-hover d-flex align-items-center gap-1"
                to="/"
              >
                <FaHome /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover d-flex align-items-center gap-1"
                to="/about"
              >
                <FaInfoCircle /> About
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <span className="nav-link nav-hover d-flex align-items-center gap-1">
                <FaBookOpen /> Courses
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/courses">
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/java">
                    Java
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/react">
                    React
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dsa">
                    DSA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fullstack">
                    Full Stack
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/uiux">
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/python">
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/digitalmarketing"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dataScience">
                    Data Science
                  </Link>
                </li>
                
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-hover d-flex align-items-center gap-1"
                to="/contact"
              >
                <FaPhoneAlt /> Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0 gap-2">
            <Link to="/login" className="btn btn-outline-orange">
              <FaLock className="me-1" /> Login
            </Link>
            <Link to="/signup" className="btn btn-orange">
              <FaUserPlus className="me-1" /> Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;