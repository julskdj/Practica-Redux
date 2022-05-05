import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "../reducers/notesReducer";

const reducers = combineReducers({
  notes: notesReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
