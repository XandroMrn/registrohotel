import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./estilo.css";
import validaFormulario from "./validacion";

function ReservationForm() {
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [habitacion, setHabitacion] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [factorRH, setFactorRH] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validaFormulario()) {
      return;
    }

    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones necesarias.
  };

  return (
    <div className="container">
      <h1 className="page-title">Formulario de Reservación</h1>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>
          Identificación:
          <input
            type="text"
            id="identificacion"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
          />
        </label>

        <label>
          Nombres:
          <input
            type="text"
            id="nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </label>

        <label>
          Apellidos:
          <input
            type="text"
            id="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>

        <label>
          Habitación:
          <input
            type="text"
            id="habitacion"
            value={habitacion}
            onChange={(e) => setHabitacion(e.target.value)}
          />
        </label>

        <label>
          Factor RH:
          <select
            id="factorRH"
            value={factorRH}
            onChange={(e) => setFactorRH(e.target.value)}
          >
            <option value="">Seleccione un factor RH</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">AB+</option>
            <option value="6">AB-</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
          </select>
        </label>

        <label>
          Fecha de Ingreso:
          <input
            type="date"
            id="fechaIngreso"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
          />
        </label>

        <label>
          Fecha de Salida:
          <input
            type="date"
            id="fechaSalida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
          />
        </label>
        <input type="submit" className="submit-button" value="Registrar" />
        <input type="submit" className="submit-button" value="Cancelar" />
      </form>
    </div>
  );
}

export default ReservationForm;
