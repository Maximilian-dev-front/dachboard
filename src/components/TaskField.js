import React from "react";
import "./TaskField.css";
const TaskField = (props) => {
  return (
    <div key={props.id} className="taskfield" style={props.status ? {backgroundColor: "rgba(200, 229, 194,0.7)"} : {textDecoration: "none"}}>
      <input type='checkbox' onClick={() => props.ToggleTask(props.id)} defaultChecked ={props.status}></input>
      <span style={props.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.value}</span>
      <button onClick={() => props.DelTask(props.id)}>x</button>
    </div>
  );
};

export default TaskField;
