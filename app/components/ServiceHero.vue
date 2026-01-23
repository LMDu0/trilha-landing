<template>
  <section class="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden noise-texture">
    <div class="absolute inset-0 grid-pattern opacity-30" />
    
    <div class="container mx-auto px-6 sm:px-8 relative z-10 pt-20">
      <div class="max-w-4xl">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
          <NuxtLink to="/" class="hover:text-white transition-colors flex items-center gap-1">
            Home
          </NuxtLink>
          <Icon name="lucide:chevron-right" class="w-3 h-3 text-slate-600" />
          <span class="text-violet-400">Serviços</span>
          <Icon name="lucide:chevron-right" class="w-3 h-3 text-slate-600" />
          <span class="text-white truncate">{{ title }}</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-violet-500/30">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span class="text-sm font-medium text-violet-300">{{ badge }}</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {{ title }}
        </h1>
        
        <p class="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
          {{ description }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a 
            :href="`https://wa.me/555493503203?text=Olá!%20Li%20sobre%20o%20serviço%20de%20${title}%20e%20gostaria%20de%20um%20orçamento.`"
            target="_blank"
            class="btn-premium bg-violet-500 hover:bg-violet-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Icon name="lucide:message-circle" class="w-5 h-5" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  badge?: string
}>()
</script>
