/**
 * Ejemplo de uso del método de componenetWillUnMount para componete clase
 * yEjemplo de uso del hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }
  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    // aqui no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  );
};
