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
          <span class="text-gray-900">Em um unico app.</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
          Um app completo que junta missoes, feed com videos, moeda do evento e painel com dados
          pra criar eventos que as pessoas realmente lembram.
        </p>
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
            Missoes e premios
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Formas de fazer o publico voltar &mdash; do jeito certo
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Baseado na logica por tras do Duolingo e do TikTok. Ciclos que
            transformam quem so assiste em quem participa de verdade.
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
            Feed com videos
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            O TikTok do seu evento
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Videos curtos, curtidas na hora e uma comunidade viva dentro do seu evento.
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
            Moeda propria e loja dentro do evento
          </h2>

          <p class="text-lg text-gray-600 mt-4 leading-relaxed">
            Moedas, loja, carteira digital e cupons. Um ciclo completo que gera dinheiro e
            faz o publico voltar ao mesmo tempo.
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
            Painel em tempo real, conversa direta com o publico certo e ferramentas de faturamento pra
            tirar o maximo de cada evento.
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
      <div class="container mx-auto px-6 sm:px-8 relative z-10 text-center max-w-3xl">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
          Quer ver tudo isso funcionando?
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/contato"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            <Icon name="lucide:calendar" class="w-5 h-5" />
            Agendar Demo Gratuita
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
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Funcionalidades | Trilha Flow — Missões, Feed com vídeos e Moeda do evento',
  meta: [
    {
      name: 'description',
      content:
        'Conheça todas as funcionalidades do Trilha Flow: missões e ranking, feed com vídeos, moeda do evento e loja, e painel com dados em tempo real pra eventos.',
    },
  ],
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
    title: 'Painel de administração',
    description:
      'Gerencie conteúdo, prêmios, missões e configurações. Tudo num lugar só.',
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
