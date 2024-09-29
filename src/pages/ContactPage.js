import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const ContactPage = () => {
  return (
    <div className="HomePage">
      <div className="background-container">
        <Header />
        <main>
        <div className="container2">
          <h1>Contact Us</h1>
          <p>You can contact the owner of this site at: </p>
          <button><a href="mailto: ">123123123@test.com</a></button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
