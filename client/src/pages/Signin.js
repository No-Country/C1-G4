import React from "react";
import styles from "./../styles/signin.module.css";

const SigninForm = () => (
  <main className={styles.container}>
    <div className={styles.formContainer}>
      <div className={styles.formImg}></div>

      <form className={styles.form}>
        <h1 className={styles.formTitle}>Iniciar Sesión</h1>
        <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>

        <div className={styles.formControls}>
          <input
            className={styles.formInput}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.formInput}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className={styles.formSubmitBtn}>Ingresar</button>
        </div>
      </form>
    </div>
  </main>
);

export default SigninForm;
