import { useEffect } from "react";
import styles from "./../styles/admin.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import useUser from "./../hooks/useUser";

const Admin = () => {
  const navigate = useNavigate();
  const { isLogged, isAdmin } = useUser();

  useEffect(()=>{
    if (!isLogged() || !isAdmin()){
      navigate("/");
    }
  },[isLogged, isAdmin, navigate]);

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
        </ul>
      </div>
    </div>
  );
};

export default Admin;
