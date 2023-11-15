import React from "react";
export default function App() {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  function reducerCount(state, action) {
    if (action.type === "inc") return state + step;
    if (action.type === "dec") return state - step;
  }

  function reducerStep(state, action) {
    if (action.type === "inc") return state + 1;
    if (action.type === "dec" && state >= 2) return state - 1;
    return state;
  }

  const [step, dispatchStep] = React.useReducer(reducerStep, 1);
  const [count, dispatchCount] = React.useReducer(reducerCount, 0);

  function handleMinusCountClick() {
    dispatchCount({ type: "dec" });
  }

  function handlePlusCountClick() {
    dispatchCount({ type: "inc" });
  }

  function handleMinusStepClick() {
    dispatchStep({ type: "dec" });
  }

  function handlePlusStepClick() {
    dispatchStep({ type: "inc" });
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  console.log(date);
  return (
    <div style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}>
      <Buttons
        text="Passo"
        counter={step}
        onPlusClick={handlePlusStepClick}
        onMinusClick={handleMinusStepClick}
      />
      <Buttons
        text="Contador"
        counter={count}
        onMinusClick={handleMinusCountClick}
        onPlusClick={handlePlusCountClick}
      />
      <p style={{ textAlign: "center" }}>
        {count === 0
          ? "Hoje é "
          : count > 0
          ? `Daqui ${count} dia(s) será `
          : `Há ${Math.abs(count)} dia(s) atrás era  `}{" "}
        {weekDays[date.getDay()]}, {date.getDate()} de {months[date.getMonth()]}{" "}
        de {date.getFullYear()}
      </p>
    </div>
  );
}

function Buttons({ text, counter, onPlusClick, onMinusClick }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={onMinusClick}>-</button>
      <p>
        {text}: {counter}
      </p>
      <button onClick={onPlusClick}>+</button>
    </div>
  );
}
