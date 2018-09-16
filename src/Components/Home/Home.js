import React, { Component } from "react";
import WOW from "wowjs";
import Typing from "react-typing-animation";
import "./Home.css";

class Home extends Component {
  componentDidMount = () => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  };
  render() {
    console.log(this.props);
    return (
      <div className="HomeMain">
        <div className="Home">
          <Typing speed={50} className="Home">
            <h1>Bryan Gonzalez</h1>
            <h3>Front End Developer</h3>
            <a href="#sub">
              <h5 className="searchBtn">Let's Begin!</h5>
            </a>
          </Typing>
        </div>
        <div className="HomeIcons wow bounceInDown" data-wow-delay="3s">
          <ul>
            <li>
              <a href="https://github.com/Bryang09">
                <i className="fab fa-github fa-4x" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bryan-gonzalez09/">
                <i className="fab fa-linkedin fa-4x" />
              </a>
            </li>
            <li>
              <a href="mailto:'bryan.gonzalez1020.bg@gmail.com'">
                <i className="fas fa-envelope fa-4x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
