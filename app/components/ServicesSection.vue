<template>
  <section id="servicos" class="pt-16 pb-20 md:pt-24 md:pb-32 bg-slate-950 relative overflow-hidden">
    <!-- Grid Pattern Background -->
    <div class="absolute inset-0 grid-pattern opacity-20" />
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Header Section -->
      <header class="max-w-4xl mx-auto text-center mb-12 md:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
          <span class="text-sm font-medium text-violet-400">Serviços</span>
        </div>
        <h2 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Áreas de <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">Atuação</span>
        </h2>
        <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
          Soluções completas para transformar seu negócio digital
        </p>
      </header>

      <!-- Services Grid -->
      <div class="max-w-5xl mx-auto">
        <!-- Primeira linha: 4 cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch mb-4 md:mb-6">
          <!-- E-commerce & Marketplace -->
          <GlowBorder container-class="group h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:shopping-cart" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">E-commerce & Marketplace</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Plataformas de vendas online, marketplaces e gateways de pagamento
              </p>
            </div>
          </GlowBorder>

          <!-- Aplicativos Mobile -->
          <GlowBorder container-class="group h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:smartphone" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Aplicativos Mobile</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Desenvolvimento de apps nativos para Android e iOS personalizados para seu negócio
              </p>
            </div>
          </GlowBorder>

          <!-- Engenharia Web -->
          <GlowBorder container-class="group h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:monitor" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Engenharia Web</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Web apps, landing pages e sistemas web responsivos e performáticos
              </p>
            </div>
          </GlowBorder>

          <!-- Integrações -->
          <GlowBorder container-class="group h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:link" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Integrações</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Conectamos sistemas e APIs para automatizar processos e otimizar fluxos de trabalho
              </p>
            </div>
          </GlowBorder>
        </div>

        <!-- Segunda linha: 3 cards centralizados -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          
          <!-- Consultoria -->
          <GlowBorder container-class="group w-full md:w-auto md:max-w-xs h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:users" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Consultoria</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Análise estratégica e planejamento de projetos tecnológicos para seu crescimento
              </p>
            </div>
          </GlowBorder>

          <!-- IA & Automação -->
          <GlowBorder container-class="group w-full md:w-auto md:max-w-xs h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:brain" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">IA & Automação</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Chatbots inteligentes, automação de processos e soluções com IA
              </p>
            </div>
          </GlowBorder>

          <!-- Modernização de Sistemas -->
          <GlowBorder container-class="group w-full md:w-auto md:max-w-xs h-full">
            <div class="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <div class="w-12 h-12 md:w-14 md:h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Icon name="lucide:refresh-ccw" class="w-6 h-6 md:w-7 md:h-7 text-violet-400" />
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Modernização</h3>
              <p class="text-sm md:text-base text-slate-400 leading-relaxed flex-1 font-light">
                Legacy to cloud, refatoração e arquitetura orientada a domínio
              </p>
            </div>
          </GlowBorder>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlowBorder from './ui/GlowBorder.vue'
</script>


