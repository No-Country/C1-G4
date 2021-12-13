import React, { Fragment } from "react";
import styles from "../../styles/Card.module.css";
import logo from "../../images/medic.svg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Fragment>
      <div className={styles.container}>
        <Link to="/cita" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Pedir Cita</h4>
            <img src={logo} />
          </div>
        </Link>
        <Link to="/medicos" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Equipo Medico</h4>
            <img src={logo} />
          </div>
        </Link>
        <Link to="/especialidades" className={styles.btn}>
          <div className={styles.boton}>
            <h4>Especialidades Disponibles</h4>
            <img src={logo} />
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Card;
