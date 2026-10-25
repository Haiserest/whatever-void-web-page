import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";

import ReactRouter from "./libs/react-router/components/react-router";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <ReactRouter />
    </MantineProvider>
  </StrictMode>,
);
