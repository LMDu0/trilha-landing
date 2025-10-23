// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
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
        { name: 'description', content: 'Desenvolvimento de aplicativos para eventos, feiras e agronegócio. Plataformas sob medida para diversos setores, cooperativas e empresas que buscam inovação digital.' },
        { name: 'keywords', content: 'desenvolvimento de aplicativos brasil, app para eventos e feiras, software sob medida, aplicativo para cooperativas, plataforma eventos, desenvolvimento mobile, aplicativo para agronegócio, software para feiras, app empresarial, tecnologia para eventos, aplicativo personalizado, desenvolvimento web, software para negócios, app para empresas, plataforma digital' },
        { name: 'author', content: 'Trilha Labs' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trilhalabs.com.br' },
        { property: 'og:title', content: 'Trilha Labs - Desenvolvimento de Software Sob Medida' },
        { property: 'og:description', content: 'Desenvolvimento de aplicativos para eventos, feiras e agronegócio. Plataformas sob medida para diversos setores, cooperativas e empresas que buscam inovação digital.' },
        { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { property: 'og:locale', content: 'pt_BR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://trilhalabs.com.br' },
        { name: 'twitter:title', content: 'Trilha Labs - Desenvolvimento de Software Sob Medida' },
        { name: 'twitter:description', content: 'Desenvolvimento de aplicativos para eventos, feiras e agronegócio. Plataformas sob medida para diversos setores, cooperativas e empresas que buscam inovação digital.' },
        { name: 'twitter:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        
        // WhatsApp and other platforms
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Trilha Labs - Aplicativos para Eventos Agrícolas e Agronegócio' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Performance & Security
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
        
        // PWA & Mobile
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Trilha Labs' },
        
        // Additional SEO
        { name: 'language', content: 'pt-BR' },
        { name: 'geo.region', content: 'BR' },
        { name: 'geo.country', content: 'Brazil' },
        { name: 'distribution', content: 'global' },
        { name: 'rating', content: 'general' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon_io/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon_io/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon_io/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://trilhalabs.com.br' },
        
        // Performance optimizations
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://trilha-mailer.vercel.app' },
        { rel: 'dns-prefetch', href: 'https://api.mixpanel.com' },
        { rel: 'dns-prefetch', href: 'https://sentry.io' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trilha Labs",
            "description": "Desenvolvimento de aplicativos para eventos, feiras e agronegócio. Plataformas sob medida para diversos setores, cooperativas e empresas que buscam inovação digital.",
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
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Trilha Labs",
            "description": "Desenvolvimento de aplicativos para eventos, feiras e agronegócio. Plataformas sob medida para diversos setores, cooperativas e empresas que buscam inovação digital.",
            "url": "https://trilhalabs.com.br",
            "logo": "https://trilhalabs.com.br/og-image.jpg",
            "image": "https://trilhalabs.com.br/og-image.jpg",
            "telephone": "+55-54-98402-8606",
            "email": "contato@trilhalabs.com.br",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressRegion": "RS"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-29.1685",
              "longitude": "-51.1795"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Brasil"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Brasil"
            },
            "priceRange": "$$",
            "currenciesAccepted": "BRL",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [
              "https://wa.me/5554984028606",
              "https://vempratrilha.com.br"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Desenvolvimento",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desenvolvimento de Aplicativos Mobile",
                    "description": "Aplicativos nativos e híbridos para iOS e Android"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sistemas Web",
                    "description": "Plataformas web responsivas e progressivas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aplicativos para Eventos Agrícolas",
                    "description": "Soluções especializadas para feiras e eventos do agronegócio"
                  }
                }
              ]
            }
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

  // SSG Configuration for maximum performance
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/']
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      }
    }
  },

  // Enable SSG mode
  ssr: true,

  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  },

  // Image optimization
  image: {
    format: ['webp', 'avif', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  // Vite optimizations for bundle size
  vite: {
    build: {
      target: 'es2020', // Modern JS target to reduce polyfills
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks
            'vendor-vue': ['vue', 'vue-router'],
            'vendor-utils': ['@vueuse/core', '@vueuse/motion'],
            'vendor-ui': ['embla-carousel', 'gsap', 'three'],
            'vendor-analytics': ['mixpanel-browser'],
          }
        }
      },
      // Reduce chunk size warning limit
      chunkSizeWarningLimit: 1000
    },
    esbuild: {
      target: 'es2020' // Also for esbuild
    }
  }
})