<template>
  <section class="py-12 bg-slate-950 border-t border-slate-900">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">Veja também</h2>
        
        <div class="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
          <NuxtLink 
            v-if="current !== 'eventos'"
            to="/servicos/aplicativos-eventos" 
            class="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
          >
            Apps para Eventos
            <Icon name="lucide:arrow-right" class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-violet-400" />
          </NuxtLink>

          <NuxtLink 
            v-if="current !== 'consultoria'"
            to="/servicos/consultoria-digital" 
            class="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
          >
            Consultoria Tech
            <Icon name="lucide:arrow-right" class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-violet-400" />
          </NuxtLink>


        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  current: 'eventos' | 'consultoria' | 'gamificacao'
}>()
</script>
