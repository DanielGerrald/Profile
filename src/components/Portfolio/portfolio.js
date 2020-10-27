import React, { Component } from "react";
import WD from "../../images/portfolio/weatherDash.jpg";
import DP from "../../images/portfolio/dayPlanner.jpg";
import NS from "../../images/portfolio/NYTSearch.jpg";
import LR from "../../images/portfolio/Lunch Randomizer.jpg";
import EB from "../../images/portfolio/eat-a-burger.jpg";
import GG from "../../images/portfolio/GreenerGrass.jpg";
import { Modal } from "react-bootstrap";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
    };
  }

  modal(data) {
    this.setState( {[data]: !this.state[data]} )
  }

  render() {
    return (
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Work.</h1>

            <p className="lead"></p>
          </div>
        </div>

        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={WD} alt="Weather Dashboard" />
                  <div
                    onClick={() => this.modal("modal1")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Weather Dashboard</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={DP} alt="Day Planner" />
                  <div onClick={() => this.modal("modal2")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Day Planner</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={NS} alt="NYTSearch" />
                  <div onClick={() => this.modal("modal3")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">NYT Article Search</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={LR} alt="Lunch Randomizer" />
                  <div onClick={() => this.modal("modal4")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Lunch Randomizer</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={EB} alt="Eat-A-Burger" />
                  <div onClick={() => this.modal("modal5")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Eat-A-Burger</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={GG} alt="Greener Grass" />
                  <div onClick={() => this.modal("modal6")} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Greener Grass</h3>
                        <span className="folio-types"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Modal show={this.state.modal1}>
                <div id="modal-01" className="popup-modal slider">
                  <div className="media">
                    <img src={WD} alt="Weather Dashboard" />
                  </div>

                  <div className="description-box">
                    <h4>Weather Dashboard</h4>
                    <p>
                      This project was created to gather the current weather
                      forecast for the desired city as well as the next 5 day
                      forecast.
                    </p>

                    <div className="categories"></div>
                  </div>

                  <div className="link-box">
                    <a href="https://github.com/DanielGerrald/Weather_Dashboard">
                      Details
                    </a>
                    <a
                      href="/#"
                      onClick={() => this.modal("modal1")}
                      className="popup-modal-dismiss"
                    >
                      Close
                    </a>
                  </div>
                </div>
              </Modal>

              <Modal show={this.state.modal2}>
              <div id="modal-02" className="popup-modal slider">
                <div className="media">
                  <img src={DP} alt="Day Planner" />
                </div>

                <div className="description-box">
                  <h4>Day Planner</h4>
                  <p>
                    This is a project I did that allows the user to input a task
                    for every business hour. The tasks are saved and the hour
                    will highlight red for the active hour and green for future
                    hours that have not passed for that day.
                  </p>

                  <div className="categories"></div>
                </div>

                <div className="link-box">
                  <a href="https://github.com/DanielGerrald/Day_Planner">
                    Details
                  </a>
                  <a href="/#"
                      onClick={() => this.modal("modal2")} className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
              </Modal>

              <Modal show={this.state.modal3}>
              <div id="modal-03" className="popup-modal slider">
                <div className="media">
                  <img src={NS} alt="NYTSearch" />
                </div>

                <div className="description-box">
                  <h4>NYT Search</h4>
                  <p>
                    This is a project that I did with a few friends to search
                    the NY Times for articles based on desired headline content.
                  </p>

                  <div className="categories"></div>
                </div>

                <div className="link-box">
                  <a href="https://github.com/DanielGerrald/NYT_Search">
                    Details
                  </a>
                  <a href="/#"
                      onClick={() => this.modal("modal3")}  className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
              </Modal>

              <Modal show={this.state.modal4}>
              <div id="modal-04" className="popup-modal slider">
                <div className="media">
                  <img src={LR} alt="Lunch Randomizer" />
                </div>

                <div className="description-box">
                  <h4>Lunch Randomizer</h4>
                  <p>
                    This is a project I did with a few friends to create a
                    method to randomly select a nearby eatery based on cuisine
                    type.
                  </p>

                  <div className="categories"></div>
                </div>

                <div className="link-box">
                  <a href="https://github.com/DanielGerrald/Project_1">
                    Details
                  </a>
                  <a href="/#"
                      onClick={() => this.modal("modal4")} className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
              </Modal>

              <Modal show={this.state.modal5}>
              <div id="modal-05" className="popup-modal slider">
                <div className="media">
                  <img src={EB} alt="eat-a-burger" />
                </div>

                <div className="description-box">
                  <h4>Eat-A-Burger</h4>
                  <p>
                    This is a fun app that allows the user to add a burger to
                    the list "Burgers to be devoured" and select the devour
                    button for the burger to move over tot he "Devoured" list
                  </p>

                  <div className="categories"></div>
                </div>

                <div className="link-box">
                  <a href="https://github.com/DanielGerrald/Eat-A-Burger">
                    Details
                  </a>
                  <a href="/#"
                      onClick={() => this.modal("modal5")} className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
              </Modal>

              <Modal show={this.state.modal6}>
              <div id="modal-06" className="popup-modal slider">
                <div className="media">
                  <img src={GG} alt="Greener Grass" />
                </div>

                <div className="description-box">
                  <h4>Greener grass</h4>
                  <p>
                    An application that allows the user to search a desired zip
                    code and either write a review or view the database for that
                    area. The database will consist of users writing about their
                    experiences and opinions on what the area has to offer. This
                    will be a useful tool for deciding whether or not the grass
                    is truly greener on the other side.
                  </p>

                  <div className="categories"></div>
                </div>

                <div className="link-box">
                  <a href="https://github.com/DanielGerrald/project-2">
                    Details
                  </a>
                  <a href="/#"
                      onClick={() => this.modal("modal6")} className="popup-modal-dismiss">
                    Close
                  </a>
                </div>
              </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
