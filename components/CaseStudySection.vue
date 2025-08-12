<template>
  <section id="cases" class="py-12 md:py-24 bg-slate-900/30">
    <div class="container mx-auto px-6 sm:px-8">
      
      <div class="max-w-4xl mb-12 md:mb-16">
        <div class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Case de Sucesso
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Como elevamos a <span class="text-violet-400">Fenamilho 2025</span> ao próximo nível digital
        </h2>
        
        <p class="text-xl text-slate-400 leading-relaxed">
          Aplicativo oficial que conectou visitantes, organizadores e patrocinadores — do pré ao pós-evento — gerando engajamento recorde, novas oportunidades de negócio e uma experiência unificada para milhares de pessoas.
        </p>
      </div>

      <div class="relative mb-12 md:mb-20">
        
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 right-10 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl"></div>
          <div class="absolute bottom-32 left-20 w-24 h-24 bg-violet-500/3 rounded-full blur-xl"></div>
        </div>

        <BlurReveal :delay="600">
          <div class="max-w-2xl mb-16">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-3 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              <div>
                <h3 class="text-3xl font-bold text-white">O Desafio</h3>
                <div class="text-red-400 text-sm font-medium mt-1">Problemas identificados</div>
              </div>
            </div>
            
            <p class="text-xl text-slate-300 leading-relaxed mb-8">
              Antes do aplicativo, a Fenamilho enfrentava barreiras para explorar todo o potencial digital do evento:
            </p>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="group">
                <div class="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                  <Icon name="lucide:x" class="w-4 h-4 text-red-400" />
                </div>
                <p class="text-slate-400 text-sm">Baixa interação antes da abertura — mesmo com 70% dos participantes acessando apps antes do início, o público não tinha um canal oficial.</p>
              </div>
              <div class="group">
                <div class="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                  <Icon name="lucide:x" class="w-4 h-4 text-red-400" />
                </div>
                <p class="text-slate-400 text-sm">Perda de oportunidades de patrocínio — marcas com visibilidade restrita e sem métricas claras de engajamento/cliques.</p>
              </div>
              <div class="group">
                <div class="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                  <Icon name="lucide:x" class="w-4 h-4 text-red-400" />
                </div>
                <p class="text-slate-400 text-sm">Falta de centralização — informações e interações espalhadas, dificultando o acesso e reduzindo a experiência.</p>
              </div>
            </div>
            <p class="text-slate-400 mt-6">
              Esses fatores limitavam a geração de receita, a experiência do público e o alcance das marcas patrocinadoras.
            </p>
          </div>
        </BlurReveal>

        <BlurReveal :delay="800">
          <div class="flex justify-end">
            <div class="max-w-2xl">
              <div class="flex items-center gap-4 mb-8 justify-end">
                <div>
                  <h3 class="text-3xl font-bold text-white text-right">Nossa Solução</h3>
                  <div class="text-violet-400 text-sm font-medium mt-1 text-right">Abordagem estratégica</div>
                </div>
                <div class="w-3 h-12 bg-gradient-to-b from-violet-500 to-violet-600 rounded-full"></div>
              </div>
              
              <p class="text-xl text-slate-300 leading-relaxed mb-8 text-right">
                Desenvolvemos um aplicativo customizado que reuniu todas as interações e conteúdos em um único canal:
              </p>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="group text-right">
                  <div class="flex justify-end mb-3">
                    <div class="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon name="lucide:check" class="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">Conteúdo centralizado: agenda, mapa interativo, notícias, anúncios e sorteios.</p>
                </div>
                <div class="group text-right">
                  <div class="flex justify-end mb-3">
                    <div class="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon name="lucide:check" class="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">Interação em tempo real: notificações push, login social e roleta de prêmios.</p>
                </div>
                <div class="group text-right">
                  <div class="flex justify-end mb-3">
                    <div class="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon name="lucide:check" class="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">Monetização para patrocinadores: área exclusiva para anúncios e ativações com métricas de cliques.</p>
                </div>
                <div class="group text-right">
                  <div class="flex justify-end mb-3">
                    <div class="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon name="lucide:check" class="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">Gestão otimizada: arquitetura escalável, integrações e suporte técnico dedicado.</p>
                </div>
              </div>
            </div>
          </div>
        </BlurReveal>

        <BlurReveal :delay="1000">
          <div class="mt-12 md:mt-24 text-center">
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
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 1200 + index * 150 } }"
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
        </BlurReveal>
      </div>

        
    </div>
  </section>
</template>

<script setup lang="ts">
import BlurReveal from './ui/BlurReveal.vue'
import ParticleImage from './ui/ParticleImage.vue'
const metrics = [
  { value: '+20K', label: 'Giros na roleta' },
  { value: '205K', label: 'Visualizações de telas' },
  { value: '3.5K', label: 'Usuários ativos' },
  { value: '185', label: 'Prêmios distribuídos' }
]

const technologies = [
  'React Native',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'Redis',
  'AWS',
  'GraphQL',
  'Docker',
  'Kubernetes',
  'Firebase'
]
</script>