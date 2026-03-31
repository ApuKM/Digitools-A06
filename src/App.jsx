import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="main">
        <Banner />
        <Statistics />
      </section>
    </>
  );
};

export default App;
