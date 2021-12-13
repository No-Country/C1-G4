import React, { Fragment } from "react";
import styles from "../../styles/Footer.module.css";
import logo from "../../images/medic.svg";

function Footer() { 
  return (
    <Fragment>
    <footer>
      <div className={styles.upFooter}>
        <div>
          <h4 className={styles.titulo}>Links</h4>
            <a href="#">Nosotros<br /></a>
            <a href="#">Preguntas frecuentes<br /></a>
            <a href="#">Terminos legales<br /></a>
            <a href="#">Ayuda<br /></a>
        </div>
        <div>
            <h4 className={styles.titulo}>Legal</h4>
            <a href="#">Politicas de privacidad<br /></a>
            <a href="#">Terminos legales <br /></a>
            <a href="#">Solicitud de baja<br /></a>
        </div>
      </div>
      </footer>
      <div className={styles.lowFooter}>
        <div className={styles.elements}>
            <p>
              Avenida Calle 1500 - Ciudad de BA, CP 1500
            </p>
            <p>
              Contacto: 
              111 222 6789
            </p>
        </div>
        <div className={styles.copy}>
          ©GRUPO Q4TRO
        </div>
      </div>  
    </Fragment>
  );
}

export default Footer;
