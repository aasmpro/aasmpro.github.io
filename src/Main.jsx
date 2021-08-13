import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Resume } from "./views/Resume";
import { Projects } from "./views/Projects";

import { NotFound } from "./views/NotFound";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume/" exact component={Resume} />
      <Route path="/projects/" exact component={Projects} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
