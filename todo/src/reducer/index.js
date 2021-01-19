import { ADD_TODO, TOGGLE_TASK, CLEAR_TASK } from "../actions";

//create the initial state for the app to begin with
export const initialState = [
  {
    item: "Todo 1",
    id: 3892987589,
    completed: false,
  },
  {
    item: "Todo 2",
    id: 234325234,
    completed: false,
  },
];

//create the reducer function that takes state and action
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: //string name to add todo
      return [...state, action.payload]; //return a copy of the state & the action given
    case TOGGLE_TASK: //string name to swap completed
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });
    case CLEAR_TASK:
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
};
