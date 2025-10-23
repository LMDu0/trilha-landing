<template>
  <section class="relative min-h-[56vh] md:min-h-screen bg-slate-950 overflow-hidden">
    <WavyBackground 
      class="absolute inset-0 h-full"
      :colors="['#8b5cf6', '#a855f7', '#c084fc']"
      :background-fill="'#020617'"
      :wave-opacity="0.3"
      :blur="6"
      speed="slow"
    />
    <div class="container mx-auto px-6 sm:px-8 relative z-10">
      <!-- Layout assimétrico inspirado no Raycast -->
      <div class="grid lg:grid-cols-12 gap-8 md:gap-12 items-center md:min-h-[calc(100vh-4rem)] pt-12 pb-0 md:py-20">
        
        <!-- Conteúdo principal (lado esquerdo) -->
        <div class="lg:col-span-7 py-8 md:py-10">

          <!-- Main headline -->
          <div class="py-8 md:py-10">
            <h1 class="text-4xl lg:text-7xl font-bold leading-[0.9]">
              <span class="text-white block">Não seguimos tendências.</span>
              <span class="text-violet-300 block mt-3 md:mt-0">Criamos caminhos.</span>
            </h1>

            <p class="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl pt-8 md:pt-10">
              Aplicativos e plataformas sob medida para negócios que querem ir além, com performance e resultados reais.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4 md:pt-4">
            <Button 
              size="lg"
              as="a"
              href="https://wa.me/555484026806"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-violet-500/25 border border-violet-400/20"
              @click="trackButtonClick('cta_whatsapp', 'hero')"
            >
              <span class="inline-flex items-center gap-2">
                <Icon name="lucide:message-circle" class="w-5 h-5" />
                Agende uma consultoria gratuita
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              class="border-slate-600/50 text-slate-200 hover:text-white hover:border-violet-400/50 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm"
              as="a" href="#cases"
              @click="trackButtonClick('view_cases', 'hero')"
            >
              Ver nossos cases
              <Icon name="lucide:play" class="w-5 h-5 ml-2" />
            </Button>
          </div>

        </div>

        <!-- Espaço vazio no lado direito -->
        <div class="lg:col-span-5">
          <!-- Sem conteúdo visual -->
        </div>
      </div>
    </div>

    <!-- Scroll indicator removido no mobile -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
      <div class="animate-bounce">
        <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-400" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue'
import WavyBackground from './ui/WavyBackground.vue'
import { useMixpanel } from '../composables/useMixpanel'

const { trackButtonClick } = useMixpanel()
</script>