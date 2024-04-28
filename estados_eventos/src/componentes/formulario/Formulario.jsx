import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Contraseña");
  const [confirmar, setConfirmar] = useState(true);

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
      <form className="formulario" onSubmit={validarDatos}>
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        <div className="form-group my-2">
          <input
            placeholder="Ingrese nombre"
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group my-2">
          <input
            placeholder="Ingrese E-mail"
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group my-2">
          <input
            placeholder="Ingrese contraseña"
            type="password"
            name="pasword"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group my-2">
          <input
            placeholder="Confirme contraseña"
            type="password"
            name="confirmar"
            className="form-control"
            onChange={(e) => setConfirmar(e.target.value)}
            value={confirmar}
          />
        </div>

        <button type="submit" className="bg-success">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
