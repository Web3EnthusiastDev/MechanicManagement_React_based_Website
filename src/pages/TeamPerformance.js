import React, { useState } from 'react';
import '../styles/team-performance.css'; // Optional CSS for styling

const TeamPerformance = () => {
  // Sample data for team performance
  const [teamData, setTeamData] = useState([
    { id: 1, name: 'AZHAR KHAN', tasksCompleted: 32, totalTasks: 40, rating: 4.5 },
    { id: 2, name: 'ATIF JHORAR', tasksCompleted: 28, totalTasks: 35, rating: 4.0 },
    { id: 3, name: 'ASLAM KHAN', tasksCompleted: 30, totalTasks: 33, rating: 4.8 },
    { id: 4, name: 'NAWAZ KHAN', tasksCompleted: 25, totalTasks: 30, rating: 3.9 },
  ]);

  // Function to calculate completion percentage
  const calculateCompletion = (tasksCompleted, totalTasks) => {
    return ((tasksCompleted / totalTasks) * 100).toFixed(2);
  };

  // Function to calculate average team rating
  const calculateAverageRating = () => {
    const totalRating = teamData.reduce((sum, member) => sum + member.rating, 0);
    return (totalRating / teamData.length).toFixed(1);
  };

  // Function to calculate overall team completion percentage
  const calculateOverallCompletion = () => {
    const totalCompletion = teamData.reduce(
      (sum, member) => sum + (member.tasksCompleted / member.totalTasks) * 100,
      0
    );
    return (totalCompletion / teamData.length).toFixed(2);
  };

  return (
    <div className="team-performance-container">
      <h2 className="title">Team Performance Overview</h2>

      {/* Team Performance Summary Section */}
      <div className="team-performance-summary">
        <p>Overall Team Completion: {calculateOverallCompletion()}%</p>
        <p>Average Team Rating: {calculateAverageRating()}</p>
      </div>

      {/* Team Members Table */}
      <table className="team-performance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tasks Completed</th>
            <th>Total Tasks</th>
            <th>Completion %</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.tasksCompleted}</td>
              <td>{member.totalTasks}</td>
              <td>{calculateCompletion(member.tasksCompleted, member.totalTasks)}%</td>
              <td>{member.rating.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Blog Section */}
      <section className="performance-blog">
        <h3>Performance Insights</h3>
        <div className="blog-post">
          <h4>Improving Team Efficiency</h4>
          <p>
            Team performance is often directly linked to effective communication and efficient task allocation. 
            Here's how we can improve efficiency and ensure our team reaches its full potential:
          </p>
          <ul>
            <li>Regular check-ins to assess progress.</li>
            <li>Set clear, measurable goals for each task.</li>
            <li>Encourage collaboration among team members.</li>
            <li>Track progress with performance metrics.</li>
          </ul>
        </div>
        <div className="blog-post">
          <h4>How Ratings Reflect Performance</h4>
          <p>
            Ratings are a quick way to evaluate how well a team member is performing. However, ratings should be 
            considered alongside other factors like task completion, attitude, and collaboration. A good rating 
            can be a reflection of the team member's effort and dedication.
          </p>
        </div>
      </section>

      {/* Optional: Graphical Representation */}
      {/* You can include a chart component here for visual performance analysis */}
    </div>
  );
};

export default TeamPerformance;
