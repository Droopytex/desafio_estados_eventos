import { useState } from "react";
import "./App.css";
import Registro from "./componentes/registro/Registro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registro />
    </>
  );
}

export default App;
