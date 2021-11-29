import React from 'react';

import FormInput from './Form-input';

import styles from './../styles/signin-form.module.css';

const SigninForm = () => (
   <main className={styles.container}>
      <div className={styles.formContainer}>

         <div className={styles.formImg}></div>

         <form className={styles.form}>
            
            <h1 className={styles.formTitle}>Iniciar Sesión</h1>
            <h3 className={styles.formSubtitle}>Introduzca sus datos abajo</h3>

            <div className={styles.formControls}>

               <FormInput labelText='email' inputType='email'/>
               <FormInput labelText='contraseña' inputType='password'/>

               <button className={styles.formSubmitBtn}>Ingresar</button>
            </div>

         </form>

      </div>
   </main>
);

export default SigninForm;