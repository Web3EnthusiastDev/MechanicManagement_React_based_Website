import React, { useState } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaCar, 
  FaFileAlt, 
  FaWrench, 
  FaTools, 
  FaCog, 
  FaCalendarCheck, 
  FaCommentDots, 
  FaSignOutAlt 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './NavbarSidebar.css';

const NavbarSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMouseLeave = () => {
    // Close sidebar when mouse leaves if it's open
    setSidebarOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="logo">Vehicle Maintenance</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div 
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        onMouseLeave={handleMouseLeave} // Close sidebar on mouse leave
      >
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/dashboard" onClick={toggleSidebar}><FaUser /> Dashboard</Link></li>
          <li><Link to="/mechanics" onClick={toggleSidebar}><FaCar /> Mechanics</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}><FaFileAlt /> About Us</Link></li>
          <li><Link to="/signup" onClick={toggleSidebar}><FaWrench /> Create Your Account</Link></li>
          <li><Link to="/recent-activities" onClick={toggleSidebar}><FaTools /> Recent Activities</Link></li>
          <li><Link to="/team-performance" onClick={toggleSidebar}><FaCog /> Team Performance</Link></li>
          <li><Link to="/feedback" onClick={toggleSidebar}><FaCalendarCheck /> Feedback</Link></li>
          <li><Link to="/tasks" onClick={toggleSidebar}><FaCommentDots /> Tasks</Link></li>
        </ul>
        <button className="logout-btn" onClick={toggleSidebar}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarSidebar;
