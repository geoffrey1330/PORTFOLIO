import React, { Component } from "react";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <section
        className={
          this.props.darkMode
            ? "contact-section-dark contact-section"
            : "contact-section"
        }
      >
        <h1>Contact Me</h1>
        <div className="row">
          <div className="col-sm-6 contact-form-container ">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="10"
                  rows="10"
                  placeholder="Your message goes here ..."
                ></textarea>
              </div>
              <div className="send-btn">
                <div className="send-arrow">
                  <i class="fas fa-paper-plane"></i>
                </div>
                <a className="send-link">Send !</a>
              </div>
            </form>
          </div>
          <div className="col-sm-6 contact-right">
            <div className="row contact-row">
              <div className="contact-item">
                <div className="contact-icon-container">
                  <i class="fas fa-phone"></i>
                </div>
                <div className="contact-item-main">
                  <p
                    className={
                      this.props.darkMode ? "item-title dark" : "item-title"
                    }
                  >
                    phone
                  </p>
                  <p>08146393754</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-container">
                  <i class="fas fa-envelope"></i>
                </div>
                <div className="contact-item-main">
                  <p
                    className={
                      this.props.darkMode ? "item-title dark" : "item-title"
                    }
                  >
                    email
                  </p>
                  <p>israelgeoffrey13@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="row contact-row">
              <div className="contact-item">
                <div className="contact-icon-container">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-item-main">
                  <p
                    className={
                      this.props.darkMode ? "item-title dark" : "item-title"
                    }
                  >
                    Address
                  </p>
                  <p>Owerri, Imo state Nigeria</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-container">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div className="contact-item-main">
                  <p
                    className={
                      this.props.darkMode ? "item-title dark" : "item-title"
                    }
                  >
                    GitHub
                  </p>
                  <p>geoffrey1330</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
