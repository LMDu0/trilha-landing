<template>
  <div class="bg-white">
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Chega de app de evento<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">que ninguém abre.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Convenção de vendas, kick-off, evento interno, encontro de lideranças.
            A Trilha Flow transforma o seu evento corporativo num app com missão, ranking entre equipes
            e moeda interna. Engajamento que dá pra medir — e que dura depois do encerramento.
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">Prova que engajamento funciona.</h2>
            <p class="text-slate-500 leading-relaxed">
              Na Fenamilho 2025, os participantes abriram o app em média 14 vezes ao longo do evento.
              Esse é o tipo de adesão que a sua convenção precisa.
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

    <!-- Corporate-specific benefits -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl mb-12">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Um evento que conversa com o objetivo da empresa.
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

    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">Sua convenção pode engajar de verdade.</h2>
            <p class="text-slate-400 mb-8">Conversa direta com o time da Trilha Flow.</p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Agendar demo
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
  title: 'App para Eventos Corporativos — Trilha Flow | Convenções, kick-offs e eventos internos',
  meta: [
    { name: 'description', content: 'App para convenção de vendas, kick-off e evento interno. Missões alinhadas ao objetivo, ranking entre equipes e moeda interna pra experiências e brindes.' }
  ]
})

const metrics = [
  { value: '3.500+', label: 'Usuários ativos' },
  { value: '205K', label: 'Views em reels' },
  { value: '14', label: 'Sessões por usuário' },
  { value: '20K+', label: 'Interações gamificadas' }
]

const benefits = [
  { title: 'Missões alinhadas ao objetivo do evento', desc: 'Quer que o time conheça o novo produto? Vire missão. Quer que todos falem com a diretoria? Vire missão. Você define, o app executa.' },
  { title: 'Ranking entre equipes e regionais', desc: 'Competição saudável entre filiais, times de venda ou áreas. Placar ao vivo durante os dias do evento.' },
  { title: 'Moeda interna pra experiências e brindes', desc: 'Participantes ganham moeda cumprindo missões e trocam por brindes, experiências ou vantagens que a empresa escolhe.' }
]
</script>
