import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./fonts.css";
import "./components/Footer/Footer.css";
import "./components/Nav/nav.css";
import "./pages/Home/Home.css";
import "./pages/NewDesign/ModernPage.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
