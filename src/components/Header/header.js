import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  container = React.createRef();
  state = {
    active: false,
    style: { display: "none" },
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        active: false,
        style: { display: "none" }
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  render() {
    return (
      <header>
        <div className="row" ref={this.container}>
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
                <li>
                  <Link className="smoothscroll" to="/" title="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="smoothscroll" to="/about" title="About">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="smoothscroll" to="/resume" title="Resume">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link className="smoothscroll" to="/portfolio" title="Portfolio">
                    Portfolio
                  </Link>
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
