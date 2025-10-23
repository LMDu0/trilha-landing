import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: process.env.SENTRY_DSN || useRuntimeConfig().sentryDsn,
  tracesSampleRate: 1.0,
  debug: process.env.NODE_ENV === 'development',
  environment: process.env.NODE_ENV || 'development',
  release: process.env.SENTRY_RELEASE || 'trilha-labs@1.0.0',
});
