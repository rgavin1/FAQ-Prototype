import React from "react";
import ReactDOM from "react-dom";
import "./StyleSheets/index.scss";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
