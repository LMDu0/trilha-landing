<template>
  <div 
    ref="container"
    class="relative overflow-hidden rounded-2xl"
    @mouseenter="startAnimation"
    @mouseleave="stopAnimation"
  >
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-opacity duration-500"
      :class="{ 'opacity-30': isAnimating }"
    >
    
    <canvas
      ref="canvas"
      class="absolute inset-0 w-full h-full pointer-events-none"
      :width="canvasWidth"
      :height="canvasHeight"
    />
    
    <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500" :class="{ 'opacity-100': isAnimating }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useElementSize, useRafFn } from '@vueuse/core'

interface Props {
  src: string
  alt: string
  particleCount?: number
  particleSize?: number
  animationSpeed?: number
  particleColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  particleCount: 50,
  particleSize: 2,
  animationSpeed: 1,
  particleColor: '#8b5cf6'
})

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
}

const container = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
const isAnimating = ref(false)
let lastFrameTime = 0

// Use VueUse for element size reactivity
const { width: canvasWidth, height: canvasHeight } = useElementSize(container)

let particles: Particle[] = []

function createParticle(): Particle {
  return {
    x: Math.random() * canvasWidth.value,
    y: Math.random() * canvasHeight.value,
    vx: (Math.random() - 0.5) * 2 * props.animationSpeed,
    vy: (Math.random() - 0.5) * 2 * props.animationSpeed,
    size: Math.random() * props.particleSize + 1,
    opacity: Math.random(),
    life: 1
  }
}

function initParticles() {
  particles = []
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(createParticle())
  }
}

function updateParticles() {
  particles.forEach(particle => {
    particle.x += particle.vx
    particle.y += particle.vy
    particle.life -= 0.01
    particle.opacity = particle.life
    
    // Reset particle if it's out of bounds or dead
    const isOutOfBounds = particle.x < 0 || particle.x > canvasWidth.value || 
                         particle.y < 0 || particle.y > canvasHeight.value || 
                         particle.life <= 0
    
    if (isOutOfBounds) {
      Object.assign(particle, createParticle())
    }
  })
}

function drawParticles() {
  if (!canvas.value) return
  
  const ctx = canvas.value.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
  
  particles.forEach(particle => {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = props.particleColor + Math.round(particle.opacity * 255).toString(16).padStart(2, '0')
    ctx.fill()
    
    // Add glow effect
    ctx.shadowColor = props.particleColor
    ctx.shadowBlur = particle.size * 2
  })
}

function animate() {
  if (!isAnimating.value) return
  
  // Performance optimization: limit frame rate
  const now = Date.now()
  if (now - lastFrameTime < 16) return // ~60fps max
  lastFrameTime = now
  
  updateParticles()
  drawParticles()
}

// Use VueUse for animation frame - much cleaner
const { pause, resume } = useRafFn(animate, { immediate: false })

function startAnimation() {
  isAnimating.value = true
  resume()
}

function stopAnimation() {
  isAnimating.value = false
  pause()
  
  // Clear canvas
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
    }
  }
}

// Initialize particles when component mounts with performance optimization
onMounted(() => {
  initParticles()
})

onUnmounted(() => {
  // Cleanup particles
  particles = []
  pause()
})
</script>