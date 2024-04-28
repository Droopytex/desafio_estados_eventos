import { useState } from "react";
const Alert = ({ emailError, passwordError, datosError }) => {
  return (
    <>
      {datosError && <p className="error">Todos los campos son obligatorios</p>}
      {emailError && <p className="error">Formato de mail incorrecto</p>}
      {passwordError && <p className="error">Contraseña incorrecta</p>}
    </>
  );
};

export default Alert;
