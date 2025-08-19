<template>
  <section id="contact" class="py-14 md:py-28">
    <div class="container px-6 sm:px-8">
      <div class="mx-auto max-w-2xl text-center mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 tech-border rounded-full">
          <Icon name="lucide:message-circle" class="w-4 h-4 text-violet-400" />
          <span class="text-sm font-mono text-violet-400 uppercase">VAMOS CONVERSAR</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black mb-6">
          Pronto para <span class="gradient-text">revolucionar</span> seu evento?
        </h2>
        <p class="text-lg text-muted-foreground">
          Vamos conversar sobre como podemos transformar seu negócio em uma experiência digital única.
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
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
                      aria-label="Copiar e-mail"
                      @click="copyEmailContact()"
                    >
                      <Icon name="lucide:copy" class="h-4 w-4 text-slate-400" />
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
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
                      aria-label="Copiar WhatsApp"
                      @click="copyWhatsappContact()"
                    >
                      <Icon name="lucide:copy" class="h-4 w-4 text-slate-400" />
                    </button>
                    <a
                      href="https://wa.me/5554984028606"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
                      aria-label="Abrir WhatsApp"
                    >
                      <Icon name="lucide:message-circle" class="h-4 w-4 text-slate-400" />
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
            <h3 class="text-2xl font-semibold tracking-tight text-white">Vamos conversar</h3>
            <p class="text-slate-400">Conte rapidamente sobre seu projeto. Responderemos em poucas horas.</p>
          </div>
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-sm text-slate-300">Nome</label>
                <input v-model="form.name" type="text" placeholder="Seu nome"
                  class="h-12 w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"/>
              </div>
              <div class="space-y-1">
                <label class="text-sm text-slate-300">Email</label>
                <input v-model="form.email" type="email" placeholder="seu@email.com"
                  class="h-12 w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"/>
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-sm text-slate-300">Mensagem</label>
              <textarea v-model="form.message" rows="5" placeholder="Conte sobre seu projeto..."
                class="w-full rounded-lg bg-slate-950/70 border border-slate-800/70 px-5 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"></textarea>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-xs text-slate-500">Respondemos geralmente em até 4h úteis.</p>
              <Button type="submit" class="rounded-lg px-6">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Button from './ui/Button.vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: ''
})

function handleSubmit() {
  try {
    // Validação básica
    if (!form.name || !form.email || !form.message) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada! Entraremos em contato em breve.')
    
    // Reset form after success
    Object.assign(form, {
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    })
  } catch (error) {
    alert('Erro ao enviar mensagem. Tente novamente.')
  }
}

function copyEmailContact() {
  try {
    navigator.clipboard.writeText('contato@trilhalabs.com.br')
  } catch {}
}

function copyWhatsappContact() {
  try {
    navigator.clipboard.writeText('+55 54 98402-6806')
  } catch {}
}
</script>