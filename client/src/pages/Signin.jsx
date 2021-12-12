import axios from "axios";
import { useState } from "react";
import styles from "./../styles/signin.module.css";

const SigninForm = () => {
  const [mensaje, guardarMensaje] = useState();
  const [error, guardarError] = useState(false);
  const [login, guardarLogin] = useState({
    password: "",
    email: "",
  });
  const { password, email } = login;
  const actualizarLogin = (e) => {
    guardarLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const loguear = (e) => {
    e.preventDefault();
    axios
      .post("user/login", {
        email,
        password,
      })
      .then((res) => {
        alert("logueado exitosamente", res);
        guardarError(false);
      })
      .catch((e) => {
        console.error("outer", e.message);
        guardarError(true);
        guardarMensaje(e.message);
      });
  };
  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formImg}></div>

        <form onSubmit={loguear} className={styles.form}>
          <h1 className={styles.formTitle}>Iniciar Sesión</h1>
          <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>

          <div className={styles.formControls}>
            <input
              className={styles.formInput}
              name="email"
              type="email"
              placeholder="Email"
              onChange={actualizarLogin}
            />
            <input
              className={styles.formInput}
              name="password"
              type="password"
              placeholder="Password"
              onChange={actualizarLogin}
            />
            {error ? (
              <p className={styles.error}> Correo y/o password invalido/s
              </p>
            ) : null}
            <button className={styles.formSubmitBtn}>Ingresar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SigninForm;
