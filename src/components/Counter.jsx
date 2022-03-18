import React from "react";
import { reducer } from "./Counter.reducer";
import * as actions from "./Counter.actions";
import "./Counter.module.css";

const initialState = 0;

export default function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter with useReducer</h1>
      <h1>{state}</h1>
      {/* Each button distaptch its action throught the reducer */}
      <button onClick={() => dispatch({ type: actions.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: actions.DECREMENT })}>
        Decrement
      </button>
    </>
  );
}
