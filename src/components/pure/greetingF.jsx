//Tipo funcion: Da mas agilidas a la hora de devolver elementos html
import React, { useState } from "react";
import PropTypes from "prop-types";

function GreetingF(props) {
  //userState
  //const { variable, metodo para actualizarla } = useState(valor inicial);
  const [age, setage] = useState(22);

  const birthday = () => {
    //actualizar el State
    setage(age + 1);
  };

  return (
    <div>
      <h1>HOLA {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>

      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
}

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
