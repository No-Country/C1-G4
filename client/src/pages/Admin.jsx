import styles from "./../styles/admin.module.css";

const Admin = () => {
  return (
    <div className={styles.contenedorAdmin}>
      <div className={styles.contenedorTitulo}>
        <h2 className={styles.titulo}> Panel de administración </h2>
      </div>
      <div className={styles.contenedorLinks}>
        <ul className={styles.unorderList}>
          <a href="/especialidades" className={styles.listElement}>
            Especialidades
          </a>
          <a href="/medicos" className={styles.listElement}>
            Médicos
          </a>
          <a href="/usuarios" className={styles.listElement}>
            Usuarios
          </a>
          <a href="/administradores" className={styles.listElement}>
            Administradores
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
