import React, { Fragment } from "react";
import styles from "../../styles/Footer.module.css";
import logo from "../../images/medic.svg";

function Footer() { 
  return (
    <Fragment>
    <footer>
      <div className={styles.upFooter}>
        <div>
          <h4 className={styles.h4}>Links</h4>
            <a href="#">Nosotros<br /></a>
            <a href="#">Preguntas frecuentes<br /></a>
            <a href="#">Terminos legales<br /></a>
            <a href="#">Ayuda<br /></a>
        </div>
        <div>
          <h4 className={styles.h4}>Legal</h4>
            <a href="#">Politicas de privacidad<br /></a>
            <a href="#">Terminos legales <br /></a>
            <a href="#">Solicitud de baja<br /></a>
        </div>
      </div>
      </footer>
      <div className={styles.lowFooter}>
        <div className={styles.elements}>
            <p>
              Avenida Calle 1500 <br />
              Ciudad de BA, CP 1500
            </p>
            <img className={styles.logo} src={logo} alt="" />
            <p>
              Contactanos: <br /> 
              111 222 6789
            </p>
        </div>
      </div>  
    </Fragment>
  );
}

export default Footer;
