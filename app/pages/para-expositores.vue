<template>
  <div class="bg-white">
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Seu estande aberto<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">24 horas por dia.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Venda antes do evento, durante cada dia e depois que ele termina. O público abre o app, compra seu produto e você atende — mesmo com o estande vazio.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full">
              Expor pelo app
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="w in wins" :key="w.title" class="p-7 rounded-2xl border border-slate-200 bg-white">
            <div class="text-4xl font-semibold tracking-tight text-slate-900 mb-2">{{ w.metric }}</div>
            <div class="text-sm font-semibold text-slate-900 mb-2">{{ w.title }}</div>
            <p class="text-sm text-slate-500 leading-relaxed">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24 pt-20">
      <div class="container mx-auto px-6 sm:px-8 text-center">
        <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3.5 rounded-full">
          Quero expor via Trilha
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Trilha Flow para Expositores — Venda 24 horas antes, durante e depois do evento',
  meta: [
    { name: 'description', content: 'Expositores vendem 24 horas pela loja do app da Trilha Flow, antes, durante e depois do evento. Catálogo sempre aberto.' }
  ]
})

const wins = [
  { metric: '24h', title: 'Catálogo sempre aberto', desc: 'O público compra no ônibus de volta, no hotel, em casa.' },
  { metric: 'Antes', title: 'Vendas antes do evento', desc: 'Catálogo publicado dias antes — você já chega vendendo.' },
  { metric: 'Depois', title: 'Relacionamento que continua', desc: 'Quem visitou o seu estande segue com você dentro do app.' }
]
</script>
