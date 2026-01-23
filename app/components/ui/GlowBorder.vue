<template>
  <div 
    :class="cn('relative rounded-2xl', containerClass)"
  >
    <!-- Animated border wrapper -->
    <div 
      class="glow-border-wrapper absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <div class="glow-border-spin absolute inset-0 rounded-2xl" />
    </div>
    
    <!-- Content -->
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '../../utils/cn'
import type { HTMLAttributes } from 'vue'

interface Props {
  containerClass?: HTMLAttributes['class']
}

withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.glow-border-spin {
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    transparent 270deg,
    rgb(139, 92, 246) 300deg,
    rgb(168, 85, 247) 330deg,
    rgb(192, 132, 252) 360deg
  );
  animation: spin 4s linear infinite;
}

/* Mask to show only border */
.glow-border-wrapper {
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 2px;
}
</style>
