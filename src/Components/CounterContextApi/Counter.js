import React from "react";
import { useCounter } from "../../Containers/CounterContextApi/Context";

export default function Counter() {
  const { counter, increment, decrement } = useCounter();
  return (
    <div className="counter-contair">
      <button onClick={decrement}>decrement</button>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}
