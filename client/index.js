import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    // where react should attatch to the DOM
    document.getElementById("app")
  );
});
