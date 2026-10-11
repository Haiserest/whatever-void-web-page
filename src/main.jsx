import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import ReactRouter from "./libs/react-router/components/react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>,
);
