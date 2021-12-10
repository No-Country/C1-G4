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
import styles from "../../styles/Cita.module.css";

function Cita() {
    const [value, onChange] = useState(new Date());
    return (
        <Fragment>
            <div className={styles.Cita}>
                { /* {user = {user}} */}
                <div className={styles.especialidad}>
                    <h4>Seleccionar Especialidad</h4>
                    <input />
                </div>
                <div>
                    <h4>Seleccionar Fecha y Hora</h4>
                </div>
                <div className={styles.calendar}>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                </div>
            </div>


        </Fragment>
    );
}
export default Cita;
