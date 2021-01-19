import React, { useReducer, useState, useEffect } from "react";
import "./app.css";
//import components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/ToDoForm";

//styles import
import { Typography, Input } from "@material-ui/core";

//import reducer b+ actions
import { initialState, reducer } from "./reducer";
import { addTodoAction, toggleTaskAction, clearTaskAction } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); //good

  const handleItemAdd = (item) => {
    dispatch(addTodoAction(item));
  }; //good

  const handleToggle = (id) => {
    dispatch(toggleTaskAction(id));
  }; //good

  const clearTask = () => {
    dispatch(clearTaskAction());
  }; //good

  useEffect(() => {}, [state]);

  console.log(state);
  return (
    <div className="App">
      <div className="main-div">
        <Typography variant="h2">Reducer ToDo Application!</Typography>
        <ToDoForm handleItemAdd={handleItemAdd} clearTask={clearTask} />
        <ToDoList handleToggle={handleToggle} task={state} />
      </div>
    </div>
  );
}

export default App;
