// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@sentry/nuxt/module',
    '@nuxtjs/sitemap'
  ],

  components: {
    global: true,
    dirs: ['~/components']
  },

  app: {
    head: {
      title: 'Trilha Labs - Desenvolvimento de Software Sob Medida',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#020617' },
        { name: 'description', content: 'Desenvolvimento de aplicativos para eventos, feiras agrícolas e agronegócio. Plataformas sob medida para o setor rural, cooperativas e empresas do agro.' },
        { name: 'keywords', content: 'aplicativo para eventos agrícolas brasil, app para feiras do agro, desenvolvimento software agronegócio, aplicativo para cooperativas, plataforma eventos rurais, app para produtores rurais, software para feiras agrícolas, aplicativo agro eventos, desenvolvimento app setor rural, tecnologia para agronegócio, aplicativo para exposições agrícolas, software eventos agropecuários, app eventos campo, tecnologia rural brasil, software cooperativas agrícolas, aplicativo feira agropecuária' },
        { name: 'author', content: 'Trilha Labs' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trilhalabs.com.br' },
        { property: 'og:title', content: 'Trilha Labs - Aplicativos para Eventos Agrícolas e Agronegócio' },
        { property: 'og:description', content: 'Desenvolvimento de aplicativos para eventos, feiras agrícolas e agronegócio. Plataformas sob medida para o setor rural, cooperativas e empresas do agro.' },
        { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { property: 'og:locale', content: 'pt_BR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://trilhalabs.com.br' },
        { name: 'twitter:title', content: 'Trilha Labs - Aplicativos para Eventos Agrícolas e Agronegócio' },
        { name: 'twitter:description', content: 'Desenvolvimento de aplicativos para eventos, feiras agrícolas e agronegócio. Plataformas sob medida para o setor rural, cooperativas e empresas do agro.' },
        { name: 'twitter:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        
        // WhatsApp and other platforms
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Trilha Labs - Aplicativos para Eventos Agrícolas e Agronegócio' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon_io/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon_io/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon_io/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://trilhalabs.com.br' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trilha Labs",
            "description": "Desenvolvimento de aplicativos para eventos, feiras agrícolas e agronegócio. Plataformas sob medida para o setor rural, cooperativas e empresas do agro.",
            "url": "https://trilhalabs.com.br",
            "logo": "https://trilhalabs.com.br/og-image.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-54-98402-8606",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://wa.me/5554984028606",
              "https://vempratrilha.com.br"
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Brasil"
            },
            "knowsAbout": [
              "Desenvolvimento de Software",
              "Aplicativos Mobile",
              "Eventos Agrícolas",
              "Agronegócio",
              "Feiras Rurais",
              "Cooperativas Agrícolas"
            ]
          })
        }
      ]
    }
  },

  typescript: {
    typeCheck: false
  },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    emailServiceUrl: process.env.EMAIL_SERVICE_URL || 'https://trilha-mailer.vercel.app',
    sentryDsn: process.env.SENTRY_DSN,
    
    // Public keys (exposed to client-side)
    public: {
      mixpanelToken: process.env.MIXPANEL_TOKEN,
      sentryDsn: process.env.SENTRY_DSN
    }
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  // Sentry configuration
  sentry: {
    sourceMapsUploadOptions: {
      org: "idealiza-studio",
      project: "trilha-labs-landing",
    },
    autoInjectServerSentry: "top-level-import",
  },

  sourcemap: {
    client: 'hidden',
  },

  // Sitemap configuration
  site: {
    url: 'https://trilhalabs.com.br'
  },
  
  // Alternative domains
  alias: {
    'vempratrilha.com.br': 'trilhalabs.com.br'
  },

  // SEO optimization
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})