import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="background-container">
      <Header />
      <main>
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple task management application.</p>
        <p>Login to access all of its features.</p>
        <div className="container">
        <button><Link to="/users">Go to Users Page</Link></button>
        <button><Link to="/tasks">Go to Tasks Page</Link></button>
        <button><Link to="/login">Go to Login Page</Link></button>
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default HomePage;