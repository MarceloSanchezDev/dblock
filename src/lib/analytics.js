const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function trackEvent(name, parameters = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", name);
  }
}

export function isAnalyticsEnabled() {
  return Boolean(gaMeasurementId || import.meta.env.VITE_CLARITY_PROJECT_ID);
}
