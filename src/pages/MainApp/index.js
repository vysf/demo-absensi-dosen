import React from "react";
// import { Routes } from "../../config";
import { Routess } from "../../config";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "../../components";

const MainApp = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Routess />
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default MainApp;
