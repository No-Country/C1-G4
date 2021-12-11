import styles from "./../../styles/agregar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AgregarUsr = () => {
  const navigate = useNavigate();
  const [usuario, guardarUsuario] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    repetir: "",
    rol: "",
  });
  const [coincidencia, guardarCoincidencia] = useState(true);
  const [error, guardarError] = useState(false);
  const { username, name, lastname, email, password, repetir, rol } = usuario;
  //Funcion que se llama al escribir en un input
  const actualizarUsuario = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  //Funcion para agregar usuario
  const agregarUsuario = async (e) => {
    e.preventDefault();
    //Validar password
    if (password !== repetir) {
      guardarCoincidencia(false);
      return;
    }
    //Validar campos
    if (
      username === "" ||
      name === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      rol === ""
    ) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarCoincidencia(true);
    //Llamada al api para agregar usuario
    axios
      .post("user/add", {
        username,
        name,
        lastname,
        email,
        password,
        rol,
      })
      .then((res) => {
        alert("Usuario agregado con éxito", res);
        navigate("/usuarios");
      })
      .catch(console.log);
  };
  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Agregar nuevo usuario </h2>
      <form onSubmit={agregarUsuario} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Username </label>
          <input
            onChange={actualizarUsuario}
            name="username"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre </label>
          <input
            onChange={actualizarUsuario}
            name="name"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Apellido </label>
          <input
            onChange={actualizarUsuario}
            name="lastname"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Email </label>
          <input
            onChange={actualizarUsuario}
            name="email"
            type="email"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Password </label>
          <input
            onChange={actualizarUsuario}
            name="password"
            type="password"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Repetir Password </label>
          <input
            onChange={actualizarUsuario}
            name="repetir"
            type="password"
            className={styles.input}
          />
        </div>
        {!coincidencia ? (
          <p className={styles.error}> El password debe coincidir </p>
        ) : null}
        <div className={styles.formGroup}>
          <label className={styles.label}> Rol </label>
          <select
            name="rol"
            onChange={actualizarUsuario}
            className={styles.input}
          >
            <option value=""> --- Seleccione un rol --- </option>
            <option value="admin"> Administrador </option>
            <option value="medic"> Medico </option>
            <option value="user"> Usuario </option>
          </select>
        </div>
        {error ? (
          <p className={styles.error}> Todos los campos son requeridos </p>
        ) : null}
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

export default AgregarUsr;
