import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserService.findAllUsers();
        console.log('Fetched users:', data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = async (user) => {
    const updatedUsername = prompt('Enter new username:', user.username);
    const updatedEmail = prompt('Enter new email:', user.email);
    if (updatedUsername && updatedEmail) {
      try {
        const updatedUser = { ...user, username: updatedUsername, email: updatedEmail };
        await UserService.updateUser(updatedUser);
        setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));
      } catch (error) {
        console.error('Error updating user:', error);
        setError(error.message);
      }
    }
  };

  const handleDelete = async (username) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await UserService.deleteUser(username);
        setUsers(users.filter(user => user.username !== username));
      } catch (error) {
        console.error('Error deleting user:', error);
        setError(error.message);
      }
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <button><a href="/">Back to Home Page</a></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user)}>Update</button>
                <button onClick={() => handleDelete(user.username)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;