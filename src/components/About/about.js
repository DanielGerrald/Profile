import React, { Component } from "react";
import ProfilePic from "../../images/profile-pic.webp";

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
                JavaScript, CSS, React.js, and responsive web design. I am
                always looking to build upon my knowledge and experience within
                the technology field. I am energetic about approaching
                programming challenges from different perspectives and
                partnering with others to create meaningful web applications. My
                background includes an Associate's degree centered in Computer
                Systems Networking and Telecommunications from
                Florence-Darlington Technical College and over nine years of
                information technology experience. I am driven by computer
                science fundamentals and appreciate breaking down a problem
                piece-by-piece to find a solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
