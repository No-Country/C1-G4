import styles from "./../../styles/agregar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AgregarMed = () => {
  const navigate = useNavigate();
  //Crear State de Especialidades, Medico y Error
  const [especialidades, guardarEspecialidades] = useState([]);
  const [medico, guardarMedico] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    speciality: "",
  });
  const [error, guardarError] = useState(false);
  //Extraer valores de la especialidad
  const { name, lastname, email, phone, speciality } = medico;
  //Listar especialidades
  const listarEspecialidades = async () => {
    axios
      .get("speciality/list")
      .then(({ data }) => {
        guardarEspecialidades(data);
      })
      .catch(console.log);
  };
  //Funcion que se ejecuta cada vez qie se escribe en un input
  const actualizarMedico = async (e) => {
    guardarMedico({
      ...medico,
      [e.target.name]: e.target.value,
    });
  };
  //Agregar medico
  const agregarMedico = async (e) => {
    e.preventDefault();
    //Validacion
    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      speciality.trim() === ""
    ) {
      guardarError(true);
      return;
    }
    //Elimina errores previos
    guardarError(false);
    //Peticion al backend para agregar un nuevo medico
    axios
      .post("medic/add", {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        speciality: speciality,
      })
      .then((res) => {
        alert("Especialidad agregada exitosamente", res);
        //Redireccion
        navigate("/medicos");
      })
      .catch(console.log);
  };
  useEffect(() => {
    listarEspecialidades();
  }, []);

  return (
    <div className={styles.contenedorAgregar}>
      <h2 className={styles.titulo}> Agregar nuevo médico </h2>
      <form onSubmit={agregarMedico} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}> Nombre </label>
          <input
            onChange={actualizarMedico}
            name="name"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Apellido </label>
          <input
            onChange={actualizarMedico}
            name="lastname"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Email </label>
          <input
            onChange={actualizarMedico}
            name="email"
            type="email"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Telefono </label>
          <input
            onChange={actualizarMedico}
            name="phone"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> Especialidad </label>
          <select
            onChange={actualizarMedico}
            name="speciality"
            className={styles.input}
          >
            <option value="">--- Selecciona especialidad ---</option>
            {especialidades.map((especialidad) => (
              <option value={especialidad._id}> {especialidad.name} </option>
            ))}
          </select>
        </div>
        {error ? (
          <p className={styles.error}> Todos los campos son necesarios </p>
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

export default AgregarMed;
