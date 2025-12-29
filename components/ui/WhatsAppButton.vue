<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClass"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <Icon name="lucide:message-circle" :class="iconClass" />
    <span v-if="showText" :class="textClass">{{ text }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMixpanel } from '../../composables/useMixpanel'

interface Props {
  phone?: string
  message?: string
  text?: string
  variant?: 'round' | 'pill' | 'full'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  trackingAction?: string
  trackingContext?: string
}

const props = withDefaults(defineProps<Props>(), {
  phone: '555493503203',
  message: 'Olá! Vim através do site da Trilha Labs e gostaria de conversar sobre os serviços.',
  text: 'Conversar no WhatsApp',
  variant: 'round',
  size: 'md',
  showText: false,
  trackingAction: 'open_whatsapp',
  trackingContext: 'whatsapp_button'
})

const { trackContactAction } = useMixpanel()

const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(props.message)
  return `https://wa.me/${props.phone}?text=${encodedMessage}`
})

const ariaLabel = computed(() => {
  return props.showText ? undefined : 'Conversar no WhatsApp'
})

const buttonClass = computed(() => {
  const baseClass = 'inline-flex items-center justify-center transition-all duration-300 font-medium'
  
  // Variant classes
  const variantClasses = {
    round: 'rounded-full',
    pill: 'rounded-full px-4 py-2',
    full: 'rounded-lg px-4 py-2'
  }
  
  // Size classes
  const sizeClasses = {
    sm: props.variant === 'round' ? 'w-8 h-8' : 'text-sm',
    md: props.variant === 'round' ? 'w-10 h-10' : 'text-sm',
    lg: props.variant === 'round' ? 'w-12 h-12' : 'text-base'
  }
  
  // Color classes
  const colorClass = 'bg-green-600 hover:bg-green-700 text-white border border-green-500/20 hover:border-green-400/50 shadow-lg hover:shadow-green-500/25'
  
  return `${baseClass} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${colorClass}`
})

const iconClass = computed(() => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  return sizeClasses[props.size]
})

const textClass = computed(() => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }
  
  const marginClass = props.variant === 'round' ? '' : 'ml-2'
  
  return `${sizeClasses[props.size]} ${marginClass}`
})

function handleClick() {
  trackContactAction(props.trackingAction, props.trackingContext)
}
</script>
