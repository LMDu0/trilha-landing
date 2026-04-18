<template>
  <div class="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
    <NuxtRouteAnnouncer />

    <!-- Scroll progress indicator -->
    <div
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 h-0.5 z-[60] pointer-events-none transition-opacity duration-200"
      :class="progressVisible ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="h-full bg-gradient-to-r from-violet-600 to-indigo-600 origin-left ease-out motion-safe:transition-transform motion-safe:duration-75 motion-reduce:transition-none"
        :style="{ transform: `scaleX(${scrollProgress})` }"
      />
    </div>

    <AppHeader />
    <main class="relative z-0 overflow-hidden">
      <slot />
    </main>
    <LandingFooter />
    <BackToTop />
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const scrollY = ref(0)
const docHeight = ref(1)
const winHeight = ref(1)

const scrollProgress = computed(() => {
  const denom = docHeight.value - winHeight.value
  if (denom <= 0) return 0
  return Math.min(Math.max(scrollY.value / denom, 0), 1)
})

const progressVisible = computed(() => scrollY.value > 50)

function onScroll() {
  scrollY.value = window.scrollY || window.pageYOffset || 0
}

function onResize() {
  winHeight.value = window.innerHeight
  docHeight.value = document.documentElement.scrollHeight
}

onMounted(() => {
  onResize()
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
