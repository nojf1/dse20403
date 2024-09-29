import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    alert("You have been logged out successfully"); // Show an alert message
    navigate('/login'); // Redirect to the login page
    
  };

  return (
    <ul>
    <li className="logoutbtn" onClick={handleLogout}>Logout</li>
    </ul>
  );
};

export default Logout;