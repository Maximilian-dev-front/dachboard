
import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input value={props.todo}
        onChange={(event) => props.setTodo(event.target.value)}></input>
      <button onClick={() => props.addTask()}>Добавить</button>
    </div>
  );
};

export default InputField;
