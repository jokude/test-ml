import React from "react";
import ReactDOM from "react-dom";
import "./app/apiClient/init";
import { App } from "./app";
import "./styles.scss";

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);