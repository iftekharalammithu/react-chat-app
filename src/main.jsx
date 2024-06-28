import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";
import { Authcontextprovider } from "./context/authcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authcontextprovider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authcontextprovider>
);
