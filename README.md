This project is to be used with Spring Boot API

run npm install to reinstall dependencies when cloned

Task Management & OAuth Integration Platform
This repository contains the code and documentation for a comprehensive Task Management System, coupled with OAuth-based social registration and login functionalities. The project demonstrates the integration of backend APIs, frontend interfaces, and social login mechanisms, using modern web development frameworks and tools.

Features
Task Management API:

User Registration and Login
Task Creation, Retrieval, Update, and Deletion
Search tasks by title, category, and priority
Task prioritization system

ReactJS Frontend:

Intuitive user interface for task management
Routing using React Router
Data fetching via REST APIs using Axios

OAuth Social Login:

Google, Facebook, and GitHub login integration
Display user profiles after successful login
Backend support for OAuth token management (optional)

Web Application for Student Results:

Student registration and login
Display individual results fetched from a database
Additional pages: Home, Contact Us, About Us, Terms & Conditions

Technical Stack
Backend: Spring Boot, JPA, REST API
Frontend: ReactJS
Database: MySQL Server with phpMyAdmin
Social Login: OAuth 2.0 for Google, Facebook, and GitHub

Prerequisites for use
Ensure the following tools are installed on your system:

Java Development Kit (JDK)
Node.js
MySQL Server and Client Tools
Postman (for API testing)
Any IDE supporting Spring Boot and ReactJS
Setup Instructions
Backend API
Clone the repository.
Navigate to the backend directory.
Build and run the application using:
bash
Copy code
./mvnw spring-boot:run
Access the API at http://localhost:8080/api.
Frontend Application
Navigate to the frontend directory.
Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
npm start
Open http://localhost:3000 in your browser.