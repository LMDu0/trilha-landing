<template>
  <div
    ref="container"
    class="relative overflow-hidden"
  >
    <div
      :class="cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
      )"
      :style="{ transitionDelay: `${delay}ms` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { cn } from '../../utils/cn'

interface Props {
  delay?: number
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  threshold: 0.1
})

const container = ref<HTMLElement>()
const isVisible = ref(false)

// Use VueUse for intersection observer - much cleaner with cleanup
const { stop } = useIntersectionObserver(
  container,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      isVisible.value = true
      // Stop observing once visible to save resources
      stop()
    }
  },
  {
    threshold: props.threshold,
    rootMargin: '50px'
  }
)
</script>