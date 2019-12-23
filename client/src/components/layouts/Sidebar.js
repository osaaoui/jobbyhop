import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: "35px" }} />
      </a>
      <Link className="nav-link text-white text-uppercase ml-0" to="/">
        JOBBY-HOP
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "#fff" }}></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;<i class="fas fa-home"></i>{" "}
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/news"
            >
              Inscription
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/contacts"
            >
              Connexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Sidebar;
