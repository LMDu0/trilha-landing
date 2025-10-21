<template>
  <section id="contact" class="py-14 md:py-20">
    <div class="container px-6 sm:px-8">
      <div class="mx-auto max-w-2xl text-center mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 tech-border rounded-full">
          <Icon name="lucide:message-circle" class="w-4 h-4 text-violet-400" />
          <span class="text-sm font-mono text-violet-400 uppercase">VAMOS CONVERSAR</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black mb-6">
          Pronto para <span class="gradient-text">transformar</span> seu negócio?
        </h2>
        <p class="text-lg text-slate-500">
          Vamos conversar sobre como podemos levar sua empresa para o próximo nível digital.
        </p>
      </div>

      <div class="grid gap-12 md:gap-16 lg:grid-cols-2 items-start">
        <div class="space-y-10">
          <div>
            <h3 class="text-2xl font-semibold mb-6 tracking-tight text-white">Informações</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20">
                  <Icon name="lucide:mail" class="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p class="font-medium text-white">Email</p>
                  <p class="text-violet-400 font-mono">contato@trilhalabs.com.br</p>
                  <div class="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200 active:scale-95"
                      :class="{
                        'animate-pulse bg-violet-500/20 border-violet-500/50': emailButtonClicked,
                        'scale-95': emailButtonClicked
                      }"
                      aria-label="Copiar e-mail"
                      @click="copyEmailContact()"
                    >
                      <Icon 
                        name="lucide:copy" 
                        class="h-4 w-4 text-slate-400 hover:text-violet-400 transition-colors"
                        :class="{ 'text-violet-400': emailButtonClicked }"
                      />
                    </button>
                    <a
                      href="mailto:contato@trilhalabs.com.br"
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
                      aria-label="Abrir no e-mail"
                    >
                      <Icon name="lucide:mail" class="h-4 w-4 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20">
                  <Icon name="lucide:phone" class="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p class="font-medium text-white">WhatsApp</p>
                  <p class="text-violet-400 font-mono">(54) 98402-8606</p>
                  <div class="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200 active:scale-95"
                      :class="{
                        'animate-pulse bg-violet-500/20 border-violet-500/50': whatsappButtonClicked,
                        'scale-95': whatsappButtonClicked
                      }"
                      aria-label="Copiar WhatsApp"
                      @click="copyWhatsappContact()"
                    >
                      <Icon 
                        name="lucide:copy" 
                        class="h-4 w-4 text-slate-400 hover:text-violet-400 transition-colors"
                        :class="{ 'text-violet-400': whatsappButtonClicked }"
                      />
                    </button>
                    <a
                      href="https://wa.me/5554984028606?text=Olá! Vim através do site da Trilha Labs e gostaria de conversar sobre os serviços."
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-green-600/50 bg-green-600/10 hover:bg-green-600/20 transition-all duration-300 text-green-400 hover:text-green-300"
                      aria-label="Conversar no WhatsApp"
                    >
                      <Icon name="lucide:message-circle" class="h-4 w-4" />
                      <span class="text-xs font-medium">Conversar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-6 tracking-tight text-white">Redes</h3>
            <div class="flex space-x-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer">
                <Icon name="lucide:linkedin" class="h-5 w-5 text-slate-400 hover:text-violet-400 transition-colors duration-300" />
              </div>


              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 cursor-pointer">
                <Icon name="lucide:instagram" class="h-5 w-5 text-slate-400 hover:text-violet-400 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div class="relative rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-xl p-5 md:p-6">
          <div class="mb-6">
            <h3 class="text-2xl font-semibold tracking-tight text-white">Como podemos te ajudar?</h3>
            <p class="text-slate-400">Conte rapidamente sobre seu projeto. Responderemos em poucas horas.</p>
          </div>
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-sm text-slate-300">Nome</label>
                <input v-model="form.name" type="text" placeholder="Seu nome (opcional)"
                  class="h-12 w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"/>
              </div>
              <div class="space-y-1">
                <label class="text-sm text-slate-300">Email</label>
                <input v-model="form.email" type="email" placeholder="seu@email.com (opcional)"
                  class="h-12 w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"/>
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-sm text-slate-300">Telefone <span class="text-red-400">*</span></label>
              <div class="relative">
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  placeholder="(54) 99999-9999"
                  @input="formatPhoneInput"
                  @focus="handlePhoneFocus"
                  @keydown="handlePhoneKeydown"
                  class="h-12 w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 pr-12 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                />
                <button
                  v-if="form.phone"
                  type="button"
                  @click="clearPhone"
                  class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-800/50 transition-colors"
                  aria-label="Limpar telefone"
                >
                  <Icon name="lucide:x" class="w-4 h-4 text-slate-400 hover:text-slate-300" />
                </button>
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-sm text-slate-300">Mensagem <span class="text-red-400">*</span></label>
              <textarea v-model="form.message" rows="5" placeholder="Conte sobre seu projeto..."
                class="w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"></textarea>
            </div>

            <!-- Status message -->
            <div v-if="submitMessage" class="p-4 rounded-lg border" :class="{
              'bg-green-500/10 border-green-500/20 text-green-400': submitStatus === 'success',
              'bg-red-500/10 border-red-500/20 text-red-400': submitStatus === 'error'
            }">
              <div class="flex items-center gap-2">
                <Icon v-if="submitStatus === 'success'" name="lucide:check-circle" class="w-4 h-4" />
                <Icon v-if="submitStatus === 'error'" name="lucide:alert-circle" class="w-4 h-4" />
                <span class="text-sm">{{ submitMessage }}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p class="text-xs text-slate-500">
                <Icon name="lucide:clock" class="w-3 h-3 inline mr-1" />
                Respondemos geralmente em até 2h úteis.
              </p>
              <Button 
                type="submit" 
                class="w-full sm:w-auto rounded-xl px-8 py-3 text-base font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <Icon name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                  Enviando mensagem...
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="lucide:send" class="w-5 h-5" />
                  Enviar Mensagem
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from './ui/Button.vue'
import type { ContactFormData, EmailResponse } from '../types/contact'
import { useToast } from '../composables/useToast'

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: 'Olá! Gostaria de saber mais sobre os serviços da Trilha Labs e como vocês podem ajudar meu negócio a crescer digitalmente.'
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref<'success' | 'error' | null>(null)

// Toast system
const { success: showSuccessToast, error: showErrorToast } = useToast()

// Button animation states
const emailButtonClicked = ref(false)
const whatsappButtonClicked = ref(false)

async function handleSubmit() {
  if (isSubmitting.value) return
  
  try {
    // Basic validation - only phone and message are required
    if (!form.phone || !form.message) {
      showMessage('Por favor, preencha os campos obrigatórios: telefone e mensagem.', 'error')
      return
    }

    // Phone validation - must have at least DDD + number (format: (XX) XXXXX-XXXX)
    const phoneClean = form.phone.replace(/\D/g, '')
    if (phoneClean.length < 10) {
      showMessage('Por favor, insira um telefone válido com DDD. Ex: (54) 99999-9999', 'error')
      return
    }

    // Email validation (only if provided)
    if (form.email && form.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(form.email)) {
        showMessage('Por favor, insira um email válido.', 'error')
        return
      }
    }

    isSubmitting.value = true
    submitMessage.value = ''
    
    // Send email through API
    const response = await $fetch<EmailResponse>('/api/contact/send', {
      method: 'POST',
      body: {
        name: form.name || undefined,
        email: form.email || undefined,
        phone: form.phone,
        company: form.company || undefined,
        projectType: form.projectType || undefined,
        message: form.message
      }
    })

    if (response.success) {
      showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success')
      
      // Reset form after success
      Object.assign(form, {
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: 'Olá! Gostaria de saber mais sobre os serviços da Trilha Labs e como vocês podem ajudar meu negócio a crescer digitalmente.'
      })
    } else {
      throw new Error(response.message || 'Erro desconhecido')
    }
  } catch (error: any) {
    console.error('Error sending contact form:', error)
    
    let errorMessage = 'Erro ao enviar mensagem. Tente novamente.'
    
    if (error.data?.statusMessage) {
      errorMessage = error.data.statusMessage
    } else if (error.message) {
      errorMessage = error.message
    }
    
    showMessage(errorMessage, 'error')
  } finally {
    isSubmitting.value = false
  }
}

function showMessage(message: string, status: 'success' | 'error') {
  submitMessage.value = message
  submitStatus.value = status
  
  // Clear message after 5 seconds
  setTimeout(() => {
    submitMessage.value = ''
    submitStatus.value = null
  }, 5000)
}

// Auto-fill DDD 54 when user focuses on phone field
function handlePhoneFocus() {
  if (!form.phone || form.phone.trim() === '') {
    form.phone = '(54) '
  }
}

// Clear phone field
function clearPhone() {
  form.phone = ''
}

// Format phone input with mask
function formatPhoneInput(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  
  // Ensure it starts with 54 if user tries to change area code
  if (value.length >= 2 && !value.startsWith('54')) {
    value = '54' + value.slice(2)
  }
  
  // Apply formatting: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  if (value.length <= 2) {
    form.phone = value ? `(${value})` : ''
  } else if (value.length <= 7) {
    form.phone = `(${value.slice(0, 2)}) ${value.slice(2)}`
  } else if (value.length <= 11) {
    if (value.length === 11) {
      // Mobile: (54) 99999-9999
      form.phone = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
    } else {
      // Landline: (54) 9999-9999
      form.phone = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
    }
  } else {
    // Limit to 11 digits
    value = value.slice(0, 11)
    form.phone = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
  }
}

// Handle special keys for phone input
function handlePhoneKeydown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement
  const cursorPosition = input.selectionStart || 0
  
  // Allow navigation and control keys
  if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(event.key)) {
    // Prevent deletion of area code parentheses
    if (event.key === 'Backspace' && cursorPosition <= 4) {
      event.preventDefault()
      return
    }
    return
  }
  
  // Only allow numbers
  if (!/\d/.test(event.key)) {
    event.preventDefault()
  }
}

async function copyEmailContact() {
  // Button animation
  emailButtonClicked.value = true
  setTimeout(() => {
    emailButtonClicked.value = false
  }, 200)
  
  try {
    await navigator.clipboard.writeText('contato@trilhalabs.com.br')
    showSuccessToast('Email copiado!')
  } catch {
    showErrorToast('Erro ao copiar email')
  }
}

async function copyWhatsappContact() {
  // Button animation
  whatsappButtonClicked.value = true
  setTimeout(() => {
    whatsappButtonClicked.value = false
  }, 200)
  
  try {
    await navigator.clipboard.writeText('(54) 98402-8606')
    showSuccessToast('Telefone copiado!')
  } catch {
    showErrorToast('Erro ao copiar telefone')
  }
}
</script>