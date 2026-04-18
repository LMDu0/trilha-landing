<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      (isScrolled || isMobileMenuOpen)
        ? 'bg-white/75 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_30px_rgb(15,23,42,0.06)] ring-1 ring-slate-900/5'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="container mx-auto px-6 sm:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="Trilha Flow — ir para a home">
            <img
              src="/trilha-logo-default.png"
              alt="Trilha Flow"
              class="h-16 md:h-20 w-auto"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink to="/produto" class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-slate-900">
            Produto
          </NuxtLink>

          <!-- Para (stakeholders) -->
          <div class="relative group">
            <button class="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Para
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 w-[300px]">
              <div class="rounded-2xl border border-white/60 bg-white/90 backdrop-blur-3xl backdrop-saturate-200 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 p-2">
                <NuxtLink v-for="persona in personas" :key="persona.to" :to="persona.to"
                          class="block p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div class="text-sm font-semibold text-slate-900 mb-0.5">{{ persona.label }}</div>
                  <div class="text-xs text-slate-500 leading-snug">{{ persona.desc }}</div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Segmentos -->
          <div class="relative group">
            <button class="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Segmentos
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 w-[240px]">
              <div class="rounded-2xl border border-white/60 bg-white/90 backdrop-blur-3xl backdrop-saturate-200 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 p-2">
                <NuxtLink v-for="seg in segments" :key="seg.to" :to="seg.to"
                          class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                  {{ seg.label }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/precos" class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-slate-900">
            Preços
          </NuxtLink>
          <NuxtLink to="/casos" class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-slate-900">
            Casos
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/contato"
            class="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
          >
            Agendar demo
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>

          <button
            class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            @click="toggleMobileMenu"
            aria-label="Abrir menu"
          >
            <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'max-h-[85vh] opacity-100 pb-6 overflow-y-auto' : 'max-h-0 opacity-0'"
      >
        <nav class="pt-4 space-y-1 border-t border-white/40">
          <NuxtLink to="/produto"
                    class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                    @click="closeMobileMenu">
            Produto
          </NuxtLink>

          <div class="px-3 pt-4 pb-1 text-xs font-medium text-slate-400">Para</div>
          <NuxtLink v-for="p in personas" :key="p.to" :to="p.to"
                    class="block px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                    @click="closeMobileMenu">
            {{ p.label }}
          </NuxtLink>

          <div class="px-3 pt-4 pb-1 text-xs font-medium text-slate-400">Segmentos</div>
          <NuxtLink v-for="s in segments" :key="s.to" :to="s.to"
                    class="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                    @click="closeMobileMenu">
            {{ s.label }}
          </NuxtLink>

          <div class="pt-4 px-3 space-y-1">
            <NuxtLink to="/precos" class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700" @click="closeMobileMenu">Preços</NuxtLink>
            <NuxtLink to="/casos" class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700" @click="closeMobileMenu">Casos</NuxtLink>
          </div>

          <div class="pt-4 px-3">
            <NuxtLink to="/contato"
                      class="flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-4 py-3 rounded-full"
                      @click="closeMobileMenu">
              Agendar demo
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)

const isMobileMenuOpen = ref(false)
function toggleMobileMenu() { isMobileMenuOpen.value = !isMobileMenuOpen.value }
function closeMobileMenu() { isMobileMenuOpen.value = false }

const personas = [
  { to: '/para-organizadores', label: 'Organizadores', desc: 'Novas formas de faturar com o seu evento.' },
  { to: '/para-expositores', label: 'Expositores', desc: 'Venda antes, durante e depois do evento.' },
  { to: '/para-patrocinadores', label: 'Patrocinadores', desc: 'Patrocínio com número, não com achismo.' },
  { to: '/para-participantes', label: 'Participantes', desc: 'App que premia quem participa.' }
]

const segments = [
  { to: '/eventos/agro', label: 'Eventos Agro' },
  { to: '/eventos/tech', label: 'Eventos Tech' },
  { to: '/eventos/corporativos', label: 'Corporativos' },
  { to: '/eventos/feiras', label: 'Feiras' },
  { to: '/eventos/festivais', label: 'Festivais' }
]
</script>
