import React from "react";
import { useSelector, useDispatch } from "react-redux";

function UseSelector() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>test UseSelector</p>
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment btn
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Decrement btn
      </button>
    </div>
  );
}

export default UseSelector;
