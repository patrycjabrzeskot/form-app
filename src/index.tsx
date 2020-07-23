import ThemeProvider from "contexts/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom";
//import Home from "./pages/Home";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
