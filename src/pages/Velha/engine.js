import { useReducer, useState } from "react";

function tableReducer(estado, acao) {
  let newState;
  switch (acao.type) {
    case "topLeft":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "top":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "topRight":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "left":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "center":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "right":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "bottomLeft":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "bottom":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    case "bottomRight":
      newState = estado[acao.type];
      newState.value = acao.value;
      return { ...estado, [acao.type]: { ...newState } };
    default:
      return null;
  }
}

function validate(position, letter, matches, table) {
  let winner = null;
  matches.forEach((elm) => {
    if (elm.includes(position)) {
      const [first, second, third] = elm;

      console.log(first, second, third);
      if (
        table[first].value === letter &&
        table[second].value === letter &&
        table[third].value === letter
      ) {
        winner = { letter, location: [first, second, third] };
        return;
      }
    }
  });

  return winner;
}

function useCreateGame() {
  const initialCells = {
    topLeft: {
      position: "topLeft",
      value: null
    },
    top: {
      position: "top",
      value: null
    },
    topRight: {
      position: "topRight",
      value: null
    },
    left: {
      position: "left",
      value: null
    },
    center: {
      position: "center",
      value: null
    },
    right: {
      position: "right",
      value: null
    },
    bottomLeft: {
      position: "bottomLeft",
      value: null
    },
    bottom: {
      position: "bottom",
      value: null
    },
    bottomRight: {
      position: "bottomRight",
      value: null
    }
  };
  const matches = [
    ["topLeft", "top", "topRight"],
    ["left", "center", "right"],
    ["bottomLeft", "bottom", "bottomRight"],

    ["topLeft", "left", "bottomLeft"],
    ["top", "center", "bottom"],
    ["topRight", "right", "bottomRight"],

    ["topLeft", "center", "bottomRight"],
    ["topRight", "center", "bottomLeft"]
  ];

  const [table, dispatch] = useReducer(tableReducer, initialCells);
  const [winner, setWinner] = useState(null);
  function markCell(position, letter) {
    new Promise((resolve) => {
      dispatch({ type: position, value: letter });
      resolve();
    }).then(() => setWinner(validate(position, letter, matches, table)));
  }

  return [table, markCell, winner];
}

export default useCreateGame;
