import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TaskList from '../components/TaskList';
import Header from '../common/Header';
import Footer from '../common/Footer';


const Tasks = () => {
  return (
    <div className="HomePage">
      <Header />
      <main>
        <h1>Task List</h1>
        <button><Link to="/createTask">Create new task</Link></button>
        <TaskList />
        <br></br>
        <br></br>
        <br></br>
      </main>
      <Footer />
    </div>
  );
};

export default Tasks;