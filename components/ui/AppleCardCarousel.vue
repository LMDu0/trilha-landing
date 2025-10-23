<template>
  <div class="relative w-full">
    <!-- Mobile: Embla Carousel -->
    <div class="block md:hidden">
      <div ref="mobileViewport" class="w-full h-[400px] overflow-hidden">
        <div class="flex h-full">
          <div
            v-for="(card, index) in cards"
            :key="card.id"
            class="flex-none w-full h-full"
          >
            <NuxtImg 
              :src="card.image" 
              :alt="card.title"
              class="w-full h-full object-contain"
              width="400"
              height="300"
              format="webp"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop: Embla Carousel - Uma imagem por vez -->
    <div class="hidden md:block">
      <div ref="desktopViewport" class="w-full overflow-hidden relative">
        <div class="flex">
          <div
            v-for="(card, index) in cards"
            :key="card.id"
            class="flex-none w-full flex justify-center"
          >
            <div class="w-[450px] h-[580px] relative overflow-hidden rounded-lg">
              <NuxtImg 
                :src="card.image" 
                :alt="card.title"
                width="450"
                height="580"
                class="w-full h-full object-contain"
                format="webp"
                quality="80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegação por dots - Desktop -->
    <div class="hidden md:flex justify-center gap-2 mt-6">
      <button
        v-for="(_, index) in cards"
        :key="index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'bg-violet-400 w-8' : 'bg-slate-600 hover:bg-slate-500'"
        @click="scrollToSlide(index)"
      ></button>
    </div>

    <!-- Controles de navegação - Desktop (laterais) -->
    <button
      class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-slate-700/50 rounded-full items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-30"
      @click="scrollPrev"
    >
      <Icon name="lucide:chevron-left" class="w-5 h-5" />
    </button>
    <button
      class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-slate-700/50 rounded-full items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-30"
      @click="scrollNext"
    >
      <Icon name="lucide:chevron-right" class="w-5 h-5" />
    </button>

    <!-- Controles de navegação - Mobile (embaixo com dots) -->
    <div class="flex md:hidden justify-center items-center gap-6 mt-6">
      <!-- Dots -->
      <div class="flex gap-2">
        <button
          v-for="(_, index) in cards"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="index === activeIndex ? 'bg-violet-400 w-6' : 'bg-slate-600'"
          @click="scrollToSlide(index)"
        ></button>
      </div>
      
      <!-- Flechas sem borda -->
      <div class="flex gap-4">
        <button
          class="text-slate-400 hover:text-white transition-colors duration-300"
          @click="scrollPrev"
        >
          <Icon name="lucide:chevron-left" class="w-6 h-6" />
        </button>
        <button
          class="text-slate-400 hover:text-white transition-colors duration-300"
          @click="scrollNext"
        >
          <Icon name="lucide:chevron-right" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel'
import { useMixpanel } from '../../composables/useMixpanel'

const { trackSliderInteraction } = useMixpanel()

interface AppleCard {
  id: string
  title: string
  description: string
  image: string
  featured?: boolean
}

interface Props {
  cards: AppleCard[]
  autoPlay?: boolean
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: false,
  interval: 5000
})

const emit = defineEmits<{
  cardChange: [index: number, card: AppleCard]
}>()

const activeIndex = ref(0)
const isDragging = ref(false)
const mobileViewport = ref<HTMLElement>()
const desktopViewport = ref<HTMLElement>()

let mobileEmbla: EmblaCarouselType | undefined
let desktopEmbla: EmblaCarouselType | undefined
let autoPlayInterval: NodeJS.Timeout | null = null

function scrollToSlide(index: number) {
  mobileEmbla?.scrollTo(index)
  desktopEmbla?.scrollTo(index)
  trackSliderInteraction('case_study_carousel', index)
}

function scrollNext() {
  mobileEmbla?.scrollNext()
  desktopEmbla?.scrollNext()
  trackSliderInteraction('case_study_carousel', activeIndex.value + 1)
}

function scrollPrev() {
  mobileEmbla?.scrollPrev()
  desktopEmbla?.scrollPrev()
  trackSliderInteraction('case_study_carousel', activeIndex.value - 1)
}

function onSelect() {
  const newIndex = mobileEmbla?.selectedScrollSnap() ?? desktopEmbla?.selectedScrollSnap() ?? 0
  activeIndex.value = newIndex
  const selectedCard = props.cards[newIndex]
  if (selectedCard) {
    emit('cardChange', newIndex, selectedCard)
  }
}

function startAutoPlay() {
  if (props.autoPlay && !autoPlayInterval) {
    autoPlayInterval = setInterval(() => {
      scrollNext()
    }, props.interval)
  }
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  if (process.client) {
    // Mobile Embla
    if (mobileViewport.value) {
      mobileEmbla = EmblaCarousel(mobileViewport.value, {
        loop: true,
        align: 'start',
        dragFree: false,
        containScroll: 'trimSnaps',
        skipSnaps: false,
        duration: 25
      })
      mobileEmbla.on('select', onSelect)
      mobileEmbla.on('pointerDown', () => { isDragging.value = true })
      mobileEmbla.on('settle', () => { isDragging.value = false })
    }

    // Desktop Embla
    if (desktopViewport.value) {
      desktopEmbla = EmblaCarousel(desktopViewport.value, {
        loop: true,
        align: 'start',
        dragFree: false,
        containScroll: 'trimSnaps',
        skipSnaps: false,
        duration: 25
      })
      desktopEmbla.on('select', onSelect)
      desktopEmbla.on('pointerDown', () => { isDragging.value = true })
      desktopEmbla.on('settle', () => { isDragging.value = false })
    }

    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
  mobileEmbla?.destroy()
  desktopEmbla?.destroy()
})
</script>


