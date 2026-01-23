<template>
  <div class="relative overflow-hidden">
    <!-- Imagem sem frame para mobile e desktop -->
    <div class="w-full h-[340px] md:h-[520px] rounded-xl border border-slate-800/60 bg-slate-900/50 overflow-hidden">
      <img 
        :src="image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop'" 
        :alt="description || `${title} - Aplicativo desenvolvido pela Trilha Labs`" 
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
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