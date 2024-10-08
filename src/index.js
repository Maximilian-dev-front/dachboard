import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./style.css";

const rootElement = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <React.StrictMode>
      <div className="wrapper">
        <App headerName={"Cрочно и важно"}/>
        <App headerName={"Не срочно, но важно"}/>
        <App headerName={"Срочно,но не важно"}/>
        <App headerName={"Не срочно и не важно"}/>
      </div>
    </React.StrictMode>,
);
