import React from "react";
import { Switch, Route } from "react-router-dom";

import { PageSwitch } from "./views/PageSwitch";
import { NotFound } from "./views/NotFound";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={PageSwitch} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};
