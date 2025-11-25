import React from 'react';
import '../styles/footer.css';
import { 
    FaMapMarkerAlt, 
    FaTwitter, 
    FaFacebookF, 
    FaInstagram, 
    FaLinkedin, 
    FaYoutube, 
    FaEnvelope 
} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer py-4 py-md-5 mt-5" style={{ backgroundColor: '#2c3e50' }}>
            <div className="container">
          

              

                <div className="col-md-2">
                    <strong><h3>Dashboard</h3></strong>
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/dashboard">Dashboard</Link></li>
                   
                        <li className="mb-2"><Link to="/mechanics">Mechanics</Link></li>
                        <li className="mb-2"><Link to="/about">About Us</Link></li>
                        <li className="mb-2"><Link to="/signup">Create Your Account</Link></li>
                    </ul>
                </div>

                <div className="col-md-2" style={{ marginRight: '70px', color: 'rgb(231, 227, 227)' }}>
                    <h3>Contact Us</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">

                        <a href="mailto:hamzamaansb487@gamil.com"style={{ color: '#fff', textDecoration: 'none' }}><FaEnvelope /> {''}hamza487@gamil.com</a>
                        </li>
                        <li className="mb-2">
                            <FaMapMarkerAlt />
                            <a
                                href="https://uet.edu.pk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#fff', textDecoration: 'none' }}
                            >
                                University of Engineering and Technology Lahore 
                            </a>
                        </li>
                        <li className="mb-2"><Link to="/contact">Contact Form</Link></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h3>Activities</h3>
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/recent-activities">Recent Activities</Link></li>
                      
                        <li className="mb-2"><Link to="/team-performance">Team Performance</Link></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h3>Support</h3>
                    <ul className="list-unstyled">
                   
                        <li className="mb-2"><Link to="/feedback">Feedback</Link></li>
                        <li className="mb-2"><Link to="/tasks">Tasks</Link></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <h3 style={{ textAlign: 'center' }}>Follow Us</h3>
                    <ul className="list-unstyled social-media">
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100092668164802&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="paragraph" style={{ marginRight: '20px', color: 'white' }}>
                    &copy; 2024 Vehicle Maintenance Management. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
