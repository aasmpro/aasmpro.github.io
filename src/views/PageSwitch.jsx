import React from "react";

import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";

export const PageSwitch = () => {
  if (window.location.hash === "#resume") {
    return <Resume />;
  } else if (window.location.hash === "#projects") {
    return <Projects />;
  }
  return <Home />;
};
