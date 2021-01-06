import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

import Velha from "../pages/Velha";
import Memoria from "../pages/Memoria";
import Forca from "../pages/Forca";
import Life from "../pages/Life";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/velha" component={Velha} exact />
        <Route path="/memoria" component={Memoria} exact />
        <Route path="/forca" component={Forca} exact />
        <Route path="/life" component={Life} exact />
      </Switch>
    </BrowserRouter>
  );
};
