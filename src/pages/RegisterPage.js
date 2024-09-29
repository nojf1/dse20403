import React from 'react';
import '../App.css';
import RegisterForm from '../components/RegisterForm';
import Header from '../common/Header';
import Footer from '../common/Footer';


const RegisterPage = () => {
  return (
    <div className="TaskFormPage">
      <Header />
      <main>
        <h1>Register new user</h1>
        <div className="container2">
        <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;