import styles from "./../../styles/administradores.module.css";
import Card from "./CardAdm.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Administradores = () => {
  const [administradores, saveAdministradores] = useState([
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
    <div className={styles.contenedorUsuarios}>
      <div className={styles.contenedorTitulo}>
        <h3 className={styles.titulo}> Administradores </h3>
      </div>
      <div className={styles.contenedorLista}>
        {administradores.map((administrador) => (
          <Card key={administrador._id} administrador={administrador} />
        ))} 
        <div className={styles.contenedorBotones}>
          <Link to="/administradores/agregar" className={styles.button}>
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

export default Administradores;
