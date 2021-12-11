import styles from "./../../styles/agregar.module.css";
import { Link } from "react-router-dom";

const AgregarEsp = () => {
  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Agregar nueva especialidad </h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre de la especialidad</label>
          <input className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            {" "}
            Guardar{" "}
          </button>
          <Link
            to="/especialidades"
            className={styles.button + " " + styles.volver}
          >
            {" "}
            Volver{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AgregarEsp;
