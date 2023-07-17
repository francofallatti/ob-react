import React, { useState, useEffect } from "react";

const Clock = () => {
  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellido: "San José",
  };
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [state]);

  const tick = () => {
    setState((prevState) => ({
      ...prevState,
      fecha: new Date(),
      edad: prevState.edad + 1,
    }));
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
