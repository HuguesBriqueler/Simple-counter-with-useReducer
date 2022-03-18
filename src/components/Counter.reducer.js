import * as actions from "./Counter.actions";

// This function dispatch each action to the appropriate code
export function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
