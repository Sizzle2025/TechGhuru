import React, { useState } from "react";
import "./AuthCard.css";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [showRegister, setShowRegister] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={`auth-wrapper ${showRegister ? "mode-register" : ""}`}>
      <div className="auth-panel">
        {/* Registration Panel */}
        <div className="form-box register-box">
          <h2>Create Your Space</h2>
          <form>
            <div className="field-group">
              <input type="text" required />
              <label>Your Full Name</label>
            </div>
            <div className="field-group">
              <input type="email" required />
              <label>Official Email</label>
            </div>
            <div className="field-group">
              <input type="password" required />
              <label>Create Password</label>
            </div>
            <button className="auth-btn">Register</button>
          </form>
          <p className="toggle-text">
            Already signed up?
            <span onClick={() => setShowRegister(false)}> Login Instead</span>
          </p>
          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>

        {/* Login Panel */}
        <div className="form-box login-box">
          <h2>Welcome Back</h2>
          <form>
            <div className="field-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>
            <div className="field-group">
              <input type="password" required />
              <label>Secret Key</label>
            </div>
            <button className="auth-btn">Enter Portal</button>
          </form>
          <p className="toggle-text">
            New to us?
            <span onClick={() => setShowRegister(true)}> Create Profile</span>
          </p>
          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
