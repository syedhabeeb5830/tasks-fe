import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import ErrorBoundary from './ErrorBoundary';
import { AppProvider } from "./AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <NextUIProvider>
          {/* Dark Mode */}
          <div className="dark text-foreground bg-background min-h-screen min-w-screen flex justify-center items-center">
            <App />
          </div>
        </NextUIProvider>
      </AppProvider>
    </ErrorBoundary>
  </StrictMode>
);
