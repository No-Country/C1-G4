import styles from "./../../styles/agregar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AgregarEsp = () => {
  //Crear State de Especialidad
  const [especialidad, guardarEspecialidad] = useState({
    name: "",
  });
  const [error, guardarError] = useState(false);
  //Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarEspecialidad = (e) => {
    guardarEspecialidad({
      ...especialidad,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer los valores de la especialidad
  const { name } = especialidad;

  const agregarEspecialidad = async (e) => {
    e.preventDefault();
    //Peticion al backend para agregar una nueva especialidad
    axios
      .post("http://localhost:5000/api/speciality/add", { 'name': name })
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Agregar nueva especialidad </h2>
      <form onSubmit={agregarEspecialidad} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre de la especialidad</label>
          <input name="name" onChange={actualizarEspecialidad} className={styles.input} />
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
