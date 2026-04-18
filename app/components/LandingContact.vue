<template>
  <section id="contact" class="py-14 md:py-20 bg-white">
    <div class="container mx-auto px-6 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-5 items-start max-w-6xl mx-auto">

        <!-- Left: context / direct contact -->
        <div class="lg:col-span-2 space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Quanto seu evento pode faturar?
            </h2>
            <p class="text-slate-500 leading-relaxed">
              30 min de conversa. A gente entende público, setor e tamanho, e volta com uma estimativa do que o app pode faturar pro seu caso. A gente só cobra quando você ganha.
            </p>
          </div>

          <div class="space-y-3">
            <a
              href="https://wa.me/555493503203?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Trilha%20Flow."
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div class="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:message-circle" class="w-4 h-4 text-slate-600" />
              </div>
              <div class="min-w-0">
                <div class="text-sm font-semibold text-slate-900">WhatsApp</div>
                <div class="text-sm text-slate-500 font-mono truncate">(54) 9 3503-3203</div>
              </div>
            </a>

            <a
              href="mailto:contato@trilhalabs.com.br?subject=Contato%20pelo%20site%20—%20Trilha%20Flow"
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div class="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:mail" class="w-4 h-4 text-slate-600" />
              </div>
              <div class="min-w-0">
                <div class="text-sm font-semibold text-slate-900">Email</div>
                <div class="text-sm text-slate-500 font-mono truncate">contato@trilhalabs.com.br</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <div class="lg:col-span-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 class="text-xl font-semibold tracking-tight text-slate-900 mb-1">
              Conta sobre seu evento
            </h3>
            <p class="text-sm text-slate-500 mb-6">
              Que tipo de evento, quantas pessoas e quando acontece. A gente responde em até 2h úteis.
            </p>

            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label for="lc-name" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Nome <span class="text-slate-400 font-normal">(opcional)</span>
                </label>
                <input
                  id="lc-name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  placeholder="Seu nome"
                  class="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label for="lc-phone" class="block text-sm font-medium text-slate-700 mb-1.5">
                  WhatsApp <span class="text-red-500">*</span>
                </label>
                <input
                  id="lc-phone"
                  v-model="form.phone"
                  type="tel"
                  inputmode="tel"
                  autocomplete="tel"
                  placeholder="(54) 99999-9999"
                  @input="onPhoneInput"
                  class="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label for="lc-message" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Sobre o evento <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="lc-message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Ex: feira agro em setembro, 5 mil pessoas, queremos monetizar expositores e patrocínio."
                  class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div
                v-if="feedback.message"
                class="p-3 rounded-lg text-sm"
                :class="feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-red-50 text-red-700 border border-red-200'"
              >
                {{ feedback.message }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-2 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Enviando…</span>
                <span v-else>Agendar conversa</span>
                <Icon v-if="!isSubmitting" name="lucide:arrow-right" class="w-4 h-4" />
              </button>

              <p class="text-xs text-slate-400 text-center">
                Sem compromisso. Sem venda forçada.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface ContactPayload {
  name?: string
  phone: string
  message: string
}

interface EmailResponse {
  success: boolean
  message?: string
}

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const feedback = reactive<{ type: 'success' | 'error' | null; message: string }>({
  type: null,
  message: ''
})

function showFeedback(type: 'success' | 'error', message: string) {
  feedback.type = type
  feedback.message = message
  // Auto-clear after 6s so memory state stays clean
  window.setTimeout(() => {
    feedback.type = null
    feedback.message = ''
  }, 6000)
}

// Light phone formatter — runs only on actual user input events, no watchers
function onPhoneInput(event: Event) {
  const target = event.target as HTMLInputElement
  const digits = target.value.replace(/\D/g, '').slice(0, 11)

  let formatted = ''
  if (digits.length === 0) {
    formatted = ''
  } else if (digits.length <= 2) {
    formatted = `(${digits}`
  } else if (digits.length <= 6) {
    formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  } else if (digits.length <= 10) {
    formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  } else {
    formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  form.phone = formatted
}

async function handleSubmit() {
  if (isSubmitting.value) return

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10) {
    showFeedback('error', 'Coloca um WhatsApp com DDD. Ex: (54) 99999-9999.')
    return
  }
  if (!form.message.trim()) {
    showFeedback('error', 'Conta rapidamente sobre o evento pra gente já chegar com contexto.')
    return
  }

  isSubmitting.value = true
  feedback.type = null
  feedback.message = ''

  try {
    const payload: ContactPayload = {
      phone: form.phone,
      message: form.message.trim()
    }
    if (form.name.trim()) payload.name = form.name.trim()

    const response = await $fetch<EmailResponse>('/api/contact/send', {
      method: 'POST',
      body: payload
    })

    if (response?.success) {
      showFeedback('success', 'Mensagem enviada. A gente responde em até 2h úteis.')
      form.name = ''
      form.phone = ''
      form.message = ''
    } else {
      throw new Error(response?.message || 'Erro ao enviar')
    }
  } catch {
    showFeedback(
      'error',
      'Não conseguimos enviar agora. Chama direto no WhatsApp (54) 9 3503-3203 que a gente responde na hora.'
    )
  } finally {
    isSubmitting.value = false
  }
}
</script>
