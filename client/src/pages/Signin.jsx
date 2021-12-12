import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./../styles/signin.module.css";
import { useNavigate } from "react-router";
import useUser from "./../hooks/useUser";
import decode from "jwt-decode";

const SigninForm = () => {
  const navigate = useNavigate();
  const [mensaje, guardarMensaje] = useState("");
  const [error, guardarError] = useState(false);
  const [campos, guardarCampos] = useState({
    password: "",
    email: "",
  });
  const { login, isLogged } = useUser();
  const { password, email } = campos;
  const actualizarLogin = (e) => {
    guardarCampos({
      ...campos,
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
        console.log(isLogged());
        guardarError(false);
        login(res.data.tokenReturn);
        //navigate("/");
      })
      .catch((e) => {
        console.error("outer", e.message);
        guardarError(true);
        guardarMensaje(e.message);
      });
  };
  useEffect(()=>{
    if (isLogged()){
      navigate("/");
    }
  }, [isLogged, navigate]);
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
