import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/App";

const rootElement = document.getElementById("root");
createRoot(rootElement ?? document.createElement("div")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
