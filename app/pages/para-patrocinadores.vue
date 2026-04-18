<template>
  <div class="bg-white">
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Pare de patrocinar no escuro.<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Pague por atenção com número.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Cotas de patrocínio digital com o público certo: por perfil, região, horário e interesse. Você sabe exatamente quantas pessoas viram, clicaram e compraram. Como anúncio online — mas dentro de um evento de verdade.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full">
              Ver cotas disponíveis
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="inv in inventory" :key="inv.title" class="p-6 rounded-2xl border border-slate-200 bg-white">
              <div class="text-xs font-mono text-slate-400 mb-3">{{ inv.tag }}</div>
              <h3 class="font-semibold tracking-tight text-slate-900 mb-2">{{ inv.title }}</h3>
              <p class="text-sm text-slate-500 leading-snug">{{ inv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24 pt-20 text-center">
      <div class="container mx-auto px-6 sm:px-8">
        <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3.5 rounded-full">
          Falar com o time de mídia
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Trilha Flow para Patrocinadores — Patrocínio com número em eventos',
  meta: [
    { name: 'description', content: 'Pague por atenção com número dentro de eventos. Cotas de patrocínio digital com público certo e relatório de quantos viram, clicaram e compraram.' }
  ]
})

const inventory = [
  { tag: '01 · Banner', title: 'Banners com público certo', desc: 'Tela inicial, feed, abertura. Aparece pra quem interessa.' },
  { tag: '02 · Notificação', title: 'Notificações no celular', desc: 'Na hora certa, com base em onde a pessoa está.' },
  { tag: '03 · Missão', title: 'Missões patrocinadas', desc: 'Público cumpre missão da marca e ganha moeda do evento.' },
  { tag: '04 · Momento', title: 'Marca em destaque por um período', desc: 'A sua marca aparece em destaque no app num horário escolhido.' }
]
</script>
