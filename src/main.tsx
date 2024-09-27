import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "./context/SearchContext.tsx";
import App from "./App.tsx";
import "./index.css";

// Registering the Service Worker
if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
);
