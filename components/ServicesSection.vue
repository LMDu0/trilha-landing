<template>
  <section id="servicos" class="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Header Section -->
      <header class="max-w-4xl mx-auto text-center mb-8 md:mb-16">
        <div class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Serviços
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Áreas de <span class="text-violet-400">Atuação</span>
        </h2>
      </header>

      <!-- Services Grid -->
      <div class="max-w-5xl mx-auto">
        <!-- Primeira linha: 4 cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch mb-4 md:mb-6">
          <!-- E-commerce & Marketplace -->
          <div class="relative group">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:shopping-cart" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">E-commerce & Marketplace</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Plataformas de vendas online, marketplaces e gateways de pagamento
              </p>
            </div>
          </div>

          <!-- Aplicativos Mobile -->
          <div class="relative group">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:smartphone" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Aplicativos Mobile</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Desenvolvimento de apps nativos para Android e iOS personalizados para seu negócio
              </p>
            </div>
          </div>

          <!-- Engenharia Web -->
          <div class="relative group">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:monitor" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Engenharia Web</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Web apps, landing pages e sistemas web responsivos e performáticos
              </p>
            </div>
          </div>

          <!-- Integrações -->
          <div class="relative group">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:link" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Integrações</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Conectamos sistemas e APIs para automatizar processos e otimizar fluxos de trabalho
              </p>
            </div>
          </div>
        </div>

        <!-- Segunda linha: 3 cards centralizados -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          
          <!-- Consultoria -->
          <div class="relative group w-full md:w-auto md:max-w-xs">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:users" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Consultoria</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Análise estratégica e planejamento de projetos tecnológicos para seu crescimento
              </p>
            </div>
          </div>

          <!-- IA & Automação -->
          <div class="relative group w-full md:w-auto md:max-w-xs">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:brain" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">IA & Automação</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Chatbots inteligentes, automação de processos e soluções com IA
              </p>
            </div>
          </div>

          <!-- Modernização de Sistemas -->
          <div class="relative group w-full md:w-auto md:max-w-xs">
            <GlowingEffect 
              :disabled="false" 
              :spread="30" 
              :blur="5" 
              :proximity="100"
              variant="default"
            />
            <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-2xl p-4 md:p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon name="lucide:refresh-ccw" class="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
              </div>
              <h3 class="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Modernização</h3>
              <p class="text-sm text-slate-400 leading-relaxed flex-1">
                Legacy to cloud, refatoração e arquitetura orientada a domínio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlowingEffect from './ui/GlowingEffect.vue'
</script>


