<template>
  <footer class="border-t border-slate-800/60 bg-slate-950">
    <div class="container mx-auto px-6 sm:px-8 py-12">
      <div class="grid gap-10 md:gap-12 lg:grid-cols-12">

        <!-- Brand -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-block mb-4">
            <NuxtImg
              src="/Group 15.png"
              alt="Trilha Flow"
              class="h-10 w-auto"
              format="webp"
              quality="90"
              width="160"
              height="40"
            />
          </NuxtLink>
          <p class="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
            A plataforma que transforma eventos em experiências extraordinárias com gamificação, feed social e economia virtual.
          </p>
          <div class="flex items-center gap-3 text-slate-400">
            <a
              href="https://linkedin.com/company/trilhalabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
            >
              <Icon name="lucide:linkedin" class="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/trilhalabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
            >
              <Icon name="lucide:instagram" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Produto -->
        <div class="lg:col-span-2">
          <h3 class="font-semibold mb-6 text-white text-sm">Produto</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><NuxtLink to="/produto" class="hover:text-violet-400 transition-colors">Funcionalidades</NuxtLink></li>
            <li><NuxtLink to="/precos" class="hover:text-violet-400 transition-colors">Preços</NuxtLink></li>
            <li><NuxtLink to="/casos" class="hover:text-violet-400 transition-colors">Casos de Sucesso</NuxtLink></li>
          </ul>
        </div>

        <!-- Empresa -->
        <div class="lg:col-span-2">
          <h3 class="font-semibold mb-6 text-white text-sm">Empresa</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><NuxtLink to="/contato" class="hover:text-violet-400 transition-colors">Contato</NuxtLink></li>
            <li><a href="https://wa.me/555493503203" target="_blank" rel="noopener noreferrer" class="hover:text-violet-400 transition-colors">WhatsApp</a></li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="lg:col-span-4">
          <h3 class="font-semibold mb-6 text-white text-sm">Fale Conosco</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:mail" class="h-4 w-4 text-violet-400" />
              </div>
              <span class="text-slate-400">contato@trilhalabs.com.br</span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:message-circle" class="h-4 w-4 text-violet-400" />
              </div>
              <a
                href="https://wa.me/555493503203"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-violet-400 transition-colors"
              >
                (54) 9 3503-3203
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Trilha Labs. Todos os direitos reservados.
        </p>
        <p class="text-xs text-slate-600">
          Feito com tecnologia de ponta no Rio Grande do Sul.
        </p>
      </div>
    </div>
  </footer>
</template>
