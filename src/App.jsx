import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from './dashboards/TeacherDashboard';
import ReceptionistDashboard from './dashboards/ReceptionistDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import DataScience from './pages/DataScience';
import UIUX from './pages/UIUX';
import Java from './pages/Java';
import Python from './pages/Python';
import DSA from './pages/DSA';
import FullStack from './pages/FullStack';
import ReactCourse from './pages/ReactCourse';
import DigitalMarketing from './pages/DigitalMarketing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/datascience" element={<DataScience/>}/>
        <Route path="/uiux" element={<UIUX/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
        <Route path="/dsa" element={<DSA/>}/>
        <Route path="/fullstack" element={<FullStack/>}/>
        <Route path="/react" element={<ReactCourse/>}/>
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/receptionist" element={<ReceptionistDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;