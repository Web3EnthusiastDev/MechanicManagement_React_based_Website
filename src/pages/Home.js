import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './home.css';

// Importing images from the src/Photos folder
import vehicleMaintenanceImage from '../Photos/mainneceimage.jpg';
import oilChangeImage from '../Photos/oilchangeing.jpg';
import tireCheckImage from '../Photos/tirecheck.jpg';
import brakeInspectionImage from '../Photos/breakinspection.jpg';
import batteryMaintenanceImage from '../Photos/beterymiantence.jpg';
import transmissionServiceImage from '../Photos/transmissionservice.jpg';
import airFilterReplacementImage from '../Photos/airfilterreplacement.jpg';
import coolantFlushImage from '../Photos/coolantflush.jpg';
import alignmentCheckImage from '../Photos/alignmentcheck.jpg';
import engineDiagnosticsImage from '../Photos/enginediagnostics.jpg';

const Home = () => {
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const openImage = (src) => setModalImageSrc(src);
    const closeImage = () => setModalImageSrc(null);

    return (
        <div className="home">
            {/* Hero Section with Background Image */}
            <section className="hero">
                <img className="hero-image" src={vehicleMaintenanceImage} alt="Vehicle Maintenance" />
                <div className="hero-content">
                    <h1>Welcome to the Vehicle Maintenance System</h1>
                    <p>Your trusted partner for all vehicle maintenance needs.</p>
                    {/* Use Link for navigation */}
                    <Link to="/book-appointment">
                        <button className="cta-button">Book an Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Featured Services Section with Images */}
            <section className="services">
                <h2>Our Featured Services</h2>
                <div className="service-cards">
                    <div className="service-card" onClick={() => openImage(oilChangeImage)}>
                        <h3>Oil Change</h3>
                        <img className="service-card-image" src={oilChangeImage} alt="Oil Change" />
                        <p>Keep your engine running smoothly with regular oil changes.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(tireCheckImage)}>
                        <h3>Tire Check</h3>
                        <img className="service-card-image" src={tireCheckImage} alt="Tire Check" />
                        <p>Ensure your tires are in optimal condition for safety.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(brakeInspectionImage)}>
                        <h3>Brake Inspection</h3>
                        <img className="service-card-image" src={brakeInspectionImage} alt="Brake Inspection" />
                        <p>We ensure your brakes are working properly to keep you safe.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(batteryMaintenanceImage)}>
                        <h3>Battery Maintenance</h3>
                        <img className="service-card-image" src={batteryMaintenanceImage} alt="Battery Maintenance" />
                        <p>Get your vehicle's battery checked to avoid unexpected breakdowns.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(transmissionServiceImage)}>
                        <h3>Transmission Service</h3>
                        <img className="service-card-image" src={transmissionServiceImage} alt="Transmission Service" />
                        <p>Extend the life of your vehicle with a complete transmission service.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(airFilterReplacementImage)}>
                        <h3>Air Filter Replacement</h3>
                        <img className="service-card-image" src={airFilterReplacementImage} alt="Air Filter Replacement" />
                        <p>Improve air quality and performance with a fresh air filter.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(coolantFlushImage)}>
                        <h3>Coolant Flush</h3>
                        <img className="service-card-image" src={coolantFlushImage} alt="Coolant Flush" />
                        <p>Keep your engine cool and prevent overheating with a coolant flush.</p>
                    </div>
                    <div className="service-card" onClick={() => openImage(alignmentCheckImage)}>
                        <h3>Alignment Check</h3>
                        <img className="service-card-image" src={alignmentCheckImage} alt="Alignment Check" />
                        <p>Improve handling and tire life with regular alignment checks.</p>
                    </div>
                </div>
            </section>

            <section className="blogs">
    <h2 style={{textAlign:'center'}}>Repair Trends</h2>
    <div className="blog-list">
        <div className="blog-item">
            <h3>Importance of Regular Vehicle Maintenance</h3>
            <p>Read about the importance of keeping your vehicle in top condition...</p>
            <Link to="https://twincityautomotive.com/the-importance-of-regular-vehicle-maintenance-a-guide-for-every-car-owner/">Read More</Link>
        </div>
        <div className="blog-item">
            <h3>Why Oil Changes Are Critical for Your Engine</h3>
            <p>Understand why oil changes are a key part of vehicle longevity...</p>
            <Link to="/blog/oil-change">Read More</Link>
        </div>
        <div className="blog-item">
            <h3>How to Prevent Brake Wear</h3>
            <p>Learn tips on how to maintain your brakes for maximum safety...</p>
            <Link to="/blog/brake-maintenance">Read More</Link>
        </div>
    </div>
</section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2 style={{textAlign:'center'}}>What Our Clients Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>"The team at Vehicle Maintenance System kept my car running smoothly. Highly recommend!"</p>
                        <h4>John Doe</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"Quick and reliable service. I trust them with my vehicle maintenance."</p>
                        <h4>Jane Smith</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"Quick and reliable service. I trust them with my vehicle maintenance."</p>
                        <h4>Jane Smith</h4>
                    </div>
                </div>
            </section>

            {/* News & Updates Section */}
            <section className="news">
                <h2 style={{textAlign:'center'}}>News & Updates</h2>
                <div className="news-cards">
                    <div className="news-card">
                        <h3> Transmission Flush Now Available</h3>
                        <p>We're now offering Transmission Flush services to keep your vehicle in top condition...</p>
                        <Link to="/news/transmission-flush">Read More</Link>
                    </div>
                    <div className="news-card">
                        <h3>Summer Maintenance Tips for Your Vehicle</h3>
                        <p>Learn how to prepare your vehicle for the hot summer months...</p>
                        <Link to="/news/summer-maintenance">Read More</Link>
                    </div>
                    <div className="news-card">
                        <h3>Summer Maintenance Tips for Your Vehicle</h3>
                        <p>Learn how to prepare your vehicle for the hot summer months...</p>
                        <Link to="/news/summer-maintenance">Read More</Link>
                    </div>
                </div>
            </section>

            {/* Modal to display image when a service is clicked */}
            {modalImageSrc && (
                <div className="modal">
                    <span className="close" onClick={closeImage}>&times;</span>
                    <img className="modal-image" src={modalImageSrc} alt="Service Detail" />
                </div>
            )}
        </div>
    );
};

export default Home;
