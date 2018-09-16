import React from "react";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Sub from "./SubSection/SubSection";
import About from "./About/About";

const Main = () => {
  return (
    <div className="Main">
      <Home />
      <Sub />
      <About />
      <Projects />
    </div>
  );
};

export default Main;
