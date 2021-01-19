import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const initialValues = {
  title: "",
};
function ToDoForm(props) {
  const { handleItemAdd, clearTask } = props;
  const [values, setValues] = useState("");

  const handleChanges = (e) => {
    setValues({
      item: e.target.value,
      id: Date.now(),
      completed: false,
    });
  }; // good

  const handleSubmit = (e) => {
    e.preventDefault();
    handleItemAdd(values);
    setValues("");
    console.log("this is values", values);
  }; // good

  const clearForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearTask();
  }; // good

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Enter Todo</Typography>
        <TextField
          type="text"
          placeholder="New Todo..."
          label="Enter New Todo"
          variant="outlined"
          onChange={handleChanges}
          value={values.task}
        ></TextField>
        <Button type="submit" variant="contained" color="secondary">
          Add Todo!
        </Button>
        <Button variant="contained" color="primary" onClick={clearForm}>
          Clear Tasks
        </Button>
      </form>
    </div>
  );
}

export default ToDoForm;
