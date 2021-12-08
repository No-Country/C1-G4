import styles from "./../../styles/agregar.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditarEsp = () => {
  const navigate = useNavigate();
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
      .get("speciality/get?_id=" + _id)
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
    //Validacion de datos
    if (name.trim() === "") {
      guardarError(true);
      return;
    }
    //Eliminar el mensaje previo
    guardarError(false);
    //Llamada al api
    axios
      .put("speciality/update", {
        _id,
        name
      })
      .then(res => {
        alert("Especialidad modificada exitosamente");
        //redireccionamos a la lista
        navigate("/especialidades", res);
      })
      .catch(console.log);
  };

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Editar especialidad </h2>
     
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

export default EditarEsp;
