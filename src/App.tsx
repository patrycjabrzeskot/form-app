import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* this route should ONLY match if URL is exactly '/' */}
          <Route path="/summary" component={Summary} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
