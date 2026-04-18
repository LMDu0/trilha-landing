<template>
  <div class="bg-white">

    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 max-w-4xl mx-auto mb-6">
          Preço fixo.<br />
          <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Receita 100% sua.</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Você escolhe o plano, a gente entrega o app. O que seu evento faturar — patrocínio, expositores, moeda interna — é todo seu. Sem porcentagem, sem surpresa.
        </p>
      </div>
    </section>

    <!-- Billing toggle -->
    <section class="pb-10">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="flex justify-center">
          <div class="inline-flex items-center p-1 rounded-full border border-slate-200 bg-slate-50">
            <button
              type="button"
              @click="billing = 'yearly'"
              class="relative px-5 py-2 rounded-full text-sm font-medium transition-all"
              :class="billing === 'yearly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
            >
              Anual
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-100 text-violet-700">
                2 meses grátis
              </span>
            </button>
            <button
              type="button"
              @click="billing = 'monthly'"
              class="px-5 py-2 rounded-full text-sm font-medium transition-all"
              :class="billing === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
            >
              Mensal
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans grid -->
    <section class="pb-20 md:pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="plan in plans" :key="plan.name"
               class="relative p-7 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col"
               :class="plan.featured
                 ? 'bg-slate-950 text-white border-slate-900 shadow-2xl shadow-slate-900/10 md:scale-[1.02]'
                 : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5'">
            <div v-if="plan.featured" class="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500 text-white text-xs font-medium">
              Mais escolhido
            </div>

            <div class="mb-6">
              <div class="text-2xl font-semibold tracking-tight mb-2" :class="plan.featured ? 'text-white' : 'text-slate-900'">
                {{ plan.name }}
              </div>
              <p class="text-sm leading-snug" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">
                {{ plan.tagline }}
              </p>
            </div>

            <!-- Price block -->
            <div class="mb-6 pb-6 border-b" :class="plan.featured ? 'border-white/10' : 'border-slate-100'">
              <!-- Setup (Próprio only) -->
              <div v-if="plan.setup" class="mb-4">
                <div class="text-xs uppercase tracking-wide mb-1" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">
                  Implantação (única)
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-semibold tracking-tight" :class="plan.featured ? 'text-white' : 'text-slate-900'">
                    R$ {{ billing === 'yearly' ? plan.setup.yearly : plan.setup.monthly }}
                  </span>
                  <span v-if="billing === 'yearly' && plan.setup.savings" class="text-xs font-medium px-2 py-0.5 rounded-md"
                        :class="plan.featured ? 'bg-violet-500/20 text-violet-200' : 'bg-violet-50 text-violet-700'">
                    −R$ {{ plan.setup.savings }} no anual
                  </span>
                </div>
              </div>

              <!-- Recurring -->
              <div>
                <div v-if="plan.setup" class="text-xs uppercase tracking-wide mb-1" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">
                  + manutenção
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-semibold tracking-tight" :class="plan.featured ? 'text-white' : 'text-slate-900'">
                    R$ {{ billing === 'yearly' ? plan.price.yearly : plan.price.monthly }}
                  </span>
                  <span class="text-sm" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">/mês</span>
                </div>
                <div class="mt-2 text-xs" :class="plan.featured ? 'text-slate-400' : 'text-slate-500'">
                  <template v-if="billing === 'yearly'">
                    cobrado R$ {{ plan.price.yearlyTotal }}/ano · economize R$ {{ plan.price.savings }}
                  </template>
                  <template v-else>
                    cancele quando quiser
                  </template>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2 text-sm" :class="plan.featured ? 'text-violet-300' : 'text-violet-600'">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>100% da receita fica com você</span>
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

        <!-- Reassurance row -->
        <div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <svg class="w-5 h-5 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <div class="font-medium text-slate-900">Zero porcentagem</div>
              <div class="text-slate-500">Patrocínio, expositor, moeda. Receita é toda sua.</div>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <svg class="w-5 h-5 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <div>
              <div class="font-medium text-slate-900">Sobe rápido</div>
              <div class="text-slate-500">Essencial em 7 dias. Cresce em 3 semanas.</div>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <svg class="w-5 h-5 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <div>
              <div class="font-medium text-slate-900">Cancele quando quiser</div>
              <div class="text-slate-500">No mensal, sem multa. No anual, sem renovação automática.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to choose -->
    <section class="py-20 md:py-24 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="max-w-3xl mb-12">
            <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-5">
              Como escolher<br />
              <span class="text-slate-400">entre os três.</span>
            </h2>
            <p class="text-slate-600 leading-relaxed">
              A diferença é o quanto o app vai ter a cara do seu evento.
              Essencial e Cresce rodam dentro do app da Trilha. Próprio é um app seu, publicado nas lojas com o nome do seu evento.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-slate-300 font-mono text-sm mb-5">01</div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">Essencial</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-4">
                Seu evento roda dentro do app da Trilha, com a sua marca e o seu conteúdo. Público baixa um app só (Trilha) e encontra o seu evento lá dentro.
              </p>
              <div class="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Ideal pra feiras regionais e eventos até 5 mil pessoas.
              </div>
            </div>

            <div class="p-7 rounded-2xl border border-violet-200 bg-white ring-1 ring-violet-100">
              <div class="text-violet-300 font-mono text-sm mb-5">02</div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">Cresce</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-4">
                Ainda dentro do app da Trilha, mas com personalização total — telas próprias, fluxos do seu jeito, integrações com o que você já usa. Pessoa dedicada do nosso lado.
              </p>
              <div class="pt-4 border-t border-violet-50 text-xs text-violet-700">
                Ideal pra feiras e eventos de 5 a 30 mil pessoas.
              </div>
            </div>

            <div class="p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-slate-300 font-mono text-sm mb-5">03</div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">Próprio</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-4">
                App dedicado, publicado na App Store e Play Store com o nome do seu evento. Público baixa o seu app, com o seu ícone. Trilha fica invisível.
              </p>
              <div class="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Ideal pra eventos grandes, circuitos e marcas fortes.
              </div>
            </div>
          </div>

          <!-- Callout -->
          <div class="mt-10 p-8 md:p-10 rounded-2xl bg-slate-950 text-white">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Na dúvida,<br />a gente calcula junto.</h3>
                <p class="text-sm text-slate-400">Em 30 min a gente olha pro seu evento e diz qual plano faz sentido. Sem compromisso, sem venda forçada.</p>
              </div>
              <div>
                <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
                  Agendar conversa
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 md:py-24">
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
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Fica mais fácil conversando.</h2>
            <p class="text-slate-400 mb-8 max-w-xl mx-auto">Em 30 min a gente entende seu evento e te diz qual plano cabe. E o quanto o app pode faturar pra você.</p>
            <NuxtLink to="/contato"
                      class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Agendar conversa
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Billing = 'yearly' | 'monthly'
const billing = ref<Billing>('yearly')

interface Plan {
  name: string
  tagline: string
  featured: boolean
  cta: string
  setup?: {
    monthly: string
    yearly: string
    savings: string
  }
  price: {
    monthly: string
    yearly: string
    yearlyTotal: string
    savings: string
  }
  features: string[]
}

const plans: Plan[] = [
  {
    name: 'Essencial',
    tagline: 'Seu evento dentro do app da Trilha, com a sua marca.',
    featured: false,
    cta: 'Começar com o Essencial',
    price: {
      monthly: '390',
      yearly: '325',
      yearlyTotal: '3.900',
      savings: '780'
    },
    features: [
      'App da Trilha com a sua marca (logo, cores, conteúdo)',
      'Missões, ranking e moeda do evento',
      'Feed social com vídeos do público',
      'Loja dentro do app',
      'Cotas de patrocínio digital',
      'Suporte por WhatsApp durante o evento'
    ]
  },
  {
    name: 'Cresce',
    tagline: 'Personalização total, ainda dentro do app da Trilha.',
    featured: true,
    cta: 'Escolher o Cresce',
    price: {
      monthly: '1.290',
      yearly: '1.075',
      yearlyTotal: '12.900',
      savings: '2.580'
    },
    features: [
      'Tudo do Essencial',
      'Telas e fluxos personalizados pro seu evento',
      'Marketplace completo dos expositores',
      'Cotas de patrocínio com relatório de resultado',
      'Painel com a receita do evento em tempo real',
      'Missões patrocinadas e integrações',
      'Pessoa dedicada pra te acompanhar'
    ]
  },
  {
    name: 'Próprio',
    tagline: 'App dedicado nas lojas, com o nome do seu evento.',
    featured: false,
    cta: 'Conversar sobre o Próprio',
    setup: {
      monthly: '38.000',
      yearly: '36.000',
      savings: '2.000'
    },
    price: {
      monthly: '1.900',
      yearly: '1.583',
      yearlyTotal: '18.996',
      savings: '3.804'
    },
    features: [
      'Tudo do Cresce',
      'App publicado na App Store e Play Store com o seu nome',
      'Ícone, splash e identidade 100% do evento',
      'Vários eventos sob a mesma conta',
      'Suporte prioritário',
      'Prioridade nas novidades da plataforma'
    ]
  }
]

const faqs = [
  {
    q: 'A Trilha fica com alguma porcentagem da minha receita?',
    a: 'Não. Você paga o plano e pronto. Patrocínio, vendas dos expositores, moeda do evento — 100% dessa receita fica com você.'
  },
  {
    q: 'Qual a economia do plano anual?',
    a: 'No anual você paga 10 meses e usa 12 — ou seja, 2 meses grátis. Economia de R$ 780 no Essencial, R$ 2.580 no Cresce e R$ 3.804 no Próprio. No Próprio ainda tem R$ 2.000 de desconto na implantação quando fecha anual.'
  },
  {
    q: 'E se meu evento acontece só uma vez por ano? Vale mensalidade?',
    a: 'Vale, e muito. O app fica ativo o ano todo pra manter a audiência que seu evento construiu — pré-venda do próximo, conteúdo de bastidor, reengajamento. Quem tenta "usar só no dia" perde a parte mais valiosa, que é chegar na próxima edição com público aquecido.'
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Pode. No mensal, cancela no mês e para. No anual, o plano vai até o fim do período contratado e não renova automático se você não quiser. Sem multa, sem burocracia.'
  },
  {
    q: 'Posso mudar de plano depois?',
    a: 'Pode, a qualquer momento. Upgrade do Essencial pro Cresce é imediato. Do Cresce pro Próprio envolve publicação nas lojas (leva 3 a 5 semanas). Seu conteúdo e seu público vão junto.'
  },
  {
    q: 'Quanto tempo pra colocar no ar?',
    a: 'Essencial sobe em até 7 dias. Cresce em 2 a 3 semanas (depende do tanto de personalização). Próprio leva 3 a 5 semanas por causa da review da Apple e do Google nas lojas.'
  },
  {
    q: 'O app tem a minha marca ou a marca da Trilha?',
    a: 'No Essencial e Cresce, o app é da Trilha mas seu evento aparece com a sua marca lá dentro (logo, cores, nome, conteúdo). No Próprio, é o seu app na loja — ícone, nome, tudo seu. Trilha fica invisível.'
  },
  {
    q: 'Os dados do público são meus?',
    a: 'São seus. O público é do seu evento, os dados são seus. A Trilha só opera a plataforma, sempre dentro dos termos de uso e da LGPD.'
  }
]

useHead({
  title: 'Preços — Trilha Flow | Planos mensais e anuais, 100% da receita é sua',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/precos' }
  ],
  meta: [
    { name: 'description', content: 'Planos mensais ou anuais (2 meses grátis no anual). Essencial a partir de R$ 325/mês. 100% da receita do app — patrocínio, expositores, moeda do evento — fica com você.' },
    { property: 'og:title', content: 'Trilha Flow — Preço fixo, receita 100% sua' },
    { property: 'og:description', content: 'Planos mensais e anuais. Zero porcentagem sobre sua receita. Dentro do app da Trilha ou com app próprio nas lojas.' },
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
            name: 'A Trilha fica com alguma porcentagem da minha receita?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não. Você paga o plano e pronto. Patrocínio, vendas dos expositores, moeda do evento — 100% dessa receita fica com você.'
            }
          },
          {
            '@type': 'Question',
            name: 'Qual a economia do plano anual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No anual você paga 10 meses e usa 12 — ou seja, 2 meses grátis. Economia de R$ 780 no Essencial, R$ 2.580 no Cresce e R$ 3.804 no Próprio. No Próprio ainda tem R$ 2.000 de desconto na implantação quando fecha anual.'
            }
          },
          {
            '@type': 'Question',
            name: 'Posso cancelar quando quiser?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pode. No mensal, cancela no mês e para. No anual, o plano vai até o fim do período contratado e não renova automático se você não quiser. Sem multa.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo pra colocar no ar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Essencial sobe em até 7 dias. Cresce em 2 a 3 semanas. Próprio leva 3 a 5 semanas por causa da review da Apple e do Google.'
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
</script>
