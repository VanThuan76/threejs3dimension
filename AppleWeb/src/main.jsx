import * as Sentry from "@sentry/react";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

Sentry.init({
  dsn: "https://6c828f97d9e53f3c0e7bf640a3787f29@o4507741808623616.ingest.de.sentry.io/4507741810982992",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
