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
                My Name is Daniel, and with 10 years experience in the
                technology field I am advancing my skills with full-stack
                development. I am an experienced Network Administrator with a
                demonstrated history of working in the government administration
                industry. Skilled in Group Policy, Software Implementation,
                Domain Name System (DNS), Dynamic Host Configuration Protocol
                (DHCP), and Active Directory. Strong information technology
                professional with an Associate's degree focused in Computer
                Systems Networking and Telecommunications from
                Florence-Darlington Technical College.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p></p>

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
            <p></p>

            <ul className="skill-bars">
              <li>
                <div className="progress percent60">
                  <span>60%</span>
                </div>
                <strong>HTML</strong>
              </li>
              <li>
                <div className="progress percent50">
                  <span>50%</span>
                </div>
                <strong>CSS</strong>
              </li>
              <li>
                <div className="progress percent40">
                  <span>40%</span>
                </div>
                <strong>JQuery</strong>
              </li>
              <li>
                <div className="progress percent40">
                  <span>40%</span>
                </div>
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
