import React, { useState, Fragment, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../../styles/Cita.module.css";
import axios from "axios";
import useUser from "./../../hooks/useUser";

function Cita() {
  const { isLogged } = useUser();
  const [fecha, guardarFecha] = useState(new Date());
  const [especialidades, guardarEspecialidades] = useState([
    {
      _id: "",
      name: "",
    },
  ]);
  const [especialidadName, guardarEspecialidadName] = useState("");
  const [medicos, guardarMedicos] = useState([
    {
      _id: "",
      name: "",
      lastname: "",
      phone: "",
      speciality: {
        _id: "",
        name: "",
      },
    },
  ]);
  const [cita, guardarCita] = useState({
    speciality: {
      _id: "",
      name: "",
    },
    medic: "",
  });
  const { speciality, medic } = cita;

  const cargarEspecialidades = useCallback(async () => {
    axios
      .get("speciality/list")
      .then(({ data }) => {
        guardarEspecialidades(data);
      })
      .catch(console.log);
  }, []);

  const cargarMedicos = useCallback(async () => {
    axios
      .get("medic/list")
      .then(({ data }) => {
        guardarMedicos(data);
      })
      .catch(console.log);
  }, []);

  const agregarCita = useCallback((e) => {
    e.preventDefault();
    axios
      .post("reservation/add", {
        speciality,
        medic,
        date: fecha,
        user: "61b39d5d628b11daded59f70",
      })
      .then((res) => {
        console.log(res);
        alert("cita creada exitosamente");
      })
      .catch(console.log);
  });
  const actualizarCita = (e) => {
    guardarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  const onChange = (fecha) => {
    guardarFecha(fecha);
  };

  const querySpeciality = useCallback(async () => {
    if (speciality.name !== "") {
      axios
        .get("speciality/query?_id=" + speciality)
        .then(({ data }) => {
          console.log(data.name);
          guardarEspecialidadName(data.name);
        })
        .catch(console.log);
    }
  }, [speciality]);

  useEffect(() => {
    cargarEspecialidades();
    cargarMedicos();
  }, []);

  return (
    <Fragment>
      {isLogged() ? (
        <form onSubmit={agregarCita} className={styles.Cita}>
          <div className={styles.formGroup}>
            <h4 className={styles.titulo}>Seleccionar Especialidad</h4>
            <select
              className={styles.select}
              onChange={actualizarCita}
              name="speciality"
              onClick={querySpeciality}
            >
              <option value="">----- Seleccione la especialidad -----</option>
              {especialidades.map((especialidad) => (
                <option key={especialidad._id} value={especialidad._id}>
                  {especialidad.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <h4 className={styles.titulo}>Seleccionar un médico</h4>
            <select
              name="medic"
              className={styles.select}
              onChange={actualizarCita}
            >
              <option value="">----- Seleccione la especialidad -----</option>
              {medicos.map((medico) => {
                if (especialidadName === medico.speciality.name) {
                  return (
                    <option key={medico._id} value={medico._id}>
                      {medico.name + " " + medico.lastname}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <div className={styles.formGroup}>
            <h4 className={styles.titulo}>Seleccionar Fecha y Hora</h4>
          </div>
          <div className={styles.calendar}>
            <Calendar value={fecha} onChange={onChange} />
          </div>
          <input className={styles.btn} type="submit" value="Reservar cita" />
        </form>
      ) : (
        <form onSubmit={agregarCita} className={styles.Cita}>
          <div className={styles.formGroup}>
            <h4 className={styles.titulo}>
              Por favor cree una cuenta o inicie sesion para pedir una cita
            </h4>
          </div>
          <div className={styles.formGroup}>
            <button className={styles.btnIni}>
              <Link to="/signin" className={styles.links}>
                Iniciar sesion
              </Link>
            </button>
          </div>
          <br />
          <div className={styles.formGroup}>
            <button className={styles.btnIni}>
              <Link to="/signup" className={styles.links}>
                Registrarse
              </Link>
            </button>
          </div>
        </form>
      )}
    </Fragment>
  );
}
export default Cita;
