import React, { useState, useEffect } from 'react';
import './recentActivities.css';

const RecentActivities = () => {
  // Example state for activities data
  const [activities, setActivities] = useState([]);

  // Simulate fetching activities data (replace with actual API call)
  useEffect(() => {
    const fetchActivities = () => {
      // Simulating data fetching (you can replace this with an API call)
      const fetchedActivities = [
        { id: 1, title: 'Vehicle Added', description: 'A new vehicle was added to the fleet.', date: '2024-11-10' },
        { id: 2, title: 'Task Completed', description: 'Maintenance task for Vehicle #2334 completed.', date: '2024-11-09' },
        { id: 3, title: 'New Mechanic Assigned', description: 'Mechanic John Doe assigned to Vehicle #2334.', date: '2024-11-08' },
        { id: 4, title: 'Scheduled Maintenance', description: 'Vehicle #4425 scheduled for maintenance.', date: '2024-11-07' },
      ];
      setActivities(fetchedActivities);
    };

    fetchActivities();
  }, []);

  return (
    <div className="recent-activities-container">
      <h2>Recent Activities</h2>
      {activities.length === 0 ? (
        <p>No recent activities to show.</p>
      ) : (
        <div className="activities-list">
          {activities.map(activity => (
            <div key={activity.id} className="activity-card">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p className="activity-date">{activity.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivities;
