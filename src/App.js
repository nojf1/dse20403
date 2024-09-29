import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Users from './pages/UserPage';
import Tasks from './pages/TaskPage';
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './pages/LoginSuccessPage';
import AboutPage from './pages/AboutPage';
import TaskFormPage from './pages/TaskFormPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginsuccess" element={<LoginSuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/createTask" element={<TaskFormPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;