import styles from "./../../styles/usuarios.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CardUsr = ({ usuario, listarUsuarios }) => {
  const { _id, username, name, lastname, email, status, rol } = usuario;

  const [mostrar, saveMostrar] = useState(false);

  const toggleMostrar = () => {
    if (mostrar) {
      saveMostrar(false);
    } else {
      saveMostrar(true);
    }
  };
  const activarUsuario = async () => {
    axios
      .put("user/activate", { _id })
      .then((res) => {
        console.log("Usuario activado", res);
        listarUsuarios();
      })
      .catch(console.log);
  };
  const desactivarUsuario = async () => {
    axios
      .put("user/deactivate", { _id })
      .then((res) => {
        console.log("Usuario desactivado", res);
        listarUsuarios();
      })
      .catch(console.log);
  };
  //Funcion eliminada por riesgo de ruptura de la app debido a dependencias
  /*
  const eliminarUsuario = async () => {
    axios
      .delete("user/remove", {data:{_id:_id}})
      .then((res) => {
        console.log("Usuario eliminado", res);
        listarUsuarios();
      })
      .catch(console.log);
  };*/

  return (
    <div className={mostrar ? styles.card + " " + styles.grande : styles.card}>
      <div className={styles.data}>
        <p className={styles.name}> {name + " " + lastname} </p>
      </div>
      <div className={styles.opc}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className={"bi bi-caret-down-square-fill " + styles.icono}
          viewBox="0 0 16 16"
          onClick={() => toggleMostrar()}
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" />
        </svg>
        <Link
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className={
            "bi bi-pencil-square " + styles.icono + " " + styles.editar
          }
          to={"/usuarios/editar/" + _id}
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </Link>
        {status === 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={
              "bi bi-bookmark-check-fill " + styles.icono + " " + styles.check
            }
            viewBox="0 0 16 16"
            onClick={desactivarUsuario}
          >
            <path
              fillRule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={"bi bi-bookmark-x-fill " + styles.icono + " " + styles.x}
            viewBox="0 0 16 16"
            onClick={activarUsuario}
          >
            <path
              fillRule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
            />
          </svg>
        )}
      </div>
      <div
        className={
          mostrar ? styles.extra + " " + styles.extraShow : styles.extra
        }
      >
        <div className={styles.maxdata}>
          <p className={styles.maxname}>ID: {_id} </p>
          <p className={styles.maxname}>Username: {username} </p>
          <p className={styles.maxname}>Nombre: {name} </p>
          <p className={styles.maxname}>Apellido: {lastname}</p>
          <p className={styles.maxname}>E-mail: {email} </p>
          <p className={styles.maxname}>Rol: {rol}</p>
          <p className={styles.maxname}>
            Estado: {status === 1 ? "Activo" : "Inactivo"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardUsr;
