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

const noise = createNoise3D()

let w = 0
let h = 0
let nt = 0
let ctx: CanvasRenderingContext2D | null = null
let animationId = 0
let lastFrameTime = 0

const canvasRef = templateRef<HTMLCanvasElement | null>('canvasRef')

function getSpeed(): number {
  return props.speed === 'slow' ? 0.005 : 0.01
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  if (!ctx) return
  const parent = canvas.parentElement
  if (parent) {
    w = ctx.canvas.width = parent.clientWidth
    h = ctx.canvas.height = parent.clientHeight
  }
  ctx.filter = `blur(${props.blur}px)`
  // Debounced resize handler to prevent excessive reflows
  let resizeTimeout: ReturnType<typeof setTimeout>
  window.onresize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      if (!ctx || !parent) return
      w = ctx.canvas.width = parent.clientWidth
      h = ctx.canvas.height = parent.clientHeight
      ctx.filter = `blur(${props.blur}px)`
    }, 100) // Debounce resize events
  }
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
    
    // Draw the wave
    for (let x = 5; x < w; x += 5) {
      const y = noise(x / 800, 0.3 * i, nt) * 100
      ctx.lineTo(x, y + h * 0.5)
    }
    
    ctx.stroke()
    ctx.closePath()
  }
}

function render() {
  if (!ctx) return
  
  // Performance optimization: limit to 30fps for background animation
  const now = performance.now()
  if (now - lastFrameTime < 33) { // ~30fps
    animationId = requestAnimationFrame(render)
    return
  }
  lastFrameTime = now
  
  // Clear canvas completely
  ctx.clearRect(0, 0, w, h)
  
  // Draw background with full opacity
  ctx.globalAlpha = 1
  ctx.fillStyle = props.backgroundFill!
  ctx.fillRect(0, 0, w, h)
  
  // Draw waves with specified opacity
  ctx.globalAlpha = props.waveOpacity!
  drawWave(3) // Reduce from 5 to 3 waves for better performance
  
  // Reset globalAlpha back to 1 for next frame
  ctx.globalAlpha = 1
  
  animationId = requestAnimationFrame(render)
}

const isSafari = ref(false)
onMounted(() => {
  isSafari.value =
    typeof window !== 'undefined' &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  init()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
})
</script>