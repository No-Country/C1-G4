import React, { Fragment } from "react";
import estilo from "../../styles/Header.module.css";
import logo from "../../images/medic.svg";

function Header() {
  return (
    <Fragment>
      <div className={estilo.container}>
        <img className={estilo.logo} alt="" src={logo} />
        <div>
          <nav>
            <ul className={estilo.ulestilo}>
              <li>Home</li>
              <li>Iniciar sesion</li>
              <li>Registrarse</li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
export default Header;
