import React, { Fragment } from "react";

const estilo = {
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "30px",
};

function Footer() {
  return (
    <Fragment>
      <div>
        <footer>
          <div style={estilo}>
            <div classname="flex-child-ft item1">
              <a href="index-2.html">
                <img classname="logo" src="images/logo.jpg" alt="" />
              </a>
              <p>
                Avenida Calle 1500 <br />
                Ciudad de BA, CP 1400
              </p>
              <p>Contactanos: 202 342 6789</p>
            </div>
            <div className="divs">
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="# ">Nosotros</a>
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
              <h4>Usuario</h4>
              <ul>
                <li>
                  <a href="# ">Mi cuenta</a>
                </li>
                <li>
                  <a href="# ">Mi cuenta</a>
                </li>
                <li>
                  <a href="# ">Mi cuenta</a>
                </li>
              </ul>
            </div>
            <div className="divs">
              <h4>Newsletter</h4>
              <form action="#">
                <input type="text" placeholder=" tu email..." />
              </form>

              <a href="# " classname="btn">
                Subscribete <i classname="ion-ios-arrow-forward"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
