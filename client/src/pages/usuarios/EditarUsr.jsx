import styles from "./../../styles/agregar.module.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const EditarUsr = () => {
  //states
  const [ usuario, guardarUsuario ] = useState({

  });
  //extraemos el parametro _id
  const { _id } = useParams();
  // funcion para consultar usuario
  const consultarUsuario = () => {
    
  };



  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Editar usuario </h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre </label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Apellido </label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Email </label>
          <input type="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Telefono </label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Especialidad </label>
          <select className={styles.input}>
            <option> Otorrinolaringologo </option>
            <option> Odontologia </option>
            <option> Nefrologia </option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            {" "}
            Guardar{" "}
          </button>
          <Link to="/usuarios" className={styles.button + " " + styles.volver}>
            {" "}
            Volver{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditarUsr;
