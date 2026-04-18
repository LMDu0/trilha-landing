<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">Engajamento em eventos</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            Como fazer o público
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">se envolver</span>
            no seu evento.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Engajamento de verdade não é distribuir brinde na entrada e rezar pro público ficar. É construir motivo pra pessoa voltar no app, circular pelo evento e gastar com quem tá ali. A gente mostra como fazer.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
              Agendar conversa
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="/produto" class="inline-flex items-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-full border border-slate-200 hover:border-slate-900 transition-colors">
              Ver o produto
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Por que a maioria dos eventos falha em engajar</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O erro mais comum é achar que o público vem engajado de casa. Não vem. A pessoa chega cansada, não conhece ninguém, não sabe o que tem pra fazer e na primeira hora já tá pensando se não foi melhor ter ficado em casa. Se o evento não der um motivo claro pra ela abrir o celular, circular e participar, ela vai virar plateia passiva. E plateia passiva não consome, não compartilha e não volta na próxima edição.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Engajar é diferente de divertir. Divertir é a palestra boa, o show no palco, o drone. Engajar é a pessoa fazendo algo, tomando uma decisão, entrando em movimento. É a diferença entre assistir e participar. E é aí que a maioria dos eventos brasileiros ainda tá patinando.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">A regra das primeiras duas horas</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              As duas primeiras horas definem o resto do evento. Se nesse tempo a pessoa abriu o app, completou a primeira missão, entrou no ranking e ganhou algum pontinho, ela tá dentro do jogo. Se não, ela já virou espectador. Por isso o onboarding precisa ser curto, a primeira missão precisa ser fácil e a recompensa precisa aparecer rápido. O app do evento tem que dar uma vitória na primeira meia hora.
            </p>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Check-in na entrada:</strong> primeira pontuação garantida, a pessoa já entra vendo progresso.</li>
              <li><strong class="text-slate-900">Missão de boas-vindas:</strong> uma ação simples (visitar um estande, ver um vídeo) que dá moeda na hora.</li>
              <li><strong class="text-slate-900">Ranking visível:</strong> a pessoa entende que tem competição rolando e quer subir.</li>
              <li><strong class="text-slate-900">Feed social ativo:</strong> conteúdo já rolando no <NuxtLink to="/feed-social-para-eventos" class="text-violet-600 hover:underline">feed do evento</NuxtLink> pra ela se sentir parte.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Três alavancas que fazem o público se mover</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Depois que a pessoa entrou no jogo, tem três alavancas que movimentam o comportamento dela: progresso, status e recompensa. Progresso é a barra que enche, o checklist que tá quase lá, a quantidade de pontos que falta pro próximo nível. Status é o nome subindo no ranking, a posição no pódio, o destaque no feed. Recompensa é o prêmio concreto no final, o voucher, o item que chega em casa depois. Evento que usa as três alavancas ao mesmo tempo vira máquina de engajamento.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Conteúdo feito pelo próprio público</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O conteúdo mais forte do evento é aquele que o público produz. Quando a pessoa posta um vídeo no feed do evento, ela tá ao mesmo tempo se divertindo, marcando presença e fazendo marketing pro próximo ano. Pra isso funcionar, o app precisa de um <NuxtLink to="/feed-social-para-eventos" class="text-violet-600 hover:underline">feed social nativo</NuxtLink> e missões que peçam conteúdo (post com hashtag, vídeo do estande, foto no pódio). Isso gera orgânico sem custo e reaproveita no pós-evento.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Engajamento que vira receita</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Público engajado gasta mais. Abre o app mais vezes, vê mais ofertas dos expositores, participa de mais promoção e compra com <NuxtLink to="/economia-virtual-eventos" class="text-violet-600 hover:underline">a moeda do evento</NuxtLink>. Ou seja: o mesmo sistema que segura a atenção do público é o que abre novas linhas de receita pro organizador. Mais sobre isso em <NuxtLink to="/como-aumentar-receita-evento" class="text-violet-600 hover:underline">como aumentar a receita do evento</NuxtLink> e <NuxtLink to="/como-monetizar-evento" class="text-violet-600 hover:underline">como monetizar o evento</NuxtLink>.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer ver um plano de engajamento pro seu evento?</h3>
                <p class="text-violet-100 mb-6">A gente mostra casos reais e desenha missões, ranking e recompensas que fazem sentido pro seu público.</p>
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
                  <span class="text-lg font-medium text-slate-900">Dá pra engajar um público que não é de tecnologia?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Dá. A gente já rodou em público de feira agro, com produtor rural que não tinha instalado app de evento antes. A regra é onboarding simples, primeira missão óbvia e recompensa concreta. Se o prêmio faz sentido pra quem tá ali, a pessoa entra.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Qual é a melhor missão de abertura?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Check-in na entrada. É automática, instantânea, já dá um saldo inicial e coloca a pessoa no ranking. Depois disso, uma missão de visitar um estande específico costuma ter o melhor retorno.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Como evitar que o público desista no meio do evento?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Tendo missões novas aparecendo ao longo do dia, ranking disputado e pelo menos uma premiação intermediária (não só no último dia). Notificação push na hora certa também ajuda a trazer de volta quem começou a dispersar.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Dá pra medir engajamento de verdade?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Dá. O painel mostra tempo dentro do app, missões completadas por pessoa, posts no feed, cliques em estande e conversão em compra. É métrica numérica, não achismo.</p>
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
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Quer engajar seu público?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">A gente monta o jogo, o ranking e as recompensas. Você só precisa abrir o evento.</p>
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
            <NuxtLink to="/gamificacao-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Gamificação para eventos</div>
            </NuxtLink>
            <NuxtLink to="/feed-social-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Feed social com vídeos</div>
            </NuxtLink>
            <NuxtLink to="/economia-virtual-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Moeda do evento</div>
            </NuxtLink>
            <NuxtLink to="/app-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Produto</div>
              <div class="text-slate-900 font-medium">App para eventos</div>
            </NuxtLink>
            <NuxtLink to="/como-aumentar-receita-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como aumentar a receita</div>
            </NuxtLink>
            <NuxtLink to="/casos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Casos</div>
              <div class="text-slate-900 font-medium">Como foi com a Fenamilho 2025</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Como engajar o público do seu evento — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/como-engajar-publico-evento' }],
  meta: [
    { name: 'description', content: 'Como fazer o público do seu evento se envolver de verdade: missões, ranking, feed social e recompensas que transformam plateia em participante ativo.' },
    { property: 'og:title', content: 'Como engajar o público do seu evento — Trilha Flow' },
    { property: 'og:description', content: 'Engajamento de verdade com missões, feed social e moeda do evento.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/como-engajar-publico-evento' },
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
          { '@type': 'ListItem', position: 2, name: 'Como engajar o público', item: 'https://trilhalabs.com.br/como-engajar-publico-evento' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Dá pra engajar um público que não é de tecnologia?', acceptedAnswer: { '@type': 'Answer', text: 'Dá. Já rodamos em feira agro com produtor rural. Onboarding simples, primeira missão óbvia e recompensa concreta resolvem.' } },
          { '@type': 'Question', name: 'Qual é a melhor missão de abertura?', acceptedAnswer: { '@type': 'Answer', text: 'Check-in na entrada. Automática, instantânea e já coloca a pessoa no ranking.' } },
          { '@type': 'Question', name: 'Como evitar que o público desista no meio do evento?', acceptedAnswer: { '@type': 'Answer', text: 'Missões novas aparecendo ao longo do dia, ranking disputado e pelo menos uma premiação intermediária.' } },
          { '@type': 'Question', name: 'Dá pra medir engajamento?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Painel mostra tempo no app, missões completadas, posts no feed, cliques em estande e conversão em compra.' } }
        ]
      })
    }
  ]
})
</script>
