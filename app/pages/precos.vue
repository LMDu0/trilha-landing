<template>
  <div class="bg-white">

    <!-- Hero -->
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 max-w-4xl mx-auto mb-6">
          A gente só cobra<br />
          <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">quando você ganha.</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Você não paga nada antes. Quando o app começa a gerar receita nova pro seu evento — com patrocínio, vendas dos expositores ou moeda interna — a gente fica com uma parte combinada. Simples assim.
        </p>
      </div>
    </section>

    <!-- Plans grid -->
    <section class="pb-20 md:pb-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="(plan, i) in plans" :key="plan.name"
               class="relative p-7 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col"
               :class="plan.featured
                 ? 'bg-slate-950 text-white border-slate-900 shadow-2xl shadow-slate-900/10 md:scale-[1.02]'
                 : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5'">
            <div v-if="plan.featured" class="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500 text-white text-xs font-medium">
              Mais adotado
            </div>
            <div class="mb-6">
              <div class="text-2xl font-semibold tracking-tight mb-2" :class="plan.featured ? 'text-white' : 'text-slate-900'">
                {{ plan.name }}
              </div>
              <p class="text-sm leading-snug" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">
                {{ plan.tagline }}
              </p>
            </div>

            <div class="mb-6 pb-6 border-b" :class="plan.featured ? 'border-white/10' : 'border-slate-100'">
              <div class="flex items-baseline gap-1 mb-1">
                <span class="text-sm" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">{{ plan.setupLabel }}</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-semibold tracking-tight" :class="plan.featured ? 'text-white' : 'text-slate-900'">{{ plan.setupPrice }}</span>
                <span class="text-sm" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">{{ plan.setupSuffix }}</span>
              </div>
              <div class="mt-3 text-sm" :class="plan.featured ? 'text-violet-300' : 'text-violet-600'">
                + {{ plan.takeRate }} sobre receita nova gerada
              </div>
            </div>

            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-3 text-sm">
                <svg class="w-4 h-4 mt-0.5 shrink-0"
                     :class="plan.featured ? 'text-violet-300' : 'text-violet-600'"
                     fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span :class="plan.featured ? 'text-slate-200' : 'text-slate-700'">{{ feat }}</span>
              </li>
            </ul>

            <NuxtLink to="/contato"
                      class="inline-flex items-center justify-center gap-2 font-medium px-5 py-3 rounded-full transition-all duration-200"
                      :class="plan.featured
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : 'bg-slate-900 text-white hover:bg-slate-800'">
              {{ plan.cta }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How revenue share works -->
    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-5">
              Três formas novas<br />
              <span class="text-slate-400">de ganhar dinheiro.</span>
            </h2>
            <p class="text-slate-600 leading-relaxed">
              A gente cobra uma parte sobre cada uma delas — só depois que o dinheiro entra. Esse modelo funciona
              porque o app <strong class="text-slate-900">continua trabalhando pro seu evento o ano inteiro</strong>,
              não só nos dias da feira. Você paga enquanto a gente entrega, nunca antes.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(src, idx) in revenueSources" :key="src.title"
                 class="p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-baseline justify-between mb-5">
                <div class="text-slate-300 font-mono text-sm">0{{ idx + 1 }}</div>
                <div class="text-xs font-medium px-2 py-1 rounded-md bg-violet-50 border border-violet-100 text-violet-700">{{ src.rate }}</div>
              </div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">{{ src.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-4">{{ src.description }}</p>
              <div class="pt-4 border-t border-slate-100 text-xs text-slate-500">
                <div>Calibrado por evento, setor e volume.</div>
              </div>
            </div>
          </div>

          <!-- Callout -->
          <div class="mt-10 p-8 md:p-10 rounded-2xl bg-slate-950 text-white">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Rodamos a projeção<br />pro seu evento.</h3>
                <p class="text-sm text-slate-400">Com o seu público, setor e formato, modelamos setup + take rate que faça sentido pros dois lados.</p>
              </div>
              <div>
                <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
                  Agendar projeção
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-12 text-center">Perguntas frequentes</h2>
          <div class="space-y-3">
            <details v-for="faq in faqs" :key="faq.q"
                     class="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-md open:shadow-slate-900/5 transition-shadow">
              <summary class="flex items-center justify-between cursor-pointer list-none gap-4">
                <span class="font-medium text-slate-900 tracking-tight">{{ faq.q }}</span>
                <svg class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p class="mt-4 text-sm text-slate-600 leading-relaxed">{{ faq.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="pb-24 pt-4">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Rodamos a projeção do seu evento.</h2>
            <p class="text-slate-400 mb-8 max-w-xl mx-auto">Em 30 min entregamos um modelo de receita customizado para o seu público, setor e tamanho.</p>
            <NuxtLink to="/contato"
                      class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Agendar projeção
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Preços — Trilha Flow | A gente só cobra quando você ganha',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/precos' }
  ],
  meta: [
    { name: 'description', content: 'Sem mensalidade vazia, sem investimento inicial perdido. A Trilha Flow cobra uma implantação e fica com uma parte da receita nova que o app gerar pro seu evento.' },
    { property: 'og:title', content: 'Trilha Flow — A gente só cobra quando você ganha' },
    { property: 'og:description', content: 'Sem mensalidade vazia. A gente fica com uma parte da receita nova que o app gerar pro seu evento.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/precos' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://trilhalabs.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Preços', item: 'https://trilhalabs.com.br/precos' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como funciona o "só cobra quando ganha"?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Você paga uma implantação (o valor varia pelo tamanho do evento) e, depois, só uma parte combinada sobre a receita nova que o app gerar: patrocínio digital, vendas dos expositores e moeda do evento. Se o app não gerar receita nova, você não paga essa parte.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo leva pra começar a rodar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A gente planeja junto com o seu time, olhando a data do evento, quantos expositores e o quanto de personalização vocês querem. Cada evento tem um prazo diferente.'
            }
          },
          {
            '@type': 'Question',
            name: 'O app tem a minha marca ou a marca da Trilha?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A sua marca. Logo, cores, nome, ícone e conteúdo com a cara do seu evento. O público nem sabe que tem uma Trilha por trás.'
            }
          },
          {
            '@type': 'Question',
            name: 'Os dados do público são meus ou da Trilha?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'São seus. O público é do seu evento e os dados também. A Trilha só opera a plataforma, sempre dentro dos termos de uso e da LGPD.'
            }
          }
        ]
      })
    }
  ]
})

const plans = [
  {
    name: 'Starter',
    tagline: 'Pra eventos menores que querem testar o modelo.',
    setupLabel: 'Implantação',
    setupPrice: 'Sob consulta',
    setupSuffix: '',
    takeRate: 'Parte da receita nova',
    features: [
      'App do seu evento (iOS + Android) com a sua marca',
      'Missões, ranking e moeda do evento',
      'Feed social com vídeos do público',
      'Loja dentro do app',
      'Cotas de patrocínio digital',
      'Suporte durante o evento'
    ],
    cta: 'Quero saber mais',
    featured: false
  },
  {
    name: 'Growth',
    tagline: 'Pra feiras e eventos médios que querem faturar mais.',
    setupLabel: 'Implantação',
    setupPrice: 'Sob consulta',
    setupSuffix: '',
    takeRate: 'Parte da receita nova',
    features: [
      'Tudo do Starter',
      'Marketplace completo dos expositores (com pagamento)',
      'Cotas de patrocínio com relatório de resultado',
      'Painel com a receita do evento em tempo real',
      'Missões patrocinadas',
      'Pessoa dedicada pra te ajudar'
    ],
    cta: 'Agendar conversa',
    featured: true
  },
  {
    name: 'Enterprise',
    tagline: 'Pra grandes feiras, festivais e circuitos de eventos.',
    setupLabel: 'Implantação',
    setupPrice: 'Sob consulta',
    setupSuffix: '',
    takeRate: 'Parte da receita nova',
    features: [
      'Tudo do Growth',
      'Infraestrutura dedicada e garantia de disponibilidade',
      'Vários eventos sob a mesma conta',
      'Divulgação conjunta com a Trilha',
      'Modelo de cobrança customizado',
      'Prioridade nas novidades do app'
    ],
    cta: 'Falar com o time',
    featured: false
  }
]

const revenueSources = [
  {
    rate: 'Parte da receita',
    title: 'Patrocínio dentro do app',
    description: 'Banner, notificação, missão patrocinada, quiz de marca. São cotas que antes da Trilha nem existiam. A gente fica com uma parte do que o seu evento cobrar nessas cotas novas.'
  },
  {
    rate: 'Parte da receita',
    title: 'Vendas dos expositores',
    description: 'Cada venda que um expositor fecha pelo app — seja durante a feira, seja um mês depois — passa pela plataforma. Você combina uma taxa com o expositor, e a gente fica com uma parte.'
  },
  {
    rate: 'Parte da receita',
    title: 'Moeda do evento',
    description: 'Quando o público compra moeda virtual pra usar na loja ou com expositores, a gente fica com uma pequena parte da transação. Dinheiro que antes não existia.'
  }
]

const faqs = [
  {
    q: 'Como funciona o "só cobra quando ganha"?',
    a: 'Você paga uma implantação (o valor varia pelo tamanho do evento) e, depois, só uma parte combinada sobre a receita nova que o app gerar — patrocínio digital, vendas dos expositores e moeda do evento. Se o app não gerar receita nova, você não paga essa parte.'
  },
  {
    q: 'Quanto tempo leva pra começar a rodar?',
    a: 'A gente planeja junto com o seu time, olhando a data do evento, quantos expositores e o quanto de personalização vocês querem. Cada evento tem um prazo diferente.'
  },
  {
    q: 'A Trilha escolhe os patrocinadores do meu evento?',
    a: 'Não. Quem decide preço, quem entra e o que vende é você. A gente só entrega a ferramenta que permite vender cotas digitais que antes não existiam.'
  },
  {
    q: 'O app tem a minha marca ou a marca da Trilha?',
    a: 'A sua marca. Logo, cores, nome, ícone, conteúdo — tudo como se fosse o seu próprio app. O público nem sabe que tem uma Trilha por trás.'
  },
  {
    q: 'Os dados do público são meus ou da Trilha?',
    a: 'São seus. O público é do seu evento e os dados também. A Trilha só opera a plataforma, sempre dentro dos termos de uso e da LGPD.'
  }
]
</script>
