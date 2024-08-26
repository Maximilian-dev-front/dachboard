import React from "react";
import InputField from "./InputField";
import Header from "./Header";
import TaskField from "./TaskField";
import {useState} from "react";
import Filter from "./Filter";

const App = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState("");
  let copyTask = tasks;
  switch (done) {
    case "All":
      copyTask = tasks;
      break;
    case "Active":
      copyTask = tasks.filter((e) => e.status === false);
      break;
    case "Complites":
      copyTask = tasks.filter((e) => e.status === true);
      break;

    default:
      break;
  }

  const addTask = () => {
    const task = {
      id: Math.random(),
      value: todo,
      status: false,
    };
    const newTask = [task, ...tasks];
    setTasks(newTask);
    setTodo("");
  };
  const DelTask = (id) => {
    const del = tasks.filter((e) => e.id !== id);
    setTasks(del);
    console.log(id);
  };
  const ToggleTask = (id) => {
    const toggle = tasks.map((e) => e.id === id ? {...e, status: !e.status} : {...e});
    setTasks(toggle);
  };
  // eslint-disable-next-line react/jsx-key
  const TaskTodoList = copyTask.map((e) =><TaskField
    id={e.id}
    value={e.value}
    status={e.status}
    DelTask={DelTask}
    ToggleTask={ToggleTask}
  />);


  return (
    <>
      <div>
        <Header />
        <InputField addTask={addTask} todo={todo} setTodo={setTodo}/>
        {TaskTodoList}
        <Filter setDone={setDone}/>
      </div>
      <div>
        <Header />
        <InputField addTask={addTask} todo={todo} setTodo={setTodo}/>
        {TaskTodoList}
        <Filter setDone={setDone}/>
      </div>
      <div>
        <Header />
        <InputField addTask={addTask} todo={todo} setTodo={setTodo}/>
        {TaskTodoList}
        <Filter setDone={setDone}/>
      </div>
      <div>
        <Header />
        <InputField addTask={addTask} todo={todo} setTodo={setTodo}/>
        {TaskTodoList}
        <Filter setDone={setDone}/>
      </div>

    </>
  );
};

export default App;
