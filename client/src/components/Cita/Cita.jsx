//     title: {
//     create_at: {
//     date: {
//     status: {
//     price: {
//     user: {
//     id_medic: {
//     id_patient: {
//     paymethod: {

import React, { useState, Fragment } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from "../../styles/Cita.module.css";

function Cita() {
  const [fecha, guardarFecha] = useState(new Date());

  const agregarCita = (e) => {
    e.preventDefault();
    console.log(fecha);
  };
  const onChange = fecha => {
    guardarFecha(fecha);
  };
  return (
    <Fragment>
      <form onSubmit={ agregarCita } className={styles.Cita}>
        <div className={styles.especialidad}>
          <h4>Seleccionar Especialidad</h4>
          <input />
        </div>
        <div>
          <h4>Seleccionar Fecha y Hora</h4>
        </div>
        <div className={styles.calendar}>
          <Calendar value={ fecha } onChange={ onChange } />
        </div>
        <input type="submit" value="Mostrar"/>
      </form>
    </Fragment>
  );
}
export default Cita;
