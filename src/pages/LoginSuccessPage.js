import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

const LoginSuccessPage = () => {
  return (
    <div className="HomePage">
      <Header />
      <main>
        <h1>Login Success</h1>
        <button><Link to="/">Go to Home Page</Link></button>

      </main>
      <Footer />
    </div>
  );
};

export default LoginSuccessPage;