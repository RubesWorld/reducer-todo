import { ADD_TODO, TOGGLE_TASK, CLEAR_TASK } from "../actions";

//create the initial state for the app to begin with
export const initialState = [
  {
    item: "Figure this out ",
    id: 3892987589,
    completed: false,
  },
  {
    item: "laundry",
    id: 234325234,
    completed: false,
  },
];

//create the reducer function that takes state and action
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: //name to add todo
      return [...state, action.payload]; //return a copy of the state & the action given
    case TOGGLE_TASK: //name to swap completed
      return state.map((item) => {
        return item.id === action.payload //if the item.id matches given id, switch complete, if not, return item
          ? { ...item, completed: !item.completed }
          : item;
      });
    case CLEAR_TASK:
      return state.filter((item) => !item.completed); //filter out all that have item completed (true)
    default:
      return state;
  }
};
