import { useState } from "react";
import Alert from "../alert/Alert";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    //Validación de los datos;
    if (nombre === "" || email === "" || password === "" || confirmar === "") {
      setError(true);
      return;
    }
    // Si el formulario se envía correctamente devolvemos todos nuestros al inicio se resetea el formulario
    setError(false);
    setNombre("");
    setEmail("");
    setConfirmar("");
  };

  return (
    <>
      <from className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group my-2">
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group my-2">
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group my-2">
          <input
            type="text"
            name="pasword"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group my-2">
          <input
            type="text"
            name="confirmar"
            className="form-control"
            onChange={(e) => setConfirmar(e.target.value)}
            value={confirmar}
          />
        </div>
        <button type="submit" className="form-control bg-success my-2">
          Enviar
        </button>
      </from>
    </>
  );
};

export default Formulario;
