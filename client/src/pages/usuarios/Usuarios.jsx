import styles from "./../../styles/usuarios.module.css";
import Card from "./CardUsr.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./../../hooks/useUser";
import axios from "axios";
const Usuarios = () => {
  const navigate = useNavigate();
  const { isLogged, isAdmin } = useUser();
  const [usuarios, guardarUsuarios] = useState([
    {
      _id: "cargando",
      username: "cargando",
      name: "cargando",
      lastname: "cargando",
      email: "cargando",
      status: 1,
      rol: "cargando",
    },
  ]);
  const listarUsuarios = async () => {
    axios
      .get("user/list")
      .then((res) => {
        guardarUsuarios(res.data);
      })
      .catch(console.log);
  };
  useEffect(() => {
    if (!isLogged() || !isAdmin()){
      navigate("/");
    }
    listarUsuarios();
  }, [listarUsuarios, isLogged, isAdmin, navigate]);

  return (
    <div className={styles.contenedorUsuarios}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Usuarios </h3>
      </div>
      <div className={styles.contenedorLista}>
        {usuarios.map((usuario) => (
          <Card
            key={usuario._id}
            usuario={usuario}
            listarUsuarios={listarUsuarios}
          />
        ))}
        <div className={styles.contenedorBotones}>
          <Link to="/usuarios/agregar" className={styles.button}>
            {" "}
            Agregar{" "}
          </Link>
          <Link to="/admin" className={styles.button + " " + styles.volver}>
            {" "}
            Volver{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
