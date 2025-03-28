import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <HeroUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </HeroUIProvider>
    </StrictMode>
  </BrowserRouter>
);
