import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./fonts.css";
import "./styles.css";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
