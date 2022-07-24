import React from "react";
import { Routes, Route } from "react-router";
import Header from "./othercomponents/Header";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
};

export default App;
