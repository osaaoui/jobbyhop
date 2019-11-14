import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Info extends Component {
  render() {
    const bannerStyle = {
      height: "80vh",
      backgroundImage: "url('/images/students.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff"
    };
    const headerStyle = {
      color: "blue",
      paddingTop: "50px",
      fontSize: "50px",
      letterSpacing: "6px",
      fontWeight: "600",
      textShadow: "0 0 30px rgba(0,0,0,0.5)"
    };

    const searchStyle = {
      padding: "30px",
      margin: "-50px 6% 50px",
      backgroundImage: "linear-gradient(to right, #6db9ef, #7ce08a)"
    };

    const formStyle = {
      maxWidth: "250px",
      display: "inline-flex",
      margin: "10px 5px",
      borderRadius: "0",
      boxShadow: "none !important",
      border: "none !important"
    };
    const buttonStyle = {
      display: "inline-flex",
      margin: "5px",
      borderRadius: "0",
      boxShadow: "none !important",
      border: "none",
      padding: "5px 20px"
    };

    const recruitersStyle = {
      paddingTop: "50px",
      paddingBottom: "100px"
    };

    const recruitersTextStyle = {
      textAlign: "center",
      paddingBottom: "40px"
    };

    const jobStyle = {
      background: "#f8f8fa",
      padding: "50px 0"
    };

    const companyDetailStyle = {
      boxShadow: "0 2px 70px 0 rgba(110,130,208, .18)",
      borderRadius: "5px",
      marginBottom: "20px"
    };

    const jobUpdateStyle = {
      background: "#fff",
      padding: "10px 20px",
      borderRadius: "5px"
    };

    const jobUpdateFaStyle = {
      marginTop: "5px",
      marginRight: "10px",
      color: "#77d1b1"
    };
    const jobUpdateSmallStyle = {
      background: "#efefef",
      padding: "1px 5px",
      margin: "#0 5px"
    };

    const jobUpdateParaStyle = {
      marginBottom: "0 !important"
    };

    const jobUpdateLinkStyle = {
      textDecoration: "0 !important",
      color: "#b6bed2",
      float: "right"
    };

    const applyBtnStyle = {
      height: "40px",
      backgroundImage: "linear-gradient(to right, #6db9ef, #7ce08a)",
      padding: "7px",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px"
    };

    const applyBtnPrimaryStyle = {
      padding: "0 30px",
      float: "right",
      borderRadius: "0",
      boxShadow: "none !important",
      background: "transparent",
      border: "1px solid #fff"
    };

    return (
      <section>
        <div className="banner text-center" style={bannerStyle}>
          <h1 style={headerStyle}>
            JE RECHERCHE / J'OFFRE QUELQUES HEURES DE TRAVAIL EN PLUS
          </h1>
          <p>Jobbyhop vous met en contact</p>
        </div>
        <div className="search-job text-center" style={searchStyle}>
          <input
            type="text"
            className="form-control"
            style={formStyle}
            placeholder="Search jobs"
          />
          <input
            type="text"
            style={formStyle}
            className="form-control"
            placeholder="Category"
          />
          <input
            type="text"
            style={formStyle}
            className="form-control"
            placeholder="Location"
          />
          <input
            type="button"
            style={buttonStyle}
            className="btn btn-primary"
            value="Find jobs"
          />
        </div>

        <section style={jobStyle}>
          <div className="container">
            <h3 style={recruitersTextStyle}>RECENT OFFERS</h3>

            <div style={companyDetailStyle} className="company-details">
              <div style={jobUpdateStyle} className="job-update">
                <h6>
                  <b>Serveur café </b>
                </h6>
                <p>Café Morgan</p>
                <i style={jobUpdateFaStyle} className="fa fa-briefcase"></i>
                <span> 0-1 yrs</span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-inr"></i>
                <span> 18:00h - 21:00h </span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-map-marker"></i>
                <span> Montreal</span>
                <p style={jobUpdateParaStyle}>
                  Skills{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  <small style={jobUpdateSmallStyle}>Expérimenté(e)</small>
                  <small style={jobUpdateSmallStyle}>Présentable</small>
                  <small style={jobUpdateSmallStyle}>Bilingue</small>
                  <small style={jobUpdateSmallStyle}>Courtois</small>
                </p>
                <p style={jobUpdateParaStyle}>
                  Description{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  Venez arrondir vos fins de mois en travaillant quelques heures
                  de plus chez Café Morgan
                  <a style={jobUpdateLinkStyle} href="#">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
              <div style={applyBtnStyle} className="apply-btn">
                <button
                  type="button"
                  style={applyBtnPrimaryStyle}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>

            <div style={companyDetailStyle} className="company-details">
              <div style={jobUpdateStyle} className="job-update">
                <h6>
                  <b>Serveur café </b>
                </h6>
                <p>Café Morgan</p>
                <i style={jobUpdateFaStyle} className="fa fa-briefcase"></i>
                <span> 0-1 yrs</span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-inr"></i>
                <span> 18:00h - 21:00h </span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-map-marker"></i>
                <span> Montreal</span>
                <p style={jobUpdateParaStyle}>
                  Skills{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  <small style={jobUpdateSmallStyle}>Expérimenté(e)</small>
                  <small style={jobUpdateSmallStyle}>Présentable</small>
                  <small style={jobUpdateSmallStyle}>Bilingue</small>
                  <small style={jobUpdateSmallStyle}>Courtois</small>
                </p>
                <p style={jobUpdateParaStyle}>
                  Description{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  Venez arrondir vos fins de mois en travaillant quelques heures
                  de plus chez Café Morgan
                  <a style={jobUpdateLinkStyle} href="#">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
              <div style={applyBtnStyle} className="apply-btn">
                <button
                  type="button"
                  style={applyBtnPrimaryStyle}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>

            <div style={companyDetailStyle} className="company-details">
              <div style={jobUpdateStyle} className="job-update">
                <h6>
                  <b>Serveur café </b>
                </h6>
                <p>Café Morgan</p>
                <i style={jobUpdateFaStyle} className="fa fa-briefcase"></i>
                <span> 0-1 yrs</span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-inr"></i>
                <span> 18:00h - 21:00h </span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-map-marker"></i>
                <span> Montreal</span>
                <p style={jobUpdateParaStyle}>
                  Skills{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  <small style={jobUpdateSmallStyle}>Expérimenté(e)</small>
                  <small style={jobUpdateSmallStyle}>Présentable</small>
                  <small style={jobUpdateSmallStyle}>Bilingue</small>
                  <small style={jobUpdateSmallStyle}>Courtois</small>
                </p>
                <p style={jobUpdateParaStyle}>
                  Description{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  Venez arrondir vos fins de mois en travaillant quelques heures
                  de plus chez Café Morgan
                  <a style={jobUpdateLinkStyle} href="#">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
              <div style={applyBtnStyle} className="apply-btn">
                <button
                  type="button"
                  style={applyBtnPrimaryStyle}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>

            <div style={companyDetailStyle} className="company-details">
              <div style={jobUpdateStyle} className="job-update">
                <h6>
                  <b>Serveur café </b>
                </h6>
                <p>Café Morgan</p>
                <i style={jobUpdateFaStyle} className="fa fa-briefcase"></i>
                <span> 0-1 yrs</span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-inr"></i>
                <span> 18:00h - 21:00h </span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-map-marker"></i>
                <span> Montreal</span>
                <p style={jobUpdateParaStyle}>
                  Skills{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  <small style={jobUpdateSmallStyle}>Expérimenté(e)</small>
                  <small style={jobUpdateSmallStyle}>Présentable</small>
                  <small style={jobUpdateSmallStyle}>Bilingue</small>
                  <small style={jobUpdateSmallStyle}>Courtois</small>
                </p>
                <p style={jobUpdateParaStyle}>
                  Description{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  Venez arrondir vos fins de mois en travaillant quelques heures
                  de plus chez Café Morgan
                  <a style={jobUpdateLinkStyle} href="#">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
              <div style={applyBtnStyle} className="apply-btn">
                <button
                  type="button"
                  style={applyBtnPrimaryStyle}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>

            <div style={companyDetailStyle} className="company-details">
              <div style={jobUpdateStyle} className="job-update">
                <h6>
                  <b>Seasoned Senior Python Developer (fresher)</b>
                </h6>
                <p>XYZ Solution PVT LTD</p>
                <i style={jobUpdateFaStyle} className="fa fa-briefcase"></i>
                <span> 0-1 yrs</span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-inr"></i>
                <span> 18:00h - 21:00h </span>
                <br />
                <i style={jobUpdateFaStyle} className="fa fa-map-marker"></i>
                <span> Montreal</span>
                <p style={jobUpdateParaStyle}>
                  Skills{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  <small style={jobUpdateSmallStyle}>Python</small>
                  <small style={jobUpdateSmallStyle}>.Net</small>
                  <small style={jobUpdateSmallStyle}>Java</small>
                  <small style={jobUpdateSmallStyle}>HTML, CSS</small>
                </p>
                <p style={jobUpdateParaStyle}>
                  Description{" "}
                  <i
                    style={jobUpdateFaStyle}
                    className="fa fa-angle-double-right"
                  ></i>{" "}
                  Get your first experience as a developer with our company
                  <a style={jobUpdateLinkStyle} href="#">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
              <div style={applyBtnStyle} className="apply-btn">
                <button
                  type="button"
                  style={applyBtnPrimaryStyle}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Info;
