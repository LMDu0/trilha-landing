import * as Sentry from "@sentry/nuxt";

// Only initialize Sentry in production to reduce dev bundle size
const sentryDsn = process.env.SENTRY_DSN || (typeof useRuntimeConfig === 'function' ? useRuntimeConfig().public.sentryDsn : '');

if (process.env.NODE_ENV === 'production' && sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    integrations: [
      Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 0.5, // Reduced from 1.0 to lower performance overhead
    tracePropagationTargets: [/^https:\/\/trilhalabs\.com\.br/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: false,
    environment: 'production',
    release: process.env.SENTRY_RELEASE || 'trilha-labs@1.0.0',
  });
}
