<template>
  <section class="py-8 md:py-16 bg-slate-900/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section header -->
      <div class="max-w-4xl mx-auto text-center mb-6 md:mb-16">
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
          <div class="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-3xl p-4 md:p-8 backdrop-blur-sm relative overflow-hidden">
            
            <!-- Elemento decorativo -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-12 -translate-x-12"></div>

            <!-- Layout em grid assimétrico -->
            <div class="grid lg:grid-cols-12 gap-4 md:gap-8 items-center relative z-10">
              
              <!-- Lado esquerdo - Foto e info do cliente -->
              <div class="lg:col-span-4">
                
                <!-- Mobile: Layout horizontal (foto ao lado das informações) -->
                <div class="flex md:hidden items-start gap-4 mb-6">
                  <!-- Photo -->
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-violet-500/20 rotate-3">
                      <img 
                        src="/images/client.webp" 
                        alt="Junior Moro"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <!-- Verified badge -->
                    <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-violet-500 rounded-xl flex items-center justify-center border-2 border-slate-900 shadow-lg">
                      <Icon name="lucide:check" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <!-- Info ao lado da foto -->
                  <div class="flex-1 space-y-2">
                    <h3 class="text-lg font-bold text-white">Junior Moro</h3>
                    <p class="text-violet-400 font-medium text-sm">
                      Sócio 
                      <a 
                        href="https://instagram.com/belif.marketing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="hover:text-violet-300 transition-colors"
                      >
                        @belif.marketing
                      </a>
                    </p>
                    <div class="flex items-center gap-1">
                      <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="w-3 h-3 text-yellow-400" />
                    </div>
                    <!-- Badge do projeto no mobile -->
                    <div class="inline-flex items-center gap-1.5 px-2 py-1 bg-violet-500/5 border border-violet-500/10 rounded-lg">
                      <Icon name="lucide:calendar" class="w-2.5 h-2.5 text-violet-400/70" />
                      <span class="text-xs text-violet-400/70 font-normal">Projeto Fenamilho</span>
                    </div>
                  </div>
                </div>
                
                <!-- Desktop: Layout vertical -->
                <div class="hidden md:block space-y-6">
                  <!-- Photo com design mais orgânico -->
                  <div class="relative w-fit mx-auto lg:mx-0">
                    <div class="w-32 h-32 rounded-2xl overflow-hidden border-2 border-violet-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img 
                        src="/images/client.webp" 
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
                    <p class="text-violet-400 font-medium">
                      Sócio 
                      <a 
                        href="https://instagram.com/belif.marketing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="hover:text-violet-300 transition-colors"
                      >
                        @belif.marketing
                      </a>
                    </p>
                    <div class="flex items-center justify-center lg:justify-start gap-1 mb-6">
                      <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                
                <!-- Project Badge (apenas desktop) -->
                <div class="hidden md:flex justify-center lg:justify-start">
                  <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
                    <Icon name="lucide:calendar" class="w-3 h-3 text-violet-400" />
                    <span class="text-xs text-violet-400 font-medium">Projeto Fenamilho</span>
                  </div>
                </div>
              </div>

              <!-- Lado direito - Depoimento -->
              <div class="lg:col-span-8 space-y-6">
                
                <!-- Quote Icon flutuante -->
                <div class="flex justify-start">
          <div class="w-11 h-11 bg-violet-500/10 rounded-2xl flex items-center justify-center -rotate-12">
                    <Icon name="lucide:quote" class="w-6 h-6 text-violet-400" />
                  </div>
                </div>

                <!-- Testimonial Text -->
                <blockquote class="text-left">
                  <div class="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed space-y-4">
                    <p>
                      "Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente 
                      que fala bonito, mas na hora do 'vamos ver'... desaparece.
                    </p>
                    <p>
                      Com a Trilha foi diferente desde o começo.
                    </p>
                    <p>
                      Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece 
                      que eles realmente se importam com o resultado, não só com entregar o trabalho contratado.
                    </p>
                    <p>
                      A comunicação sempre foi clara, rápida, direta. O app saiu do papel com qualidade, 
                      velocidade e atenção aos detalhes. Zero reclamações ou consideração. 
                      <span class="text-violet-300 font-semibold">Trabalho impecável!</span>
                    </p>
                    <p>
                      Foi uma experiência muito boa e com certeza continuaremos como clientes em outros projetos!"
                    </p>
                  </div>
                </blockquote>


              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  </section>
</template>

<script setup lang="ts">
</script>