import React, { Suspense, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";
import TransformWorkflow from "./components/TransformWorkflow";
import Footer from "./components/Footer";
import ToolsContainer from "./components/ai tools/ToolsContainer";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import CartContainer from "./components/cart/CartContainer";

const fetchAiData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const [dataPromise] = useState(() => fetchAiData());
  const [cartItems, setCartItems] = useState([]);
  const [tab, setTab] = useState("models");
  // console.log(cartItems)
  return (
    <>
      <Navbar cartItems={cartItems} />
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
          {tab === "models" && (
            <ToolsContainer
              dataPromise={dataPromise}
              cartItems={cartItems}
              setCartItems={setCartItems}
              tab={tab}
              setTab={setTab}
            />
          )}
        </Suspense>
        {tab === "cart" && (
          <CartContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            tab={tab}
            setTab={setTab}
          />
        )}
        <GetStarted />
        <Pricing />
        <TransformWorkflow />
      </section>
      <Footer />
    </>
  );
};

export default App;
