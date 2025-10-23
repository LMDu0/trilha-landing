import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: process.env.SENTRY_DSN || useRuntimeConfig().public.sentryDsn,
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/trilhalabs\.com\.br/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: process.env.NODE_ENV === 'development',
  environment: process.env.NODE_ENV || 'development',
});
