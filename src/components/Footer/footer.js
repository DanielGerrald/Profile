import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-twelve tab-full social">
            <ul className="footer-social">
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
          </div>

          <div className="col-twelve tab-full social">
            <div className="copyright">
              <span>© Copyright 2020 </span>
              <span>
                Design by <a href="http://www.styleshout.com/">styleshout</a>
              </span>
              <span>
                Distributed by <a href="https://themewagon.com/">themewagon</a>
              </span>
            </div>
          </div>
          
          <div className="col-twelve tab-full social">
            <div className="copyright">
              <span>
              Refactored into React by <a href="https://github.com/DanielGerrald/Profile">Daniel Gerrald</a>
              </span>
              <span>
              Photography by <a href="#">Thomas Edmons</a>
              </span>
            </div>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="fa fa-long-arrow-up"></i>
            </a>
          </div>
        </div>

        <div id="preloader">
          <div id="loader"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
