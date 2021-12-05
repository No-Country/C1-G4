import styles from "./../../styles/especialidades.module.css";
import Card from "./Card.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Especialidades = () => {
  const [especialidades, saveEspecialidades] = useState([
    {
      _id: "93929200203",
      name: "Otorrinolaringologia",
    },
    {
      _id: "82828123",
      name: "Pediatra",
    },
    {
      _id: "73662782",
      name: "Nefrologia",
    },
    {
      _id: "23929282",
      name: "Urologia",
    },
  ]);
  return (
    <div className={styles.contenedorEspecialidades}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Especialidades </h3>
      </div>
      <div className={styles.contenedorLista}>
        {especialidades.map((especialidad) => (
          <Card key={especialidad._id} especialidad={especialidad} />
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
