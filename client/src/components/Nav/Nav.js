import React, { Fragment } from "react";
import estilo from "../../styles/Header.module.css";
import styles from "../../styles/Nav.module.css";
import logo from "../../images/medic.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={"navbar-light navbar navbar-expand-lg " + styles.fondo}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="# ">
          <img className={estilo.logo} alt="" src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="# ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="# ">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="# ">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="# "
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
