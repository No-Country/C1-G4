import React from 'react';

import styles from './../styles/form-input.module.css';

const FormInput = ({ labelText, inputType, }) => {

   const textForLabel = labelText.toUpperCase();

   return (
      <label className={styles.formLabel}>
         {textForLabel}
         <input className={styles.formInput} type={inputType} name='email' />
      </label>
   );
};

export default FormInput;