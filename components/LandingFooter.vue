<template>
  <footer class="border-t border-slate-800/60 bg-slate-950">
    <div class="container mx-auto px-6 sm:px-8 py-12">
      <div class="grid gap-10 md:gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <div class="mb-6"></div>
          <div class="flex items-center gap-3 text-slate-400">
            <a href="#" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors">
              <Icon name="lucide:linkedin" class="h-4 w-4" />
            </a>


            <a href="#" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors">
              <Icon name="lucide:instagram" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Coluna de links padrão mercado -->
        <div class="lg:col-span-4">
          <h3 class="font-semibold mb-6 text-white">Empresa</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><a href="#servicos" class="hover:text-violet-400 transition-colors">Serviços</a></li>
            <li><a href="#cases" class="hover:text-violet-400 transition-colors">Cases</a></li>
            <li><a href="#contact" class="hover:text-violet-400 transition-colors">Contato</a></li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-semibold mb-6 text-white">Contato</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Icon name="lucide:mail" class="h-4 w-4 text-violet-400" />
              </div>
              <span class="text-slate-400">contato@trilhalabs.com.br</span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Icon name="lucide:message-circle" class="h-4 w-4 text-violet-400" />
              </div>
              <a 
                href="https://wa.me/5554984028606" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-violet-400 transition-colors"
              >
                (54) 98402-8606
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-slate-500">
          © 2025. Todos os direitos reservados. Por Trilha Labs.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function copyEmail() {
  try {
    navigator.clipboard.writeText('contato@trilhalabs.com.br')
  } catch (e) {
    // noop
  }
}
</script>