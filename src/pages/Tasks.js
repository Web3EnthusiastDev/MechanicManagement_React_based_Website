import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tasks = () => {
  // Sample task list with initial data
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project documentation', completed: false },
    { id: 2, title: 'Fix bugs in the code', completed: false },
    { id: 3, title: 'Design new UI components', completed: false },
    { id: 4, title: 'Prepare for team meeting', completed: false },
  ]);

  // Function to toggle task completion
  const toggleCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tasks</h2>
      <div className="list-group">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? 'list-group-item-success' : ''
            }`}
          >
            <span
              onClick={() => toggleCompletion(task.id)}
              style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="btn bg-black text-white btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
