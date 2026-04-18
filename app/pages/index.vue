<template>
  <div class="bg-white text-slate-900 antialiased">

    <!-- ==============================
         HERO — Category statement
    ============================== -->
    <section class="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-white">
      <!-- Subtle grid background (Stripe-style) -->
      <div class="absolute inset-0 -z-10 opacity-[0.35]"
           style="background-image: radial-gradient(circle at 1px 1px, rgba(15,23,42,0.12) 1px, transparent 0); background-size: 24px 24px;" />
      <!-- Soft gradient glow -->
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-200/40 rounded-full blur-3xl -z-10" />

      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Headline — retention-first positioning -->
          <h1 class="text-center text-4xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[0.95] mb-8">
            Seu evento acaba<br />
            no domingo.<br />
            <span class="bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent">Sua receita, não.</span>
          </h1>

          <!-- Subtitle -->
          <p class="max-w-2xl mx-auto text-center text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
            Trilha Flow é o app que faz seu evento continuar faturando depois que acaba. Seus expositores seguem vendendo, os vídeos do público seguem rodando, e a moeda do evento continua valendo até a próxima edição. Você só paga quando ganha.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <NuxtLink
              to="/contato"
              class="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-slate-900/10"
            >
              Falar com a gente
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
            <NuxtLink
              to="/precos"
              class="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium px-6 py-3.5 rounded-full transition-all duration-200"
            >
              Como a gente cobra
            </NuxtLink>
          </div>

          <!-- Live KPI strip (glass accent — 20% glass rule) -->
          <div class="relative mx-auto max-w-4xl">
            <div class="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-6 md:p-8">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="kpi in heroKpis" :key="kpi.label" class="text-center md:text-left">
                  <div class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1">{{ kpi.value }}</div>
                  <div class="text-xs md:text-sm text-slate-500">{{ kpi.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         SOCIAL PROOF STRIP
    ============================== -->
    <section class="py-10 border-y border-slate-100 bg-slate-50/40">
      <div class="container mx-auto px-6 sm:px-8">
        <p class="text-center text-sm text-slate-500">
          Operado em uma das maiores feiras agro do Sul do país — <span class="font-semibold text-slate-700">Fenamilho 2025</span>.
        </p>
      </div>
    </section>

    <!-- ==============================
         CATEGORY NARRATIVE — "Events are economies"
    ============================== -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Two-column narrative -->
          <div class="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div class="md:col-span-5 md:sticky md:top-32">
              <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-6">
                Evento não é só agenda.<br />
                <span class="text-slate-400">É um pequeno mercado.</span>
              </h2>
              <p class="text-lg text-slate-600 leading-relaxed">
                Durante o seu evento, milhares de pessoas se encontram, olham, compram e recomendam.
                A Trilha Flow é o app que organiza tudo isso num só lugar: com a sua marca, com regras
                que você define, e com novas formas de você faturar sem aumentar o custo do evento.
              </p>
            </div>

            <div class="md:col-span-7 space-y-5">
              <div v-for="(layer, i) in categoryLayers" :key="layer.title"
                   class="group relative p-7 md:p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5">
                <div class="flex items-start gap-5">
                  <div class="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 font-mono text-sm">
                    0{{ i + 1 }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-xl font-semibold tracking-tight text-slate-900 mb-2">{{ layer.title }}</h3>
                    <p class="text-slate-600 leading-relaxed">{{ layer.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         REVENUE STREAMS (core monetization)
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      <!-- Dot grid for depth -->
      <div class="absolute inset-0 opacity-[0.08]"
           style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0); background-size: 32px 32px;" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/10 blur-3xl rounded-full" />

      <div class="container mx-auto px-6 sm:px-8 relative">
        <div class="max-w-3xl mb-16">
          <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
            Três novas formas<br />de ganhar dinheiro no seu evento.
          </h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            A Trilha não é só mais um custo. É o app que abre caminhos de receita que não existiam antes.
            Você ganha. Seus expositores ganham. Seus patrocinadores pagam mais — porque têm número pra mostrar.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="stream in revenueStreams" :key="stream.title"
               class="group relative p-7 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
            <div class="text-slate-500 font-mono text-sm mb-6">{{ stream.metric }}</div>
            <h3 class="text-lg font-semibold tracking-tight text-white mb-2">{{ stream.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ stream.description }}</p>
          </div>
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            Sem investimento inicial
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            A gente só cobra quando você ganha
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            Sem risco pro organizador
          </span>
        </div>
      </div>
    </section>

    <!-- ==============================
         ALWAYS-ON ECONOMY — retention pillar
    ============================== -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-16">
            <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-6">
              Evento comum morre no último dia.<br />
              <span class="text-slate-400">O seu continua faturando.</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Com a Trilha, o app fica no celular do seu público. Os expositores continuam vendendo, os vídeos continuam rodando, e a moeda do evento continua valendo até a próxima edição. Seu evento deixa de ser um gasto anual e vira um canal que rende o ano inteiro.
            </p>
          </div>

          <!-- Timeline cards: durante / 30 dias / próxima edição -->
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="(phase, i) in alwaysOn" :key="phase.title"
                 class="relative flex flex-col p-7 md:p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-shadow">
              <div class="flex items-baseline justify-between mb-5">
                <div class="text-sm font-medium text-slate-400">{{ phase.window }}</div>
                <div class="text-xs text-slate-400 font-mono">0{{ i + 1 }}</div>
              </div>
              <h3 class="text-xl font-semibold tracking-tight text-slate-900 mb-3">{{ phase.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-5">{{ phase.description }}</p>
              <ul class="space-y-2 mt-auto pt-5 border-t border-slate-100">
                <li v-for="bullet in phase.bullets" :key="bullet" class="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Activity curve comparison -->
          <div class="mt-12 p-8 md:p-10 rounded-2xl border border-slate-200 bg-slate-50/60">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
                  Engajamento que não cai pra zero no dia seguinte.
                </h3>
                <p class="text-slate-600 leading-relaxed">
                  Nos eventos tradicionais, a atividade colapsa junto com o último lote de ingressos. Na Trilha, o participante
                  volta ao app no mês seguinte pra resgatar moedas, ver reels e fechar compras no marketplace.
                </p>
              </div>
              <div class="relative h-48 md:h-56">
                <svg viewBox="0 0 400 180" class="w-full h-full" preserveAspectRatio="none">
                  <!-- baseline grid -->
                  <line x1="0" y1="160" x2="400" y2="160" stroke="#e2e8f0" stroke-width="1" />
                  <!-- labels -->
                  <text x="0" y="178" fill="#94a3b8" font-size="10" font-family="monospace">dia do evento</text>
                  <text x="340" y="178" fill="#94a3b8" font-size="10" font-family="monospace">+365d</text>

                  <!-- Traditional event curve (drops to zero) -->
                  <path d="M 10 150 Q 60 30, 120 20 Q 160 20, 170 160 L 400 160"
                        fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4" />
                  <text x="175" y="155" fill="#94a3b8" font-size="10">evento tradicional</text>

                  <!-- Trilha curve (sustained) -->
                  <path d="M 10 150 Q 60 30, 120 20 Q 170 40, 220 70 Q 280 90, 340 85 Q 380 75, 395 30"
                        fill="none" stroke="url(#trilhaGrad)" stroke-width="3" />
                  <defs>
                    <linearGradient id="trilhaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#7c3aed" />
                      <stop offset="100%" stop-color="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <circle cx="395" cy="30" r="5" fill="#7c3aed" />
                  <text x="280" y="65" fill="#7c3aed" font-size="11" font-weight="600">Trilha · próxima edição</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         GROWTH LOOP (compact, no emojis)
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-slate-900 mb-4">
              Um círculo que faz o próximo evento ser maior.
            </h2>
            <p class="text-slate-600 leading-relaxed">
              Cada edição alimenta a próxima. Sem mais gente na operação, sem mais complicação.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div v-for="(stage, i) in flywheel" :key="stage.label"
                 class="relative flex flex-col p-5 rounded-2xl border border-slate-200 bg-white">
              <div class="text-slate-300 font-mono text-sm mb-3">0{{ i + 1 }}</div>
              <div class="font-semibold text-slate-900 tracking-tight mb-1.5">{{ stage.label }}</div>
              <div class="text-sm text-slate-500 leading-snug">{{ stage.detail }}</div>
              <div v-if="i < flywheel.length - 1" class="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 items-center justify-center z-10">
                <svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         CASE STUDY (compact, factual)
    ============================== -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div class="max-w-2xl">
              <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
                Fenamilho 2025: uma das maiores feiras agro do Sul rodando na Trilha.
              </h2>
            </div>
            <NuxtLink to="/casos"
                      class="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-violet-600 transition-colors">
              Ver detalhes do case
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>

          <div class="grid md:grid-cols-4 gap-4">
            <div v-for="metric in caseMetrics" :key="metric.label"
                 class="relative p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-shadow">
              <div class="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">{{ metric.value }}</div>
              <div class="text-sm text-slate-500 leading-snug">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         STAKEHOLDERS (programmatic SEO entry)
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-50/60">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Um app. Quatro ganhos diferentes.
            </h2>
            <p class="mt-4 text-lg text-slate-500">Pra cada pessoa envolvida no seu evento, tem uma razão pra usar a Trilha.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <NuxtLink v-for="persona in personas" :key="persona.slug"
                      :to="persona.slug"
                      class="group relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-900/20 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300">
              <h3 class="text-xl font-semibold tracking-tight text-slate-900 mb-2">{{ persona.title }}</h3>
              <p class="text-sm text-slate-500 leading-snug mb-6">{{ persona.value }}</p>
              <span class="inline-flex items-center gap-1 text-sm font-medium text-slate-900 group-hover:text-violet-600 transition-colors">
                Ver página
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Segments programmatic links -->
          <div class="mt-14 pt-10 border-t border-slate-200">
            <div class="text-sm font-medium text-slate-500 mb-5">Explore por segmento</div>
            <div class="flex flex-wrap gap-2">
              <NuxtLink v-for="segment in segments" :key="segment.slug" :to="segment.slug"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50/40 transition-all">
                {{ segment.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         TESTIMONIAL — Junior Moro (original)
    ============================== -->
    <section class="py-24 md:py-32">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto">
          <blockquote class="text-xl md:text-3xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-10 space-y-4">
            <p>
              <span class="text-violet-500">"</span>Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente que fala bonito, mas na hora do 'vamos ver'... desaparece.
            </p>
            <p>
              Com a Trilha foi diferente desde o começo. Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece que eles realmente se importam com o resultado.
            </p>
            <p>
              O app saiu do papel com qualidade, velocidade e atenção aos detalhes. Trabalho impecável!<span class="text-violet-500">"</span>
            </p>
          </blockquote>
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-1 ring-slate-200">
              <img src="/images/client.webp" alt="Junior Moro" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <div class="font-semibold text-slate-900">Junior Moro</div>
              <div class="text-sm text-slate-500">Sócio, Belif Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         FINAL CTA
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 blur-3xl rounded-full" />

      <div class="container mx-auto px-6 sm:px-8 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Seu próximo evento pode<br />
            <span class="text-violet-300">ganhar mais dinheiro.</span>
          </h2>
          <p class="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Sem investimento inicial. A gente só cobra quando gera resultado. Marca uma conversa e te mostramos o modelo pra sua realidade.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contato"
                      class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-medium px-6 py-3.5 rounded-full transition-all duration-200">
              Agendar conversa
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
            <NuxtLink to="/precos"
                      class="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-md">
              Como a gente cobra
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// SEO — category-focused
useHead({
  title: 'Trilha Flow — Seu evento acaba no domingo. Sua receita, não.',
  meta: [
    {
      name: 'description',
      content: 'Trilha Flow é o app que mantém seu evento faturando depois do último dia. Loja dos expositores, vídeos que continuam viralizando e moeda do evento que circula até a próxima edição — a gente só cobra quando você ganha.'
    },
    { property: 'og:title', content: 'Trilha Flow — Seu evento acaba no domingo. Sua receita, não.' },
    { property: 'og:description', content: 'O app que mantém seu evento faturando depois do último dia. A gente só cobra quando você ganha.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Category-level KPIs (reais — Fenamilho 2025)
const heroKpis = [
  { value: '3.500+', label: 'Participantes ativos em um único evento' },
  { value: '205K', label: 'Visualizações em reels gerados pelo público' },
  { value: '14', label: 'Sessões por participante durante o evento' },
  { value: '20K+', label: 'Interações gamificadas no app' }
]

// Category narrative layers
const categoryLayers = [
  {
    title: 'O app do evento, com a sua marca',
    description: 'Seus participantes baixam um app com a cara do seu evento. Agenda, expositores, avisos, mapa e tudo mais que o público precisa, num só lugar.'
  },
  {
    title: 'Uma moeda própria e uma loja dentro do app',
    description: 'Os participantes ganham moedas cumprindo missões e podem gastar na loja oficial, com expositores, ou em experiências do evento. Você pega uma pequena parte de cada venda.'
  },
  {
    title: 'Patrocínio com número, não com achismo',
    description: 'Seus patrocinadores pagam por impacto real: quantas pessoas viram, clicaram, participaram. Cotas digitais novas, que antes da Trilha nem existiam.'
  }
]

// Revenue streams
const revenueStreams = [
  {
    metric: '01',
    title: 'Patrocínio digital com números reais',
    description: 'Banners, missões patrocinadas, notificações segmentadas, quizzes de marca. Cotas novas dentro do app, com relatório de quantas pessoas viram e interagiram. Cotas que não existiam antes.'
  },
  {
    metric: '02',
    title: 'Expositores vendendo pelo app',
    description: 'Seus expositores continuam vendendo antes, durante e depois do evento, pelo próprio app. Cada venda passa por você — e você fica com uma parte.'
  },
  {
    metric: '03',
    title: 'Moeda do evento + loja interna',
    description: 'O público compra moeda virtual, gasta em experiências, produtos e com expositores. Uma pequena parte de cada transação fica com você.'
  }
]

// Always-on — retenção por janela temporal
const alwaysOn = [
  {
    window: 'Durante o evento',
    title: 'Todo mundo dentro do app',
    description: 'O app é o centro do seu evento. Participantes cumprem missões, postam vídeos, gastam moedas com expositores e nas experiências. Tudo acontecendo ao vivo.',
    bullets: [
      'Missões e recompensas todo dia',
      'Vídeos do público rodando no feed',
      'Loja e expositores vendendo com moeda',
      'Avisos direto pra quem interessa'
    ]
  },
  {
    window: 'Nos 30 dias seguintes',
    title: 'O evento que não dorme',
    description: 'O app fica no celular de quem participou. Os vídeos continuam rodando, os expositores continuam vendendo, e o patrocinador continua aparecendo pro público certo — com relatório de tudo.',
    bullets: [
      'Vídeos ainda gerando views',
      'Loja e expositores abertos 24/7',
      'Moeda do evento ainda vale',
      'Avisos pra trazer o público de volta'
    ]
  },
  {
    window: 'Até a próxima edição',
    title: 'Público fidelizado, pronto pra comprar',
    description: 'Você chega no próximo evento com uma base já engajada. Os dados do ano anterior viram argumento pra vender cotas melhores e convencer mais expositores — porque você tem número de verdade.',
    bullets: [
      'Histórico de quem participou',
      'Dados reais pra vender patrocínio',
      'Canal direto com público e expositores',
      'Moedas que viram da edição anterior'
    ]
  }
]

// Growth loop (sem emojis, tipográfico)
const flywheel = [
  { label: 'Público grava vídeos', detail: 'Incentivado por missões e recompensas.' },
  { label: 'Os vídeos viralizam', detail: 'Views dentro do app e compartilhados fora.' },
  { label: 'Patrocínio vale mais', detail: 'Com número real de quem viu e interagiu.' },
  { label: 'Expositores vendem', detail: 'Você fica com uma parte de cada venda.' },
  { label: 'Você ganha mais', detail: 'O próximo evento já começa maior.' }
]

// Case metrics — dados reais Fenamilho 2025
const caseMetrics = [
  { value: '3.500+', label: 'usuários ativos durante o evento' },
  { value: '205K', label: 'views em reels gerados pelo público' },
  { value: '14', label: 'sessões por participante' },
  { value: '20K+', label: 'interações gamificadas' }
]

// Stakeholder programmatic pages
const personas = [
  { slug: '/para-organizadores', title: 'Organizadores', value: 'Três novas formas de faturar sem aumentar o custo do evento.' },
  { slug: '/para-expositores', title: 'Expositores', value: 'Vende antes, durante e depois, pelo app do evento.' },
  { slug: '/para-patrocinadores', title: 'Patrocinadores', value: 'Patrocínio com relatório de quantas pessoas viram e clicaram.' },
  { slug: '/para-participantes', title: 'Participantes', value: 'Ganha moedas e prêmios participando do evento.' }
]

// Segment programmatic entry points
const segments = [
  { slug: '/eventos/agro', label: 'Feiras Agro' },
  { slug: '/eventos/tech', label: 'Eventos Tech' },
  { slug: '/eventos/corporativos', label: 'Eventos Corporativos' },
  { slug: '/eventos/feiras', label: 'Feiras em Geral' },
  { slug: '/eventos/festivais', label: 'Festivais' },
  { slug: '/como-monetizar-evento', label: 'Como monetizar o seu evento' }
]
</script>
