import { useState } from "react";

const Formulario = () => {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState(false);

  //Estado para los errores, se activa cuando están los campos vacíos y se desactiva cuando están completados:
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validarDatos = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault();

    //Validación de los datos/inputs;
    if (nombre === "" || email === "" || password === "" || confirmar === "") {
      setError(true);
      return; // si existe error, no avanza en la lógica del programa
    }
    if (password !== confirmar) {
      setError(true);
      setNombre("");
      setEmail("");
      setPassword("");
      setConfirmar("");
      return;
    }
    // Si el formulario se envía correctamente devolvemos todos nuestros inputs al inicio, se resetea el formulario
    setError(false); //elimina el mensaje de error
    setNombre("");
    setEmail("");
    setPassword("");
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
        {/* cuando el formulario se envie se ejecuta función de validar datos */}
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}

        <div className="form-group my-2">
          <input
            placeholder="Ingrese nombre"
            type="text"
            name="nombre"
            className="form-control my-2"
            onChange={(e) => setNombre(e.target.value)} //onChange función que detecta cuando se escribe y captura los datos ingresados en el input
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
            name="password"
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
