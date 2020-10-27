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

            <p className="lead"></p>
          </div>
        </div>

        <div className="row services-content">
          <div id="owl-slider" className="owl-carousel services-list">
            <div className="service">
              <span className="icon">
                <i className="icon-earth"></i>
              </span>

              <div className="service-content">
                <h3>Webdesign</h3>

                <p className="desc"></p>
              </div>
            </div>

            <div className="service">
              <span className="icon">
                <i className="icon-window"></i>
              </span>

              <div className="service-content">
                <h3>Web Development</h3>

                <p className="desc"></p>
              </div>
            </div>

            <div className="service">
              <span className="icon">
                <i className="icon-chat"></i>
              </span>

              <div className="service-content">
                <h3>Collaboration</h3>

                <p className="desc"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
