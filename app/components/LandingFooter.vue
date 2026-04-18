<template>
  <footer class="border-t border-slate-200 bg-white">
    <div class="container mx-auto px-6 sm:px-8 py-16">
      <div class="grid gap-10 lg:gap-16 lg:grid-cols-12">

        <!-- Brand -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-block mb-5">
            <NuxtImg
              src="/Group 15.png"
              alt="Trilha Flow"
              class="h-9 w-auto"
              format="webp"
              quality="90"
              width="140"
              height="36"
            />
          </NuxtLink>
          <p class="text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
            O app que transforma a atenção do seu evento em dinheiro de verdade. Feito no Brasil.
          </p>
          <div class="flex items-center gap-2">
            <a href="https://linkedin.com/company/trilhalabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
              <Icon name="lucide:linkedin" class="h-4 w-4" />
            </a>
            <a href="https://instagram.com/trilhalabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
              <Icon name="lucide:instagram" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Plataforma -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-[0.12em] mb-5">Plataforma</h3>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/produto" class="text-slate-500 hover:text-slate-900 transition-colors">Visão geral</NuxtLink></li>
            <li><NuxtLink to="/app-para-eventos" class="text-slate-500 hover:text-slate-900 transition-colors">App para eventos</NuxtLink></li>
            <li><NuxtLink to="/gamificacao-para-eventos" class="text-slate-500 hover:text-slate-900 transition-colors">Missões e prêmios</NuxtLink></li>
            <li><NuxtLink to="/feed-social-para-eventos" class="text-slate-500 hover:text-slate-900 transition-colors">Feed com vídeos</NuxtLink></li>
            <li><NuxtLink to="/economia-virtual-eventos" class="text-slate-500 hover:text-slate-900 transition-colors">Moeda do evento</NuxtLink></li>
          </ul>
        </div>

        <!-- Para -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-[0.12em] mb-5">Para</h3>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/para-organizadores" class="text-slate-500 hover:text-slate-900 transition-colors">Organizadores</NuxtLink></li>
            <li><NuxtLink to="/para-expositores" class="text-slate-500 hover:text-slate-900 transition-colors">Expositores</NuxtLink></li>
            <li><NuxtLink to="/para-patrocinadores" class="text-slate-500 hover:text-slate-900 transition-colors">Patrocinadores</NuxtLink></li>
            <li><NuxtLink to="/para-participantes" class="text-slate-500 hover:text-slate-900 transition-colors">Participantes</NuxtLink></li>
          </ul>
        </div>

        <!-- Segmentos -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-[0.12em] mb-5">Segmentos</h3>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/eventos/agro" class="text-slate-500 hover:text-slate-900 transition-colors">Eventos Agro</NuxtLink></li>
            <li><NuxtLink to="/eventos/tech" class="text-slate-500 hover:text-slate-900 transition-colors">Eventos Tech</NuxtLink></li>
            <li><NuxtLink to="/eventos/corporativos" class="text-slate-500 hover:text-slate-900 transition-colors">Corporativos</NuxtLink></li>
            <li><NuxtLink to="/eventos/feiras" class="text-slate-500 hover:text-slate-900 transition-colors">Feiras</NuxtLink></li>
            <li><NuxtLink to="/eventos/festivais" class="text-slate-500 hover:text-slate-900 transition-colors">Festivais</NuxtLink></li>
          </ul>
        </div>

        <!-- Empresa -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-[0.12em] mb-5">Empresa</h3>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/casos" class="text-slate-500 hover:text-slate-900 transition-colors">Casos</NuxtLink></li>
            <li><NuxtLink to="/precos" class="text-slate-500 hover:text-slate-900 transition-colors">Como a gente cobra</NuxtLink></li>
            <li><NuxtLink to="/contato" class="text-slate-500 hover:text-slate-900 transition-colors">Contato</NuxtLink></li>
            <li>
              <a href="https://wa.me/555493503203" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-slate-900 transition-colors">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Intent pages (SEO) -->
      <div class="mt-14 pt-10 border-t border-slate-100">
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-[0.12em] mb-4">Aprenda</div>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <NuxtLink to="/como-monetizar-evento" class="text-slate-500 hover:text-slate-900 transition-colors">Como ganhar dinheiro com um evento</NuxtLink>
          <NuxtLink to="/como-aumentar-receita-evento" class="text-slate-500 hover:text-slate-900 transition-colors">Como fazer o evento faturar mais</NuxtLink>
          <NuxtLink to="/como-engajar-publico-evento" class="text-slate-500 hover:text-slate-900 transition-colors">Como fazer o público se envolver</NuxtLink>
        </div>
      </div>

      <div class="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-slate-400">
          © {{ new Date().getFullYear() }} Trilha Labs. O app que faz seu evento render o ano inteiro.
        </p>
        <p class="text-xs text-slate-400">
          contato@trilhalabs.com.br · Rio Grande do Sul, Brasil
        </p>
      </div>
    </div>
  </footer>
</template>
