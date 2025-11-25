import React, { useState } from 'react';
import './dashboard.css';
import Fordashboard from './Fordashboard';

const Dashboard = () => {


  // State for mechanics
  const [mechanics, setMechanics] = useState([
    { id: 1, name: 'John Doe', role: 'Mechanic', experience: '5 years', skills: 'Engine repair', skillImage: 'engineImage' },
    { id: 2, name: 'Jane Smith', role: 'Bike Specialist', experience: '3 years', skills: 'Bike repair', skillImage: 'bikeImage' },
  ]);

  // State for recent activities
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, vehicle: 'Toyota Camry', type: 'Car', action: 'Service Completed', date: '2024-11-01' },
    { id: 2, vehicle: 'Honda Accord', type: 'Car', action: 'Service Scheduled', date: '2024-10-30' },
  ]);

  // State for payment information
  const [payments, setPayments] = useState([
    { id: 1, vehicle: 'Toyota Camry', amount: 150, date: '2024-11-01', method: 'Credit Card' },
    { id: 2, vehicle: 'Honda Accord', amount: 120, date: '2024-10-30', method: 'Cash' },
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMechanic, setNewMechanic] = useState({
    name: '',
    role: 'Mechanic',
    experience: '',
    skills: '',
    skillImage: '',
  });

  // State for the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);  // Clear the selected image when modal closes
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMechanic({
      ...newMechanic,
      [name]: value,
    });
  };

  // Handle image change (for file input)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the image
      setSelectedImage(imageURL); // Set the selected image
      setNewMechanic({
        ...newMechanic,
        skillImage: file.name, // Set the file name in the mechanic state
      });
    }
  };

  // Add new mechanic
  const addMechanic = () => {
    if (newMechanic.name && newMechanic.experience && newMechanic.skills && selectedImage) {
      const mechanic = {
        id: mechanics.length + 1,
        ...newMechanic,
        skillImage: selectedImage, // Use the image URL for the mechanic
      };
      setMechanics([...mechanics, mechanic]);
      setIsModalOpen(false);  // Close modal after adding mechanic
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="dashboard">
     
      <Fordashboard/>

      {/* Mechanics Management Section */}
      <h2 style={{textAlign:'center',padding:'30px' }}>Mechanics Management</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Skill Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mechanics.map((mechanic) => (
            <tr key={mechanic.id}>
              <td>{mechanic.id}</td>
              <td>{mechanic.name}</td>
              <td>{mechanic.role}</td>
              <td>{mechanic.experience}</td>
              <td>{mechanic.skills}</td>
              <td>{mechanic.skillImage}</td>
              <td>
                <button className="btn bg-black text-white btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn bg-black text-white btn-sm" onClick={openModal}>
        Add New Mechanic
      </button>

      {/* Modal for Adding Mechanic */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Mechanic</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newMechanic.name}
              onChange={handleInputChange}
              className="form-control"
            />
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={newMechanic.role}
              onChange={handleInputChange}
              className="form-control"
            />
            <label>Experience:</label>
            <input
              type="text"
              name="experience"
              value={newMechanic.experience}
              onChange={handleInputChange}
              className="form-control"
            />
            <label>Skills:</label>
            <input
              type="text"
              name="skills"
              value={newMechanic.skills}
              onChange={handleInputChange}
              className="form-control"
            />
            <label>Skill Image:</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="form-control"
            />
            {selectedImage && <img src={selectedImage} alt="Preview" className="image-preview" />}
            <button className="btn bg-black text-white" onClick={addMechanic}>
              Add Mechanic
            </button>
            <button className="btn bg-black text-white" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Recent Activities Section */}
      <h2 style={{textAlign:'center' }}>Recent Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
            <th>Type</th>
            <th>Action</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentActivities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.vehicle}</td>
              <td>{activity.type}</td>
              <td>{activity.action}</td>
              <td>{activity.date}</td>
              <td>
                <button className="btn bg-black text-white btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payments Section */}
      <h2 style={{textAlign:'center' }}>Payments Information</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.vehicle}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
              <td>{payment.method}</td>
              <td>
                <button className="btn bg-black text-white btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
