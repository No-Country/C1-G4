import React, { Fragment } from "react";
import styles from "../../styles/Card.module.css";
import logo from "../../images/medic.svg";

function Card() {
  return (
    <Fragment>
      <div className="contenedor">
        <div className={styles.tabla}>
          <h2>Especialidad</h2>
          <img src={logo} alt="" />

          <p>Ingresa aqui</p>
          <a href="# " className={styles.boton}>
            Ver +
          </a>
        </div>
        <div className={styles.tabla}>
          <h2>Especialidad</h2>
          <img src={logo} alt="" />

          <p>Ingresa aqui</p>
          <a href="# " className={styles.boton}>
            Ver +
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
