import React, { Component } from "react";
import ProfilePic from "../../images/profile-pic.jpg";
import CV from "../../inc/Daniel Gerrald - Resume 2020.pdf";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>

            <div className="intro-info">
              <img src={ProfilePic} alt="Daniel Gerrald" />

              <p className="lead">
                My name is Daniel Gerrald. I am a full stack web developer as
                well as an accomplished Network Administrator with a
                demonstrated history working in the government administration
                industry. I am a strong information technology professional and
                recent graduate from the Coding: Full Stack Development
                certificate program from the University of North Carolina
                Charlotte. In this intensive program I curated aptitudes in
                JavaScript, CSS, React.js, and responsive web design. I am always
                looking to build upon my knowledge and experience within the
                technology field. I am energetic about approaching programming
                challenges from different perspectives and partnering with
                others to create meaningful web applications. My background
                includes an Associate's degree centered in Computer Systems
                Networking and Telecommunications from Florence-Darlington
                Technical College and over nine years of information technology
                experience. I am driven by computer science fundamentals and
                appreciate breaking down a problem piece-by-piece to find a
                solution.
              </p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>

            <ul className="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>Daniel Lee Gerrald</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>January 30, 1989</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>daniel.gerrald@icloud.com</span>
              </li>
            </ul>
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>

            <ul className="info-list">
              <li>
                <strong>HTML</strong>
              </li>
              <li>
                <strong>CSS</strong>
              </li>
              <li>
                <strong>Javascript</strong>
              </li>
              <li>
                <strong>JQuery</strong>
              </li>
              <li>
                <strong>React</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="portfolio"
              title="Portfolio"
              className="button stroke smoothscroll"
            >
              Portfolio
            </a>
            <a href={CV} title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
