import types from "../types/types";

export const añadirNota = (nota) => ({
    type: types.añadirNota,
    payload: nota
})

export const borrarNota = (id) => ({
    type: types.borrarNota,
    payload: id
})