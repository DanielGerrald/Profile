import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Works from "./works.json";

class Portfolio extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null,
    };
  }

  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Work.</h1>
          </div>
        </div>

        <div className="row portfolio-content">
          <div className="col-twelve" style={{ padding: "0px" }}>
            {Works.map((item) => {
              return (
                <div id="folio-wrapper" key={item.id}>
                  <div className="bgrid folio-item" style={{ padding: "20px" }}>
                    <div className="item-wrap">
                      <img src={item.image} alt={item.name} />
                      <div
                        onClick={() => this.handleShow(item.modalNumber)}
                        className="overlay"
                      >
                        <div className="folio-item-table">
                          <div className="folio-item-cell">
                            <h3 className="folio-title">{item.name}</h3>
                            <span className="folio-types"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Modal
                    size="lg"
                    centered
                    show={this.state.show === item.modalNumber}
                    onHide={() => this.handleClose(item.modalNumber)}
                  >
                    <Modal.Body>
                      <div id={item.modalNumber} className="popup-modal slider">
                        <div className="media">
                          <img src={item.image} alt={item.name} />
                        </div>

                        <div className="description-box">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>

                          <div className="categories"></div>
                        </div>

                        <div className="link-box">
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Details
                          </a>
                          <a
                            href
                            onClick={() => this.handleClose(item.modalNumber)}
                            className="popup-modal-dismiss"
                          >
                            Close
                          </a>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
