import { Typography } from "@material-ui/core";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../hooks/formHooks";
const initialValues = [
  {
    title: "",
    id: "",
    completed: false,
  },
];

function ToDoForm(props) {
  const [values, handleChanges, clearForm] = useForm(initialValues);

  return (
    <div>
      <form>
        <Typography variant="h3">Enter Todo</Typography>
        <TextField
          type="text"
          placeholder="New Todo..."
          label="Enter New Todo"
          variant="outlined"
        ></TextField>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleItemAdd}
        >
          Add Todo!
        </Button>
        <Button variant="contained" color="primary" onClick={props.clearTask}>
          Clear Tasks
        </Button>
      </form>
    </div>
  );
}

export default ToDoForm;
