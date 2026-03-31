import React, { Suspense, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";
import TransformWorkflow from "./components/TransformWorkflow";
import Footer from "./components/Footer";
import ToolsContainer from "./components/ai tools/ToolsContainer";

const fetchAiData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const [dataPromise] = useState(() => fetchAiData());
  return (
    <>
      <Navbar />
      <section id="main">
        <Banner />
        <Statistics />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-40">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <ToolsContainer dataPromise={dataPromise} />
        </Suspense>
        <TransformWorkflow />
      </section>
      <Footer />
    </>
  );
};

export default App;
