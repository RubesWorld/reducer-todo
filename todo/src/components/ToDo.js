import { Typography } from "@material-ui/core";
import React from "react";

function ToDo(props) {
  return (
    <div>
      <Typography
        className={`task${props.task.completed ? " completed" : ""}`}
        onClick={props.handleToggle}
        variant="h3"
      >
        {props.task.item}
      </Typography>
    </div>
  );
}

export default ToDo;
