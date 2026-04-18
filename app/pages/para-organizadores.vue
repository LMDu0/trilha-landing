<template>
  <div class="bg-white">

    <!-- Hero -->
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Seu evento não é só gasto.<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">É uma forma de ganhar dinheiro.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Novas formas de faturar sem aumentar o custo: patrocínio digital, loja dos expositores dentro do app e moeda do evento. A Trilha entrega a plataforma. Você define os preços e fica com a maior parte.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full transition-all">
              Ver quanto o seu evento pode render
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
            <NuxtLink to="/precos" class="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium px-6 py-3.5 rounded-full transition-all">
              Como a gente cobra
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Before / After -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-8 rounded-2xl border border-slate-200 bg-slate-50/60">
            <div class="text-xs font-medium text-slate-500 mb-4">Antes da Trilha</div>
            <ul class="space-y-3 text-sm text-slate-600">
              <li class="flex gap-3"><span class="text-slate-400">—</span> Receita só com ingresso e patrocínio físico</li>
              <li class="flex gap-3"><span class="text-slate-400">—</span> Sem saber o que o público realmente consome</li>
              <li class="flex gap-3"><span class="text-slate-400">—</span> Patrocinador paga só por aparecer (no escuro)</li>
              <li class="flex gap-3"><span class="text-slate-400">—</span> Expositor vende só durante o evento</li>
              <li class="flex gap-3"><span class="text-slate-400">—</span> Evento acaba no último dia</li>
            </ul>
          </div>
          <div class="p-8 rounded-2xl border border-violet-200 bg-violet-50/40">
            <div class="text-xs font-medium text-violet-600 mb-4">Com a Trilha</div>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex gap-3"><span class="text-violet-600">+</span> Novas formas de ganhar com comissão combinada</li>
              <li class="flex gap-3"><span class="text-violet-600">+</span> Painel com consumo, atenção e vendas em tempo real</li>
              <li class="flex gap-3"><span class="text-violet-600">+</span> Patrocinador compra com relatório de quantos viram</li>
              <li class="flex gap-3"><span class="text-violet-600">+</span> Expositor vende o dia inteiro pela loja do app</li>
              <li class="flex gap-3"><span class="text-violet-600">+</span> Evento continua vivo com vídeos e comunidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Related links -->
    <section class="py-14">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-sm font-medium text-slate-500 mb-4">Conheça mais</div>
          <div class="flex flex-wrap gap-2">
            <NuxtLink to="/produto" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Como o app funciona</NuxtLink>
            <NuxtLink to="/precos" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Como a gente cobra</NuxtLink>
            <NuxtLink to="/casos" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Case Fenamilho 2025</NuxtLink>
            <NuxtLink to="/como-monetizar-evento" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Como monetizar seu evento</NuxtLink>
            <NuxtLink to="/eventos/agro" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para feira agro</NuxtLink>
            <NuxtLink to="/eventos/feiras" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para feira</NuxtLink>
            <NuxtLink to="/eventos/festivais" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para festival</NuxtLink>
            <NuxtLink to="/eventos/corporativos" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para evento corporativo</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Quanto o seu próximo evento pode faturar?</h2>
            <p class="text-slate-400 mb-8">Fazemos o cálculo em 30 min. Sem compromisso. A gente só cobra quando você ganha.</p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Calcular meu evento
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
  title: 'Trilha Flow para Organizadores — Quanto seu evento pode faturar',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/para-organizadores' }
  ],
  meta: [
    { name: 'description', content: 'Pra organizadores: novas formas de faturar com patrocínio digital, loja dos expositores e moeda do evento. Sem aumentar o custo do evento e a gente só cobra quando você ganha.' },
    { property: 'og:title', content: 'Trilha Flow para Organizadores' },
    { property: 'og:description', content: 'Três novas formas de faturar com o seu evento. A gente só cobra quando você ganha.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/para-organizadores' },
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
          { '@type': 'ListItem', position: 2, name: 'Para organizadores', item: 'https://trilhalabs.com.br/para-organizadores' }
        ]
      })
    }
  ]
})
</script>
