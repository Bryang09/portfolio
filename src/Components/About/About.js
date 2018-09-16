import React, { Component } from "react";

import WOW from "wowjs";

import "./About.css";

class About extends Component {
  componentDidMount = () => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  };
  render() {
    return (
      <div
        className="About wow fadeIn"
        data-wow-offset="50"
        data-wow-duration="1s"
      >
        <div className="text" id="About">
          <h2>
            About <span className="Me">Me</span>
          </h2>
          <h4>
            My name is Bryan Gonzalez. I grew up right here in Houston, TX. As
            soon as I discovered web development, I knew I wanted a career in
            the industry. I study and code for over 6 hours everyday, polishing
            my craft.
          </h4>
        </div>
        <div className="text">
          <h2>
            My <span className="Me">Skills</span>
          </h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3 / Flex Box</li>
            <li>Vanilla JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
