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
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Desenvolvimento de Apps para Eventos e Agronegócio | Trilha Labs',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#020617' },
        { name: 'description', content: 'Desenvolvimento de aplicativos mobile para eventos, feiras e agronegócio. Apps nativos iOS e Android, plataformas web e software sob medida. Cases de sucesso com +3.500 usuários e 14 sessões por usuário.' },
        { name: 'keywords', content: 'desenvolvimento de aplicativos para eventos, app para feiras agrícolas, software para agronegócio, aplicativo para eventos rurais, desenvolvimento mobile brasil, app nativo ios android, plataforma para feiras, aplicativo para cooperativas, software eventos agrícolas, desenvolvimento app sob medida, tecnologia eventos, gamificação eventos, aplicativo fenamilho' },
        { name: 'author', content: 'Trilha Labs' },
        { name: 'robots', content: 'index, follow' },
        
        // Google Search Console Verification
        { name: 'google-site-verification', content: '8SjgwxegFpP_gjeOqm0UnJTSaD_ZGKQJvQrlY4yk_Bs' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trilhalabs.com.br/' },
        { property: 'og:site_name', content: 'Trilha Labs' },
        { property: 'og:title', content: 'Desenvolvimento de Apps para Eventos e Agronegócio | Trilha Labs' },
        { property: 'og:description', content: 'Aplicativos mobile nativos iOS e Android para eventos, feiras agrícolas e cooperativas. Cases de sucesso com +3.500 usuários ativos e 205.000 visualizações.' },
        { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { property: 'og:locale', content: 'pt_BR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://trilhalabs.com.br/' },
        { name: 'twitter:title', content: 'Desenvolvimento de Apps para Eventos e Agronegócio | Trilha Labs' },
        { name: 'twitter:description', content: 'Aplicativos mobile nativos para eventos, feiras agrícolas e cooperativas. Cases de sucesso com resultados comprovados.' },
        { name: 'twitter:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Trilha Labs - Desenvolvimento de Aplicativos para Eventos e Agronegócio' },
        
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
        { rel: 'canonical', href: 'https://trilhalabs.com.br/' },
        
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
        // Google Tag (gtag.js)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-17879031650',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17879031650');
          `
        },
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
              "telephone": "+55-54-9-3503-3203",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://wa.me/555493503203",
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
            "telephone": "+55-54-9-3503-3203",
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
              "https://wa.me/555493503203",
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
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Serviços de Desenvolvimento de Software da Trilha Labs",
            "description": "Lista completa de serviços oferecidos pela Trilha Labs",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#aplicativos-mobile",
                  "name": "Desenvolvimento de Aplicativos Mobile",
                  "description": "Desenvolvimento de apps nativos para Android e iOS personalizados para seu negócio, com foco em performance e experiência do usuário.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#eventos-feiras",
                  "name": "Aplicativos para Eventos e Feiras",
                  "description": "Soluções completas para eventos, feiras rurais e agronegócio com agenda, notícias, gamificação e analytics em tempo real.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Organizadores de eventos, cooperativas agrícolas, feiras do agronegócio"
                  },
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#web-development",
                  "name": "Engenharia Web",
                  "description": "Web apps, landing pages e sistemas web responsivos e performáticos com tecnologias modernas.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#ecommerce",
                  "name": "E-commerce & Marketplace",
                  "description": "Plataformas de vendas online, marketplaces e gateways de pagamento integrados.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#integracoes",
                  "name": "Integrações de Sistemas",
                  "description": "Conectamos sistemas e APIs para automatizar processos e otimizar fluxos de trabalho empresariais.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#ia-automacao",
                  "name": "IA & Automação",
                  "description": "Soluções com inteligência artificial e automação de tarefas para aumentar produtividade.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 7,
                "item": {
                  "@type": "Service",
                  "@id": "https://trilhalabs.com.br#consultoria",
                  "name": "Consultoria Tecnológica",
                  "description": "Análise estratégica e planejamento de projetos tecnológicos para crescimento do seu negócio.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Trilha Labs"
                  },
                  "areaServed": "Brasil",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://trilhalabs.com.br",
                    "servicePhone": "+55-54-9-3503-3203"
                  }
                }
              }
            ]
          })
        },
        // Review Schema - Depoimento do Junior Moro
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Trilha Labs",
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
            "reviewBody": "Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente que fala bonito, mas na hora do 'vamos ver'... desaparece. Com a Trilha foi diferente desde o começo. Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece que eles realmente se importam com o resultado, não só com entregar o trabalho contratado. A comunicação sempre foi clara, rápida, direta. O app saiu do papel com qualidade, velocidade e atenção aos detalhes. Zero reclamações ou consideração. Trabalho impecável! Foi uma experiência muito boa e com certeza continuaremos como clientes em outros projetos!",
            "datePublished": "2025-03-15",
            "publisher": {
              "@type": "Organization",
              "name": "Trilha Labs"
            }
          })
        },
        // FAQ Schema - Perguntas Frequentes
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto tempo leva para desenvolver um aplicativo mobile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O desenvolvimento de um aplicativo mobile leva em média de 2 a 3 meses. Na Trilha Labs, trabalhamos com metodologia ágil para entregas incrementais, permitindo que você acompanhe o progresso e receba feedback contínuo durante todo o processo."
                }
              },
              {
                "@type": "Question",
                "name": "Vocês desenvolvem apps para eventos e feiras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Somos especializados em aplicativos para eventos, feiras agrícolas e agronegócio. Desenvolvemos soluções completas que incluem agenda do evento, central de notícias, mapas interativos, gamificação, sistema de anúncios para patrocinadores, push notifications e painel administrativo. Nosso case de sucesso é o aplicativo da Fenamilho 2025, que alcançou mais de 3.500 usuários ativos."
                }
              },
              {
                "@type": "Question",
                "name": "Os aplicativos são nativos ou híbridos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Desenvolvemos aplicativos nativos para iOS e Android, garantindo máxima performance, experiência do usuário otimizada e acesso completo aos recursos do dispositivo. Também trabalhamos com soluções híbridas quando apropriado para o projeto, sempre priorizando qualidade e performance."
                }
              },
              {
                "@type": "Question",
                "name": "Qual o custo para desenvolver um aplicativo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O investimento varia conforme o escopo do projeto, funcionalidades desejadas, complexidade técnica e prazos. Oferecemos orçamentos personalizados após entender as necessidades específicas do seu negócio. Entre em contato conosco pelo WhatsApp (54) 9 3503-3203 para uma consulta gratuita e orçamento detalhado."
                }
              },
              {
                "@type": "Question",
                "name": "Vocês oferecem suporte após o lançamento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Oferecemos suporte contínuo, manutenção, atualizações e melhorias após o lançamento. Nosso compromisso é garantir que seu aplicativo continue funcionando perfeitamente e evoluindo conforme as necessidades do seu negócio crescem."
                }
              },
              {
                "@type": "Question",
                "name": "Trabalham com cooperativas e empresas do agronegócio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Temos experiência específica com cooperativas agrícolas, empresas do agronegócio, feiras rurais e eventos do setor. Entendemos as particularidades desse mercado e desenvolvemos soluções que atendem as necessidades específicas do agronegócio brasileiro."
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
    url: 'https://trilhalabs.com.br',
    name: 'Trilha Labs',
    description: 'Desenvolvimento de aplicativos para eventos, feiras e agronegócio',
    defaultLocale: 'pt-BR'
  },
  
  sitemap: {
    defaults: {
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString()
    }
  },

  // SSG Configuration for maximum performance
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt', '/']
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      },
      // Ensure sitemap is always accessible
      '/sitemap.xml': {
        headers: {
          'Content-Type': 'application/xml'
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


  // Image optimization - Disabled IPX for SVGs
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