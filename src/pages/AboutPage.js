import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="background-container">
        <Header />
        <main>
        <div className="container2">
          <h1>About Us</h1>
          <p>
            This is a simple Task Management application. It allows users to
            create, update, and delete tasks. The application is built using
            React, and it uses OAuth for user authentication.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
