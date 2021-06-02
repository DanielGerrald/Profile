import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
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
            <a
              name="LinkedIn"
              href="https://www.linkedin.com/in/daniel-gerrald-493b89165/"
              alt="linkedin-image"
              target="_blank"
              rel="noopener noreferrer"
            ><span>LinkedIn</span>
              <i className="fa fa-linkedin fa-3x"></i>
            </a>
          </li>
          <li>
            <a
              name="Github"
              href="https://github.com/DanielGerrald"
              alt="github-image"
              target="_blank"
              rel="noopener noreferrer"
            ><span>Github</span>
              <i className="fa fa-github fa-3x"></i>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Intro;
