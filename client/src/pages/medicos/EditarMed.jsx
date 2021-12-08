import styles from "./../../styles/agregar.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditarMed = () => {
  //Recuperamos los parametros y guardamos el objeto navigate
  const { _id } = useParams();
  const navigate = useNavigate();
  const [medico, guardarMedico] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    speciality: "",
  });
  const [especialidades, guardarEspecialidades] = useState([]);
  const [error, guardarError] = useState(false);
  //Destructuramos las propiedades del medico
  const { name, lastname, email, phone, speciality } = medico;
  const cargarMedicoPorId = async () => {
    axios
      .get("medic/query?_id=" + _id)
      .then((res) => {
        const { data } = res;
        guardarMedico(data);
        console.log("cargado");
      })
      .catch(console.log);
  };
  const listarEspecialidades = async () => {
    axios
      .get("speciality/list")
      .then((res) => {
        const { data } = res;
        guardarEspecialidades(data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    cargarMedicoPorId();
    listarEspecialidades();
  }, []);
  //Funcion que se ejecuta cada vez que un usuario escribe en un input
  const actualizarMedico = (e) => {
    guardarMedico({
      ...medico,
      [e.target.name]: e.target.value,
    });
  };

  const agregarMedico = async (e) => {
    e.preventDefault();
    //Validacion
    if (name.trim() === "") {
      guardarError(true);
      return;
    }
    //Eliminamos el error si existe uno previo
    guardarError(false);
    //Peticion al backend para agregar una nuevo medico
    axios
      .put("medic/update", {
        _id,
        name,
        lastname,
        email,
        phone,
        speciality,
      })
      .then((res) => {
        alert("Medico agregado exitosamente", res);
        //redireccionamos a la lista
        navigate("/medicos");
      })
      .catch(console.log);
  };
  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Editar médico </h2>
      <form onSubmit={agregarMedico} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre </label>
          <input
            value={name}
            name="name"
            type="text"
            className={styles.input}
            onChange={actualizarMedico}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Apellido </label>
          <input
            value={lastname}
            name="lastname"
            type="text"
            className={styles.input}
            onChange={actualizarMedico}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Email </label>
          <input
            value={email}
            name="email"
            type="email"
            className={styles.input}
            onChange={actualizarMedico}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Telefono </label>
          <input
            value={phone}
            name="phone"
            type="text"
            className={styles.input}
            onChange={actualizarMedico}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Especialidad </label>
          <select
            value={speciality}
            name="speciality"
            className={styles.input}
            onChange={actualizarMedico}
          >
            <option value=""> --- Seleccionar Especialidad --- </option>
            {especialidades.map((especialidad) => (
              <option value={especialidad._id}>{especialidad.name}</option>
            ))}
          </select>
        </div>
        {error ? (
          <p className={styles.error}> Todos los campos son requeridos </p>
        ) : null}
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            {" "}
            Guardar{" "}
          </button>
          <Link to="/medicos" className={styles.button + " " + styles.volver}>
            {" "}
            Volver{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditarMed;
