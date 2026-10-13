import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./fonts.css";
import "./components/Footer/Footer.css";
import "./components/FirstSectionPage/FirstSectionPage.css";
import "./components/Nav/nav.css";
import "./pages/Home/Home.css";
import "./pages/ServicesWeb/ServiciosWeb.css";
import "./pages/ServicesCloud/ServiciosCloud.css";
import "./pages/ServiciesAutomation/ServiciosAutomation.css";
import "./pages/Approach/Approach.css";
import "./pages/Beneficts/Benefits.css";
import "./pages/Contact/Contact.css";
import "./pages/Solutions/Solutions.css";
import "./pages/ServiceDetail/ServiceDetail.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
