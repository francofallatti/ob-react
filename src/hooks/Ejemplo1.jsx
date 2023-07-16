/*
    > Ejemplo de uso del Hook useState <

    Crear un component de tipo funcion y acceder a su estado
    privado a través de un hook y, ademas, poder modificarlo
*/

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "franco",
    email: "franco@gmail.com",
  };

  /*
  Quiero que el valorInicial y personaInicial sean parte del estado del componente para 
  poder gestionar su cambio y que este se vea reflejado en la vista del componete.
  */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // funcion para actualizar el estado privado del contador
  function incrematarContador() {
    setContador(contador + 1);
  }

  // funcion para actualizar el estado privado de persona
  const actualizarPersona = () => {
    setPersona({
      nombre: "candela",
      email: "knd@gmail.com",
    });
  };

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>contador: {contador}</h2>
      <h2>persona: </h2>
      <h3>nombre: {persona.nombre}</h3>
      <h3>email: {persona.email}</h3>

      {/**Bloque de botones para actualizar el estado */}
      <button onClick={incrematarContador}>incrematar contador</button>
      <button onClick={actualizarPersona}> actualizar persona</button>
    </div>
  );
};

export default Ejemplo1;
