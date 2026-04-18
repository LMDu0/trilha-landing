<template>
  <div class="bg-white min-h-screen">

    <!-- Hero -->
    <section class="relative pt-36 pb-12 overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02] text-slate-900 mb-6 mt-8">
            Fazemos o cálculo<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">do seu próximo evento.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            30 min de conversa. Entregamos uma estimativa de quanto seu evento pode faturar, feita pro seu público, setor e tamanho. Sem compromisso. Sem venda forçada.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact form (component) -->
    <LandingContact />

    <!-- Quick contact options -->
    <section class="py-16 md:py-24 bg-slate-50/40 border-t border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Ou fale direto.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://wa.me/555493503203?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Trilha%20Flow."
               target="_blank" rel="noopener noreferrer"
               class="p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all">
              <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                <Icon name="lucide:message-circle" class="w-5 h-5 text-slate-600" />
              </div>
              <h3 class="font-semibold tracking-tight text-slate-900 mb-1">WhatsApp</h3>
              <p class="text-sm text-slate-500 mb-3">Resposta em minutos</p>
              <p class="text-sm font-mono text-slate-700">(54) 9 3503-3203</p>
            </a>

            <a href="mailto:contato@trilhalabs.com.br?subject=Contato%20pelo%20site%20—%20Trilha%20Flow"
               class="p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all">
              <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                <Icon name="lucide:mail" class="w-5 h-5 text-slate-600" />
              </div>
              <h3 class="font-semibold tracking-tight text-slate-900 mb-1">Email</h3>
              <p class="text-sm text-slate-500 mb-3">Resposta em até 2h úteis</p>
              <p class="text-sm font-mono text-slate-700">contato@trilhalabs.com.br</p>
            </a>

            <NuxtLink to="/precos"
                      class="p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all">
              <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-slate-600" />
              </div>
              <h3 class="font-semibold tracking-tight text-slate-900 mb-1">Como a gente cobra</h3>
              <p class="text-sm text-slate-500 mb-3">Entenda a parte que fica com a gente</p>
              <p class="text-sm font-medium text-slate-700">Ver /precos →</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Agendar conversa — Trilha Flow | Quanto seu evento pode faturar',
  meta: [
    { name: 'description', content: 'Agende 30 min com o time da Trilha Flow. Fazemos uma estimativa de quanto seu evento pode faturar, feita pra sua realidade — antes de qualquer compromisso.' },
    { property: 'og:title', content: 'Agendar conversa — Trilha Flow' },
    { property: 'og:description', content: 'Estimativa de faturamento pra seu evento em 30 min.' }
  ]
})
</script>
