import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../App.css';
import LoginForm from '../components/LoginForm';
import GoogleSignIn from '../components/GoogleSignIn';
import Header from '../common/Header';
import Footer from '../common/Footer';


const clientId = '979457715207-ej65g5n8iounp1fqtmcs17air6p8as30.apps.googleusercontent.com'; 

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="HomePage">
        <Header />
        <main>
          <div className="container">
          <LoginForm />
          </div>
          <h2>Or</h2>
          <div className="container"><GoogleSignIn /></div>
        </main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;