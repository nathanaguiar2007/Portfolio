import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Hash URLs let GitHub Pages serve every route without server rewrites. */}
    {import.meta.env.MODE === "github" ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
);
