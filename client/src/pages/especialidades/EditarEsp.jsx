import styles from "./../../styles/agregar.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditarEsp = () => {
  //Recuperamos el parametro _id a traves de useParams de react router
  const { _id } = useParams();
  //Creamos el state de de especialidad
  const [especialidad, guardarEspecialidad] = useState({
    name: "",
  });
  const [error, guardarError] = useState(false);
  //Funcion para cargar los campos de cada input
  const cargarEspecialidadPorId = async () => {
    axios
      .get("http://localhost:5000/api/speciality/get?_id=" + _id)
      .then((res) => {
        const { data } = res;
        guardarEspecialidad(data);
        console.log("cargado");
      })
      .catch(console.log);
  };
  useEffect(() => {
    cargarEspecialidadPorId();
  }, []);

  //Funcion que se ejecuta al escribir en el input
  const actualizarEspecialidad = (e) => {
    guardarEspecialidad({
      ...especialidad,
      [e.target.name]: e.target.value,
    });
  };
  //Extraemos los valores de la especialidad
  const { name } = especialidad;
  //Funcion para editar la especialidad
  const editarEspecialidad = async (e) => {
    e.preventDefault();
    //Petición al backend para editar una especialidad
    axios
      .put(
        "http://localhost:5000/api/speciality/update",
        { '_id': _id, 
        'name': name}
      )
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Editar especialidad {_id} </h2>
      <form onSubmit={editarEspecialidad} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre de la especialidad</label>
          <input
            name="name"
            value={name}
            onChange={actualizarEspecialidad}
            className={styles.input}
          />
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

export default EditarEsp;
