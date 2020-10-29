import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>Daniel Gerrald</h1>

              <p className="intro-position">
                <span>Full-stack Developer</span>
              </p>

              <a className="button stroke smoothscroll" href="#about" title="">
                More About Me
              </a>
            </div>
          </div>
        </div>

        <ul className="intro-social">
          <li>
            <a href="https://www.linkedin.com/in/daniel-gerrald-493b89165/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/DanielGerrald">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Intro;
