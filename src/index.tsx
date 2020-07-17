import ThemeProvider from "contexts/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
