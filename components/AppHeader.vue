<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-2xl' 
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="container mx-auto px-6 sm:px-8">
      <div class="flex items-center justify-between h-24 md:h-20">
        
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/Group 15.png" alt="Trilha Labs" class="h-12 w-auto" />
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#projetos" class="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            Projetos
          </a>
          <a href="#cases" class="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            Cases
          </a>
          <a href="#contact" class="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            Contato
          </a>
        </nav>

        <!-- CTA -->
        <a 
          href="https://wa.me/5554984028606"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300"
        >
          <Icon name="lucide:message-circle" class="w-4 h-4" />
          Conversar
        </a>

        <!-- Mobile menu button -->
        <button 
          class="md:hidden text-slate-400 hover:text-white transition-colors"
          @click="toggleMobileMenu"
          aria-label="Abrir menu"
        >
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'"
      >
        <nav class="py-4 space-y-4 border-t border-slate-800/50">
          <a 
            href="#projetos" 
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Projetos
          </a>
          <a 
            href="#cases" 
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Cases
          </a>
          <a 
            href="#contact" 
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Contato
          </a>
          <a 
            href="https://wa.me/5554984028606"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 mt-4"
            @click="closeMobileMenu"
          >
            <Icon name="lucide:message-circle" class="w-4 h-4" />
            Conversar
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 50)

// Mobile menu state
const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>