import { useState } from "react";
import styles from "./../styles/Signup.module.css";
import axios from "axios";

const SignUpForm = () => {
  const [error, guardarError] = useState(false);
  const [mensaje, guardarMensaje] = useState("");
  const [cuenta, guardarCuenta] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    repetir: "",
  });
  let { username, name, lastname, email, password, repetir } = cuenta;
  const limpiarCampos = () => {
    username = "";
    name = "";
    lastname = "";
    email = "";
    password = "";
    repetir = "";
  };
  const actualizarCuenta = (e) => {
    guardarCuenta({
      ...cuenta,
      [e.target.name]: e.target.value,
    });
  };
  const agregarCuenta = (e) => {
    e.preventDefault();
    if (
      password === "" ||
      repetir === "" ||
      username === "" ||
      name === "" ||
      lastname === "" ||
      email === ""
    ) {
      guardarMensaje("Debe llenar todos los campos");
      guardarError(true);
      return;
    }
    if (password !== repetir) {
      guardarMensaje(
        "Los campos password y repetir password no coinciden"
      );
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarMensaje("");

    axios
      .post("user/add", {
        username,
        name,
        lastname,
        email,
        password,
        rol: "patient",
      })
      .then((res) => {
        console.log(res);
        limpiarCampos();
      })
      .catch(error => {
        console.log(error);
        guardarError(true);
        guardarMensaje('El nombre de usuario o el email pueden estar ya en uso');
        limpiarCampos();
      });
  };

  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formImg}></div>
        <form onSubmit={agregarCuenta} className={styles.form}>
          <h1 className={styles.formTitle}>Crea una cuenta</h1>
          <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>
          <div className={styles.formControls}>
            <input
              className={styles.formInput}
              name="username"
              value={username}
              type="text"
              onChange={actualizarCuenta}
              placeholder="Usuario"
            />
            <input
              className={styles.formInput}
              name="name"
              value={name}
              type="text"
              onChange={actualizarCuenta}
              placeholder="Nombre"
            />
            <input
              className={styles.formInput}
              name="lastname"
              value={lastname}
              type="text"
              onChange={actualizarCuenta}
              placeholder="Apellidos"
            />
            <input
              className={styles.formInput}
              name="email"
              value={email}
              type="email"
              onChange={actualizarCuenta}
              placeholder="Email"
            />
            <input
              className={styles.formInput}
              name="password"
              value={password}
              type="password"
              onChange={actualizarCuenta}
              placeholder="Password"
            />
            <input
              className={styles.formInput}
              name="repetir"
              value={repetir}
              type="password"
              onChange={actualizarCuenta}
              placeholder="Repetir pasword"
            />
            {error ? (
              <p className={styles.error}> { mensaje } </p>
            ) : null}
            <input
              className={styles.formSubmitBtn}
              type="submit"
              value="Registrar"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUpForm;
