import React from "react";

import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";

export const PageSwitch = () => {
  if (window.location.hash === "#resume") {
    window.scrollTo(0, 0);
    return <Resume />;
  } else if (window.location.hash === "#projects") {
    window.scrollTo(0, 0);
    return <Projects />;
  }
  return <Home />;
};
