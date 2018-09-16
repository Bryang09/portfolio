import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src="mylogo.svg" alt="logo" />
      <div className="Navigation">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
