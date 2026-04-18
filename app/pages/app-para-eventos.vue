<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">App para eventos</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            App para eventos que
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">continua vendendo</span>
            depois que acaba.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Trilha Flow é um app completo pro seu evento: feed social, missões, moeda interna, marketplace dos expositores e cotas de patrocínio digital. Tudo com a sua marca, publicado nas lojas ou rodando dentro do app da Trilha.
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que é um app para eventos hoje</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Durante muitos anos, um app de evento era basicamente uma agenda digital: lista de palestras, mapa do pavilhão e talvez um chat. Hoje o público já não abre mais um app só pra ver horário. Ele quer participar, compartilhar, competir, comprar e voltar pra casa com alguma história. O app virou o lugar onde o evento acontece de verdade, dentro da tela de cada pessoa. É por isso que o app do seu evento precisa fazer muito mais do que informar.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Um app para eventos moderno conecta três lados ao mesmo tempo: o público, que quer se divertir e interagir; os expositores, que querem vender; e os patrocinadores, que querem ser vistos pelas pessoas certas. Quando as três pontas se encontram num só lugar, o evento deixa de ser um custo pra ser uma operação que se paga e ainda sobra.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que o app faz durante o evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Durante os dias do evento, o app é a central de tudo. O participante abre e vê o feed social do evento, com fotos e vídeos feitos pelo próprio público. Completa missões que o organizador configurou: check-in no estande, assistir a uma palestra, responder um quiz de patrocinador. Ganha pontos, sobe no ranking e troca na loja interna. Tudo isso sem precisar sair do app.
            </p>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Feed social do evento:</strong> posts, fotos e vídeos do público, como uma rede social exclusiva daquele evento.</li>
              <li><strong class="text-slate-900">Missões e ranking:</strong> ações que valem pontos e criam sensação de jogo.</li>
              <li><strong class="text-slate-900">Loja dentro do app:</strong> expositores vendem produtos e serviços direto na tela do visitante.</li>
              <li><strong class="text-slate-900">Cotas de patrocínio digital:</strong> banners, missões patrocinadas e notificações com alcance mensurável.</li>
              <li><strong class="text-slate-900">Agenda e mapa:</strong> o básico bem-feito, com lembretes e navegação.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que o app faz depois do evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              A maioria dos apps de evento morre no domingo à noite. O Trilha Flow foi pensado pra continuar vivo. Depois que as portas fecham, o app segue com conteúdo: vídeos das palestras, destaques do público, galeria de fotos e a loja dos expositores continua aberta. É onde o organizador pré-vende a próxima edição, envia lembretes de datas, mantém o relacionamento quente. Em vez de começar do zero a cada ano, você chega na próxima edição com uma base de público engajado.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Como o app gera receita pro organizador</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O app sozinho não faz milagre, mas abre três frentes de receita que antes não existiam. A primeira é o <NuxtLink to="/gamificacao-para-eventos" class="text-violet-600 hover:underline">patrocínio digital</NuxtLink>: você vende cotas de banner, missão e notificação com números reais de quantas pessoas viram. A segunda é o marketplace dos expositores, onde cada venda feita pelo app pode gerar uma comissão pra organização. A terceira é a moeda do evento: uma moeda virtual que o público compra com dinheiro, ganha em missões e gasta na loja. Tudo isso está explicado em detalhe em <NuxtLink to="/como-aumentar-receita-evento" class="text-violet-600 hover:underline">como aumentar a receita do evento</NuxtLink>.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Quanto custa</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O Trilha Flow tem planos fechados, sem porcentagem em cima da sua receita. Cem por cento do que o app gerar fica com você. Tem plano a partir de R$ 390 por mês pra eventos pequenos, R$ 1.290 por mês pra eventos médios e uma faixa a partir de R$ 38 mil de setup mais R$ 1.900 por mês pra eventos grandes com personalização completa. Os detalhes, o que entra em cada plano e as condições estão na <NuxtLink to="/precos" class="text-violet-600 hover:underline">página de preços</NuxtLink>.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer ver o app rodando no seu evento?</h3>
                <p class="text-violet-100 mb-6">A gente monta uma demo com a cara do seu evento em 30 minutos.</p>
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
                  <span class="text-lg font-medium text-slate-900">O app tem a minha marca?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Sim. Logo, cores, nome, ícone e textos são do seu evento. O público baixa o app do seu evento e nem precisa saber que tem uma Trilha por trás.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Precisa publicar nas lojas?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Depende do plano. Dá pra publicar um app próprio na App Store e na Google Play ou rodar dentro do app mestre da Trilha, o que deixa tudo mais rápido de colocar no ar.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Os dados do público são meus?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">São seus. A Trilha Flow opera a plataforma e segue a LGPD, mas o público é do seu evento e os dados também. Você exporta quando quiser.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Quanto tempo leva pra colocar no ar?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">A base do app já está pronta, o que a gente faz é customizar. O prazo depende de quanto de personalização vocês querem e da data do evento. A gente combina o cronograma na conversa inicial.</p>
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
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Pronto pra ter o app do seu evento?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Conversa rápida, sem compromisso. A gente explica o que cabe no seu evento e monta uma proposta.</p>
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
            <NuxtLink to="/gamificacao-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Gamificação para eventos</div>
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
  title: 'App para eventos com a sua marca — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/app-para-eventos' }],
  meta: [
    { name: 'description', content: 'App para eventos com a cara do seu evento: feed, missões, moeda interna, loja dos expositores e cotas de patrocínio digital. Continua vendendo depois do evento.' },
    { property: 'og:title', content: 'App para eventos que continua vendendo depois — Trilha Flow' },
    { property: 'og:description', content: 'Feed, missões, moeda interna, marketplace dos expositores e cotas de patrocínio, tudo com a sua marca.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/app-para-eventos' },
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
          { '@type': 'ListItem', position: 2, name: 'App para eventos', item: 'https://trilhalabs.com.br/app-para-eventos' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'O app tem a minha marca?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Logo, cores, nome, ícone e textos são do seu evento. O público baixa o app do seu evento e nem precisa saber que tem uma Trilha por trás.' } },
          { '@type': 'Question', name: 'Precisa publicar nas lojas?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do plano. Dá pra publicar um app próprio na App Store e na Google Play ou rodar dentro do app mestre da Trilha, o que deixa tudo mais rápido de colocar no ar.' } },
          { '@type': 'Question', name: 'Os dados do público são meus?', acceptedAnswer: { '@type': 'Answer', text: 'São seus. A Trilha Flow opera a plataforma e segue a LGPD, mas o público é do seu evento e os dados também. Você exporta quando quiser.' } },
          { '@type': 'Question', name: 'Quanto tempo leva pra colocar no ar?', acceptedAnswer: { '@type': 'Answer', text: 'A base do app já está pronta, o que a gente faz é customizar. O prazo depende de quanto de personalização vocês querem e da data do evento.' } }
        ]
      })
    }
  ]
})
</script>
