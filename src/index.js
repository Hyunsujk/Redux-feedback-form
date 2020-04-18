import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackReducerInitialState = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comment: "",
};

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

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
