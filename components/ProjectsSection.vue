<template>
  <section id="cases" class="py-16 md:py-20 bg-slate-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Header Section -->
      <header class="max-w-4xl mb-12 md:mb-16 text-left">
        <div class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Case de Sucesso
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Como elevamos a <span class="text-violet-400">Fenamilho 2025</span> ao próximo nível digital
        </h2>
        <div class="space-y-3">
          <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Desenvolvemos o <strong class="text-white">aplicativo oficial da Fenamilho 2025</strong>, uma das maiores 
            feiras de agronegócio da região Sul do Brasil. O projeto conectou visitantes, organizadores e 
            patrocinadores em uma plataforma completa que acompanhou todo o ciclo do evento.
          </p>
          <p class="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Com funcionalidades de pré-evento, experiência ao vivo e relacionamento pós-evento, geramos 
            <strong class="text-violet-400">engajamento recorde</strong>, novas oportunidades de negócio para 
            patrocinadores e uma experiência unificada para milhares de participantes.
          </p>
        </div>
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
          <div class="space-y-4">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              Aplicativo completo para eventos
            </h3>
            <p class="text-slate-300 leading-relaxed text-base md:text-lg">
              Uma plataforma que conecta <strong class="text-white">organizadores, participantes e patrocinadores</strong> 
              em uma experiência integrada. Do pré ao pós-evento, com todas as ferramentas necessárias 
              para engajamento e gestão em tempo real.
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
      <div class="mt-16 md:mt-24">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-8 h-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
            <h3 class="text-3xl font-bold text-white">Resultados Alcançados</h3>
            <div class="w-8 h-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"></div>
          </div>
        </div>

        <!-- Grid de métricas - 2 colunas -->
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          
          <!-- Engajamento -->
          <div class="glass-card rounded-2xl p-6 md:p-8 border-l border-violet-500/50">
            <h4 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Engajamento muito acima da média</h4>
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-3xl md:text-4xl font-bold text-violet-400">14</div>
                <span class="text-sm md:text-base text-slate-300">sessões por usuário</span>
              </div>
              <p class="text-xs md:text-sm text-slate-400 mt-2 md:mt-3">
                Visitantes retornaram ao app repetidamente durante o evento
              </p>
            </div>
          </div>

          <!-- Visibilidade -->
          <div class="glass-card rounded-2xl p-6 md:p-8 border-l border-violet-500/50">
            <h4 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Visibilidade para patrocinadores</h4>
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-3xl md:text-4xl font-bold text-violet-400">205.000</div>
                <span class="text-sm md:text-base text-slate-300">visualizações de telas</span>
              </div>
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-3xl md:text-4xl font-bold text-violet-400">+3.000</div>
                <span class="text-sm md:text-base text-slate-300">cliques em anúncios patrocinados</span>
              </div>
            </div>
          </div>

          <!-- Interação -->
          <div class="glass-card rounded-2xl p-6 md:p-8 border-l border-violet-500/50">
            <h4 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Interação durante o evento</h4>
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-3xl md:text-4xl font-bold text-violet-400">+20.000</div>
                <span class="text-sm md:text-base text-slate-300">giros na roleta e ações gamificadas</span>
              </div>
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-2xl md:text-3xl font-bold text-violet-400">185</div>
                <span class="text-sm md:text-base text-slate-300">prêmios distribuídos</span>
              </div>
            </div>
          </div>

          <!-- Adoção -->
          <div class="glass-card rounded-2xl p-6 md:p-8 border-l border-violet-500/50">
            <h4 class="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Adoção massiva</h4>
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="text-3xl md:text-4xl font-bold text-violet-400">3.500</div>
                <span class="text-sm md:text-base text-slate-300">usuários ativos explorando o app</span>
              </div>
            </div>
          </div>

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
    description: 'Interface principal do aplicativo Fenamilho desenvolvido pela Trilha Labs para eventos agrícolas',
    image: '/images/fenamilho-app-mockup.webp'
  },
  {
    id: 'pre-event',
    title: 'Pré-evento',
    description: 'Funcionalidades de preparação e engajamento antes do evento da Fenamilho',
    image: '/images/pre-evento-mockup.webp'
  },
  {
    id: 'live-event',
    title: 'Ao Vivo',
    description: 'Experiência durante o evento com agenda, notícias e gamificação em tempo real',
    image: '/images/durante-evento-mockup.webp'
  },
  {
    id: 'post-event',
    title: 'Pós-evento',
    description: 'Análises de dados, relacionamento com participantes e resultados do evento',
    image: '/images/pos-evento-mockup.webp'
  },
  {
    id: 'platform',
    title: 'Plataforma',
    description: 'Solução completa de software para gestão de eventos agrícolas e feiras',
    image: '/images/produto-plataforma-mockup.webp'
  }
]

// Dados dos resultados agora estão inline no template
</script>