<template>
  <section class="py-16 bg-slate-950 border-t border-slate-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">Perguntas Frequentes</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
          >
            <span class="font-semibold text-white pr-8">{{ item.question }}</span>
            <Icon 
              name="lucide:chevron-down" 
              class="w-5 h-5 text-slate-400 transition-transform duration-300"
              :class="{ 'rotate-180': isOpen(index) }"
            />
          </button>
          <div 
            v-show="isOpen(index)"
            class="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: { question: string; answer: string }[]
}>()

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

function isOpen(index: number) {
  return openIndex.value === index
}
</script>
