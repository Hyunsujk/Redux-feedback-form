import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// setting the initial state of feedback reducer.
// when the user submit the feedback form, reducer state will be updated with the initial state.
const feedbackReducerInitialState = {
  feeling: "",
  understanding: "",
  support: "",
  comment: "",
};

// depends on the action type, different object key will be update with the incoming value
const feedbackReducer = (state = feedbackReducerInitialState, action) => {
  if (action.type === "SET_FEELING") {
    return { ...state, feeling: action.payload };
  }
  if (action.type === "SET_UNDERSTANDING") {
    return { ...state, understanding: action.payload };
  }
  if (action.type === "SET_SUPPORT") {
    return { ...state, support: action.payload };
  }
  if (action.type === "SET_COMMENT") {
    return { ...state, comment: action.payload };
  }
  if (action.type === "RESET") {
    return { feeling: "", understanding: "", support: "", comment: "" };
  }

  return state;
};

// created separate reducer to store a feedback list coming from database
const listReducer = (state = [], action) => {
  if (action.type === "SET_LIST") {
    return [...action.payload];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    listReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
