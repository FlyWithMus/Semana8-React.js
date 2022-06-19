import { useState } from "react";
import "./App.css";
import Lista from "./components/Lista";
import Entryform from "./components/Entryform";

function App() {
  const [variable, setVariable] = useState([
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ]);
  console.log(variable);
  console.log(process.env);
  return (
    <div className="App">
      <Entryform variable={variable} setVariable={setVariable} />

      <Lista
        variable={variable}
        render={(variableObject) => {
          const { id, task, done } = variableObject;

          return (
            <li key={id} className={done.toString()}>
              {task}
            </li>
          );
        }}
      />
      <footer>{process.env.REACT_APP_VAR_EXAMPLE}</footer>
    </div>
  );
}

export default App;
