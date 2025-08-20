import React from "react";
import { NavLink } from "react-router-dom";

class Slider2 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-2.js");
  }
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <>
      <div className="hero-container">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source
          src={require("./../../images/videos/large_view.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h3 className="hero-tagline">Creative & Modern</h3>
        <h1 className="hero-title">Website Design Company</h1>
        <p className="hero-description">
          We craft responsive, user-friendly, and visually stunning websites
          that help your business stand out and grow online.
        </p>
        <NavLink to="/about-1" className="hero-btn">
          Get Started
        </NavLink>
      </div>
    </div>
      </>
    );
  }
}

export default Slider2;
