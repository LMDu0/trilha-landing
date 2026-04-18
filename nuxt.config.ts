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
      title: 'Trilha Flow — App para eventos que continua vendendo depois',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: 'App para eventos com a cara do seu evento. Loja dos expositores, moeda própria e vídeos do público que seguem rodando depois do último dia. A gente só cobra quando você ganha. Case Fenamilho 2025.' },
        { name: 'keywords', content: 'app para eventos, app para feiras, monetizar evento, como ganhar dinheiro com evento, app personalizado para evento, aplicativo para feira agro, app para festival, app para congresso, app para convenção, gamificação em eventos, patrocínio digital, trilha flow, trilha labs' },
        { name: 'author', content: 'Trilha Labs' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },

        // Google Search Console Verification
        { name: 'google-site-verification', content: '8SjgwxegFpP_gjeOqm0UnJTSaD_ZGKQJvQrlY4yk_Bs' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trilhalabs.com.br/' },
        { property: 'og:site_name', content: 'Trilha Flow by Trilha Labs' },
        { property: 'og:title', content: 'Trilha Flow — App para eventos que continua vendendo depois' },
        { property: 'og:description', content: 'O app do seu evento com moeda própria, loja dos expositores e vídeos do público. A gente só cobra quando você ganha.' },
        { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { property: 'og:locale', content: 'pt_BR' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Trilha Flow — App para eventos que continua vendendo depois' },
        { name: 'twitter:description', content: 'O app do seu evento com moeda própria, loja dos expositores e vídeos do público. A gente só cobra quando você ganha.' },
        { name: 'twitter:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Trilha Flow — App para eventos' },

        // WhatsApp and other platforms
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Trilha Flow — App para eventos' },
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

        // Performance optimizations - Font preload (blocking for Inter, evita FOUC)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // Preload do .woff2 do Inter 500 (peso mais usado) pra já chegar no primeiro paint
        { rel: 'preload', as: 'font', type: 'font/woff2', href: 'https://fonts.gstatic.com/s/inter/v19/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2', crossorigin: 'anonymous' },
        // Stylesheet bloqueante (mas pequeno) — garante fonte certa no primeiro paint
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
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
            "description": "Criadores do Trilha Flow — o app para eventos que continua vendendo depois do último dia. Loja dos expositores, moeda própria do evento e vídeos do público. A gente só cobra quando você ganha.",
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
            "description": "App para eventos com a cara do seu evento: missões, ranking, moeda própria, loja dos expositores, vídeos do público e cotas de patrocínio com número. A gente só cobra quando você ganha.",
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
              "App do seu evento para iOS e Android, com a sua marca",
              "Missões, ranking, medalhas e sequência diária",
              "Feed com vídeos curtos feitos pelo público",
              "Moeda própria do evento e loja dentro do app",
              "Loja dos expositores vendendo antes, durante e depois",
              "Cotas de patrocínio digital com relatório de quantos viram",
              "Painel com vendas e engajamento em tempo real",
              "A gente só cobra quando você ganha"
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
                "name": "Como a Trilha Flow cobra pelo app do evento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A gente só cobra quando você ganha. Tem uma implantação (valor varia pelo porte do evento) e, depois, a gente fica com uma parte combinada sobre a receita nova gerada dentro do app: patrocínio digital, vendas dos expositores e moeda do evento. Se o app não gerar receita nova, você não paga essa parte."
                }
              },
              {
                "@type": "Question",
                "name": "O app fica com a cara do meu evento ou com a cara da Trilha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Com a cara do seu evento. Logo, cores, nome, ícone e conteúdo: tudo personalizado. O público baixa o app do seu evento e nem precisa saber que tem uma Trilha por trás."
                }
              },
              {
                "@type": "Question",
                "name": "Que tipos de evento a Trilha Flow atende?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Feiras agro, feiras de negócio e consumo, festivais, eventos corporativos (convenções, kick-offs), eventos tech (conferências, meetups, hackathons) e circuitos com volume de participantes que permite uma loja interna e cotas de patrocínio digital. A gente avalia caso a caso antes de fechar."
                }
              },
              {
                "@type": "Question",
                "name": "Quais resultados a Trilha Flow já entregou?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No case Fenamilho 2025, uma das maiores feiras agro do Sul do país, a Trilha Flow teve 3.500+ participantes ativos, 205.000 visualizações em vídeos feitos pelo próprio público, 14 sessões por participante e mais de 20.000 interações com missões e prêmios dentro do app."
                }
              },
              {
                "@type": "Question",
                "name": "Os dados do público são meus ou da Trilha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "São seus. O público é do seu evento e os dados também. A Trilha Flow só opera a plataforma, sempre dentro dos termos de uso e da LGPD."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo leva pra ter o app do meu evento no ar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A gente planeja junto com o seu time, olhando a data do evento, o número de expositores e o quanto de personalização vocês querem. Cada evento tem um prazo diferente, mas a base do app já está pronta — a gente customiza em vez de construir do zero."
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
  // NOTE: autoInjectServerSentry is intentionally disabled. The site is fully
  // prerendered (SSG), so there is no long-running server runtime to monitor.
  // Injecting Sentry at the top of the server bundle was hanging the prerender
  // for /contato (50s+ timeout → 500) when SENTRY_DSN is not available at
  // build time (e.g. Vercel builds without the env var). Client-side Sentry
  // still works via sentry.client.config.ts and dynamic imports.
  sentry: {
    sourceMapsUploadOptions: {
      org: "idealiza-studio",
      project: "trilha-labs-landing",
    },
  },

  sourcemap: {
    client: 'hidden',
  },

  // Sitemap configuration
  site: {
    url: 'https://trilhalabs.com.br',
    name: 'Trilha Flow by Trilha Labs',
    description: 'App para eventos que continua vendendo depois do último dia. A gente só cobra quando você ganha.',
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
      { loc: '/eventos/tech', priority: 0.75, changefreq: 'monthly' },
      { loc: '/eventos/corporativos', priority: 0.8, changefreq: 'monthly' },
      { loc: '/eventos/feiras', priority: 0.8, changefreq: 'monthly' },
      { loc: '/eventos/festivais', priority: 0.75, changefreq: 'monthly' },
      // Intent
      { loc: '/como-monetizar-evento', priority: 0.85, changefreq: 'monthly' },
      { loc: '/app-para-eventos', priority: 0.85, changefreq: 'monthly' },
      { loc: '/gamificacao-para-eventos', priority: 0.85, changefreq: 'monthly' },
      { loc: '/como-aumentar-receita-evento', priority: 0.85, changefreq: 'monthly' },
      { loc: '/como-engajar-publico-evento', priority: 0.8, changefreq: 'monthly' },
      { loc: '/economia-virtual-eventos', priority: 0.8, changefreq: 'monthly' },
      { loc: '/feed-social-para-eventos', priority: 0.8, changefreq: 'monthly' }
    ]
  },

  // SSG Configuration for maximum performance
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml', '/robots.txt',
        '/', '/produto', '/casos', '/precos', '/contato',
        '/para-organizadores', '/para-expositores', '/para-patrocinadores', '/para-participantes',
        '/eventos/agro', '/eventos/tech', '/eventos/corporativos', '/eventos/feiras', '/eventos/festivais',
        '/como-monetizar-evento',
        '/app-para-eventos', '/gamificacao-para-eventos', '/como-aumentar-receita-evento',
        '/como-engajar-publico-evento', '/economia-virtual-eventos', '/feed-social-para-eventos'
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
