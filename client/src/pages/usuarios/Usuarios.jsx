import styles from "./../../styles/usuarios.module.css";
import Card from "./CardUsr.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Usuarios = () => {
  const [usuarios, saveUsuarios] = useState([
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
        <h3 className={styles.titulo}> Usuarios </h3>
      </div>
      <div className={styles.contenedorLista}>
        {usuarios.map((usuario) => (
          <Card key={usuario._id} usuario={usuario} />
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
