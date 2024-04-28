import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState(false);

  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    //prevenimos el comportamiento por defecto
    e.preventDefault();

    //Validación de los datos/inputs;
    if (nombre === "" || email === "" || password === "" || confirmar === "") {
      setError(true);
      return;  // si existe error, no avanza en la lógica del programa
    }
    if (password !== confirmar) {
      setError(true);
      setPassword("");
      setConfirmar("");
      return;
    }
    // Si el formulario se envía correctamente devolvemos todos nuestros inputs al inicio, se resetea el formulario
    setError(false); //elimina el mensaje de error
    setNombre("");
    setEmail("");
    setConfirmar("");
  };
  //Validación de email;
  const manejoEmail = (e) => {
    const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(e.target.value);
    setEmailError(!emailRegular.test(e.target.value));
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
            className="form-control my-2"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />

          <input
            placeholder="Ingrese E-mail"
            type="text"
            name="email"
            className={`my-2 form-control ${emailError ? "error" : ""}`}
            onChange={manejoEmail}
            value={email}
          />
          {emailError && <p className="error">Formato de mail incorrecto</p>}
          {/* Mostramos el mensaje de error si el email es inválido */}

          <input
            placeholder="Ingrese contraseña"
            type="password"
            name="pasword"
            className="form-control my-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <input 
            placeholder="Confirme contraseña"
            type="password"
            name="confirmar"
            className="form-control my-2"
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
