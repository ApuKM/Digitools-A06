import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="main">
        <Banner />
      </section>
    </>
  );
};

export default App;
