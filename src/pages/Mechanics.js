import React, { useState, useEffect, useRef } from 'react';
import '../styles/mechanics.css';

// Importing skill-related images with corrected paths
import engineRepairImage from '../Photos/Engine repair.jpg';
import brakeRepairImage from '../Photos/Brake repair.jpg';
import oilChangeImage from '../Photos/Oil changes.jpg';
import suspensionWorkImage from '../Photos/Suspension work.jpg';
import diagnosticsImage from '../Photos/Diagnostics.jpg'; // New image for diagnostics

const Mechanics = () => {
  const [modalImageSrc, setModalImageSrc] = useState(null);
  const [currentImage, setCurrentImage] = useState(engineRepairImage);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMechanics, setFilteredMechanics] = useState([]);

  const imageRef = useRef(null); // Reference to the dynamic image

  // Mechanics data with skill-related images
  const mechanics = [
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Senior Mechanic', 
      experience: '10 years', 
      skills: 'Engine repair, Diagnostics',
      skillImage: engineRepairImage 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      role: 'Mechanic', 
      experience: '5 years', 
      skills: 'Brake repair, Tire replacement',
      skillImage: brakeRepairImage 
    },
    { 
      id: 3, 
      name: 'Sam Johnson', 
      role: 'Junior Mechanic', 
      experience: '2 years', 
      skills: 'Oil changes, Fluid checks',
      skillImage: oilChangeImage 
    },
    { 
      id: 4, 
      name: 'Alex Lee', 
      role: 'Senior Mechanic', 
      experience: '8 years', 
      skills: 'Suspension work, Electrical systems',
      skillImage: suspensionWorkImage 
    },
    { 
      id: 5, 
      name: 'Maya Green', 
      role: 'Mechanic', 
      experience: '3 years', 
      skills: 'Diagnostics',
      skillImage: diagnosticsImage 
    },
    { 
      id: 4, 
      name: 'Alex Lee', 
      role: 'Senior Mechanic', 
      experience: '8 years', 
      skills: 'Suspension work, Electrical systems',
      skillImage: suspensionWorkImage 
    },
    { 
        id: 1, 
        name: 'John Doe', 
        role: 'Senior Mechanic', 
        experience: '10 years', 
        skills: 'Engine repair, Diagnostics',
        skillImage: engineRepairImage 
      }
      ,
    { 
      id: 3, 
      name: 'Sam Johnson', 
      role: 'Junior Mechanic', 
      experience: '2 years', 
      skills: 'Oil changes, Fluid checks',
      skillImage: oilChangeImage 
    }
  
  ];

  // Image cycling logic (change every 3 seconds)
  useEffect(() => {
    const images = [engineRepairImage, brakeRepairImage, oilChangeImage, suspensionWorkImage, diagnosticsImage];
    let currentIndex = 0;

    const imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  // Function to filter mechanics based on the search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const query = event.target.value.toLowerCase();

    const filtered = mechanics.filter(mechanic => {
      return (
        mechanic.name.toLowerCase().includes(query) ||
        mechanic.role.toLowerCase().includes(query) ||
        mechanic.skills.toLowerCase().includes(query)
      );
    });

    setFilteredMechanics(filtered);
  };

  // Function to open the image in modal
  const openImage = (src) => setModalImageSrc(src);
  const closeImage = () => setModalImageSrc(null);

  // Handle mouse movement to update the clip-path
  const handleMouseMove = (event) => {
    const image = imageRef.current;
    const { offsetX, offsetY } = event.nativeEvent;

    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    const clipWidth = 200;
    const clipHeight = 150;

    const clipLeft = Math.max(0, offsetX - clipWidth / 2);
    const clipTop = Math.max(0, offsetY - clipHeight / 2);

    const clipPathValue = `rect(${clipTop}px, ${clipLeft + clipWidth}px, ${clipTop + clipHeight}px, ${clipLeft}px)`;

    image.style.clipPath = clipPathValue;
    image.style.opacity = 1;
    image.style.filter = 'brightness(0.6)';
  };

  // Reset the image when mouse leaves the container
  const handleMouseLeave = () => {
    const image = imageRef.current;
    image.style.opacity = 0.5; // Fade out the image
    image.style.clipPath = 'unset'; // Reset the clip-path
  };

  // Default filtered mechanics is all mechanics initially
  useEffect(() => {
    setFilteredMechanics(mechanics);
  }, []);

  return (
    <div className="mechanics-container">
      <h2>Our Mechanics</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a mechanic or skill..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Mechanics List */}
      <div className="mechanics-list">
        {filteredMechanics.length === 0 ? (
          <p>No mechanics found based on your search criteria.</p>
        ) : (
          filteredMechanics.map(mechanic => (
            <div key={mechanic.id} className="mechanic-card" onClick={() => openImage(mechanic.skillImage)}>
              <img 
                src={mechanic.skillImage}
                alt={`${mechanic.skills}`}
                className="mechanic-image"
              />
              <div className="mechanic-details">
                <h3>{mechanic.name}</h3>
                <p><strong>Role:</strong> {mechanic.role}</p>
                <p><strong>Experience:</strong> {mechanic.experience}</p>
                <p><strong>Skills:</strong> {mechanic.skills}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Dynamic skill image display */}
      <div className="skill-image-container"
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}>

        <h3 style={{marginBottom:'25px'}}>Current Mechanic Skill</h3>
        <img style={{borderRadius:'5px'}} ref={imageRef} className="dynamic-image" src={currentImage} alt="Current Mechanic Skill" />
      </div>

      {/* Blog-style Sections */}
      <div className="blog-section">
        <h3>Maintenance Tips</h3>
        <p>Keeping your car in top shape requires regular maintenance. Here are a few tips:</p>
        <ul>
          <li>Change your oil every 3,000-5,000 miles to keep the engine running smoothly.</li>
          <li>Check your brakes regularly to ensure your safety on the road.</li>
          <li>Inspect the suspension system for any wear and tear that can affect ride quality.</li>
          <li>Don't ignore warning lights; they often indicate problems that need immediate attention.</li>
        </ul>
      </div>

      <div className="blog-section">
        <h3>Common Mechanic Tasks</h3>
        <p>Mechanics perform a variety of tasks to keep your car running efficiently. Here are some common ones:</p>
        <ul>
          <li><strong>Engine Repair:</strong> Fixing issues in the engine, such as worn-out belts, faulty spark plugs, or damaged cylinders.</li>
          <li><strong>Brake Repair:</strong> Replacing brake pads, repairing brake lines, or replacing worn brake rotors.</li>
          <li><strong>Suspension Work:</strong> Replacing shock absorbers, struts, or suspension bushings to improve ride comfort and handling.</li>
          <li><strong>Diagnostics:</strong> Using special tools to identify engine issues, electrical faults, or system failures.</li>
        </ul>
      </div>

      {/* Modal to display image when a mechanic's card is clicked */}
      {modalImageSrc && (
        <div className="modal">
          <span className="close" onClick={closeImage}>&times;</span>
          <img className="modal-image" src={modalImageSrc} alt="Mechanic Skill" />
        </div>
      )}
    </div>
  );
};

export default Mechanics;
