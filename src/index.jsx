import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
