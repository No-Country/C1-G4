import React, { Fragment } from "react";
import styles from "../../styles/Footer.css";
import logo from "../../images/logo.jpg";

function Footer() {
  return (
    <Fragment>
      <div>
        <footer>
          <div className="divfooter" style={styles}>
            <div id="divcontacto">
              <img id="logo" src={logo} alt="" />
              <p>
                Avenida Calle 1500 <br />
                Ciudad de BA, CP 1400
              </p>
              <p>Contactanos: 202 342 6789</p>
            </div>
            <hr />
            <div className="divs">
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="https://www.google.com.ar">Nosotros</a>
                </li>
                <li>
                  <a href="# ">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="# ">Terminos legales</a>
                </li>
                <li>
                  <a href="# ">Ayuda</a>
                </li>
              </ul>
            </div>
            <div className="divs">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="# ">Terminos legales</a>
                </li>
                <li>
                  <a href="# ">Politicas de privacidad</a>
                </li>
                <li>
                  <a href="# ">Solicitud de baja</a>
                </li>
              </ul>
            </div>
            <div className="divs">
              <h4>Newsletter</h4>
              <form action="#">
                <input type="text" placeholder=" Ingresa tu email..." />
              </form>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
