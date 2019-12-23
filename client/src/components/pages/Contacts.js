import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21956.05292260252!2d-72.74691765!3d46.53766425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1573531881106!5m2!1sen!2sca"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0"
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                ></textarea>
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  <i className="fab fa-telegram-plane"></i>&nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
