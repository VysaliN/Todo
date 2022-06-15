import React, { useState } from "react";
import "./TodoInput.css"

const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const changeHandle = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Task"
        id="task"
        name="task"
        value={task}
        onChange={changeHandle}
      />
      <button>Add</button>
    </form>
  );
};
export default TodoInput;
