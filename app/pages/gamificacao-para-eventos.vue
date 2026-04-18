<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">Gamificação para eventos</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            Gamificação para eventos que
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">vicia o público</span>
            no seu evento.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Missões, pontos, ranking e prêmios que fazem o público chegar mais cedo, ficar mais tempo e voltar na próxima edição. Sem complicação, sem app estrangeiro.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
              Agendar conversa
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="/precos" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full border border-slate-200 hover:border-slate-900 transition-colors">
              Ver preços
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Corpo -->
    <section class="pb-16">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mx-auto">
          <article class="prose prose-slate max-w-none">
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Por que gamificação funciona em evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O cérebro humano adora três coisas: progresso, status e recompensa. Quando o participante vê uma barra enchendo, uma posição subindo no ranking ou um prêmio chegando perto, ele fica engajado sem perceber. Isso não é truque, é como a gente é. Videogames entenderam isso há 40 anos. Eventos, na maioria dos casos, ainda estão tratando o público como uma plateia passiva, que só assiste.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Quando você aplica gamificação num evento, a experiência muda. A pessoa chega mais cedo pra começar a pontuar, visita estandes que nunca visitaria, participa de palestras que ignoraria e conversa com expositores que passaria reto. Não porque é obrigada, mas porque virou jogo. E no final, ela sai com uma sensação de conquista, o que vira boca-a-boca e foto no stories.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Missões que fazem sentido</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Missão boa é missão que encaixa no que o evento já quer que aconteça. Se o organizador quer levar gente pros estandes, a missão é visitar três estandes diferentes. Se quer engajamento de patrocinador, a missão é responder um quiz da marca. Se quer conteúdo orgânico, a missão é postar um vídeo com a hashtag do evento. A ideia é que cada missão resolva um problema do evento e ainda gere pontos pro participante.
            </p>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Check-in no estande:</strong> pontos por visitar cada expositor, distribuindo o fluxo.</li>
              <li><strong class="text-slate-900">Quiz de patrocinador:</strong> o público aprende sobre a marca e o patrocinador ganha atenção qualificada.</li>
              <li><strong class="text-slate-900">Post com hashtag:</strong> conteúdo orgânico feito pelo próprio público.</li>
              <li><strong class="text-slate-900">Participar de palestra:</strong> check-in na sala vale pontos e enche auditórios.</li>
              <li><strong class="text-slate-900">Convite de amigo:</strong> cada indicação vale pontos e atrai mais público.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Ranking e pódio do evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Ranking visível em tempo real transforma o evento num campeonato saudável. O público abre o app várias vezes ao dia só pra ver a posição. No último dia, sobe ao palco quem chegou no topo. Pode ser pódio físico, prêmio em produto, voucher do evento, qualquer coisa que tenha simbolismo. O importante é ter o momento do reconhecimento público. Isso gera foto, gera vídeo, gera gente querendo participar da próxima edição pra ficar no pódio.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Moeda do evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              A moeda do evento é a mecânica que fecha o ciclo. O participante ganha moeda completando missões e também pode comprar moeda com dinheiro dentro do app. Depois gasta na loja interna, em produtos dos expositores ou em experiências do evento. Pra quem organiza, é uma forma nova de receita: a moeda vendida vira caixa, a moeda gasta gera comissão. Tem mais sobre isso em <NuxtLink to="/como-aumentar-receita-evento" class="text-violet-600 hover:underline">como aumentar a receita do evento</NuxtLink> e em <NuxtLink to="/como-monetizar-evento" class="text-violet-600 hover:underline">como monetizar o evento</NuxtLink>.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Como montar uma estratégia de gamificação</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Gamificação não é colar pontos em tudo. Comece definindo o que o evento precisa que aconteça: mais visita a estandes, mais engajamento de patrocinador, mais conteúdo nas redes. Depois crie missões que resolvam exatamente esses problemas. Configure prêmios proporcionais ao tamanho do evento: não precisa ser caro, precisa ser desejável. E deixe tudo dentro do <NuxtLink to="/app-para-eventos" class="text-violet-600 hover:underline">app do seu evento</NuxtLink>, com ranking visível e moeda circulando. O resto é observar e ajustar no segundo dia com base no que funcionou no primeiro.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer ver um exemplo de gamificação rodando?</h3>
                <p class="text-violet-100 mb-6">A gente mostra como foi na Fenamilho e monta um plano pro seu evento.</p>
                <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-violet-700 font-medium px-6 py-3 rounded-full hover:bg-violet-50 transition-colors">
                  Agendar conversa
                  <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>

            <!-- FAQ -->
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 mt-12">Perguntas frequentes</h2>
            <div class="space-y-3">
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Funciona pra evento pequeno?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Funciona. Quanto menor o evento, mais rápido o ranking fica disputado e mais visível fica o efeito. A gente tem plano pra evento de qualquer porte.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Preciso de prêmios caros?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Não. O que importa é o simbolismo e a visibilidade da premiação. Produtos dos expositores, vouchers pra próxima edição e brindes de patrocinador costumam funcionar bem.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Como os patrocinadores entram na gamificação?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Virando parte do jogo. O patrocinador pode ter uma missão própria (quiz, check-in no estande, vídeo), entra no feed e no ranking, e recebe relatório de quantas pessoas interagiram com a marca.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Tem como medir o resultado?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Tem. O painel mostra missões completadas, ranking, tempo dentro do app, visitas por estande e interações com cada patrocinador. Dá pra provar o que funcionou.</p>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto p-10 md:p-14 rounded-3xl bg-slate-950 text-white text-center relative overflow-hidden">
          <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/20 rounded-full blur-3xl" />
          <div class="relative">
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Quer gamificar o seu evento?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">A gente monta as missões, o ranking e a moeda. Você só precisa apertar o play.</p>
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Agendar conversa
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer de links -->
    <section class="pb-24">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-sm font-medium text-slate-500 mb-4">Continue lendo</div>
          <div class="grid md:grid-cols-3 gap-4">
            <NuxtLink to="/produto" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Produto</div>
              <div class="text-slate-900 font-medium">O que vem dentro do Trilha Flow</div>
            </NuxtLink>
            <NuxtLink to="/precos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Preços</div>
              <div class="text-slate-900 font-medium">Planos e o que entra em cada um</div>
            </NuxtLink>
            <NuxtLink to="/casos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Casos</div>
              <div class="text-slate-900 font-medium">Como foi com a Fenamilho 2025</div>
            </NuxtLink>
            <NuxtLink to="/app-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">App para eventos</div>
            </NuxtLink>
            <NuxtLink to="/como-aumentar-receita-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como aumentar a receita do evento</div>
            </NuxtLink>
            <NuxtLink to="/como-monetizar-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como monetizar o seu evento</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Gamificação para eventos: missões, ranking e moeda — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/gamificacao-para-eventos' }],
  meta: [
    { name: 'description', content: 'Gamificação para eventos com missões, ranking, pódio e moeda do evento. Faz o público chegar mais cedo, ficar mais tempo e voltar na próxima edição.' },
    { property: 'og:title', content: 'Gamificação para eventos que vicia o público — Trilha Flow' },
    { property: 'og:description', content: 'Missões, pontos, ranking e prêmios dentro do app do seu evento.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/gamificacao-para-eventos' },
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
          { '@type': 'ListItem', position: 2, name: 'Gamificação para eventos', item: 'https://trilhalabs.com.br/gamificacao-para-eventos' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Funciona pra evento pequeno?', acceptedAnswer: { '@type': 'Answer', text: 'Funciona. Quanto menor o evento, mais rápido o ranking fica disputado e mais visível fica o efeito. A gente tem plano pra evento de qualquer porte.' } },
          { '@type': 'Question', name: 'Preciso de prêmios caros?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O que importa é o simbolismo e a visibilidade da premiação. Produtos dos expositores, vouchers pra próxima edição e brindes de patrocinador costumam funcionar bem.' } },
          { '@type': 'Question', name: 'Como os patrocinadores entram na gamificação?', acceptedAnswer: { '@type': 'Answer', text: 'Virando parte do jogo. O patrocinador pode ter uma missão própria (quiz, check-in no estande, vídeo), entra no feed e no ranking, e recebe relatório de quantas pessoas interagiram com a marca.' } },
          { '@type': 'Question', name: 'Tem como medir o resultado?', acceptedAnswer: { '@type': 'Answer', text: 'Tem. O painel mostra missões completadas, ranking, tempo dentro do app, visitas por estande e interações com cada patrocinador.' } }
        ]
      })
    }
  ]
})
</script>
