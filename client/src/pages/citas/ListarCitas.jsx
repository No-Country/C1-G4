import styles from "./../../styles/citas.module.css";
import Card from "./CardCitas.jsx";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./../../hooks/useUser";
import axios from "axios";
const ListarCitas = () => {
  const navigate = useNavigate();
  const { isLogged, isAdmin } = useUser();
  const [citas, guardarCitas] = useState([
    {
      _id: "cargando",
      date: "cargando",
      user: {
        name: ""
      },
      medic: {
        name: ""
      },
      state: 1
    },
  ]);
  const listarCitas = useCallback(async () => {
    axios
      .get("reservation/list")
      .then((res) => {
        guardarCitas(res.data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (!isAdmin()){
      navigate("/");
    }
    listarCitas();
  }, [listarCitas, isLogged, isAdmin, navigate]);

  return (
    <div className={styles.contenedorUsuarios}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Citas </h3>
      </div>
      <div className={styles.contenedorLista}>
        {citas.map((cita) => (
          <Card
            key={cita._id}
            cita={cita}
            listarCitas={listarCitas}
          />
        ))}
        <div className={styles.contenedorBotones}>
          <Link to="/admin" className={styles.button + " " + styles.volver}>
            {" "}
            Volver{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListarCitas;
