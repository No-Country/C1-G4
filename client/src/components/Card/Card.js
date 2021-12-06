import React, { Fragment } from "react";
import styles from "../../styles/Card.module.css";
import logo from "../../images/medic.svg";

function Card() {
  return (
    <Fragment>
      <div className={styles.container}>
        <a href="#" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Turnos Disponibles</h4>
            <img src={logo} alt="" />
            <p>Ingresa aqui</p>
          </div>
        </a>
        <a href="#" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Historial Clinico</h4>
            <img src={logo} alt="" />
            <p>Ingresa aqui</p>
          </div>
        </a>
        <a href="#" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Cartilla Médicos</h4>
            <img src={logo} alt="" />
            <p>Ingresa aqui</p>
          </div>
        </a>
      </div>
    </Fragment>
  );
}

export default Card;
