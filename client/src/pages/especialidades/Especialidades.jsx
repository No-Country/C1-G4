import styles from "./../../styles/especialidades.module.css";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Especialidades = () => {
  const [especialidades, saveEspecialidades] = useState([
    {
      _id: "cargando",
      name: "cargando",
    },
  ]);
  const listarEspecialidades = async () => {
    axios
      .get("speciality/list")
      .then((res) => {
        const { data } = res;
        saveEspecialidades(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    listarEspecialidades();
  }, []);

  return (
    <div className={styles.contenedorEspecialidades}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Especialidades </h3>
      </div>
      <div className={styles.contenedorLista}>
        {especialidades.map((especialidad) => (
          <Card
            key={especialidad._id}
            especialidad={especialidad}
            listarEspecialidades={listarEspecialidades}
          />
        ))}
        <div className={styles.contenedorBotones}>
          <Link to="/especialidades/agregar" className={styles.button}>
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

export default Especialidades;
