import styles from "./../../styles/medicos.module.css";
import Card from "./CardMedicos.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Medicos = () => {
  const [medicos, saveMedicos] = useState([
    {
      _id: "cargando",
      name: "cargando",
      lastname: "cargando",
      email: "cargando",
      phone: "cargando",
      speciality: {
        name: "cargando",
      },
      state: 1,
    },
  ]);
  const listarMedicos = async () => {
    axios
      .get("medic/list")
      .then((res) => {
        const { data } = res;
        saveMedicos(data);
      })
      .catch(console.log);
  };
  useEffect(() => {
    listarMedicos();
  }, []);
  return (
    <div className={styles.contenedorMedicos}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Medicos </h3>
      </div>
      <div className={styles.contenedorLista}>
        {medicos.map((medico) => (
          <Card
            key={medico._id}
            medico={medico}
            listarMedicos={listarMedicos}
          />
        ))}
        <div className={styles.contenedorBotones}>
          <Link to="/medicos/agregar" className={styles.button}>
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

export default Medicos;
