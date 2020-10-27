import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>

            <p className="lead"></p>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Avast Antivirus</h3>
                  <p>February 2019 - July 2020</p>
                </div>

                <div className="timeline-content">
                  <h4>Senior Technical Support Specialist</h4>
                  <p>
                    Managed and implemented support processes and best practices
                    for new software product offering – Avast Secure Internet
                    Gateway (SIG) built on ZScaler technology.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>City of GooseCreek</h3>
                  <p>January 2015 - February 2019</p>
                </div>

                <div className="timeline-content">
                  <h4>Network Administrator</h4>
                  <p>
                    Managed and maintained network security and reliability
                    across multiple departments and facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>UNC Charlotte {"\n"} Coding Bootcamp</h3>
                  <p>July 2020 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>Student</h4>
                  <p>Learning HTML, CSS, Vanilla Javascript, JQuery, and GIT</p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>New Horizons</h3>
                  <p>June 2018 - July 2018</p>
                </div>

                <div className="timeline-content">
                  <h4>Implementing Cisco Network Security</h4>
                  <p>
                    Cisco based Routing, Switching, and overall network
                    administration.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Florence-Darlington Technical College</h3>
                  <p>May 2009 - June 2011</p>
                </div>

                <div className="timeline-content">
                  <h4>
                    Computer Systems Networking and Telecommunications,
                    Associate Degree
                  </h4>
                  <p>
                    Learned about securing routing and switching
                    infrastructures, deploying basic authentication,
                    authorization, and accounting services, deploying basic
                    fire-walling services, deploying basic site-to-site and
                    remote access VPN services, and learned more about the use
                    of more advanced security services, such as intrusion
                    protection, content security, and identity management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
