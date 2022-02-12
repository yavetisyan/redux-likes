import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { rootReducre } from "./redux/rootReducre";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducre);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
