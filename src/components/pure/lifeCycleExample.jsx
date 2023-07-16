/**
 * Ejemplo de componente tipo clase que sirve dispone de los metodos de cliclo de vida
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("Cuando se instancia el componente");
  }

  componentWillMount() {
    console.log("WillMount: Antes del montaje del componente");
  }

  componentDidMount() {
    console.log(
      "DidMount: Justo al acabar el montaje del montaje del componente, antes de renderizarlo"
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps: Si va a recibir nuevos props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //Controlar si el componente debe o no actualizarse
    //return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("WillUpdate: Justo antes de actualizarse");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate: Justo despues de actualizarse");
  }

  componentWillUnmount() {
    console.log("WillUnmount:  Justo antes de desaparecer el componente");
  }

  render() {
    return <div></div>;
  }
}
LifeCycleExample.propTypes = {};

export default LifeCycleExample;
