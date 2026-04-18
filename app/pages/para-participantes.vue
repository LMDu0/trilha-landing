<template>
  <div class="bg-white">

    <!-- ==============================
         HERO — fala direto com o participante
    ============================== -->
    <section class="pt-36 pb-20 md:pt-44 md:pb-24 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6 mt-8">
            Cada interação<br />
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">vira prêmio.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
            Missões, vídeos, ranking, moedas e prêmios de verdade. O app oficial do evento é onde acontece o que importa: você se conecta com quem tá lá, descobre ofertas exclusivas e leva algo pra casa além da lembrança.
          </p>

          <!-- Reassurance pill -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-600">
            <svg class="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            Grátis pra participar. Seu ingresso continua sendo o seu ingresso.
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         O QUE VOCÊ GANHA (mindset: desejabilidade)
    ============================== -->
    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-4">
              Evento bom é o que<br />
              <span class="text-slate-400">você leva com você.</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              O app te dá motivos pra abrir ele várias vezes por dia — e deixa o evento inteiro na palma da sua mão antes, durante e depois.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="win in playerWins" :key="win.title"
                 class="relative p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-xs font-mono text-slate-400 mb-3">{{ win.tag }}</div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-900 mb-2">{{ win.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ win.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         COMO FUNCIONA (loop: cumpriu, ganhou, gastou)
    ============================== -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-4">
              Como funciona, na prática.
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Não é sorteio, não é promessa vaga. A cada coisa que você faz, a moeda entra na sua carteira e você escolhe o que fazer com ela.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="(step, i) in howItWorks" :key="step.title"
                 class="flex flex-col p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-slate-300 font-mono text-sm mb-3">0{{ i + 1 }}</div>
              <h3 class="font-semibold text-slate-900 tracking-tight mb-2">{{ step.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         ANTES / DURANTE / DEPOIS
    ============================== -->
    <section class="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-4">
              O evento não começa no portão.<br />
              <span class="text-slate-400">E nem termina na saída.</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="phase in timeline" :key="phase.window"
                 class="flex flex-col p-7 rounded-2xl border border-slate-200 bg-white">
              <div class="text-sm font-medium text-slate-400 mb-4">{{ phase.window }}</div>
              <h3 class="text-lg font-semibold text-slate-900 tracking-tight mb-2">{{ phase.title }}</h3>
              <ul class="space-y-2 mt-3">
                <li v-for="b in phase.bullets" :key="b" class="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         FAQ curta — dúvidas comuns do participante
    ============================== -->
    <section class="py-20 md:py-28">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-10">
            Perguntas rápidas.
          </h2>
          <div class="space-y-4">
            <details v-for="item in faqs" :key="item.q" class="group p-6 rounded-2xl border border-slate-200 bg-white">
              <summary class="flex items-center justify-between cursor-pointer font-medium text-slate-900">
                {{ item.q }}
                <svg class="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">{{ item.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================
         CTA final — suave, dirigido ao organizador
    ============================== -->
    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-3xl rounded-full" />
          <div class="relative">
            <h2 class="text-2xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
              Organiza um evento e quer isso pro seu público?
            </h2>
            <p class="text-slate-400 mb-8 max-w-xl mx-auto">
              A gente mostra como o app fica com a cara do seu evento em poucos dias.
            </p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Falar com a gente
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Trilha Flow para Participantes — O app do evento que te dá prêmio',
  link: [
    { rel: 'canonical', href: 'https://trilhalabs.com.br/para-participantes' }
  ],
  meta: [
    { name: 'description', content: 'O app oficial do evento onde cada interação vira prêmio: missões, moedas, vídeos, ranking, ofertas dos expositores e experiências exclusivas pra quem tá lá.' },
    { property: 'og:title', content: 'Trilha Flow para Participantes' },
    { property: 'og:description', content: 'Missões, moedas, prêmios e vídeos. O app do seu evento que te recompensa em cada visita.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/para-participantes' },
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
          { '@type': 'ListItem', position: 2, name: 'Para participantes', item: 'https://trilhalabs.com.br/para-participantes' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Preciso do app pra entrar no evento?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Seu ingresso é a sua entrada. O app é um extra que te dá prêmios, descontos e o mapa do evento.' } },
          { '@type': 'Question', name: 'O app é pago?', acceptedAnswer: { '@type': 'Answer', text: 'Baixar e usar é grátis. Algumas experiências dentro do app podem custar moeda do evento, que você ganha cumprindo missões.' } },
          { '@type': 'Question', name: 'Os prêmios são de verdade?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. São produtos, kits e experiências oferecidos pelos expositores e patrocinadores do evento. Você retira com QR Code no estande.' } },
          { '@type': 'Question', name: 'O que acontece com minhas moedas depois do evento?', acceptedAnswer: { '@type': 'Answer', text: 'Continuam valendo. Você pode usar na loja e com expositores até a próxima edição.' } }
        ]
      })
    }
  ]
})

const playerWins = [
  { tag: '01 · Prêmios', title: 'Prêmios de verdade', desc: 'Kits, experiências e produtos dos expositores. O que você ganha, você leva pra casa.' },
  { tag: '02 · Descontos', title: 'Descontos exclusivos', desc: 'Ofertas que só aparecem pra quem tá com o app. Nos estandes, na praça de alimentação e na loja oficial.' },
  { tag: '03 · Conexão', title: 'Conecta com quem tá lá', desc: 'Descobre outras pessoas, marca ponto de encontro e compartilha o que tá rolando em tempo real.' },
  { tag: '04 · Antecipe', title: 'Fica por dentro antes de todo mundo', desc: 'Avisos de surpresas, horários que mudaram e ações relâmpago chegam direto no seu celular.' },
  { tag: '05 · Vídeos', title: 'Seu momento no feed', desc: 'Grava reels do que você tá vivendo no evento. Os mais curtidos ganham prêmios e aparecem pro evento todo.' },
  { tag: '06 · Mapa', title: 'Não perde nada', desc: 'Agenda, mapa dos estandes, horários dos shows e o que tá acontecendo agora, na palma da mão.' }
]

const howItWorks = [
  { title: 'Cumpre missões', desc: 'Visita estandes, assiste palestras, curte vídeos, convida amigo. Tudo é missão, tudo gera moeda.' },
  { title: 'Ganha moeda do evento', desc: 'Sua carteira digital vai enchendo. Sequência de dias, convites e vídeos curtidos rendem bônus.' },
  { title: 'Troca pelo que quiser', desc: 'Roleta de prêmios, loja oficial, produtos com expositores ou experiências VIP do evento.' }
]

const timeline = [
  {
    window: 'Antes do evento',
    title: 'Chega preparado',
    bullets: [
      'Monta sua agenda com o que te interessa',
      'Vê o catálogo dos expositores',
      'Já começa a ganhar moeda com missões de pré-evento'
    ]
  },
  {
    window: 'Durante o evento',
    title: 'Vive o evento de verdade',
    bullets: [
      'Missões novas todo dia',
      'Grava vídeos e aparece no feed',
      'Gasta moeda nos estandes e na loja oficial'
    ]
  },
  {
    window: 'Depois do evento',
    title: 'Continua na sua mão',
    bullets: [
      'Moedas que sobraram valem até a próxima edição',
      'Compra com expositores mesmo em casa',
      'Vídeos do evento continuam rodando'
    ]
  }
]

const faqs = [
  {
    q: 'Preciso do app pra entrar no evento?',
    a: 'Não. Seu ingresso é a sua entrada. O app é um extra que te dá prêmios, descontos e o mapa do evento. Quem usa, aproveita mais.'
  },
  {
    q: 'O app é pago?',
    a: 'Baixar e usar é grátis. Algumas experiências dentro do app podem custar moeda do evento, que você ganha cumprindo missões ou pode comprar se quiser.'
  },
  {
    q: 'Os prêmios são de verdade?',
    a: 'Sim. São produtos, kits e experiências oferecidos pelos expositores e patrocinadores do evento. Quando você ganha na roleta ou na loja, retira com QR Code no estande.'
  },
  {
    q: 'O que acontece com minhas moedas depois do evento?',
    a: 'Elas continuam valendo. Você pode usar na loja e com expositores até a próxima edição do evento.'
  },
  {
    q: 'Preciso criar conta com mil dados?',
    a: 'Não. Cadastro simples, em menos de um minuto. Sem papelada, sem fila.'
  }
]
</script>
