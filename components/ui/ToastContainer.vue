<template>
  <Teleport to="body">
    <!-- Desktop: Bottom right -->
    <div class="fixed bottom-4 right-4 z-50 flex-col gap-2 pointer-events-none hidden sm:flex max-w-sm">
      <TransitionGroup
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm pointer-events-auto w-full"
          :class="{
            'bg-green-900/90 border border-green-500/30 shadow-green-500/20': toast.type === 'success',
            'bg-red-900/90 border border-red-500/30 shadow-red-500/20': toast.type === 'error',
            'bg-blue-900/90 border border-blue-500/30 shadow-blue-500/20': toast.type === 'info'
          }"
        >
          <Icon 
            :name="getIconName(toast.type)" 
            class="w-5 h-5 flex-shrink-0"
            :class="{
              'text-green-400': toast.type === 'success',
              'text-red-400': toast.type === 'error',
              'text-blue-400': toast.type === 'info'
            }"
          />
          <span class="text-sm text-white font-medium flex-1">{{ toast.message }}</span>
          <button
            @click="removeToast(toast.id)"
            class="p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <Icon name="lucide:x" class="w-3 h-3 text-white/60 hover:text-white/80" />
          </button>
        </div>
      </TransitionGroup>
    </div>

    <!-- Mobile: Bottom full width -->
    <div class="fixed bottom-0 left-0 right-0 z-50 flex flex-col pointer-events-none sm:hidden">
      <TransitionGroup
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-full"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-full"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="flex items-center gap-3 px-4 py-4 backdrop-blur-sm pointer-events-auto border-t"
          :class="{
            'bg-green-900/95 border-green-500/30': toast.type === 'success',
            'bg-red-900/95 border-red-500/30': toast.type === 'error',
            'bg-blue-900/95 border-blue-500/30': toast.type === 'info'
          }"
        >
          <Icon 
            :name="getIconName(toast.type)" 
            class="w-5 h-5 flex-shrink-0"
            :class="{
              'text-green-400': toast.type === 'success',
              'text-red-400': toast.type === 'error',
              'text-blue-400': toast.type === 'info'
            }"
          />
          <span class="text-sm text-white font-medium flex-1">{{ toast.message }}</span>
          <button
            @click="removeToast(toast.id)"
            class="p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <Icon name="lucide:x" class="w-3 h-3 text-white/60 hover:text-white/80" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast } from '../../composables/useToast'

const { toasts, removeToast } = useToast()

function getIconName(type: string) {
  switch (type) {
    case 'success':
      return 'lucide:check-circle'
    case 'error':
      return 'lucide:x-circle'
    case 'info':
      return 'lucide:info'
    default:
      return 'lucide:check-circle'
  }
}
</script>
