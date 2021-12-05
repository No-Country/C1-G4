import styles from "./../../styles/medicos.module.css";
import Card from "./CardMedicos.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Medicos = () => {
  const [medicos, saveMedicos] = useState([
    {
      _id: "674333203",
      name: "Pedro",
      lastname: "Perez",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 1,
    },
    {
      _id: "321112353",
      name: "Roxana",
      lastname: "Aguilar",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 0,
    },
    {
      _id: "444556323",
      name: "Mario",
      lastname: "Beltran",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 1,
    },
    {
      _id: "211234789",
      name: "Gerania",
      lastname: "Rodriguez",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 1,
    },
    {
      _id: "70949932",
      name: "Roberto",
      lastname: "Gomez",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 1,
    },
    {
      _id: "566117211",
      name: "Humberto",
      lastname: "Gonzales",
      email: "pperez@gmail.com",
      phone: "99888392",
      speciality: {
        name: "Urologia",
      },
      state: 1,
    },
  ]);
  return (
    <div className={styles.contenedorMedicos}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Medicos </h3>
      </div>
      <div className={styles.contenedorLista}>
        {medicos.map((medico) => (
          <Card key={medico._id} medico={medico} />
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
