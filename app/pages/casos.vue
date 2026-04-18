<template>
  <div class="min-h-screen bg-[#f5f5f7]">

    <!-- ===================== HERO ===================== -->
    <section class="relative pt-32 py-16 overflow-hidden bg-white">
      <div class="container mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 border border-gray-200/60 rounded-full mb-6">
          <Icon name="lucide:trophy" class="w-4 h-4 text-gray-900" />
          <span class="text-sm text-gray-600 font-medium">Casos de Sucesso</span>
        </div>
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Resultados reais. <span class="text-gray-900">Eventos reais.</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Veja como o Trilha Flow transformou eventos em experiências que ninguém esquece.
        </p>
      </div>
    </section>

    <!-- ===================== MAIN CASE: FENAMILHO 2025 ===================== -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="glass-card rounded-3xl p-6 md:p-10 lg:p-14">
          <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <!-- Left: App Screenshots Carousel -->
            <div>
              <AppleCardCarousel
                :cards="carouselCards"
                :auto-play="true"
                :interval="4000"
              />
            </div>

            <!-- Right: Case Info -->
            <div class="space-y-6">
              <div>
                <span class="text-gray-400 font-semibold text-sm uppercase tracking-wider">Case Principal</span>
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                  Fenamilho <span class="text-gray-900">2025</span>
                </h2>
              </div>

              <p class="text-lg text-gray-900 font-medium">
                Uma das maiores feiras de agronegócio da região Sul do Brasil
              </p>

              <p class="text-gray-600 leading-relaxed">
                O Trilha Flow foi o app oficial do evento, conectando visitantes, organizadores e patrocinadores num app completo, com missões e prêmios.
              </p>

              <!-- Key features -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div v-for="feature in features" :key="feature.label" class="flex items-center gap-3">
                  <div class="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon :name="feature.icon" class="w-4 h-4 text-gray-900" />
                  </div>
                  <span class="text-sm text-gray-600">{{ feature.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== RESULTS GRID ===================== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Resultados em números
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="metric in metrics"
            :key="metric.title"
            class="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-gray-900"
          >
            <h3 class="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-3">
              {{ metric.title }}
            </h3>
            <p class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {{ metric.value }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ metric.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== TESTIMONIAL ===================== -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden">

            <div class="grid lg:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">

              <!-- Left: Client info -->
              <div class="lg:col-span-4">
                <!-- Mobile layout -->
                <div class="flex md:hidden items-start gap-4 mb-6">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-200 rotate-3">
                      <img
                        src="/images/client.webp"
                        alt="Junior Moro, Sócio da Belif Marketing"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
                      <Icon name="lucide:check" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div class="flex-1 space-y-2">
                    <h3 class="text-lg font-bold text-gray-900">Junior Moro</h3>
                    <p class="text-gray-600 font-medium text-sm">
                      Sócio
                      <a href="https://instagram.com/belif.marketing" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 transition-colors">
                        @belif.marketing
                      </a>
                    </p>
                    <div class="flex items-center gap-1">
                      <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="w-3 h-3 text-amber-400" />
                    </div>
                    <div class="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 border border-gray-200/60 rounded-lg">
                      <Icon name="lucide:calendar" class="w-2.5 h-2.5 text-gray-400" />
                      <span class="text-xs text-gray-400 font-normal">Projeto Fenamilho</span>
                    </div>
                  </div>
                </div>

                <!-- Desktop layout -->
                <div class="hidden md:block space-y-6">
                  <div class="relative w-fit mx-auto lg:mx-0">
                    <div class="w-32 h-32 rounded-2xl overflow-hidden border-2 border-gray-200 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/images/client.webp"
                        alt="Junior Moro, Sócio da Belif Marketing"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center border-3 border-white shadow-lg">
                      <Icon name="lucide:check" class="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div class="text-center lg:text-left space-y-3">
                    <h3 class="text-2xl font-bold text-gray-900">Junior Moro</h3>
                    <p class="text-gray-600 font-medium">
                      Sócio
                      <a href="https://instagram.com/belif.marketing" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 transition-colors">
                        @belif.marketing
                      </a>
                    </p>
                    <div class="flex items-center justify-center lg:justify-start gap-1">
                      <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                  <div class="flex justify-center lg:justify-start">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200/60 rounded-2xl">
                      <Icon name="lucide:calendar" class="w-3 h-3 text-gray-400" />
                      <span class="text-xs text-gray-400 font-medium">Projeto Fenamilho</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Quote -->
              <div class="lg:col-span-8 space-y-6">
                <div class="flex justify-start">
                  <div class="w-11 h-11 bg-gray-100 rounded-2xl flex items-center justify-center -rotate-12">
                    <Icon name="lucide:quote" class="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                <blockquote class="text-left">
                  <div class="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed space-y-4">
                    <p>
                      "Trabalhar com tecnologia é um desafio. Já nos frustramos algumas vezes com gente
                      que fala bonito, mas na hora do 'vamos ver'... desaparece.
                    </p>
                    <p>
                      Com a Trilha foi diferente desde o começo.
                    </p>
                    <p>
                      Não só pela competência técnica, mas pelo jeito como lidam com o projeto. Parece
                      que eles realmente se importam com o resultado, não só com entregar o trabalho contratado.
                    </p>
                    <p>
                      A comunicação sempre foi clara, rápida, direta. O app saiu do papel com qualidade,
                      velocidade e atenção aos detalhes. Zero reclamações ou consideração.
                      <span class="text-gray-900 font-semibold">Trabalho impecável!</span>
                    </p>
                    <p>
                      Foi uma experiência muito boa e com certeza continuaremos como clientes em outros projetos!"
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== TIMELINE ===================== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A jornada do projeto
          </h2>
        </div>

        <div class="max-w-3xl mx-auto relative">
          <!-- Vertical line -->
          <div class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200" />

          <div class="space-y-8">
            <div
              v-for="(phase, index) in timeline"
              :key="index"
              class="relative pl-16 md:pl-20"
            >
              <!-- Dot -->
              <div
                class="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full z-10 flex items-center justify-center"
                :class="phase.completed !== false ? 'bg-gray-900' : 'bg-gray-300'"
              >
                <div
                  v-if="phase.completed !== false"
                  class="w-1.5 h-1.5 rounded-full bg-white"
                />
              </div>

              <!-- Card -->
              <div class="glass-card rounded-2xl p-5 md:p-6">
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-gray-900 font-bold text-sm">{{ phase.label }}</span>
                  <span class="text-gray-400 text-xs">{{ phase.duration }}</span>
                </div>
                <h3 class="text-gray-900 font-semibold text-lg mb-1">{{ phase.title }}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{{ phase.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 sm:px-8 text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Seu evento pode ser o próximo case de sucesso
          </h2>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <NuxtLink
              to="/contato"
              class="btn-premium inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base"
            >
              <Icon name="lucide:calendar" class="w-5 h-5" />
              Agendar Demo
            </NuxtLink>

            <a
              href="https://wa.me/555493503203?text=Ol%C3%A1!%20Vi%20o%20case%20Fenamilho%20e%20quero%20saber%20mais%20sobre%20o%20Trilha%20Flow."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200/80 text-gray-900 font-semibold rounded-xl transition-colors duration-300"
            >
              <Icon name="lucide:message-circle" class="w-5 h-5 text-green-500" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Case Fenamilho 2025 — Trilha Flow | 3.500 usuários, 205K views, 14 sessões por pessoa',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/casos' }
  ],
  meta: [
    { name: 'description', content: 'Case real da Fenamilho 2025: 3.500 pessoas usando o app, 205K views em reels, 14 sessões por usuário e 20K+ interações gamificadas. A prova de que o app do seu evento pode virar canal de receita.' },
    { property: 'og:title', content: 'Case Fenamilho 2025 — Trilha Flow' },
    { property: 'og:description', content: 'A Fenamilho virou referência de engajamento digital com o app da Trilha Flow. Veja os números reais.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/casos' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: 'https://trilhalabs.com.br/og-image.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://trilhalabs.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Case Fenamilho 2025', item: 'https://trilhalabs.com.br/casos' }
        ]
      })
    }
  ]
})

const carouselCards = [
  { id: 'main', title: 'Tela principal', description: 'Tela inicial do Trilha Flow no evento Fenamilho', image: '/images/mockup1.svg' },
  { id: 'pre-event', title: 'Antes do evento', description: 'Recursos pra engajar o público antes do evento', image: '/images/mockup2.svg' },
  { id: 'live-event', title: 'Ao vivo', description: 'Experiência durante o evento com missões e prêmios em tempo real', image: '/images/mockup3.svg' },
  { id: 'post-event', title: 'Depois do evento', description: 'Dados e relacionamento depois do evento', image: '/images/mockup4.svg' },
  { id: 'platform', title: 'Plataforma', description: 'Ferramenta completa de gestão', image: '/images/mockup5.svg' },
]

const features = [
  { icon: 'lucide:gamepad-2', label: 'Missões e prêmios' },
  { icon: 'lucide:rss', label: 'Feed com vídeos' },
  { icon: 'lucide:disc-3', label: 'Roleta de prêmios' },
  { icon: 'lucide:bell', label: 'Notificações' },
  { icon: 'lucide:bar-chart-3', label: 'Painel com dados' },
  { icon: 'lucide:shopping-bag', label: 'Loja virtual' },
]

const metrics = [
  {
    title: 'Engajamento',
    value: '14 aberturas por pessoa',
    description: 'Visitantes voltaram ao app várias vezes',
  },
  {
    title: 'Visibilidade',
    value: '205.000 visualizações de tela',
    description: '3.000 cliques em anúncios',
  },
  {
    title: 'Interação',
    value: '20.000+ giros na roleta',
    description: '185 prêmios distribuídos',
  },
  {
    title: 'Uso',
    value: '3.500 pessoas usando o app',
    description: 'Explorando o app durante o evento',
  },
]

const timeline = [
  {
    label: 'Fase 1',
    title: 'Descoberta e planejamento',
    duration: '2 semanas',
    description: 'Entender o evento, o público e os objetivos',
    completed: true,
  },
  {
    label: 'Fase 2',
    title: 'Design e protótipo',
    duration: '2 semanas',
    description: 'Desenho das telas do app completo',
    completed: true,
  },
  {
    label: 'Fase 3',
    title: 'Desenvolvimento',
    duration: '6 semanas',
    description: 'iPhone, Android, servidor e painel de administração',
    completed: true,
  },
  {
    label: 'Fase 4',
    title: 'Lançamento e evento',
    duration: '2 semanas',
    description: 'Publicação do app, acompanhamento e suporte ao vivo',
    completed: true,
  },
  {
    label: 'Fase 5',
    title: 'Depois do evento',
    duration: 'sem fim',
    description: 'Dados, melhorias e preparação pra próxima edição',
    completed: false,
  },
]
</script>
