<template>
  <div class="bg-white">
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Festival é memória.<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Com o app, vira receita também.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Festival de música, gastronômico, cervejeiro, cultural. A Trilha Flow é o app
            com a cara do seu festival: moeda própria, loja interna, reels dos shows
            viralizando ao vivo e missões que levam o público pros pontos que importam.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full">
              Agendar demo
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
          <div class="mb-10 max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">O que acontece quando o público abre o app.</h2>
            <p class="text-slate-500 leading-relaxed">
              Números da Fenamilho 2025. Um festival tem energia parecida —
              público concentrado, três a cinco dias de pico, muito conteúdo visual.
            </p>
          </div>
          <div class="grid md:grid-cols-4 gap-4">
            <div v-for="m in metrics" :key="m.label" class="p-6 rounded-2xl border border-slate-200 bg-white">
              <div class="text-3xl font-semibold tracking-tight text-slate-900 mb-1">{{ m.value }}</div>
              <div class="text-sm text-slate-500">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Festival-specific benefits -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl mb-12">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              O festival continua no bolso de quem foi.
            </h2>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
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
            <NuxtLink to="/para-patrocinadores" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">Para patrocinadores</NuxtLink>
            <NuxtLink to="/eventos/feiras" class="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:border-slate-900 transition-colors">App para feira</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Seu festival pode ter o próprio app.</h2>
            <p class="text-slate-400 mb-8">Conversa direta com o time da Trilha Flow. A gente só cobra quando você ganha.</p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Calcular meu festival
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
  title: 'App para Festival — Trilha Flow | Música, cultural, gastronômico e cervejeiro',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/eventos/festivais' }
  ],
  meta: [
    { name: 'description', content: 'App para festival de música, cultural, gastronômico e cervejeiro. Moeda do festival, loja interna, reels dos shows do público e missões que levam gente pros pontos patrocinados.' },
    { property: 'og:title', content: 'App para Festival — Trilha Flow' },
    { property: 'og:description', content: 'Festival de música, cultural, gastronômico ou cervejeiro: um app com a cara do seu festival e moeda própria.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/eventos/festivais' },
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
          { '@type': 'ListItem', position: 2, name: 'App para festival', item: 'https://trilhalabs.com.br/eventos/festivais' }
        ]
      })
    }
  ]
})

const metrics = [
  { value: '3.500+', label: 'Usuários ativos' },
  { value: '205K', label: 'Views em reels' },
  { value: '14', label: 'Sessões por usuário' },
  { value: '20K+', label: 'Interações gamificadas' }
]

const benefits = [
  { title: 'Moeda do festival e loja interna', desc: 'Uma moeda com o nome do seu festival. O público ganha participando e gasta em experiências, bebidas, brindes e upgrades dentro do evento.' },
  { title: 'Reels dos shows viralizando ao vivo', desc: 'Feed social interno onde o público posta clipes dos shows e das atrações. O festival vira conteúdo em tempo real.' },
  { title: 'Missões que levam o público aos pontos certos', desc: 'O patrocinador quer gente no palco dele, no ativação dele, no bar dele. A missão leva. E você entrega número pro sponsor.' }
]
</script>
