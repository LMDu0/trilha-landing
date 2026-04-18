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
    dirs: [
      { path: '~/components', pathPrefix: false, global: true },
      { path: '~/components/ui', pathPrefix: false, global: true }
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Trilha Flow — Event Economy Infrastructure | A infraestrutura que transforma eventos em receita',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: 'Trilha Flow é a primeira infraestrutura de economia para eventos. Gamificação, reels e marketplace interno com revenue share nativo. Todo evento é uma economia. A sua roda na Trilha. Case Fenamilho 2025: 3.500+ participantes, 205K views.' },
        { name: 'keywords', content: 'event economy infrastructure, infraestrutura para eventos, app para eventos, monetizar evento, receita de evento, gamificação eventos, marketplace evento, economia virtual eventos, revenue share eventos, app feira agro, trilha flow, app festival, app conferência, plataforma receita eventos' },
        { name: 'author', content: 'Trilha Labs' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },

        // Google Search Console Verification
        { name: 'google-site-verification', content: '8SjgwxegFpP_gjeOqm0UnJTSaD_ZGKQJvQrlY4yk_Bs' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trilhalabs.com.br/' },
        { property: 'og:site_name', content: 'Trilha Flow by Trilha Labs' },
        { property: 'og:title', content: 'Trilha Flow — Event Economy Infrastructure' },
        { property: 'og:description', content: 'A infraestrutura que transforma a atenção do seu evento em receita mensurável. Revenue share nativo. Case Fenamilho 2025.' },
        { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { property: 'og:locale', content: 'pt_BR' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Trilha Flow — Event Economy Infrastructure' },
        { name: 'twitter:description', content: 'A infraestrutura que transforma a atenção do seu evento em receita. Revenue share nativo. Case Fenamilho 2025.' },
        { name: 'twitter:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Trilha Flow - Plataforma de Engajamento para Eventos' },

        // WhatsApp and other platforms
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Trilha Flow - Event Economy Infrastructure' },
        { name: 'format-detection', content: 'telephone=no' },

        // Performance & Security
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },

        // PWA & Mobile
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Trilha Flow' },

        // Additional SEO
        { name: 'language', content: 'pt-BR' },
        { name: 'geo.region', content: 'BR-RS' },
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

        // Performance optimizations - Font preload
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'dns-prefetch', href: 'https://trilha-mailer.vercel.app' },
        { rel: 'dns-prefetch', href: 'https://api.mixpanel.com' },
        { rel: 'dns-prefetch', href: 'https://sentry.io' }
      ],
      script: [
        // Organization Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trilha Labs",
            "description": "Criadores do Trilha Flow — Event Economy Infrastructure. A infraestrutura que transforma eventos em receita mensurável.",
            "url": "https://trilhalabs.com.br",
            "logo": "https://trilhalabs.com.br/og-image.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-54-9-3503-3203",
              "contactType": "sales",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressRegion": "RS"
            },
            "sameAs": [
              "https://wa.me/555493503203",
              "https://linkedin.com/company/trilhalabs",
              "https://instagram.com/trilhalabs"
            ]
          })
        },
        // SoftwareApplication Schema — Product-focused
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Trilha Flow",
            "description": "Event Economy Infrastructure: infraestrutura que transforma a atenção do evento em receita mensurável com gamificação, reels, marketplace interno e revenue share nativo.",
            "url": "https://trilhalabs.com.br/produto",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "offerCount": 3
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "1",
              "bestRating": "5"
            },
            "featureList": [
              "App white-label iOS e Android",
              "Gamificação com missões, ranking e streaks",
              "Feed social com reels",
              "Economia virtual com moedas e loja",
              "Marketplace interno de expositores",
              "Cotas digitais segmentadas de patrocínio",
              "Dashboard de receita em tempo real",
              "Revenue share nativo"
            ],
            "author": {
              "@type": "Organization",
              "name": "Trilha Labs"
            }
          })
        },
        // Review Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Trilha Flow",
              "url": "https://trilhalabs.com.br"
            },
            "author": {
              "@type": "Person",
              "name": "Junior Moro",
              "jobTitle": "Sócio",
              "affiliation": {
                "@type": "Organization",
                "name": "Belif Marketing"
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente que fala bonito, mas na hora do 'vamos ver'... desaparece. Com a Trilha foi diferente desde o começo. Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece que eles realmente se importam com o resultado, não só com entregar o trabalho contratado. A comunicação sempre foi clara, rápida, direta. O app saiu do papel com qualidade, velocidade e atenção aos detalhes. Trabalho impecável!",
            "datePublished": "2025-03-15"
          })
        },
        // FAQ Schema — Product-focused
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Como funciona o modelo de revenue share da Trilha Flow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trilha Flow opera em modelo de revenue share: você paga setup (calibrado por porte do evento) e take rate sobre receita nova gerada dentro do app (patrocínio digital, marketplace de expositores, economia virtual). Se não gerar receita pela Trilha, não paga take rate."
                }
              },
              {
                "@type": "Question",
                "name": "O Trilha Flow é um app white-label?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Trilha Flow é completamente white-label: marca, cores, nome, ícone e conteúdo com a identidade do seu evento. Os participantes veem o app do evento, não o nosso."
                }
              },
              {
                "@type": "Question",
                "name": "O Trilha Flow serve para qualquer tipo de evento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A plataforma foi desenhada para eventos onde faz sentido criar economia digital: feiras, festivais, conferências, eventos corporativos e circuitos com volume de participantes que viabiliza marketplace, cotas digitais e economia virtual. A fit é discutida caso a caso na projeção."
                }
              },
              {
                "@type": "Question",
                "name": "Quais resultados a Trilha Flow já entregou?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No case Fenamilho 2025, a Trilha Flow alcançou 3.500+ participantes ativos, 205.000 visualizações em reels, 14 sessões por usuário e mais de 20.000 interações gamificadas dentro do app."
                }
              },
              {
                "@type": "Question",
                "name": "Quem é o dono dos dados gerados no evento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O organizador. Os dados do evento pertencem ao cliente. A Trilha Flow é a infraestrutura que opera sobre esses dados com termos de uso claros e em conformidade com a LGPD."
                }
              }
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
    emailServiceUrl: process.env.EMAIL_SERVICE_URL || 'https://trilha-mailer.vercel.app',
    sentryDsn: process.env.SENTRY_DSN,
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
    url: 'https://trilhalabs.com.br',
    name: 'Trilha Flow by Trilha Labs',
    description: 'Event Economy Infrastructure — infraestrutura que transforma eventos em receita mensurável',
    defaultLocale: 'pt-BR'
  },

  sitemap: {
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/produto', priority: 0.9, changefreq: 'monthly' },
      { loc: '/casos', priority: 0.8, changefreq: 'monthly' },
      { loc: '/precos', priority: 0.9, changefreq: 'monthly' },
      { loc: '/contato', priority: 0.7, changefreq: 'monthly' },
      // Stakeholders
      { loc: '/para-organizadores', priority: 0.85, changefreq: 'monthly' },
      { loc: '/para-expositores', priority: 0.8, changefreq: 'monthly' },
      { loc: '/para-patrocinadores', priority: 0.8, changefreq: 'monthly' },
      { loc: '/para-participantes', priority: 0.7, changefreq: 'monthly' },
      // Segments
      { loc: '/eventos/agro', priority: 0.8, changefreq: 'monthly' },
      // Intent
      { loc: '/como-monetizar-evento', priority: 0.85, changefreq: 'monthly' }
    ]
  },

  // SSG Configuration for maximum performance
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml', '/robots.txt',
        '/', '/produto', '/casos', '/precos', '/contato',
        '/para-organizadores', '/para-expositores', '/para-patrocinadores', '/para-participantes',
        '/eventos/agro',
        '/como-monetizar-evento'
      ]
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      },
      '/sitemap.xml': {
        headers: {
          'Content-Type': 'application/xml'
        }
      }
    }
  },

  // Enable SSR mode
  ssr: true,

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
    },
    densities: [1, 2],
    domains: ['www.trilhalabs.com.br', 'trilhalabs.com.br']
  },

  // CSS optimization
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? {
        cssnano: {
          preset: ['default', {
            discardComments: { removeAll: true },
            minifyFontValues: { removeQuotes: false }
          }]
        }
      } : {})
    }
  },

  // Vite optimizations
  vite: {
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router'],
            'vendor-utils': ['@vueuse/core', '@vueuse/motion'],
            'vendor-ui': ['embla-carousel', 'gsap', 'three'],
            'vendor-analytics': ['mixpanel-browser'],
          }
        }
      },
      chunkSizeWarningLimit: 1000
    },
    esbuild: {
      target: 'es2020'
    }
  }
})
