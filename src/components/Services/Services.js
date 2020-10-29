import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="overlay"></div>

        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Services</h5>
            <h1>What Can I Do For You?</h1>
          </div>
        </div>

        <div className="row services-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-earth"></i>
            </div>
            <h3>Webdesign</h3>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-window"></i>
            </div>
            <h3>Web Development</h3>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-chat"></i>
            </div>
            <h3>Collaboration</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
