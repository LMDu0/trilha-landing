<template>
  <section class="relative min-h-[56vh] md:min-h-screen bg-slate-950 overflow-hidden noise-texture">
    <!-- Grid Pattern Background -->
    <GridPattern 
      :glow-position="{ x: '30%', y: '40%' }"
    />
    
    <!-- Wavy Background -->
    <ClientOnly>
      <LazyWavyBackground 
        class="absolute inset-0 h-full"
        :colors="['#8b5cf6', '#a855f7', '#c084fc']"
        :background-fill="'#020617'"
        :wave-opacity="0.2"
        :blur="8"
        speed="slow"
      />
    </ClientOnly>
    <div class="container mx-auto px-6 sm:px-8 relative z-10">
      <!-- Layout assimétrico inspirado no Raycast -->
      <div class="grid lg:grid-cols-12 gap-8 md:gap-16 items-center md:min-h-[calc(100vh-4rem)] pt-12 pb-0 md:py-20">
        
        <!-- Conteúdo principal (lado esquerdo) -->
        <div class="lg:col-span-7 py-8 md:py-10">
          
          <!-- Main headline -->
          <div class="py-8 md:py-10">
            <h1 class="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              <span class="text-white block">Não seguimos tendências.</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300 block mt-3 md:mt-2">
                Criamos caminhos.
              </span>
            </h1>

            <p class="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl pt-8 md:pt-10">
              Aplicativos e plataformas sob medida para negócios que querem ir além, com performance e resultados reais.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8 md:pt-10">
            <Button 
              size="lg"
              as="a"
              href="https://wa.me/555493503203?text=Olá!%20Vim%20pelo%20site%20e%20quero%20transformar%20meu%20negócio%20digitalmente."
              target="_blank"
              rel="noopener noreferrer"
              class="btn-premium bg-violet-500 hover:bg-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] glow-violet-strong border border-violet-400/20"
              @click="trackButtonClick('cta_whatsapp', 'hero')"
            >
              <span class="inline-flex items-center gap-2 relative z-10">
                <Icon name="lucide:message-circle" class="w-5 h-5" />
                Quero transformar meu negócio
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              class="glass-card-hover border-slate-700/50 text-slate-200 hover:text-white px-8 py-4 rounded-xl backdrop-blur-xl"
              as="a" href="#cases"
              @click="trackButtonClick('view_cases', 'hero')"
            >
              <span class="inline-flex items-center gap-2">
                Ver nossos cases
                <Icon name="lucide:arrow-right" class="w-5 h-5" />
              </span>
            </Button>
          </div>

        </div>

        <!-- Espaço vazio no lado direito -->
        <div class="lg:col-span-5">
          <!-- Sem conteúdo visual -->
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
      <div class="animate-bounce">
        <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-400/50" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue'
import GridPattern from './ui/GridPattern.vue'
import { useMixpanel } from '../composables/useMixpanel'

// Lazy load heavy background component
const LazyWavyBackground = defineAsyncComponent(() => import('./ui/WavyBackground.vue'))

const { trackButtonClick } = useMixpanel()
</script>