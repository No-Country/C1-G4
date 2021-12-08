import styles from "./../../styles/agregar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AgregarEsp = () => {
  const navigate = useNavigate();
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
    //Validacion
    if (name.trim() === "") {
      guardarError(true);
      return;
    }
    //Eliminamos el error si existe uno previo
    guardarError(false);
    //Peticion al backend para agregar una nueva especialidad
    axios
      .post("speciality/add", { name })
      .then((res) => {
        alert("Especialidad agregada exitosamente", res);
        //redireccionamos a la lista
        navigate("/especialidades");
      })
      .catch(console.log);
  };

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Agregar nueva especialidad </h2>
      <form onSubmit={agregarEspecialidad} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre de la especialidad</label>
          <input
            name="name"
            onChange={actualizarEspecialidad}
            className={styles.input}
          />
        </div>
        {error ? (
          <p className={styles.error}> Todos los campos son obligatorios </p>
        ) : null}
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
