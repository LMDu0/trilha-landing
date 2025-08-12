<template>
  <section class="py-12 md:py-20 bg-slate-900/30">
    <div class="container mx-auto px-6 sm:px-8">
      
      <!-- Section header -->
      <div class="max-w-4xl mx-auto text-center mb-10 md:mb-20">
        <div class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Depoimentos
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          O que nossos
          <span class="text-violet-400 block">clientes dizem</span>
        </h2>
        
        <p class="text-xl text-slate-400 leading-relaxed">
          Conheça a experiência de quem confia na Trilha Labs
        </p>
      </div>

      <!-- Testimonial Card - Design mais orgânico -->
      <div class="max-w-5xl mx-auto">
        <!-- Layout assimétrico e orgânico -->
        <div class="relative">
          
          <!-- Card principal com formato mais orgânico -->
          <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
            
            <!-- Elemento decorativo -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-12 -translate-x-12"></div>

            <!-- Layout em grid assimétrico -->
            <div class="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <!-- Lado esquerdo - Foto e info do cliente -->
              <div class="lg:col-span-4 space-y-6">
                
                <!-- Photo com design mais orgânico -->
                <div class="relative w-fit mx-auto lg:mx-0">
                  <div class="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-2 border-violet-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="Junior Moro"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <!-- Verified badge -->
                  <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center border-3 border-slate-900 shadow-lg">
                    <Icon name="lucide:check" class="w-5 h-5 text-white" />
                  </div>
                </div>

                <!-- Info do cliente -->
                <div class="text-center lg:text-left space-y-3">
                  <h3 class="text-2xl font-bold text-white">Junior Moro</h3>
                  <p class="text-violet-400 font-medium">Sócio @belif.marketing</p>
                  <div class="flex items-center justify-center lg:justify-start gap-1">
                    <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  
                  <!-- Project Badge -->
                  <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
                    <Icon name="lucide:calendar" class="w-3 h-3 text-violet-400" />
                    <span class="text-xs text-violet-400 font-medium">Projeto Fenamilho</span>
                  </div>
                </div>
              </div>

              <!-- Lado direito - Depoimento -->
              <div class="lg:col-span-8 space-y-6">
                
                <!-- Quote Icon flutuante -->
                <div class="flex lg:justify-start justify-center">
          <div class="w-11 h-11 bg-violet-500/10 rounded-2xl flex items-center justify-center -rotate-12">
                    <Icon name="lucide:quote" class="w-6 h-6 text-violet-400" />
                  </div>
                </div>

                <!-- Testimonial Text -->
                <blockquote class="text-center lg:text-left">
                  <div class="text-lg lg:text-xl text-slate-200 leading-relaxed space-y-4">
                    <p>
                      "Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente 
                      que fala bonito, mas na hora do 'vamos ver'... desaparece."
                    </p>
                    <p>
                      "Com a Trilha foi diferente desde o começo."
                    </p>
                    <p>
                      "Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece 
                      que eles realmente se importam com o resultado, não só com entregar o trabalho contratado."
                    </p>
                    <p>
                      "A comunicação sempre foi clara, rápida, direta. O app saiu do papel com qualidade, 
                      velocidade e atenção aos detalhes. Zero reclamações ou consideração. 
                      <span class="text-violet-300 font-semibold">Trabalho impecável!</span>"
                    </p>
                    <p>
                      "Foi uma experiência muito boa e com certeza continuaremos como clientes em outros projetos!"
                    </p>
                  </div>
                </blockquote>

                <!-- Métricas do projeto -->
                <div class="grid grid-cols-3 gap-4 pt-4">
                  <div class="text-center lg:text-left">
                    <div class="text-lg font-bold text-white">+300%</div>
                    <div class="text-xs text-slate-400">Engajamento</div>
                  </div>
                  <div class="text-center lg:text-left">
                    <div class="text-lg font-bold text-white">2 meses</div>
                    <div class="text-xs text-slate-400">Entrega</div>
                  </div>
                  <div class="text-center lg:text-left">
                    <div class="text-lg font-bold text-white">5.0★</div>
                    <div class="text-xs text-slate-400">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Additional testimonials preview -->
      <div class="grid md:grid-cols-3 gap-6 mt-10 md:mt-16 max-w-6xl mx-auto">
        
        <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center hover:border-violet-500/20 transition-all duration-300">
          <div class="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="lucide:star" class="w-6 h-6 text-violet-400" />
          </div>
          <div class="text-2xl font-bold text-white mb-1">5.0</div>
          <div class="text-sm text-slate-400">Avaliação média</div>
        </div>

        <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center hover:border-violet-500/20 transition-all duration-300">
          <div class="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="lucide:users" class="w-6 h-6 text-violet-400" />
          </div>
          <div class="text-2xl font-bold text-white mb-1">15+</div>
          <div class="text-sm text-slate-400">Clientes satisfeitos</div>
        </div>

        <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center hover:border-violet-500/20 transition-all duration-300">
          <div class="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="lucide:repeat" class="w-6 h-6 text-violet-400" />
          </div>
          <div class="text-2xl font-bold text-white mb-1">90%</div>
          <div class="text-sm text-slate-400">Taxa de recontratação</div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import BlurReveal from './ui/BlurReveal.vue'
</script>