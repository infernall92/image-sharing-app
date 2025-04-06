import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroUIProvider>
      <main className="dark text-foreground bg-background">
        <Provider store={store}>
          <App />
        </Provider>
      </main>
    </HeroUIProvider>
  </BrowserRouter>
);
