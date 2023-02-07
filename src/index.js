/* Style */
import GlobalStyle from "./assets/stylesGlobal/GlobalStyle";
import ResetStyle from "./assets/stylesGlobal/ResetStyle";
import App from "./App";

/* Logic */
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetStyle /> {/* reset-css */}
    <GlobalStyle />{/* global-css */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
