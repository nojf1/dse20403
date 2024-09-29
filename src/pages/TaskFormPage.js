import React from 'react';
import '../App.css';
import TaskForm from '../components/TaskForm';
import Header from '../common/Header';
import Footer from '../common/Footer';


const Tasks = () => {
  return (
    <div className="TaskFormPage">
      <Header />
      <main>
        <h1>Create new task</h1>
        <div className="container">
        <TaskForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tasks;