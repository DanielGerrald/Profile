import React, { Component } from "react";

class Header extends Component {
  state = {
    active: false,
    style: { display: "none" },
  };

  render() {
    return (
      <header>
        <div className="row">
          <div className="top-bar">
            <div
              className={
                this.state.active === true
                  ? "menu-toggle is-clicked"
                  : "menu-toggle"
              }
              onClick={() => {
                this.setState({ active: !this.state.active });
                if (this.state.active) {
                  this.setState({ style: { display: "none" } });
                } else {
                  this.setState({ style: { display: "block" } });
                }
              }}
            >
              <span>Menu</span>
            </div>

            <div className="logo">
              <a href="/">Daniel</a>
            </div>

            <nav id="main-nav-wrap">
              <ul className="main-navigation" style={this.state.style}>
                <li className="current">
                  <a className="smoothscroll" href="/#" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/#about" title="">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/#resume" title="">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/portfolio" title="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="smoothscroll"
                    href="/portfolio/#services"
                    title=""
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="smoothscroll"
                    href="/portfolio/#contact"
                    title=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
