import styles from "./../../styles/agregar.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const EditarUsr = () => {
  const navigate = useNavigate();
  //states
  const [usuario, guardarUsuario] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    rol: "",
    status: "",
  });
  const { username, name, lastname, email, rol } = usuario;
  //extraemos el parametro _id
  const { _id } = useParams();
  // funcion para consultar usuario
  const consultarUsuario = useCallback(async () => {
    axios
      .get("user/query?_id=" + _id)
      .then(({ data }) => {
        guardarUsuario(data);
      })
      .catch(console.log);
  }, []);
  //funcion que se ejecuta al escribir en un input
  const actualizarUsuario = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const agregarUsuario = async(e) => {
    e.preventDefault();
    axios
      .put("user/update", {
      _id,
      username,
      name,
      lastname,
      email
    }).then(({data})=>{
      alert("Usuario agregado exitosamente", data);
      navigate("/usuarios");
    }).catch(console.log);
  };
  useEffect(() => {
    consultarUsuario();
  }, [consultarUsuario]);

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Editar usuario </h2>
      <form onSubmit={agregarUsuario} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Username </label>
          <input
            value={username}
            name="username"
            type="text"
            className={styles.input}
            onChange={actualizarUsuario}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre </label>
          <input
            value={name}
            name="name"
            type="text"
            className={styles.input}
            onChange={actualizarUsuario}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Apellido </label>
          <input
            value={lastname}
            name="lastname"
            type="text"
            className={styles.input}
            onChange={actualizarUsuario}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Email </label>
          <input
            value={email}
            name="email"
            type="email"
            className={styles.input}
            onChange={actualizarUsuario}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Especialidad </label>
          <select
            value={rol}
            name="rol"
            className={styles.input}
            onChange={actualizarUsuario}
          >
            <option value=""> --- Seleccionar Rol --- </option>
            <option value="admin"> Administrador </option>
            <option value="user"> Usuario </option>
            <option value="medic"> Medico </option>
            <option value="patient"> Paciente </option>
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
