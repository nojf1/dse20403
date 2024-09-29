import React from 'react';
import '../App.css'; // Optional: Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;