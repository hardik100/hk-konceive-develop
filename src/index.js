import { React, createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import * as DATA from "../src/data/studentsData.json";
import App from "./App";
import { history } from "./history";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const updateDetails = (RollNumber, name, value) => {
  const clonedArr = [...defaultState.studentsList];
  const foundItem = clonedArr.findIndex((n) => n.RollNumber == RollNumber);
  clonedArr[foundItem][name] = value;
  defaultState.EditableItem = clonedArr[foundItem];
  defaultState.studentsList = clonedArr;
  console.log(defaultState.studentsList, "updated");
};

const setEdit = (item) => {
  defaultState.EditableItem = item;
};
const defaultState = {
  studentsList: DATA.default,
  updateFunc: updateDetails,
  setEdit: setEdit,
  EditableItem: null
};
export const MyContext = createContext();
root.render(
  // <StrictMode>
  <MyContext.Provider value={defaultState}>
    <Router history={history}>
      <App />
    </Router>
  </MyContext.Provider>
  // </StrictMode>
);
