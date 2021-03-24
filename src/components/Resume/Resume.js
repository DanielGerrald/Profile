import React, { Component } from "react";
import CV from "../../inc/Daniel Gerrald - Resume.pdf";
import { Link } from "react-router-dom";

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
                  <h3>UNC Charlotte / Trilogy Bootcamp</h3>
                  <p>August 2020 - October 2020</p>
                </div>

                <div className="timeline-content">
                  <h4>Coding Bootcamp Certification</h4>
                  <p>
                    Computer Science applied to JavaScript, Databases (MySQL,
                    MongoDB), Server Side Development (MERN Stack, Progressive
                    Web Applications), Browser Based Technologies (HTML5, CSS,
                    JavaScript, jQuery, Bootstrap), Deployment/Command-Line
                    Fundamentals (Heroku, Git), API Interaction (API, JSON,
                    AJAX), Quality Assurance (Unit Testing, Linting, Continuous
                    Integration), Agile Methodology
                  </p>
                </div>
              </div>
            </div>
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
                    Gateway (SIG) built on ZScaler technology. Participated in
                    design of call/chat/email monitoring formats and quality
                    standards. Owned, developed and implemented QA processes in
                    customer care. Ensured support team provided the highest
                    quality of support by (but not limited to) Conducting QA
                    reviews and monitoring adherence to the QA process across
                    all channels (phones, chats, tickets). Identified and
                    implemented improvements based on QA results for increased
                    customer satisfaction. Provided one-on-one mentoring to new
                    employees or those having difficulty meeting quality
                    requirements. Developed and implemented training programs
                    for both internal agents as well as for external customers.
                    Reviewed and interpreted Customer Care quality assurance
                    data to identify trends and develop recommendations to
                    improve customer experience and operational efficiency.
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
                    Managed 200 - 300 users and end devices, and 30 servers both
                    physical and virtual. Maintained emergency services such as
                    911 dispatch, fire department and police department on
                    99.999% uptime basis. Migrated domain controllers from
                    Windows 2008 to 2016 servers. Upgraded VMware environment
                    from 5.5 to 6.5. Implemented disaster recovery site using
                    vmware replication. Implemented Meraki wireless networks and
                    devices. Upgraded SCCM 2012 to SCCM Current Branch, and
                    managed software deployment and windows updates. Secured
                    network by implementing vlan segregated networks; maintained
                    documentation. Maintained and enforced network security
                    standards according to South Carolina Law Enforcement
                    Division (SLED) and Criminal Justice Information Service
                    (CJIS) compliance. Planned new network configurations and
                    integration into existing networks to maintain optimal
                    performance and replaced network switches and routers with
                    new models. Managed IP telephone system Shoretel/Mitel.
                    Evaluated business needs, objectives and goals, researching
                    products available and designating procedures to best meet
                    the needs of the city. Maintained proper user access control
                    with shared files and data. Managed cloud services and
                    subscriptions.
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
        <div className="row button-section">
          <div className="col-twelve">
            <Link
              to="portfolio"
              title="Portfolio"
              className="button stroke smoothscroll"
            >
              Portfolio
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={CV}
              title="Download CV"
              className="button button-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
