export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const CLEAR_TASK = "CLEAR_TASK";

export const addTodoAction = (title) => {
  return { type: ADD_TODO, payload: title };
};

export const toggleTaskAction = (id) => {
  return { type: TOGGLE_TASK, payload: id };
};

export const clearTaskAction = () => {
  return { type: CLEAR_TASK };
};
