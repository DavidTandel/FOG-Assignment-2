import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menumultiplayerserverbrowser from "pages/Menumultiplayerserverbrowser";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menumultiplayerserverbrowser",
      element: <Menumultiplayerserverbrowser />,
    },
  ]);

  return element;
};

export default ProjectRoutes;