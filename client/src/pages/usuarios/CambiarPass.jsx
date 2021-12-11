import styles from "./../../styles/cambiarpass.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const CambiarPass = () => {
  const [cambio, guardarCambio] = useState({
    password: "",
    repetir: "",
  });
  const [error, guardarError] = useState(false);
  const { password, repetir } = cambio;
  const actualizarCambio = (e) => {
    guardarCambio({
      ...cambio,
      [e.target.name]: e.target.value,
    });
  };

  const efectuarCambio = (e) => {
    e.preventDefault();
    if (password === "" || repetir == "") {
      guardarError(true);
      return;
    }
    if (password !== repetir) {
      guardarError(true);
      return;
    }
    guardarError(false);
    //TODO llamada al backend
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.cont}>
        <h2 className={styles.titulo}> Cambiar Password </h2>
      </div>
      <div className={styles.cont}>
        <form onSubmit={efectuarCambio} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}> Password </label>
            <input onChange={actualizarCambio} className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}> Repetir Password </label>
            <input onChange={actualizarCambio} className={styles.input} />
          </div>
          {error ? (
            <p className={styles.error}> Los campos no coinciden </p>
          ) : null}
          <div className={styles.formGroup}>
            <input type="submit" className={styles.btn} />
          </div>
        </form>
        <div className={styles.formGroup}>
          <Link to="/" type="submit" className={styles.btn + ' ' + styles.volver}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CambiarPass;
