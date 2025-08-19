<template>
  <section id="cases" class="py-16 md:py-24 bg-slate-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Header Section -->
      <header class="max-w-4xl mb-12 md:mb-20 text-left">
        <div class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Case de Sucesso
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Como elevamos a <span class="text-violet-400">Fenamilho 2025</span> ao próximo nível digital
        </h2>
        <p class="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
          Aplicativo oficial que conectou visitantes, organizadores e patrocinadores — do pré ao pós-evento — gerando engajamento recorde, novas oportunidades de negócio e uma experiência unificada para milhares de pessoas.
        </p>
      </header>

      <!-- App Showcase Layout -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <!-- Apple Card Carousel -->
        <div class="order-1 lg:order-1">
          <AppleCardCarousel 
            :cards="appScreens"
            :auto-play="true"
            :interval="6000"
          />
        </div>

        <!-- Static Content -->
        <div class="order-2 lg:order-2 space-y-6 flex flex-col justify-center">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              Solução completa para eventos
            </h3>
            <p class="text-slate-300 leading-relaxed text-lg">
              Um aplicativo que conecta organizadores, participantes e patrocinadores em uma experiência única, 
              com funcionalidades que abrangem todo o ciclo do evento.
            </p>
          </div>

          <!-- Key Benefits - Grid 2 colunas -->
          <div class="space-y-4">
            <h4 class="text-white font-semibold text-lg">Principais funcionalidades:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:smartphone" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">App nativo iOS e Android</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:calendar" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Agenda do evento</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:newspaper" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Central de notícias</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Mapa interativo</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:bell" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Push notifications</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:gamepad-2" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Roletas e prêmios</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:megaphone" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Espaços para anúncios</span>
              </div>
              <div class="flex items-center gap-3 text-slate-400 bg-slate-900/50 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-slate-800/50">
                <Icon name="lucide:bar-chart-3" class="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span class="text-sm">Analytics detalhados</span>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="pt-6 border-t border-slate-800/60">
            <a 
              href="#contact" 
              class="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-violet-500/25 hover:scale-105"
            >
              Fale conosco
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Resultados Alcançados -->
      <div class="mt-16 md:mt-24 text-center">
        <div class="inline-flex items-center gap-3 mb-8">
          <div class="w-8 h-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
          <h3 class="text-3xl font-bold text-white">Resultados Alcançados</h3>
          <div class="w-8 h-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
        </div>

        <!-- Metrics - Horizontal flow -->
        <div class="flex flex-wrap justify-center gap-8 mb-12">
          <div 
            v-for="(metric, index) in metrics"
            :key="metric.label"
            class="group"
          >
            <div class="text-5xl font-bold text-violet-400 mb-2 group-hover:scale-110 transition-transform">
              {{ metric.value }}
            </div>
            <div class="text-slate-400 text-sm uppercase tracking-wider">{{ metric.label }}</div>
          </div>
        </div>

        <!-- Key achievement - Banner style -->
        <div class="max-w-4xl mx-auto bg-gradient-to-r from-violet-500/10 via-violet-500/5 to-violet-500/10 border-l-4 border-r-4 border-violet-500 p-8 backdrop-blur-sm">
          <p class="text-slate-200 text-lg">
            <span class="text-violet-400 font-bold">+3.000 cliques</span> em anúncios patrocinados e
            <span class="text-violet-400 font-bold">14 sessões por usuário</span> em média durante o evento
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppleCardCarousel from './ui/AppleCardCarousel.vue'

// Dados simples das telas do app para o carousel
const appScreens = [
  {
    id: 'main',
    title: 'Tela Principal',
    description: 'Interface principal do aplicativo',
    image: '/images/fenamilho-app-mockup.svg'
  },
  {
    id: 'pre-event',
    title: 'Pré-evento',
    description: 'Funcionalidades de preparação',
    image: '/images/pre-evento-mockup.svg'
  },
  {
    id: 'live-event',
    title: 'Ao Vivo',
    description: 'Experiência durante o evento',
    image: '/images/durante-evento-mockup.svg'
  },
  {
    id: 'post-event',
    title: 'Pós-evento',
    description: 'Análises e relacionamento',
    image: '/images/pos-evento-mockup.svg'
  },
  {
    id: 'platform',
    title: 'Plataforma',
    description: 'Solução completa',
    image: '/images/produto-plataforma-mockup.svg'
  }
]

// Métricas dos resultados
const metrics = [
  { value: '+20K', label: 'Giros na roleta' },
  { value: '205K', label: 'Visualizações de telas' },
  { value: '3.5K', label: 'Usuários ativos' },
  { value: '185', label: 'Prêmios distribuídos' }
]
</script>