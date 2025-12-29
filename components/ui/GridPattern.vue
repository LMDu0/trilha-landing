<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Grid Pattern -->
    <div class="absolute inset-0 grid-pattern opacity-30" />
    
    <!-- Radial Gradient Overlay -->
    <div 
      class="absolute inset-0" 
      :style="{
        background: `radial-gradient(circle at ${position}, transparent 0%, rgba(2, 6, 23, 0.8) 60%, rgba(2, 6, 23, 1) 100%)`
      }"
    />
    
    <!-- Accent Glow -->
    <div 
      v-if="showGlow"
      class="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
      :class="glowColor"
      :style="glowStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  position?: string
  showGlow?: boolean
  glowColor?: string
  glowPosition?: { x: string; y: string }
}

const props = withDefaults(defineProps<Props>(), {
  position: '50% 50%',
  showGlow: true,
  glowColor: 'bg-violet-500',
  glowPosition: () => ({ x: '20%', y: '30%' })
})

const glowStyle = computed(() => ({
  left: props.glowPosition.x,
  top: props.glowPosition.y
}))
</script>

