import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/topPage.tsx";
import "./index.css";

//react routerの設定をする

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
