import { Typography } from "@material-ui/core";
import React from "react";
import ToDo from "./ToDo";

function TodoList(props) {
  const { task, handleToggle } = props;
  //   console.log("how do i pass this in?", props.task);
  return (
    <div>
      {props.task.map((task) => (
        <ToDo key={task.id} task={task} handleToggle={props.handleToggle} />
      ))}
    </div>
  );
}

export default TodoList;
