import React from 'react';
import '../App.css';
import UserList from '../components/UserList';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Users = () => {
  return (
    <div className="HomePage">
      <Header />
      <main>
        <h1>Users List</h1>
        <UserList />
        <br></br>
        <br></br>
        <br></br>
      </main>
      <Footer />
    </div>
  );
};

export default Users;