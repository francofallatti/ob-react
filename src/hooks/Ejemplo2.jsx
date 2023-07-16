/**
 * Ejemplo de uso de:
 *  - useState()
 *  - useRef()
 *  - useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //vamos a crear dos contadores distintos, cada uno en un estado diferente
  const [contador1, setcontador1] = useState(0);
  const [contador2, setcontador2] = useState(0);

  //crear referencia con useRef para asociar una variable con un elememnto del DOM del componete
  const miRef = useRef();

  function incrementar1() {
    setcontador1(contador1 + 1);
  }

  function incrementar2() {
    setcontador2(contador2 + 1);
  }

  /**
   * Trabajar con UseEffect
   *
   * ? Caso 1: ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que está dentro de useEffect()
   *

  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("mostrando referencia a elemento del DOM:");
    console.log(miRef);
  });*/

  /**
   * ? Caso 2: ejecutar SOLO cuando cambie contador 1
   * Cada vez que haya un cambio en contador 1
   * se ejecuta aquello que está dentro de useEffect()
   *
  useEffect(() => {
    console.log("Cambio en el estado de contador");
    console.log("mostrando referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1]);*/

  /**
   * ? Caso 2: ejecutar SOLO cuando cambie contador 1 o 2
   * Cada vez que haya un cambio en contador 1 o 2
   * se ejecuta aquello que está dentro de useEffect()
   */
  useEffect(() => {
    console.log("Cambio en el estado de contador 1 o 2");
    console.log("mostrando referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referienciado</h4>

      <div>
        <button onClick={incrementar1}>Incremantar contador 1</button>
        <button onClick={incrementar2}>Incremantar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
