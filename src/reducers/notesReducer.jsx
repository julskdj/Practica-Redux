import types from "../types/types";

const notes = JSON.parse(localStorage.getItem("notes")) || [];

const notesReducer = (state = notes, action) => {
  switch (action.type) {
    case types.añadirNota:
      return [...state, action.payload];

    case types.borrarNota:
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};

export default notesReducer;
