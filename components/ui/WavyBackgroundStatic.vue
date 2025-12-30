<template>
  <div :class="cn('absolute inset-0 w-full h-full overflow-hidden', props.containerClass)">
    <canvas
      id="canvas"
      ref="canvasRef"
      class="absolute inset-0 z-0"
      :style="{ filter: isSafari ? `blur(${props.blur}px)` : undefined }"
    ></canvas>
    <div :class="cn('relative z-10 w-full h-full', props.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { templateRef } from '@vueuse/core'
import { createNoise3D } from 'simplex-noise'
import { cn } from '../../utils/cn'

interface WavyBackgroundProps {
  class?: string
  containerClass?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  [key: string]: any
}

const props = withDefaults(defineProps<WavyBackgroundProps>(), {
  colors: () => ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
  waveWidth: 50,
  backgroundFill: 'black',
  blur: 10,
  speed: 'fast',
  waveOpacity: 0.5
})

// Pre-computed noise for better performance
const noise = createNoise3D()

let w = 0
let h = 0
let nt = 0
let ctx: CanvasRenderingContext2D | null = null
let animationId = 0
let lastFrameTime = 0

const canvasRef = templateRef<HTMLCanvasElement | null>('canvasRef')

function getSpeed(): number {
  // Reduced speed for smoother, less CPU-intensive animation
  return props.speed === 'slow' ? 0.002 : 0.005
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d', {
    // Performance optimizations
    alpha: false,
    desynchronized: true,
  })
  if (!ctx) return
  const parent = canvas.parentElement
  if (!parent) return
  
  // Use ResizeObserver para evitar reflow forçado
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect
      if (ctx) {
        w = ctx.canvas.width = width
        h = ctx.canvas.height = height
        ctx.filter = `blur(${props.blur}px)`
      }
    }
  })
  
  resizeObserver.observe(parent)
  
  // Cleanup
  onBeforeUnmount(() => {
    resizeObserver.disconnect()
  })
  
  render()
}

function drawWave(n: number) {
  if (!ctx) return
  nt += getSpeed()
  for (let i = 0; i < n; i++) {
    ctx.beginPath()
    ctx.lineWidth = props.waveWidth!
    ctx.strokeStyle = props.colors[i % props.colors.length] || '#8b5cf6'
    
    // Start from first point
    const firstY = noise(0 / 800, 0.3 * i, nt) * 100
    ctx.moveTo(0, firstY + h * 0.5)
    
    // Draw the wave - Optimized step size
    for (let x = 10; x < w; x += 10) {
      const y = noise(x / 800, 0.3 * i, nt) * 100
      ctx.lineTo(x, y + h * 0.5)
    }
    
    ctx.stroke()
    ctx.closePath()
  }
}

function render() {
  if (!ctx) return
  
  // Limit to 30fps for smooth but efficient animation
  const now = performance.now()
  if (now - lastFrameTime < 33) { // ~30fps
    animationId = requestAnimationFrame(render)
    return
  }
  lastFrameTime = now
  
  // Clear and redraw
  ctx.clearRect(0, 0, w, h)
  
  // Background
  ctx.globalAlpha = 1
  ctx.fillStyle = props.backgroundFill!
  ctx.fillRect(0, 0, w, h)
  
  // Waves
  ctx.globalAlpha = props.waveOpacity!
  drawWave(3) // 3 waves for nice depth effect
  
  ctx.globalAlpha = 1
  
  animationId = requestAnimationFrame(render)
}

const isSafari = ref(false)
onMounted(() => {
  isSafari.value =
    typeof window !== 'undefined' &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  
  // Start animation after a small delay to allow SSR content to render first
  setTimeout(() => {
    init()
  }, 100)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
})
</script>
