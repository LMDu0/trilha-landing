<template>
  <div class="bg-white">
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Feira agro não é só feira.<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">É uma loja que só existe durante o evento.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            As feiras agro do Brasil movimentam bilhões em negócios —
            mas param de gerar dinheiro quando o portão fecha. A Trilha transforma a sua feira
            num canal que continua vendendo depois que o evento acaba.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full">
              Agendar demo agro
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Fenamilho case inline -->
    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="mb-10">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Case Fenamilho 2025</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="m in metrics" :key="m.label" class="p-6 rounded-2xl border border-slate-200 bg-white">
              <div class="text-3xl font-semibold tracking-tight text-slate-900 mb-1">{{ m.value }}</div>
              <div class="text-sm text-slate-500">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Agro-specific benefits -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl mb-12">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Pensado para a realidade do agro brasileiro.
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(b, i) in benefits" :key="b.title" class="p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-slate-300 font-mono text-sm mb-4">{{ String(i + 1).padStart(2, '0') }}</div>
              <h3 class="font-semibold tracking-tight text-slate-900 mb-2">{{ b.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ b.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related links -->
    <section class="pb-16">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-sm font-medium text-slate-500 mb-4">Veja também</div>
          <div class="flex flex-wrap gap-2">
            <NuxtLink to="/produto" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Como o app funciona</NuxtLink>
            <NuxtLink to="/precos" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Como a gente cobra</NuxtLink>
            <NuxtLink to="/casos" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Case Fenamilho 2025</NuxtLink>
            <NuxtLink to="/para-organizadores" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Para organizadores</NuxtLink>
            <NuxtLink to="/eventos/feiras" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para feira (geral)</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Sua feira agro pode rodar no mesmo padrão da Fenamilho.</h2>
            <p class="text-slate-400 mb-8">Conversa direta com o time que entregou o case referência do setor. A gente só cobra quando você ganha.</p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Calcular minha feira
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
  title: 'App para Feira Agro — Trilha Flow | A feira agro que continua vendendo',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/eventos/agro' }
  ],
  meta: [
    { name: 'description', content: 'App para feira agro: Expoagro, Fenamilho, Expointer e similares. Loja dos expositores sempre aberta, cotas pra cooperativas com número e moeda do evento. A gente só cobra quando você ganha.' },
    { property: 'og:title', content: 'App para Feira Agro — Trilha Flow' },
    { property: 'og:description', content: 'A feira agro que continua vendendo depois que o portão fecha. Case Fenamilho 2025.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/eventos/agro' },
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
          { '@type': 'ListItem', position: 2, name: 'Eventos', item: 'https://trilhalabs.com.br/eventos/agro' },
          { '@type': 'ListItem', position: 3, name: 'Agro', item: 'https://trilhalabs.com.br/eventos/agro' }
        ]
      })
    }
  ]
})

const metrics = [
  { value: '3.500+', label: 'Pessoas usando o app' },
  { value: '205K', label: 'Visualizações nos vídeos' },
  { value: '14', label: 'Vezes que cada pessoa abriu o app' },
  { value: '20K+', label: 'Interações com missões e prêmios' }
]

const benefits = [
  { title: 'Funciona sem internet boa', desc: 'Roda mesmo no meio da lavoura com sinal fraco. Sincroniza sozinho quando conecta.' },
  { title: 'Loja de insumos no app', desc: 'Expositores de sementes, maquinário e insumos vendendo o dia inteiro pelo app.' },
  { title: 'Cotas pra cooperativas', desc: 'Cotas de patrocínio digital com público certo, pensadas pra cooperativas e marcas do agro.' }
]
</script>
