import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";
import TransformWorkflow from "./components/TransformWorkflow";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="main">
        <Banner />
        <Statistics />
        <TransformWorkflow />
      </section>
    </>
  );
};

export default App;
