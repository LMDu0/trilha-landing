<template>
  <div class="relative overflow-hidden">
    <!-- Mobile: imagem simples sem moldura -->
    <div class="block md:hidden rounded-xl border border-slate-800/60 bg-slate-900/50">
      <div class="w-full h-[340px] sm:h-[380px] overflow-hidden bg-black rounded-xl">
        <img :src="image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop'" :alt="title" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Desktop: mockup de dispositivo -->
    <div class="hidden md:flex justify-start py-4 pointer-events-none">
      <div class="relative bg-black rounded-[34px] border border-slate-700/50 shadow-2xl w-[320px] aspect-[9/19]">
        <div class="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-28 rounded-b-2xl bg-black"></div>
        <div class="absolute inset-[10px] bg-slate-950 rounded-[26px] overflow-hidden">
          <img :src="image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=1200&fit=crop'" :alt="title" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
  isActive?: boolean
  progressPercent?: number
}

withDefaults(defineProps<Props>(), {
  isActive: false,
  progressPercent: 0
})
</script>