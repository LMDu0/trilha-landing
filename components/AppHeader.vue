<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="container mx-auto px-6 sm:px-8">
      <div class="flex items-center justify-between h-20 md:h-18">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <NuxtImg
            src="/Group 15.png"
            alt="Trilha Flow - Plataforma de Engajamento para Eventos"
            class="h-12 w-auto"
            format="webp"
            quality="90"
            width="200"
            height="48"
            priority
            fetchpriority="high"
            preload
          />
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="/produto" class="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium relative group" active-class="text-white">
            Produto
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/casos" class="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium relative group" active-class="text-white">
            Casos de Sucesso
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/precos" class="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium relative group" active-class="text-white">
            Preços
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/contato" class="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium relative group" active-class="text-white">
            Contato
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <NuxtLink
          to="/contato"
          class="hidden md:inline-flex items-center gap-2 btn-premium bg-violet-500 hover:bg-violet-600 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 glow-violet"
        >
          <Icon name="lucide:calendar" class="w-4 h-4" />
          <span>Agendar Demo</span>
        </NuxtLink>

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
        :class="isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'"
      >
        <nav class="py-4 space-y-4 border-t border-slate-800/50">
          <NuxtLink
            to="/produto"
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Produto
          </NuxtLink>
          <NuxtLink
            to="/casos"
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Casos de Sucesso
          </NuxtLink>
          <NuxtLink
            to="/precos"
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Preços
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="block text-slate-300 hover:text-white transition-colors text-sm font-medium"
            @click="closeMobileMenu"
          >
            Contato
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 mt-4"
            @click="closeMobileMenu"
          >
            <Icon name="lucide:calendar" class="w-4 h-4" />
            Agendar Demo
          </NuxtLink>
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

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>
