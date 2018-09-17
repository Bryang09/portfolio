import React, { Component } from "react";

import WOW from "wowjs";

import "./SubSection.css";

class SubSection extends Component {
  componentDidMount = () => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  };
  render() {
    return (
      <div className="SubSection" id="sub">
        <div className="box1 box wow fadeIn" data-wow-duration="1s">
          <div className="innerText">
            <h2>Best Practice Code</h2>
            <h3>
              I write clean and understandable code with best practice in mind.
            </h3>
          </div>
        </div>
        <div className="box2 box wow fadeIn" data-wow-duration="1.2s">
          <div className="innerText">
            <h2>Responsive Designs</h2>
            <h3>
              Making applications that hold up across all platforms is a
              definite must
            </h3>
          </div>
        </div>
        <div className="box3 box wow fadeIn" data-wow-duration="1.4s">
          <div className="innerText">
            <h2>Lifelong Learner</h2>
            <h3>
              Technology will always change and I posses the hunger to continue
              evolving along with it.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SubSection;
