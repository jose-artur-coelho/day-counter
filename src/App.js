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
    "Dez"
  ];

  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  function handleMinusCountClick() {
    setCount((c) => c - step);
  }

  function handlePlusCountClick() {
    setCount((c) => c + step);
  }

  function handleMinusStepClick() {
    if (step >= 2) setStep((s) => s - 1);
  }

  function handlePlusStepClick() {
    setStep((s) => s + 1);
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
          ? `daqui ${count} dia(s) será `
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
        justifyContent: "center"
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
