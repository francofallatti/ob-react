import React, { Component } from "react";
//PropTypes -> tipos de datos que le pasamos al componente
import PropTypes from "prop-types";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
    };
  }

  render() {
    return (
      <div>
        <h1>HOLA {this.props.name}!</h1>
        <h2>Tu edad es de: {this.state.age}</h2>

        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    //genera run nuevo estado y actualizar la vista
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};
