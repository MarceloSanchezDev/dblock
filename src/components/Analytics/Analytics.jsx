import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

function loadGoogleAnalytics() {
  if (!gaMeasurementId || document.querySelector("script[data-dblock-ga]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  script.dataset.dblockGa = "true";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, { send_page_view: false });
}

function loadClarity() {
  if (!clarityProjectId || window.clarity) return;

  window.clarity = function clarity() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
  script.dataset.dblockClarity = "true";
  document.head.appendChild(script);
}

export default function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    loadGoogleAnalytics();
    loadClarity();
  }, []);

  useEffect(() => {
    if (!gaMeasurementId) return;

    trackEvent("page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
