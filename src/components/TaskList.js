import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await TaskService.getAllTasks();
        console.log('Fetched tasks:', data);
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks, please log in', error);
        setError(error.message);
      }
    };

    fetchTasks();
  }, []);

  const handleUpdate = async (task) => {
    const updatedTitle = prompt('Enter new task title:', task.title);
    const updatedCategory = prompt('Enter new task category:', task.category);
    const updatedDescription = prompt('Enter new task description:', task.description);
    const updatedPriority = prompt('Enter new task priority:', task.priority);
    const updatedDueDate = prompt('Enter new task due date:', task.dueDate);
    const updatedStatus = prompt('Enter new task status:', task.status);
    const updatedUser = prompt('Enter new task user (username):', task.user.username);

    if (updatedTitle && updatedCategory && updatedDescription && updatedPriority && updatedDueDate && updatedStatus && updatedUser) {
      try {
        const updatedTask = {
          ...task,
          title: updatedTitle,
          category: updatedCategory,
          description: updatedDescription,
          priority: updatedPriority,
          dueDate: updatedDueDate,
          status: updatedStatus,
          user: { ...task.user, username: updatedUser }
        };
        await TaskService.updateTask(task.id, updatedTask);
        setTasks(tasks.map(t => (t.id === task.id ? updatedTask : t)));
      } catch (error) {
        console.error('Error updating task:', error);
        setError(error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await TaskService.deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
        setError(error.message);
      }
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>User Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.category}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td>{task.user.username}</td>
              <td>
                <button onClick={() => handleUpdate(task)}>Update</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;