import { useState } from "react";

const Entryform = ({ variable, setVariable }) => {
  const [id, setId] = useState(3);
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const createVariable = (event) => {
    event.preventDefault();

    setVariable([...variable, { id, task, done }]);
    setId(id + 1);
    setTask("");
    setDone(false);
  };

  return (
    <form onSubmit={createVariable}>
      <label htmlFor="id">Id: </label>
      <input type="number" id="id" name="id" value={id} readOnly></input>

      <label htmlFor="task">Task: </label>
      <input
        type="text"
        maxLength={100}
        id="task"
        name="task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>

      <label htmlFor="done">Done?: </label>
      <input
        type="checkbox"
        id="done"
        name="done"
        checked={done}
        onChange={(e) => {
          setDone(e.target.checked);
        }}
      ></input>

      <button>Create Variable</button>
    </form>
  );
};
export default Entryform;
