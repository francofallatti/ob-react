import logo from "./logo.svg";
import "./App.css";
//import Greeting from "./components/pure/greeting";
//import GreetingF from "./components/pure/greetingF";
//import TaskListComponent from "./components/container/task_list";
//import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Franco"></Greeting>*/}
        {/*<GreetingF name="Franco"></GreetingF>*/}
        {/* Task List Component */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/**Ejemplo de uso de Hooks */}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/**/}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="fran">
          {/* todo lo que hay aqué, es trado como props.children */}
          <h3>Contenido del prop.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
