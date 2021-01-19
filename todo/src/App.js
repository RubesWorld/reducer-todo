import React, { useReducer, useState } from "react";
import "./app.css";
//import components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/ToDoForm";

//styles import
import { Typography, Input } from "@material-ui/core";

//import reducer
import { initialState, reducer } from "./reducer";
import { addTodoAction, toggleTaskAction, clearTaskAction } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleItemAdd = (item) => {
    dispatch(addTodoAction(item));
  };

  const handleToggle = (id) => {
    dispatch(toggleTaskAction(id));
  };

  const clearTask = () => {
    dispatch(clearTaskAction());
  };

  console.log(state);
  return (
    <div className="App">
      <div className="main-div">
        <Typography variant="h2">Reducer ToDo Application!</Typography>
        <ToDoForm
          handleItemAdd={handleItemAdd}
          clearTask={clearTask}
          task={state}
        />
        <ToDoList handleToggle={handleToggle} task={state} />
      </div>
    </div>
  );
}

export default App;
