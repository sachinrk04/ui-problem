import React from "react";
import "./CounterContextApi.scss";
import { CounterProvider } from "./Context";
import Counter from "../../Components/CounterContextApi/Counter";

export default function CounterContextApi() {
  return (
    <CounterProvider>
      <div className="ccp-container">
        <Counter />
      </div>
    </CounterProvider>
  );
}
