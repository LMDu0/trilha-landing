<template>
  <ClientOnly>
    <Head>
    <!-- Breadcrumb Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://trilhalabs.com.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Serviços",
            "item": "https://trilhalabs.com.br#servicos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cases",
            "item": "https://trilhalabs.com.br#cases"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contato",
            "item": "https://trilhalabs.com.br#contact"
          }
        ]
      }
    </script>

    <!-- FAQ Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Que tipo de aplicativos a Trilha Labs desenvolve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Desenvolvemos aplicativos mobile nativos e híbridos, sistemas web, plataformas para eventos agrícolas, soluções para cooperativas e empresas do agronegócio."
            }
          },
          {
            "@type": "Question",
            "name": "A Trilha Labs atende todo o Brasil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, atendemos clientes em todo o território brasileiro, com especialização em soluções para o agronegócio e eventos rurais."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo leva para desenvolver um aplicativo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O prazo varia conforme a complexidade do projeto, mas geralmente entre 2 a 6 meses para aplicativos completos. Fazemos uma análise detalhada antes de definir cronogramas."
            }
          },
          {
            "@type": "Question",
            "name": "A Trilha Labs oferece suporte após o lançamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, oferecemos suporte técnico contínuo, manutenção, atualizações e melhorias para garantir que sua solução continue funcionando perfeitamente."
            }
          }
        ]
      }
    </script>

    <!-- WebSite Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Trilha Labs",
        "url": "https://trilhalabs.com.br",
        "description": "Desenvolvimento de aplicativos para eventos, feiras agrícolas e agronegócio",
        "publisher": {
          "@type": "Organization",
          "name": "Trilha Labs"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://trilhalabs.com.br/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    </script>
    </Head>
  </ClientOnly>
</template>

<script setup lang="ts">
// This component adds additional SEO structured data
</script>
