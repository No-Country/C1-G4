//---------
import React from "react";

<<<<<<< HEAD
const Signup = () => {
   return (
      <div>
      </div>
   )
}
=======
import styles from "./../styles/Signup.module.css";
>>>>>>> rodrigo3

import FormInput from "./Form-input";

const SignUpForm = () => (
  <main className={styles.container}>
    <div className={styles.formContainer}>
      <div className={styles.formImg}></div>

      <form className={styles.form}>
        <h1 className={styles.formTitle}>Crea una cuenta</h1>
        <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>

        <div className={styles.formControls}>
          <FormInput labelText="nombre" inputType="text" />
          <FormInput labelText="email" inputType="email" />
          <FormInput labelText="contraseña" inputType="password" />

          <button className={styles.formSubmitBtn}>Registrar</button>
        </div>
      </form>
    </div>
  </main>
);

export default SignUpForm;
