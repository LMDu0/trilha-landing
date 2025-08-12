<template>
  <section id="projetos" class="py-10 md:py-20 bg-slate-950">
    <div class="container mx-auto px-6 sm:px-8">
      <header class="max-w-5xl mx-auto mb-8 md:mb-16 text-center">
        <p class="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-3">Nossos Projetos</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Projetos que <span class="text-violet-400">transformam negócios</span>
        </h2>
        <p class="text-lg lg:text-xl text-slate-400">Conheça projetos que aumentaram vendas, ampliaram alcance e transformaram negócios em diferentes setores.</p>
      </header>

      <!-- Apple-like Featured Slider: card grande + texto lateral -->
      <section class="grid lg:grid-cols-12 gap-6 md:gap-12 items-start mb-10 md:mb-20">
        <!-- Card Destacado -->
        <div class="col-span-12 lg:col-span-4 order-1">
          <!-- Mobile slider: CSS transform based -->
          <div class="block lg:hidden">
            <div class="w-full overflow-hidden">
              <div
                class="flex transition-transform duration-500 ease-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
              >
                <div
                  v-for="(card, index) in projectCards"
                  :key="card.id + '-m'"
                  class="w-full flex-none"
                >
                  <AppleCard
                    :title="card.title"
                    :description="card.description"
                    :image="card.image"
                    :is-active="index === currentIndex"
                    :progress-percent="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop slider: Embla -->
          <div class="hidden lg:block">
            <div ref="viewportEl" class="w-full min-h-[520px] overflow-hidden rounded-lg select-none">
              <div class="flex will-change-transform items-center gap-6">
                <div
                  v-for="(card, index) in projectCards"
                  :key="card.id"
                  class="flex-none md:w-[320px]"
                >
                  <AppleCard
                    :title="card.title"
                    :description="card.description"
                    :image="card.image"
                    :is-active="index === currentIndex"
                    :progress-percent="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Texto Lateral -->
        <aside class="col-span-12 lg:col-span-8 space-y-4 text-left order-2" v-if="activeProject">
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <h3 class="text-2xl lg:text-3xl font-bold text-white">{{ activeProject.title }}</h3>
              <span v-if="activeProject.id === 'fenamilho'" class="hidden md:inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">Case de destaque</span>
            </div>
          </div>

          
          <div class="space-y-3 max-w-2xl">
            <p class="text-slate-300 leading-relaxed">{{ activeProject.description }}</p>
          </div>

          <!-- Features do slide -->
          <div v-if="activeProject.features && activeProject.features.length" class="grid grid-cols-1 gap-2 pt-2">
            <div v-for="f in activeProject.features" :key="f" class="flex items-center gap-2 text-sm text-slate-400">
              <Icon name="lucide:check" class="w-4 h-4 text-violet-400" />
              <span>{{ f }}</span>
            </div>
          </div>

          <!-- KPIs do case quando disponíveis -->
          <div v-if="activeProject.kpis && activeProject.kpis.length" class="flex flex-wrap gap-2">
            <span
              v-for="k in activeProject.kpis"
              :key="k"
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-slate-700/60 text-slate-300 bg-slate-900/40"
            >
              <Icon name="lucide:bar-chart-2" class="w-3.5 h-3.5 text-violet-400" />
              {{ k }}
            </span>
          </div>

          <!-- CTA para o case -->
          <div v-if="activeProject.id === 'fenamilho'" class="pt-2">
            <a href="#cases" class="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 bg-violet-500/90 hover:bg-violet-600 text-white font-medium transition-colors">
              Ver case completo
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </a>
          </div>

          <!-- Controles: barra compacta + setas (abaixo do texto) -->
          <div class="flex items-center gap-3 mt-4">
            <div class="h-0.5 w-24 md:w-40 bg-slate-800/60">
              <div class="h-full bg-violet-400 transition-[width] duration-100 ease-linear" :style="{ width: `${progressPercent}%` }" />
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                aria-label="Projeto anterior"
                class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:bg-slate-700/60 transition-colors"
                @click="previous"
              >
                <Icon name="lucide:chevron-left" class="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Próximo projeto"
                class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:bg-slate-700/60 transition-colors"
                @click="next"
              >
                <Icon name="lucide:chevron-right" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      </section>

      <!-- Thumbs removidos para um visual mais limpo -->

      <!-- Removida a grade de soluções para manter foco e limpeza visual -->

    </div>
  </section>
</template>

<script setup lang="ts">
import AppleCard from './ui/AppleCard.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel'


// Função para gradientes dinâmicos (reservado para futuros usos visuais)
function getGradientClass(index: number): string {
  const gradients = [
    'from-blue-500/30 to-cyan-500/30',
    'from-emerald-500/30 to-teal-500/30',
    'from-orange-500/30 to-red-500/30'
  ] as const
  return gradients[index % gradients.length] || gradients[0]
}


// Dados dos projetos com foco no case Fenamilho
const projectCards: Array<{
  id: string
  title: string
  description: string
  image: string
  kpis?: string[]
  features?: string[]
}> = [
  {
    id: 'fenamilho',
    title: 'Fenamilho 2024',
    description: 'Case de destaque: app oficial que centralizou a experiência do evento e impulsionou engajamento e receita.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    kpis: ['+3.000 cliques em anúncios', '14 sessões por usuário', '205k telas vistas', '+20k interações em roletas']
  },
  {
    id: 'pre-evento',
    title: 'Pré-evento: aquecimento do público',
    description: 'Agenda, notícias, mapa e sorteios ativando o público antes dos portões abrirem.',
    image: 'https://images.unsplash.com/photo-1529336953121-a436c68fd8fb?w=600&h=400&fit=crop',
    features: ['Agenda e notificações', 'Mapa interativo', 'Sorteios e divulgação', 'Venda de ingressos']
  },
  {
    id: 'durante-evento',
    title: 'Durante: experiência ao vivo',
    description: 'Push em tempo real, área de prêmios e anúncios patrocinados com alta conversão.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
    features: ['Push em tempo real', 'Gamificação (roletas/prêmios)', 'Anúncios de patrocinadores']
  },
  {
    id: 'pos-evento',
    title: 'Pós-evento: dados e relacionamento',
    description: 'Relatórios de engajamento, leads de patrocinadores e pesquisa de satisfação.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    features: ['Relatórios de engajamento', 'Leads para patrocinadores', 'Pesquisa de satisfação']
  },
  {
    id: 'produto',
    title: 'De projeto a produto',
    description: 'Plataforma white-label personalizável por evento, reduzindo entrega de 3 meses para 1 semana.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop',
    features: ['Core reutilizável', 'Painel de administração', 'Deploy automatizado']
  },
  {
    id: 'monetizacao',
    title: 'Monetização e pacotes',
    description: 'Licença, marketplace interno e serviços extras para aumentar ROI de organizadores e patrocinadores.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop',
    features: ['Licenças mensais/anuais', 'Anúncios e push patrocinado', 'Design e integrações sob demanda']
  }
]

const currentIndex = ref<number>(0)
const intervalMs = 7000
const viewportEl = ref<HTMLDivElement | null>(null)
let embla: EmblaCarouselType | undefined

const activeProject = computed(() => projectCards[currentIndex.value] ?? projectCards[0])

// Progresso visual do slide atual (0-100)
const progressPercent = ref<number>(0)
let progressRafId: number | null = null
let progressStartAtMs = 0

function stopProgress(): void {
  if (progressRafId !== null) {
    cancelAnimationFrame(progressRafId)
    progressRafId = null
  }
}

function startProgress(): void {
  stopProgress()
  progressPercent.value = 0
  progressStartAtMs = performance.now()
  const step = (now: number): void => {
    const elapsed = now - progressStartAtMs
    progressPercent.value = Math.min(100, (elapsed / intervalMs) * 100)
    if (elapsed >= intervalMs) {
      // Avança o slide; o handler 'select' irá reiniciar o progresso
      next()
      return
    }
    progressRafId = requestAnimationFrame(step)
  }
  progressRafId = requestAnimationFrame(step)
}

function setIndex(index: number): void {
  currentIndex.value = index
}

function next(): void {
  currentIndex.value = (currentIndex.value + 1) % projectCards.length
  embla?.scrollNext()
}

function previous(): void {
  currentIndex.value = currentIndex.value === 0 ? projectCards.length - 1 : currentIndex.value - 1
  embla?.scrollPrev()
}

onMounted(async () => {
  if (viewportEl.value) {    
    embla = EmblaCarousel(
      viewportEl.value as unknown as HTMLElement,
      {
        loop: true,
        align: 'start',
        containScroll: 'keepSnaps',
        dragFree: false
      },
    )
    
    embla.on('select', () => {
      currentIndex.value = embla!.selectedScrollSnap()
      startProgress()
    })
  }
  startProgress()
})

onUnmounted(() => {
  stopProgress()
  embla?.destroy()
})
</script>