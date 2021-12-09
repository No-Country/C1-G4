//---------
import React from "react";

import styles from "./../styles/Signup.module.css";

const SignUpForm = () => (
  <main className={styles.container}>
    <div className={styles.formContainer}>
      <div className={styles.formImg}></div>

      <form className={styles.form}>
        <h1 className={styles.formTitle}>Crea una cuenta</h1>
        <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>

        <div className={styles.formControls}>
          <input
            className={styles.formInput}
            name="usuario"
            type="tex"
            placeholder="Usuario"
          />
          <input
            className={styles.formInput}
            name="nombre"
            type="text"
            placeholder="Nombre"
          />
          <input
            className={styles.formInput}
            name="apellido"
            type="text"
            placeholder="Apellido"
          />
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
          <input
            className={styles.formInput}
            name="repetir"
            type="password"
            placeholder="Repetir pasword"
          />
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

export default SignUpForm;
