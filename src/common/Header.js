import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file for styling
import Logout from '../common/Logout'; // Import the Logout component

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Logout /></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;