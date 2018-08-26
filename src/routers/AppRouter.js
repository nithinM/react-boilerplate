import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyComponent from "../components/MyComponent";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MyComponent} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
