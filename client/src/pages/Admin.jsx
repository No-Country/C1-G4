import styles from "./../styles/admin.module.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className={styles.contenedorAdmin}>
      <div className={styles.contenedorTitulo}>
        <h2 className={styles.titulo}> Panel de administración </h2>
      </div>
      <div className={styles.contenedorLinks}>
        <ul className={styles.unorderList}>
          <Link to="/especialidades" className={styles.listElement}>
            Especialidades
          </Link>
          <Link to="/medicos" className={styles.listElement}>
            Médicos
          </Link>
          <Link to="/usuarios" className={styles.listElement}>
            Usuarios
          </Link>
          <Link to="/administradores" className={styles.listElement}>
            Administradores
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
