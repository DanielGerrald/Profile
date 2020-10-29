import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
          </div>
        </div>

        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin"></i>
            </div>

            <h5>Where to find me</h5>

            <p>
              1700 N Brevard St.{"\n"}
              Charlotte, NC
            </p>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-mail"></i>
            </div>

            <h5>Email Me At</h5>

            <p>daniel.gerrald@icloud.com</p>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-phone"></i>
            </div>

            <h5>Call Me At</h5>

            <p>Mobile: (843) 819 7047</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
