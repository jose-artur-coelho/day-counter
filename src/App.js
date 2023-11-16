import React from "react";
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
const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const initialState = { step: 1, count: 0 };

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "incStep":
        return { ...state, step: state.step + 1 };
      case "decStep":
        return { ...state, step: state.step > 1 ? state.step - 1 : state.step };
      case "incCount":
        return { ...state, count: state.count + state.step };
      case "decCount":
        return { ...state, count: state.count - state.step };
    }
  }

  const [{ step, count }, dispatch] = React.useReducer(reducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}>
      <Buttons
        text="Passo"
        counter={step}
        onPlusClick={() => dispatch({ type: "incStep" })}
        onMinusClick={() => dispatch({ type: "decStep" })}
      />
      <Buttons
        text="Contador"
        counter={count}
        onPlusClick={() => dispatch({ type: "incCount" })}
        onMinusClick={() => dispatch({ type: "decCount" })}
      />
      <p style={{ textAlign: "center" }}>
        {count === 0
          ? "Hoje é "
          : count > 0
          ? `Daqui ${count} dia(s) será `
          : `${Math.abs(count)} dia(s) atrás era  `}{" "}
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
