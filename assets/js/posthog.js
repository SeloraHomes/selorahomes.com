// PostHog Analytics
import posthog from "posthog-js";

// Read config from meta tags
const getMetaContent = (name) =>
  document.querySelector(`meta[name="${name}"]`)?.content;

const apiKey = getMetaContent("posthog:api-key");
const apiHost = getMetaContent("posthog:api-host");
const uiHost = getMetaContent("posthog:ui-host");
const enableDev = getMetaContent("posthog:enable-dev") === "true";
const respectDnt = getMetaContent("posthog:respect-dnt") === "true";

// Only initialize if API key exists and (production or dev enabled)
const isDevelopment = window.location.hostname === "localhost";
const shouldInit = apiKey && (!isDevelopment || enableDev);

if (shouldInit) {
  const config = {
    api_host: apiHost,
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    cross_subdomain_cookie: true,
    cookie_domain: ".selorahomes.com",
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "*",
    },
  };

  if (uiHost) {
    config.ui_host = uiHost;
  }

  if (respectDnt) {
    config.respect_dnt = true;
  }

  posthog.init(apiKey, config);

  // Expose globally for console testing
  window.posthog = posthog;
}

export default posthog;
