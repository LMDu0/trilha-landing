<template>
  <div class="bg-[#f5f5f7]">

    <!-- ============================================ -->
    <!-- HERO -->
    <!-- ============================================ -->
    <section class="relative py-24 pt-32 bg-white">
      <div class="container mx-auto px-6 sm:px-8 relative z-10 text-center max-w-4xl">
        <!-- Badge -->
        <span class="badge-pill mb-8">
          <Icon name="lucide:box" class="w-4 h-4" />
          Produto
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          <span class="text-gray-900">Tudo que seu evento precisa.</span>
          <br />
          <span class="text-gray-900">Em um único app.</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
          Missões e prêmios, feed com vídeos, moeda do evento e painel com tudo o que está acontecendo. Um app com a cara do seu evento — que continua vendendo depois que o evento acaba.
        </p>
        <p class="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
          A Trilha não substitui a sua plataforma de ingresso. Ela começa depois — no app que fica na mão do público e vira o ponto de encontro do seu evento, antes, durante e depois.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink
            to="/contato"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-black text-white font-medium transition-colors"
          >
            Calcular quanto meu evento pode faturar
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink
            to="/precos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-medium transition-colors"
          >
            Como a gente cobra
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- GAMIFICACAO -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-[#f5f5f7]">
      <div class="container mx-auto px-6 sm:px-8 relative z-10">
        <!-- Section header -->
        <div class="max-w-3xl mb-16">
          <span class="badge-pill mb-6">
            <Icon name="lucide:gamepad-2" class="w-4 h-4" />
            Missões e prêmios
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Formas de fazer o público voltar &mdash; do jeito certo
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            A mesma lógica por trás do Duolingo e do TikTok. Ciclos que transformam quem só assiste em quem participa de verdade.
          </p>
        </div>

        <!-- Feature grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="feature in gamificationFeatures"
            :key="feature.title"
            class="glass-card p-6 md:p-8"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Icon :name="feature.icon" class="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-500 leading-relaxed text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- FEED SOCIAL & REELS -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-white">
      <div class="container mx-auto px-6 sm:px-8 relative z-10">
        <!-- Section header -->
        <div class="max-w-3xl mb-16">
          <span class="badge-pill mb-6">
            <Icon name="lucide:play-circle" class="w-4 h-4" />
            Feed com vídeos
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            O TikTok do seu evento
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Vídeos curtos feitos pelo próprio público, curtidas na hora e uma comunidade viva dentro do seu evento — que segue rodando depois que acaba.
          </p>
        </div>

        <!-- Feature grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="feature in socialFeatures"
            :key="feature.title"
            class="glass-card p-6 md:p-8"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Icon :name="feature.icon" class="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-500 leading-relaxed text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ECONOMIA VIRTUAL -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-[#f5f5f7]">
      <div class="container mx-auto px-6 sm:px-8 relative z-10">
        <!-- Section header -->
        <div class="max-w-3xl mb-16">
          <span class="badge-pill mb-6">
            <Icon name="lucide:coins" class="w-4 h-4" />
            Moeda do evento
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Moeda própria e loja dentro do evento
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Moedas, loja, carteira digital e cupons. Um ciclo que gera dinheiro pro seu evento e faz o público voltar ao mesmo tempo.
          </p>
        </div>

        <!-- Feature grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="feature in economyFeatures"
            :key="feature.title"
            class="glass-card p-6 md:p-8"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Icon :name="feature.icon" class="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-500 leading-relaxed text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- PARA ORGANIZADORES / ANALYTICS -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-white">
      <div class="container mx-auto px-6 sm:px-8 relative z-10">
        <!-- Section header -->
        <div class="max-w-3xl mb-16">
          <span class="badge-pill mb-6">
            <Icon name="lucide:bar-chart-3" class="w-4 h-4" />
            Para Organizadores
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Dados que geram dinheiro
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Painel em tempo real, conversa direta com o público certo e ferramentas pra cobrar patrocínio com número. Tudo num lugar só.
          </p>
        </div>

        <!-- Feature grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="feature in analyticsFeatures"
            :key="feature.title"
            class="glass-card p-6 md:p-8"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Icon :name="feature.icon" class="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-500 leading-relaxed text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- BOTTOM CTA -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-[#f5f5f7]">
      <div class="container mx-auto px-6 sm:px-8 relative z-10 max-w-5xl">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Quer ver quanto seu evento pode faturar com isso?
          </h2>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Em 30 min a gente roda a projeção com os seus números. Sem compromisso, sem venda forçada — e a gente só cobra quando você ganha.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="/contato"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              <Icon name="lucide:calendar" class="w-5 h-5" />
              Calcular meu evento
            </NuxtLink>

            <NuxtLink
              to="/casos"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
            >
              Ver Case Fenamilho
              <Icon name="lucide:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>

        <!-- Internal linking: personas e segmentos -->
        <div class="mt-16 pt-10 border-t border-gray-200">
          <div class="text-center text-sm font-medium text-gray-500 mb-6">Veja o app pela perspectiva de cada pessoa do seu evento</div>
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink to="/para-organizadores" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">Para organizadores</NuxtLink>
            <NuxtLink to="/para-expositores" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">Para expositores</NuxtLink>
            <NuxtLink to="/para-patrocinadores" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">Para patrocinadores</NuxtLink>
            <NuxtLink to="/para-participantes" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">Para participantes</NuxtLink>
          </div>
          <div class="flex flex-wrap justify-center gap-3 mt-3">
            <NuxtLink to="/eventos/agro" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">App para feira agro</NuxtLink>
            <NuxtLink to="/eventos/tech" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">App para evento tech</NuxtLink>
            <NuxtLink to="/eventos/corporativos" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">App para convenção</NuxtLink>
            <NuxtLink to="/eventos/feiras" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">App para feira</NuxtLink>
            <NuxtLink to="/eventos/festivais" class="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-900 transition-colors">App para festival</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Funcionalidades | Trilha Flow — App para eventos com missões, vídeos e moeda',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/produto' }
  ],
  meta: [
    {
      name: 'description',
      content:
        'Tudo o que o app do seu evento tem: missões e ranking, feed com vídeos do público, moeda própria, loja dos expositores e painel com dados em tempo real.',
    },
    { property: 'og:title', content: 'Funcionalidades do Trilha Flow — App para eventos' },
    { property: 'og:description', content: 'Missões, feed com vídeos, moeda do evento, loja dos expositores e painel em tempo real. Um app com a cara do seu evento.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/produto' },
    { property: 'og:type', content: 'website' },
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
          { '@type': 'ListItem', position: 2, name: 'Produto', item: 'https://trilhalabs.com.br/produto' }
        ]
      })
    }
  ]
})

// -----------------------------------------------
// Feature data
// -----------------------------------------------

interface Feature {
  icon: string
  title: string
  description: string
}

const gamificationFeatures: Feature[] = [
  {
    icon: 'lucide:target',
    title: 'Missões inteligentes',
    description:
      'Diárias, semanais e do evento. Cada missão cumprida gera pontos e moedas que fazem o público voltar.',
  },
  {
    icon: 'lucide:trophy',
    title: 'Ranking',
    description:
      'Ranking em tempo real com pódio. Competição saudável que faz o público voltar ao app.',
  },
  {
    icon: 'lucide:flame',
    title: 'Sequência e bônus',
    description:
      'Abre o app todo dia e ganha mais. 3 dias seguidos = 1.5x, 7 dias = 2x prêmios.',
  },
  {
    icon: 'lucide:circle-dot',
    title: 'Roleta de prêmios',
    description:
      'Roleta da sorte com prêmios reais dos patrocinadores. Um giro grátis por dia + giros pagos com moedas.',
  },
  {
    icon: 'lucide:award',
    title: 'Medalhas e conquistas',
    description:
      'Medalhas que premiam quem participa. Maratonista, Estrela Social, Gastador...',
  },
  {
    icon: 'lucide:trending-up',
    title: 'Níveis e pontos',
    description:
      'Evolução visual: Bronze → Prata → Ouro → Diamante. Cada nível libera prêmios exclusivos.',
  },
]

const socialFeatures: Feature[] = [
  {
    icon: 'lucide:clapperboard',
    title: 'Reels na vertical',
    description:
      'Feed de vídeos curtos igual TikTok. Expositores publicam, visitantes assistem e compartilham.',
  },
  {
    icon: 'lucide:heart',
    title: 'Dois toques pra curtir',
    description:
      'Coração animado igual Instagram. Curtida rápida com um toque.',
  },
  {
    icon: 'lucide:users',
    title: 'Comunidade',
    description:
      'Grade de vídeos do público. Visitantes compartilham momentos e criam memórias do evento juntos.',
  },
  {
    icon: 'lucide:image',
    title: 'Stories dos expositores',
    description:
      'Conteúdo dos estandes em formato stories. Promoções, novidades e destaques em tempo real.',
  },
]

const economyFeatures: Feature[] = [
  {
    icon: 'lucide:coins',
    title: 'Moedas do evento',
    description:
      'Dois tipos: Pontos (pro ranking) + Moedas (pra gastar). Missões geram os dois, fazendo o público voltar.',
  },
  {
    icon: 'lucide:store',
    title: 'Loja oficial',
    description:
      'Comida, produtos do evento, experiências. Compra com moedas direto no app.',
  },
  {
    icon: 'lucide:wallet',
    title: 'Carteira digital',
    description:
      'Saldo, histórico e recarga. Tudo integrado no app com tela simples.',
  },
  {
    icon: 'lucide:qr-code',
    title: 'Cupons e QR Codes',
    description:
      'Prêmios que o público pega nos estandes com QR Code. Ligando o digital ao físico num toque.',
  },
]

const analyticsFeatures: Feature[] = [
  {
    icon: 'lucide:activity',
    title: 'Painel em tempo real',
    description:
      'Acompanhe o engajamento, as aberturas e as vendas durante o evento. Tome decisões com dados ao vivo.',
  },
  {
    icon: 'lucide:megaphone',
    title: 'Receita de patrocinadores',
    description:
      'Espaços de anúncio no app, vitrine oficial e ofertas relâmpago. Novas formas de faturar pra organizadores.',
  },
  {
    icon: 'lucide:bell',
    title: 'Notificações no celular',
    description:
      'Conversa direta com o público certo. Envie mensagens certas na hora certa.',
  },
  {
    icon: 'lucide:settings',
    title: 'Painel do organizador',
    description:
      'Ajuste missões, prêmios e conteúdo do feed em tempo real durante o evento — pra reagir ao que tá engajando o público.',
  },
]
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  border: 1px solid rgba(229, 231, 235, 0.5);
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(243, 244, 246, 0.8);
  color: rgb(107, 114, 128);
}
</style>
