import { useState } from "react";
import Alert from "../alert/Alert";
import Formulario from "../formulario/Formulario";
import SocialButton from "../socialbutton/SocialButton";

function Registro() {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <div className="d-flex justify-content-center">
        <SocialButton social="github" />
        <SocialButton social="linkedin" />
        <SocialButton social="facebook" />
      </div>
      <p>o usa un mail para registrarse</p>
      <Formulario />
      <Alert />
    </>
  );
}

export default Registro;
