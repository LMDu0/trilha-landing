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

const canvasRef = templateRef<HTMLCanvasElement | null>('canvasRef')

function getSpeed(): number {
  return props.speed === 'slow' ? 0.001 : 0.002
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
  window.onresize = () => {
    if (!ctx) return
    if (parent) {
      w = ctx.canvas.width = parent.clientWidth
      h = ctx.canvas.height = parent.clientHeight
    }
    ctx.filter = `blur(${props.blur}px)`
  }
  render()
}

function drawWave(n: number) {
  if (!ctx) return
  nt += getSpeed()
  for (let i = 0; i < n; i++) {
    ctx.beginPath()
    ctx.lineWidth = props.waveWidth!
    ctx.strokeStyle = props.colors![i % props.colors!.length]
    for (let x = 0; x < w; x += 5) {
      const y = noise(x / 800, 0.3 * i, nt) * 100
      ctx.lineTo(x, y + h * 0.5)
    }
    ctx.stroke()
    ctx.closePath()
  }
}

function render() {
  if (!ctx) return
  ctx.fillStyle = props.backgroundFill!
  ctx.globalAlpha = props.waveOpacity!
  ctx.fillRect(0, 0, w, h)
  drawWave(5)
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