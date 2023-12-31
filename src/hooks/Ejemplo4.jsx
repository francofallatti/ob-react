/**
 * Ejemplo para entender el uso de props.children
 */

import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>*** Ejemplo de children.props ***</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/**Props.children pintara por defecto aquello que se encuentre 
      entre las etiquetas de aprertura y cierre de este componente 
      desde el componente d eorden superior*/}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
