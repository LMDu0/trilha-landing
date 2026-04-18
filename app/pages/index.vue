<template>
  <div class="bg-white text-slate-900 antialiased">

    <!-- ==============================
         HERO — Category statement + chart + mouse-tracked orb
    ============================== -->
    <section class="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 bg-white">
      <!-- Subtle grid background (Stripe-style) with Apple-style parallax -->
      <div
        aria-hidden="true"
        class="absolute inset-0 -z-10 opacity-[0.35] will-change-transform"
        :style="[gridParallaxStyle, { backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.12) 1px, transparent 0)', backgroundSize: '24px 24px' }]"
      />
      <!-- Secondary orb for depth layer -->
      <div
        aria-hidden="true"
        class="hidden md:block absolute top-40 right-[10%] w-[520px] h-[520px] bg-indigo-200/30 rounded-full blur-3xl -z-10 motion-safe:transition-transform motion-safe:duration-[1200ms] ease-out"
        :style="{ transform: prefersReducedMotion ? 'none' : `translate3d(${(mouseX - winW/2) * -0.05}px, ${scrollY * 0.35}px, 0)` }"
      />
      <!-- Mouse-reactive gradient orb -->
      <div
        aria-hidden="true"
        class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-300/50 rounded-full blur-3xl -z-10 motion-safe:transition-transform motion-safe:duration-[700ms] ease-out"
        :style="orbStyle"
      />

      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Headline — retention-first positioning -->
          <h1
            class="hero-headline text-center text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] leading-[1.02] md:leading-[0.95] mb-6 md:mb-8 will-change-transform"
            :style="heroHeadlineStyle"
          >
            Seu evento acaba<br />
            no domingo.<br />
            <span class="hero-gradient-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent">Sua receita, não.</span>
          </h1>

          <!-- Subtitle -->
          <p class="max-w-2xl mx-auto text-center text-base md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-10">
            Trilha Flow é o app que faz seu evento continuar vendendo depois que acaba. Expositores seguem vendendo, vídeos do público seguem rodando, a moeda do evento continua valendo até a próxima edição. Você paga o plano — 100% da receita é sua.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <NuxtLink
              to="/contato"
              class="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-slate-900/10"
            >
              Agendar conversa de 30 min
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
            <NuxtLink
              to="/precos"
              class="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium px-6 py-3.5 rounded-full transition-all duration-200"
            >
              Ver preços
            </NuxtLink>
          </div>

          <!-- CTA micro-subtitle: tempera expectativa -->
          <p class="text-center text-sm text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed">
            30 min de conversa. Saímos com uma estimativa do seu próximo evento — feita pro seu público, setor e tamanho. Sem compromisso, sem venda forçada.
          </p>

          <!-- Hero chart: antes/depois com draw-on animation (tilt 3D apple-style) -->
          <div ref="heroChartEl" class="relative mx-auto max-w-4xl" :style="heroCardStyle" style="transition: transform 400ms cubic-bezier(0.2,0.7,0.2,1);">
            <div class="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-6 md:p-8">
              <div class="flex items-start justify-between mb-4 gap-4">
                <div>
                  <div class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Atividade do público</div>
                  <div class="text-sm text-slate-600">Quem usa Trilha não para no último dia.</div>
                </div>
                <div class="flex items-center gap-3 text-xs">
                  <div class="flex items-center gap-1.5">
                    <span class="inline-block w-3 h-0.5 bg-slate-300" style="border-top: 1px dashed #cbd5e1; background: transparent;"></span>
                    <span class="text-slate-500">Sem app</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="inline-block w-3 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600"></span>
                    <span class="text-violet-700 font-medium">Com Trilha Flow</span>
                  </div>
                </div>
              </div>

              <div class="relative h-52 md:h-64">
                <svg viewBox="0 0 400 180" class="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="trilhaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#7c3aed" />
                      <stop offset="60%" stop-color="#6366f1" />
                      <stop offset="100%" stop-color="#4f46e5" />
                    </linearGradient>
                    <linearGradient id="trilhaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.18" />
                      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
                    </linearGradient>
                  </defs>

                  <!-- Baseline -->
                  <line x1="0" y1="162" x2="400" y2="162" stroke="#e2e8f0" stroke-width="1" />

                  <!-- Traditional curve — rises e despenca no fim do evento -->
                  <path
                    d="M 10 158 C 45 156, 75 148, 100 80 C 125 20, 145 12, 165 18 C 180 22, 190 60, 198 120 C 205 152, 215 160, 230 161 L 395 161"
                    fill="none"
                    stroke="#cbd5e1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-dasharray="4 5"
                    :style="traditionalPathStyle"
                    class="chart-path chart-path--traditional"
                  />

                  <!-- Trilha curve — sobe igual, sustenta e volta a crescer -->
                  <path
                    d="M 10 158 C 45 156, 75 148, 100 80 C 125 20, 145 12, 165 18 C 195 28, 220 55, 255 72 C 290 88, 320 85, 350 65 C 375 50, 388 30, 395 18"
                    fill="none"
                    stroke="url(#trilhaGrad)"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :style="trilhaPathStyle"
                    class="chart-path chart-path--trilha"
                  />

                  <!-- Fill sob a curva Trilha -->
                  <path
                    d="M 10 158 C 45 156, 75 148, 100 80 C 125 20, 145 12, 165 18 C 195 28, 220 55, 255 72 C 290 88, 320 85, 350 65 C 375 50, 388 30, 395 18 L 395 162 L 10 162 Z"
                    fill="url(#trilhaFill)"
                    :class="chartInView ? 'chart-fill--in' : ''"
                    class="chart-fill"
                  />

                </svg>

                <!-- Dot overlay HTML (fora do SVG pra não distorcer com preserveAspectRatio="none") -->
                <!-- Posicionado em (395/400 = 98.75%, 18/180 = 10%) -->
                <div
                  aria-hidden="true"
                  class="absolute pointer-events-none"
                  style="left: 98.75%; top: 10%; transform: translate(-50%, -50%);"
                >
                  <span
                    :class="chartInView ? 'chart-dot--in' : ''"
                    class="chart-dot-pulse block w-5 h-5 rounded-full bg-violet-600/20"
                  />
                  <span
                    :class="chartInView ? 'chart-dot--in' : ''"
                    class="chart-dot absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_0_3px_rgba(255,255,255,0.9)]"
                  />
                </div>

                <!-- X-axis labels overlay -->
                <div class="absolute inset-x-0 bottom-0 flex justify-between text-[11px] text-slate-400 font-mono px-2 pointer-events-none">
                  <span>Durante o evento</span>
                  <span class="hidden sm:inline">+30 dias</span>
                  <span>Próxima edição</span>
                </div>
              </div>
            </div>
          </div>

          <!-- KPI counter strip, below chart -->
          <div ref="kpiStripEl" class="mt-6 mx-auto max-w-4xl">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div v-for="(kpi, idx) in heroKpis" :key="kpi.label" class="text-center md:text-left p-5 rounded-2xl border border-slate-100 bg-slate-50/40">
                <div class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1 tabular-nums">
                  {{ formatKpi(kpiDisplay[idx], kpi) }}
                </div>
                <div class="text-xs md:text-sm text-slate-500">{{ kpi.label }}</div>
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
          <div class="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div class="md:col-span-5 md:sticky md:top-32">
              <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-6">
                Evento não é só agenda.<br />
                <span class="text-slate-400">É um pequeno mercado.</span>
              </h2>
              <p class="text-lg text-slate-600 leading-relaxed">
                Durante o seu evento, milhares de pessoas se encontram, olham, compram e recomendam.
                A Trilha Flow é o app que organiza tudo isso num só lugar: com a sua marca, com regras
                que você define, e com novas formas de faturar sem aumentar o custo do evento.
                A bilheteria continua sendo da sua plataforma — a Trilha começa depois que o público já está com você.
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
         RETENTION — Por que o público abre o app
    ============================== -->
    <section class="py-24 md:py-32 bg-white border-t border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <div class="text-xs font-medium uppercase tracking-wider text-violet-600 mb-4">Por que o público abre o app</div>
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-5">
              Um app que as pessoas querem abrir<br />
              <span class="text-slate-400">— não que são forçadas a usar.</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Gamificação, sorteios e praticidades reais no dia. Quem entra pra ganhar um brinde fica pra pedir no estande, ver cardápio e acompanhar a programação. A cada toque, mais tempo de tela — e mais dado pro seu patrocinador.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <div
              v-for="hook in retentionHooks"
              :key="hook.title"
              class="group relative p-6 md:p-7 rounded-2xl border border-slate-200 bg-white hover:border-violet-200 hover:shadow-lg hover:shadow-violet-900/5 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <Icon :name="hook.icon" class="w-5 h-5" />
                </div>
                <div class="text-xs font-medium text-slate-400 uppercase tracking-wide">{{ hook.tag }}</div>
              </div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">{{ hook.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed">{{ hook.description }}</p>
            </div>
          </div>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <div class="flex items-center gap-2">
              <Icon name="lucide:check-circle-2" class="w-4 h-4 text-violet-500" />
              <span>App com a sua marca</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:check-circle-2" class="w-4 h-4 text-violet-500" />
              <span>Regras definidas por você</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:check-circle-2" class="w-4 h-4 text-violet-500" />
              <span>Funciona online e offline no evento</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         REVENUE STREAMS (core monetization)
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.08]"
           style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0); background-size: 32px 32px;" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/10 blur-3xl rounded-full" />

      <div class="container mx-auto px-6 sm:px-8 relative">
        <div class="max-w-3xl mb-16">
          <div class="text-xs font-medium uppercase tracking-wider text-violet-300 mb-4">Três formas novas · sem aumentar custo</div>
          <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
            Três formas novas de ganhar dinheiro<br />no seu evento sem aumentar o custo.
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
            100% da receita é sua
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            Zero porcentagem sobre vendas
          </span>
          <span class="inline-flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>

    <!-- ==============================
         ALWAYS-ON — Sticky scroll storytelling (3 atos)
    ============================== -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-16">
            <div class="text-xs font-medium uppercase tracking-wider text-violet-600 mb-4">O evento que não dorme</div>
            <h2 class="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-6">
              Evento comum morre no último dia.<br />
              <span class="text-slate-400">O seu continua faturando.</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Três atos. Durante o evento, o app centraliza todo mundo. Nos 30 dias seguintes, continua vendendo por você. Na próxima edição, você chega com público fidelizado e cota que vira contrato com planilha — não com promessa.
            </p>
          </div>

          <!-- Sticky storytelling layout -->
          <div class="grid md:grid-cols-12 gap-10 md:gap-14">
            <!-- Sticky mockup (desktop only, hidden on mobile) -->
            <div class="hidden md:block md:col-span-5">
              <div class="sticky top-32">
                <div class="relative mx-auto aspect-[9/19] max-w-xs rounded-[2.5rem] border border-slate-300 bg-slate-950 p-3 shadow-2xl shadow-slate-900/20">
                  <!-- Phone notch -->
                  <div class="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-950 rounded-full z-20" />

                  <!-- Screen -->
                  <div class="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <transition name="mockup-fade" mode="out-in">
                      <!-- State 1: Feed -->
                      <div v-if="activeAct === 0" key="act-0" class="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
                        <div class="flex items-center justify-between">
                          <div class="h-3 w-16 bg-slate-900 rounded-full" />
                          <div class="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center">
                            <Icon name="lucide:bell" class="w-3 h-3 text-violet-600" />
                          </div>
                        </div>
                        <div class="rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 p-3 text-white">
                          <div class="text-[10px] uppercase tracking-wide opacity-80 mb-1">Missão do dia</div>
                          <div class="text-sm font-semibold leading-tight">Grave um vídeo no estande</div>
                          <div class="mt-2 flex items-center gap-2 text-[10px]">
                            <Icon name="lucide:coins" class="w-3 h-3" />
                            <span>+50 moedas</span>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col gap-2">
                          <div v-for="n in 3" :key="n" class="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                            <div class="flex items-center gap-2">
                              <div class="w-6 h-6 rounded-full bg-slate-200" />
                              <div class="h-2 w-20 bg-slate-200 rounded-full" />
                            </div>
                            <div class="mt-2 h-12 rounded-md bg-slate-200" />
                          </div>
                        </div>
                      </div>

                      <!-- State 2: Dashboard / 30 days -->
                      <div v-else-if="activeAct === 1" key="act-1" class="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
                        <div class="flex items-center gap-2">
                          <Icon name="lucide:trending-up" class="w-4 h-4 text-emerald-600" />
                          <div class="text-[10px] font-medium uppercase tracking-wide text-slate-500">30 dias depois</div>
                        </div>
                        <div class="rounded-xl border border-slate-200 bg-white p-3">
                          <div class="text-[10px] text-slate-400 uppercase tracking-wide">Atividade</div>
                          <div class="text-xl font-semibold text-slate-900 tabular-nums">— —</div>
                          <svg viewBox="0 0 100 30" class="w-full h-8 mt-1">
                            <path d="M 0 25 Q 20 10, 40 15 T 80 12 L 100 8" fill="none" stroke="#7c3aed" stroke-width="2" />
                          </svg>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                          <div class="rounded-lg border border-slate-200 bg-white p-2">
                            <Icon name="lucide:video" class="w-3 h-3 text-violet-600 mb-1" />
                            <div class="text-[9px] text-slate-400">Vídeos ativos</div>
                            <div class="text-sm font-semibold text-slate-900">— —</div>
                          </div>
                          <div class="rounded-lg border border-slate-200 bg-white p-2">
                            <Icon name="lucide:shopping-bag" class="w-3 h-3 text-violet-600 mb-1" />
                            <div class="text-[9px] text-slate-400">Vendas</div>
                            <div class="text-sm font-semibold text-slate-900">— —</div>
                          </div>
                        </div>
                        <div class="rounded-lg border border-slate-200 bg-slate-50 p-2">
                          <div class="flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <div class="text-[9px] text-slate-500">Loja ativa · 24/7</div>
                          </div>
                        </div>
                      </div>

                      <!-- State 3: Sponsor report / next edition -->
                      <div v-else key="act-2" class="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
                        <div class="flex items-center gap-2">
                          <Icon name="lucide:file-text" class="w-4 h-4 text-violet-600" />
                          <div class="text-[10px] font-medium uppercase tracking-wide text-slate-500">Relatório pro patrocinador</div>
                        </div>
                        <div class="rounded-xl border border-slate-200 bg-white p-3 space-y-2">
                          <div class="text-[10px] text-slate-400 uppercase tracking-wide">Patrocinador ouro</div>
                          <div class="h-2 w-24 bg-slate-900 rounded-full" />
                          <div class="pt-2 border-t border-slate-100 space-y-2">
                            <div class="flex items-center justify-between">
                              <span class="text-[9px] text-slate-400">Alcance real</span>
                              <span class="text-[10px] font-semibold text-slate-900">— —</span>
                            </div>
                            <div class="flex items-center justify-between">
                              <span class="text-[9px] text-slate-400">Interações</span>
                              <span class="text-[10px] font-semibold text-slate-900">— —</span>
                            </div>
                            <div class="flex items-center justify-between">
                              <span class="text-[9px] text-slate-400">Leads</span>
                              <span class="text-[10px] font-semibold text-slate-900">— —</span>
                            </div>
                          </div>
                        </div>
                        <div class="rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-3 text-white">
                          <div class="text-[10px] uppercase tracking-wide opacity-80 mb-1">Próxima edição</div>
                          <div class="text-xs font-semibold leading-tight">Cota renovada com número real.</div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <!-- Act indicator dots -->
                <div class="mt-6 flex items-center justify-center gap-2">
                  <span
                    v-for="(_, i) in alwaysOn"
                    :key="i"
                    class="transition-all duration-300 rounded-full"
                    :class="activeAct === i ? 'w-6 h-2 bg-violet-600' : 'w-2 h-2 bg-slate-300'"
                  />
                </div>
              </div>
            </div>

            <!-- Text blocks -->
            <div class="md:col-span-7 space-y-8 md:space-y-24">
              <div
                v-for="(phase, i) in alwaysOn"
                :key="phase.title"
                :ref="el => { if (el) actRefs[i] = el as HTMLElement }"
                :data-act-index="i"
                class="relative p-7 md:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-500"
                :class="activeAct === i ? 'border-violet-300 shadow-xl shadow-violet-900/5' : ''"
              >
                <!-- Mobile icon badge (compacto) -->
                <div class="md:hidden mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50 border border-violet-100">
                  <Icon :name="phase.icon" class="w-6 h-6 text-violet-600" />
                </div>

                <div class="flex items-baseline justify-between mb-5">
                  <div class="text-sm font-medium text-violet-600 uppercase tracking-wide">{{ phase.window }}</div>
                  <div class="text-xs text-slate-400 font-mono">0{{ i + 1 }}</div>
                </div>
                <h3 class="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3 leading-tight">{{ phase.title }}</h3>
                <p class="text-slate-600 leading-relaxed mb-5">{{ phase.description }}</p>
                <ul class="space-y-2.5 pt-5 border-t border-slate-100">
                  <li v-for="bullet in phase.bullets" :key="bullet" class="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         GROWTH LOOP — Radial flywheel
    ============================== -->
    <section class="py-24 md:py-32 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14 text-center mx-auto">
            <div class="text-xs font-medium uppercase tracking-wider text-violet-600 mb-4">Flywheel</div>
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-4">
              Um loop que faz a próxima edição<br />
              <span class="text-slate-400">ser maior que a anterior.</span>
            </h2>
            <p class="text-slate-600 leading-relaxed">
              Cada edição alimenta a próxima. Sem mais gente na operação, sem mais complicação.
            </p>
          </div>

          <!-- Desktop: radial layout -->
          <div class="hidden md:block relative mx-auto aspect-square max-w-2xl">
            <!-- Center node -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-slate-950 text-white flex items-center justify-center text-center p-5 shadow-2xl shadow-slate-900/20">
              <div>
                <Icon name="lucide:refresh-cw" class="w-6 h-6 mx-auto mb-2 text-violet-400" />
                <div class="text-sm font-semibold leading-tight">Cada volta<br />= mais receita</div>
              </div>
            </div>

            <!-- Orbital ring -->
            <div class="absolute inset-[12%] rounded-full border-2 border-dashed border-slate-200" />

            <!-- Radial nodes -->
            <div
              v-for="(stage, i) in flywheel"
              :key="stage.label"
              class="absolute w-44 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-violet-300 transition-all"
              :style="radialNodeStyle(i, flywheel.length)"
            >
              <div class="flex items-center gap-2 mb-2">
                <Icon :name="stage.icon" class="w-4 h-4 text-violet-600" />
                <div class="text-[10px] font-mono text-slate-400">0{{ i + 1 }}</div>
              </div>
              <div class="font-semibold text-slate-900 tracking-tight text-sm mb-1 leading-tight">{{ stage.label }}</div>
              <div class="text-xs text-slate-500 leading-snug">{{ stage.detail }}</div>
            </div>
          </div>

          <!-- Mobile: stacked with connecting line -->
          <div class="md:hidden space-y-3 relative">
            <div
              v-for="(stage, i) in flywheel"
              :key="stage.label"
              class="relative p-5 rounded-2xl border border-slate-200 bg-white"
            >
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <Icon :name="stage.icon" class="w-4 h-4 text-violet-600" />
                </div>
                <div class="text-xs font-mono text-slate-400">0{{ i + 1 }}</div>
              </div>
              <div class="font-semibold text-slate-900 tracking-tight mb-1">{{ stage.label }}</div>
              <div class="text-sm text-slate-500 leading-snug">{{ stage.detail }}</div>
              <div v-if="i < flywheel.length - 1" class="absolute left-9 top-full h-3 w-px bg-slate-200" />
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
         STAKEHOLDERS — first card dark (primary buyer)
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
            <NuxtLink
              v-for="(persona, idx) in personas"
              :key="persona.slug"
              :to="persona.slug"
              class="group relative p-7 rounded-2xl transition-all duration-300"
              :class="idx === 0
                ? 'bg-slate-950 text-white border border-slate-900 shadow-2xl shadow-slate-900/20 hover:shadow-violet-900/20 md:-translate-y-1'
                : 'border border-slate-200 bg-white hover:border-slate-900/20 hover:shadow-xl hover:shadow-slate-900/5'"
            >
              <div v-if="idx === 0" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-200 text-[10px] font-medium uppercase tracking-wider mb-3">
                Comprador principal
              </div>
              <h3 class="text-xl font-semibold tracking-tight mb-2" :class="idx === 0 ? 'text-white' : 'text-slate-900'">
                {{ persona.title }}
              </h3>
              <p class="text-sm leading-snug mb-6" :class="idx === 0 ? 'text-slate-400' : 'text-slate-500'">
                {{ persona.value }}
              </p>
              <span class="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    :class="idx === 0 ? 'text-violet-300 group-hover:text-white' : 'text-slate-900 group-hover:text-violet-600'">
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
            Planos mensais e anuais. 100% da receita é sua. Marca uma conversa e te mostramos o modelo pra sua realidade.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contato"
                      class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-medium px-6 py-3.5 rounded-full transition-all duration-200">
              Agendar conversa
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
            <NuxtLink to="/precos"
                      class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              Ver preços
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky mobile CTA (aparece só em telas pequenas, depois de scroll e escondido no final) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="showStickyCta"
        class="md:hidden fixed inset-x-3 z-40 pointer-events-none"
        style="bottom: max(env(safe-area-inset-bottom, 0px), 12px);"
      >
        <NuxtLink
          to="/contato"
          class="pointer-events-auto flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium px-5 py-3.5 rounded-full shadow-lg shadow-slate-900/25 ring-1 ring-white/10"
        >
          Agendar conversa
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </NuxtLink>
      </div>
    </transition>

    <!-- Safe area extra no final pra não cobrir conteúdo com a CTA fixa no mobile -->
    <div class="md:hidden h-20" aria-hidden="true" />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// ==============================
// SEO
// ==============================
useHead({
  title: 'Trilha Flow — App para eventos que continua vendendo depois',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/' }
  ],
  meta: [
    {
      name: 'description',
      content: 'App do seu evento com moeda própria, loja dos expositores e vídeos do público. Seu evento acaba no domingo — sua receita, não. Planos mensais e anuais, 100% da receita é sua.'
    },
    { property: 'og:title', content: 'Trilha Flow — App para eventos que continua vendendo depois' },
    { property: 'og:description', content: 'App do seu evento com moeda própria, loja dos expositores e vídeos do público. Planos mensais e anuais, 100% da receita é sua.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/' },
    { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// ==============================
// Reduced motion preference
// ==============================
const prefersReducedMotion = ref(false)
function detectReducedMotion() {
  if (typeof window === 'undefined') return
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ==============================
// Hero — mouse-reactive orb
// ==============================
const mouseX = ref(0)
const mouseY = ref(0)
const winW = ref(1)
const winH = ref(1)

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}
function onResize() {
  if (typeof window === 'undefined') return
  winW.value = window.innerWidth
  winH.value = window.innerHeight
}

// Scroll position for parallax
const scrollY = ref(0)
function onScrollParallax() {
  if (typeof window === 'undefined') return
  scrollY.value = window.scrollY || window.pageYOffset || 0
}

const orbStyle = computed(() => {
  if (prefersReducedMotion.value) {
    return { transform: 'translate(-50%, 0)' }
  }
  // Stronger mouse tracking + downward parallax as user scrolls
  const isMobile = winW.value < 768
  const dx = isMobile ? 0 : (mouseX.value - winW.value / 2) * 0.09
  const dy = isMobile ? 0 : (mouseY.value - winH.value / 2) * 0.09
  const parallax = scrollY.value * 0.25
  return { transform: `translate(calc(-50% + ${dx}px), ${dy + parallax}px)` }
})

// Grid parallax (moves up slower than scroll, classic Apple depth)
const gridParallaxStyle = computed(() => {
  if (prefersReducedMotion.value) return {}
  return { transform: `translate3d(0, ${scrollY.value * -0.15}px, 0)` }
})

// Headline fade+scale as user scrolls past hero (Apple-style release)
const heroHeadlineStyle = computed(() => {
  if (prefersReducedMotion.value) return {}
  const fadeStart = 0
  const fadeEnd = 600
  const progress = Math.min(Math.max((scrollY.value - fadeStart) / (fadeEnd - fadeStart), 0), 1)
  const opacity = 1 - progress * 0.55
  const scale = 1 - progress * 0.04
  const translateY = progress * -18
  return {
    opacity: String(opacity),
    transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
    transformOrigin: '50% 0%'
  }
})

// Chart card tilts slightly with mouse (3D depth)
const heroCardStyle = computed(() => {
  if (prefersReducedMotion.value || winW.value < 768) return {}
  const rx = ((mouseY.value - winH.value / 2) / winH.value) * -4
  const ry = ((mouseX.value - winW.value / 2) / winW.value) * 4
  return {
    transform: `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
})

// ==============================
// Hero chart — draw-on animation
// ==============================
const heroChartEl = ref<HTMLElement | null>(null)
const chartInView = ref(false)

const TRADITIONAL_LEN = 700
const TRILHA_LEN = 680

const traditionalPathStyle = computed(() => {
  if (prefersReducedMotion.value || chartInView.value) {
    return {
      strokeDasharray: '4 4',
      strokeDashoffset: '0',
      transition: prefersReducedMotion.value ? 'none' : 'stroke-dashoffset 1.4s ease-out'
    }
  }
  // initial — hidden
  return {
    strokeDasharray: `${TRADITIONAL_LEN}`,
    strokeDashoffset: `${TRADITIONAL_LEN}`,
    transition: 'stroke-dashoffset 1.4s ease-out'
  }
})

const trilhaPathStyle = computed(() => {
  if (prefersReducedMotion.value || chartInView.value) {
    return {
      strokeDasharray: `${TRILHA_LEN}`,
      strokeDashoffset: '0',
      transition: prefersReducedMotion.value ? 'none' : 'stroke-dashoffset 1.8s ease-out 0.4s'
    }
  }
  return {
    strokeDasharray: `${TRILHA_LEN}`,
    strokeDashoffset: `${TRILHA_LEN}`,
    transition: 'stroke-dashoffset 1.8s ease-out 0.4s'
  }
})

// ==============================
// KPI counter on-visible
// ==============================
interface Kpi {
  value: string
  label: string
  numeric: number
  suffix: string
}

const heroKpis: Kpi[] = [
  { value: '3.500+', label: 'Participantes ativos em um único evento', numeric: 3500, suffix: '+' },
  { value: '205K', label: 'Visualizações em reels gerados pelo público', numeric: 205, suffix: 'K' },
  { value: '14', label: 'Sessões por participante durante o evento', numeric: 14, suffix: '' },
  { value: '20K+', label: 'Interações gamificadas no app', numeric: 20, suffix: 'K+' }
]

const kpiStripEl = ref<HTMLElement | null>(null)
const kpiDisplay = reactive(heroKpis.map(() => 0))

// ==============================
// Sticky mobile CTA visibility
// ==============================
const showStickyCta = ref(false)
function onScrollForCta() {
  if (typeof window === 'undefined') return
  const y = window.scrollY || window.pageYOffset || 0
  const docH = document.documentElement.scrollHeight
  const winH = window.innerHeight
  const nearBottom = y + winH >= docH - 240
  showStickyCta.value = y > 600 && !nearBottom
}

function formatKpi(current: number, kpi: Kpi) {
  const rounded = Math.round(current)
  const formatted = rounded >= 1000 ? rounded.toLocaleString('pt-BR') : String(rounded)
  return `${formatted}${kpi.suffix}`
}

function animateKpis() {
  if (prefersReducedMotion.value) {
    heroKpis.forEach((k, i) => { kpiDisplay[i] = k.numeric })
    return
  }
  const duration = 1200
  const start = performance.now()
  const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

  function tick(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutExpo(progress)
    heroKpis.forEach((k, i) => {
      kpiDisplay[i] = k.numeric * eased
    })
    if (progress < 1) requestAnimationFrame(tick)
    else heroKpis.forEach((k, i) => { kpiDisplay[i] = k.numeric })
  }
  requestAnimationFrame(tick)
}

// ==============================
// Sticky scroll storytelling — active act detection
// ==============================
const actRefs = reactive<HTMLElement[]>([])
const activeAct = ref(0)

// ==============================
// Radial flywheel positioning
// ==============================
function radialNodeStyle(index: number, total: number) {
  // Start from top (-90deg) and go clockwise
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  // 50% is center; radius at 42% from center in percentage units
  const radiusPct = 42
  const x = 50 + radiusPct * Math.cos(angle)
  const y = 50 + radiusPct * Math.sin(angle)
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)'
  }
}

// ==============================
// Intersection observer setup
// ==============================
let chartObserver: IntersectionObserver | null = null
let kpiObserver: IntersectionObserver | null = null
let actObserver: IntersectionObserver | null = null
let kpiAnimated = false

onMounted(async () => {
  detectReducedMotion()
  onResize()
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('scroll', onScrollForCta, { passive: true })
  window.addEventListener('scroll', onScrollParallax, { passive: true })
  onScrollForCta()
  onScrollParallax()

  await nextTick()

  // Chart observer
  if (heroChartEl.value) {
    chartObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chartInView.value = true
        }
      })
    }, { threshold: 0.3 })
    chartObserver.observe(heroChartEl.value)
  }

  // KPI counter observer
  if (kpiStripEl.value) {
    kpiObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !kpiAnimated) {
          kpiAnimated = true
          animateKpis()
        }
      })
    }, { threshold: 0.5 })
    kpiObserver.observe(kpiStripEl.value)
  }

  // Act storytelling observer
  if (actRefs.length) {
    actObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).dataset.actIndex)
          if (!Number.isNaN(idx)) activeAct.value = idx
        }
      })
    }, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    })
    actRefs.forEach((el) => { if (el) actObserver!.observe(el) })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScrollForCta)
  window.removeEventListener('scroll', onScrollParallax)
  chartObserver?.disconnect()
  kpiObserver?.disconnect()
  actObserver?.disconnect()
})

// ==============================
// Data
// ==============================

const categoryLayers = [
  {
    title: 'O app do evento, com a sua marca',
    description: 'Seus participantes baixam um app com a cara do seu evento. Agenda, expositores, avisos, mapa e tudo mais que o público precisa, num só lugar.'
  },
  {
    title: 'Uma moeda própria e uma loja dentro do app',
    description: 'Os participantes ganham moedas cumprindo missões e podem gastar na loja oficial, com expositores, ou em experiências do evento. Você fica com 100% do que vende.'
  },
  {
    title: 'Patrocínio com número, não com achismo',
    description: 'Seus patrocinadores pagam por impacto real: quantas pessoas viram, clicaram, participaram. Cotas digitais novas, que antes da Trilha nem existiam.'
  }
]

const revenueStreams = [
  {
    metric: '01',
    title: 'Patrocínio digital com números reais',
    description: 'Banners, missões patrocinadas, notificações segmentadas, quizzes de marca. Cotas novas dentro do app, com relatório de quantas pessoas viram e interagiram. Cota vira contrato com planilha — não com promessa.'
  },
  {
    metric: '02',
    title: 'Expositores vendendo pelo app',
    description: 'Seus expositores continuam vendendo antes, durante e depois do evento, pelo próprio app. Você define as regras e fica com 100% do que o evento fatura.'
  },
  {
    metric: '03',
    title: 'Moeda do evento + loja interna',
    description: 'O público compra moeda virtual, gasta em experiências, produtos e com expositores. Receita nova que antes não existia.'
  }
]

const alwaysOn = [
  {
    window: 'Durante o evento',
    title: 'Todo mundo dentro do app',
    icon: 'lucide:smartphone',
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
    icon: 'lucide:trending-up',
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
    icon: 'lucide:users',
    description: 'Você chega no próximo evento com uma base já engajada. Os dados do ano anterior viram argumento pra vender cotas melhores e convencer mais expositores — porque você tem número de verdade.',
    bullets: [
      'Histórico de quem participou',
      'Dados reais pra vender patrocínio',
      'Canal direto com público e expositores',
      'Moedas que viram da edição anterior'
    ]
  }
]

const retentionHooks = [
  {
    tag: 'Gamificação',
    title: 'Missões, pontos e ranking',
    description: 'Cada ação vira ponto: visitar estande, assistir palestra, gravar vídeo. Quem participa mais, sobe no ranking e ganha.',
    icon: 'lucide:target'
  },
  {
    tag: 'Sorteios',
    title: 'Roleta e premiação instantânea',
    description: 'Gira a roleta, ganha brinde do patrocinador na hora. Chamariz que enche estande e justifica patrocínio premium.',
    icon: 'lucide:gift'
  },
  {
    tag: 'Pedidos no estande',
    title: 'Comanda digital e QR',
    description: 'Pede pelo app, retira no estande. Menos fila, mais giro — e o dado da venda fica com o organizador.',
    icon: 'lucide:scan-line'
  },
  {
    tag: 'Cardápios',
    title: 'Cardápio digital dos expositores',
    description: 'Cada estande com sua vitrine, foto e preço. O público consulta antes de andar — e volta mais vezes.',
    icon: 'lucide:utensils'
  },
  {
    tag: 'Moeda do evento',
    title: 'Saldo que vale até a próxima edição',
    description: 'Ganhou participando, gasta no evento ou guarda pra próxima. Retenção que não termina quando o portão fecha.',
    icon: 'lucide:coins'
  },
  {
    tag: 'Feed social',
    title: 'Feed de vídeos curtos do público',
    description: 'Vídeos verticais do evento rodando dentro do app. Viraliza, gera conteúdo autêntico — e alimenta a próxima edição.',
    icon: 'lucide:play-circle'
  }
]

const flywheel = [
  { label: 'Público grava vídeos', detail: 'Incentivado por missões e recompensas.', icon: 'lucide:video' },
  { label: 'Os vídeos viralizam', detail: 'Views dentro do app e fora dele.', icon: 'lucide:trending-up' },
  { label: 'Patrocínio vale mais', detail: 'Com número real de quem viu e interagiu.', icon: 'lucide:bar-chart-3' },
  { label: 'Expositores vendem', detail: 'Antes, durante e depois do evento.', icon: 'lucide:shopping-bag' },
  { label: 'Você chega maior', detail: 'Na próxima edição, já começa na frente.', icon: 'lucide:rocket' }
]

const caseMetrics = [
  { value: '3.500+', label: 'usuários ativos durante o evento' },
  { value: '205K', label: 'views em reels gerados pelo público' },
  { value: '14', label: 'sessões por participante' },
  { value: '20K+', label: 'interações gamificadas' }
]

const personas = [
  { slug: '/para-organizadores', title: 'Organizadores', value: 'Três novas formas de faturar sem aumentar o custo do evento.' },
  { slug: '/para-expositores', title: 'Expositores', value: 'Vende antes, durante e depois, pelo app do evento.' },
  { slug: '/para-patrocinadores', title: 'Patrocinadores', value: 'Patrocínio com relatório de quantas pessoas viram e clicaram.' },
  { slug: '/para-participantes', title: 'Participantes', value: 'Ganha moedas e prêmios participando do evento.' }
]

const segments = [
  { slug: '/eventos/agro', label: 'Feiras Agro' },
  { slug: '/eventos/tech', label: 'Eventos Tech' },
  { slug: '/eventos/corporativos', label: 'Eventos Corporativos' },
  { slug: '/eventos/feiras', label: 'Feiras em Geral' },
  { slug: '/eventos/festivais', label: 'Festivais' },
  { slug: '/como-monetizar-evento', label: 'Como monetizar o seu evento' }
]
</script>

<style scoped>
.mockup-fade-enter-active,
.mockup-fade-leave-active {
  transition: opacity 400ms ease, transform 400ms ease;
}
.mockup-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.mockup-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* Chart fill reveal */
.chart-fill {
  opacity: 0;
  transition: opacity 900ms ease-out 1.0s;
}
.chart-fill--in {
  opacity: 1;
}

/* Chart end dot — pulse (HTML overlay, não SVG, pra ficar redonda) */
.chart-dot-pulse {
  opacity: 0;
  transform-origin: center center;
  animation: chart-dot-pulse 2.4s ease-out infinite;
  animation-delay: 2.2s;
}
.chart-dot-pulse.chart-dot--in {
  opacity: 1;
}
@keyframes chart-dot-pulse {
  0%   { transform: scale(1);    opacity: 0.6; }
  70%  { transform: scale(2.6);  opacity: 0;   }
  100% { transform: scale(2.6);  opacity: 0;   }
}
.chart-dot {
  opacity: 0;
  transition: opacity 600ms ease-out 2s;
}
.chart-dot.chart-dot--in {
  opacity: 1;
}

/* Hero headline — entrada suave no mount (Apple-style reveal) */
.hero-headline {
  animation: hero-rise 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
@keyframes hero-rise {
  0%   { opacity: 0; transform: translate3d(0, 24px, 0) scale(0.98); }
  100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
}

/* Gradient shimmer no trecho colorido da headline */
.hero-gradient-text {
  background-size: 200% 100%;
  animation: gradient-shimmer 7s ease-in-out infinite;
}
@keyframes gradient-shimmer {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .mockup-fade-enter-active,
  .mockup-fade-leave-active {
    transition: none;
  }
  .hero-headline,
  .hero-gradient-text {
    animation: none;
  }
}
</style>
