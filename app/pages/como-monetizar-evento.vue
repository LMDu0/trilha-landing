<template>
  <div class="bg-white">
    <section class="pt-36 pb-16 md:pt-44 md:pb-20 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">8 min de leitura</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            Como ganhar dinheiro com um evento em 2026:<br />
            <span class="text-slate-400">o guia completo (com caso real).</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed">
            Eventos reúnem muita gente e muita atenção. Atenção é o bem mais valioso hoje. Este guia mostra como transformar a atenção do seu evento em dinheiro, com números reais de um evento que rodou em 2025.
          </p>
        </div>
      </div>
    </section>

    <!-- TOC + Content -->
    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto">
          <article class="prose prose-slate max-w-none">
            <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">1. Pare de pensar evento como agenda. Pense como uma loja que só existe durante o evento.</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O primeiro erro de 95% dos organizadores é tratar o evento como uma coleção de palestras e ingressos. O evento moderno é uma loja que só existe durante aqueles dias, onde três partes se encontram: o público (que dá atenção), os expositores (que oferecem produtos) e os patrocinadores (que querem essa atenção).
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Se você não está conectando essas três partes, está deixando dinheiro na mesa.
            </p>

            <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">2. Três formas de faturar que não existiam no seu evento</h2>
            <ul class="space-y-4 text-slate-600 mb-6">
              <li><strong class="text-slate-900">Patrocínio digital com público certo:</strong> cotas vendidas por quem viu, clicou e comprou. Cotas com número, que valem 3x mais que uma cota tradicional.</li>
              <li><strong class="text-slate-900">Loja dos expositores dentro do app:</strong> expositores vendendo o dia inteiro pelo app. Você fica com uma parte de cada venda, sem aumentar o custo do evento.</li>
              <li><strong class="text-slate-900">Moeda do evento:</strong> moeda própria, loja interna e transações com comissão. Uma forma divertida que gera engajamento E dinheiro ao mesmo tempo.</li>
            </ul>

            <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">3. Números reais do Fenamilho 2025</h2>
            <div class="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div class="text-2xl font-semibold text-slate-900">3.500+</div>
                  <div class="text-sm text-slate-500">Participantes ativos</div>
                </div>
                <div>
                  <div class="text-2xl font-semibold text-slate-900">14</div>
                  <div class="text-sm text-slate-500">Sessões por usuário</div>
                </div>
                <div>
                  <div class="text-2xl font-semibold text-slate-900">205K</div>
                  <div class="text-sm text-slate-500">Visualizações espontâneas</div>
                </div>
                <div>
                  <div class="text-2xl font-semibold text-slate-900">20K+</div>
                  <div class="text-sm text-slate-500">Interações com missões</div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">4. O caminho: Atenção → Cotas pra vender → Dinheiro</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Cada minuto que a pessoa passa dentro do app é atenção. Essa atenção precisa virar algo que dê pra vender: banner, missão, notificação, cota. E isso, com números reais, vira dinheiro que você pode provar.
            </p>

            <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">5. Quais ferramentas você precisa</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Você precisa de quatro coisas que conversam entre si: um app com a sua marca, ferramentas pra engajar o público (missões e vídeos do público), uma forma de receber pagamentos e vender moeda do evento, e um painel com as vendas em tempo real. Construir tudo do zero é um projeto longo e caro — a Trilha Flow já tem tudo isso pronto e rodando.
            </p>

            <div class="mt-12 p-8 rounded-2xl bg-slate-950 text-white text-center">
              <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer o cálculo pro seu evento?</h3>
              <p class="text-slate-400 mb-6">Em 30 min fazemos a conta com os seus números.</p>
              <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
                Agendar conversa
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Como ganhar dinheiro com um evento em 2026 — Guia completo com caso real | Trilha Flow',
  meta: [
    { name: 'description', content: 'Guia completo: como transformar a atenção do seu evento em dinheiro. 3 formas de faturar que não existiam, o caminho Atenção → Cotas → Dinheiro, e números reais do caso Fenamilho 2025.' }
  ]
})
</script>
