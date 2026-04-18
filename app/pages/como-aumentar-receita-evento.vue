<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">Receita de evento</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            Como aumentar a receita do seu evento
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">sem aumentar o custo</span>.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Três formas novas de faturar além de ingresso e estande: patrocínio digital, vendas dos expositores pelo app e moeda do evento. Tudo rodando durante o evento e depois dele.
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">De onde vem a receita de um evento hoje</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              A receita de um evento tradicional vem de três lugares: venda de ingresso, aluguel de estande e patrocínio físico. Essas três fontes pagam a produção e, com sorte, sobra um pouco no final. O problema é que as três têm teto. O ingresso só sobe até onde o público aguenta. O estande só cresce quando o pavilhão aumenta. E o patrocínio físico está ficando cada vez mais difícil de vender, porque a marca quer saber quantas pessoas viram o logo dela, e painel pendurado não responde isso.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Quando o evento depende só dessas três fontes, a única forma de crescer é aumentar preço ou aumentar volume. Os dois têm limite. A boa notícia é que, com o <NuxtLink to="/app-para-eventos" class="text-violet-600 hover:underline">app do seu evento</NuxtLink> rodando, aparecem três frentes novas de receita que não competem com as antigas, somam. Nenhuma delas exige mais metros quadrados de pavilhão.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Patrocínio digital: cotas que antes não existiam</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Patrocínio digital é quando você vende espaço e atenção dentro do app do evento. Banner no feed, missão patrocinada, notificação de marca, quiz com prêmio. O grande ganho aqui é que cada cota vem com número: quantas pessoas viram, quantas clicaram, quantas completaram. Isso muda completamente a conversa com a marca. Em vez de vender visibilidade vaga, você vende resultado mensurável. Cota com número vale mais, porque o patrocinador consegue justificar o investimento pra dentro da empresa.
            </p>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Banner no feed:</strong> aparece entre os posts do público, com alcance contado.</li>
              <li><strong class="text-slate-900">Missão patrocinada:</strong> o participante completa uma ação ligada à marca e ganha pontos.</li>
              <li><strong class="text-slate-900">Notificação push:</strong> mensagem direta, usada com moderação, com taxa de abertura medida.</li>
              <li><strong class="text-slate-900">Quiz de marca:</strong> o público aprende sobre o patrocinador e recebe recompensa.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Vendas dos expositores pelo app</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O estande é um ponto físico com horário limitado. O marketplace dentro do app é uma loja aberta o dia todo, que continua aberta depois que o evento acaba. Cada expositor tem sua vitrine, publica produtos, recebe pedidos e o organizador pode ficar com uma comissão combinada de cada venda. Pro expositor, é mais venda. Pro público, é mais conveniência. Pro organizador, é uma fonte nova de receita que não depende de metro quadrado. É também uma forma de ter relacionamento pós-evento, porque a loja segue vendendo por semanas depois do último dia.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Moeda do evento: receita antes e durante</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              A moeda do evento funciona como ficha de parque: o público compra com dinheiro e gasta dentro do ecossistema. A diferença é que aqui a moeda também circula via missões e <NuxtLink to="/gamificacao-para-eventos" class="text-violet-600 hover:underline">gamificação</NuxtLink>, o que faz o público querer ter mais. Parte da moeda é vendida antes do evento em pacotes promocionais, parte é comprada durante, e o que sobra no final tem validade pra próxima edição, o que garante retorno. Pro organizador, é caixa antecipado e comissão sobre cada transação interna.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que é possível em cada tamanho de evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Evento pequeno, com público de algumas centenas, já consegue rodar as três frentes em versão enxuta: uma ou duas cotas digitais, marketplace com os expositores principais, moeda com uso leve. Evento médio, com alguns milhares, começa a ver as três frentes somando um volume relevante todo mês depois do primeiro evento. Evento grande, com dezenas de milhares, trata o app como uma frente estratégica, com equipe comercial dedicada a vender cotas digitais. O que muda é a escala, não a mecânica. A base é a mesma e está descrita com mais detalhe em <NuxtLink to="/como-monetizar-evento" class="text-violet-600 hover:underline">como monetizar o evento</NuxtLink>.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer um cálculo pro seu evento?</h3>
                <p class="text-violet-100 mb-6">A gente faz a conta com os seus números numa conversa de 30 minutos.</p>
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
                  <span class="text-lg font-medium text-slate-900">Quanto a receita pode crescer na prática?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Depende do tamanho do evento, do engajamento do público e do quanto o organizador investe em vender as cotas digitais. A gente faz uma projeção com os seus números reais antes de fechar qualquer coisa.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Precisa aumentar preço de estande pra incluir isso?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Não precisa. A oferta digital é complementar e pode até virar um bônus pro expositor, o que ajuda a reter quem já está contigo.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Os patrocinadores atuais aceitam cotas digitais?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Em geral gostam, porque recebem relatório com números reais, que é algo que cota física não entrega. A gente ajuda a montar o pacote e o material comercial.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">E se meu evento é pequeno, vale a pena?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Vale. Tem plano a partir de R$ 390 por mês pensado pra evento menor. O importante é o app estar rodando, não o tamanho da plateia.</p>
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
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Bora aumentar a receita do seu evento?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Conversa rápida pra entender o que cabe no seu evento e montar uma projeção.</p>
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
            <NuxtLink to="/gamificacao-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Gamificação para eventos</div>
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
  title: 'Como aumentar a receita do seu evento — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/como-aumentar-receita-evento' }],
  meta: [
    { name: 'description', content: 'Três formas novas de faturar no seu evento sem aumentar o custo: patrocínio digital com número, vendas dos expositores pelo app e moeda do evento.' },
    { property: 'og:title', content: 'Como aumentar a receita do seu evento sem aumentar o custo — Trilha Flow' },
    { property: 'og:description', content: 'Patrocínio digital, marketplace dos expositores e moeda do evento. Três frentes de receita novas rodando no app.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/como-aumentar-receita-evento' },
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
          { '@type': 'ListItem', position: 2, name: 'Como aumentar a receita do evento', item: 'https://trilhalabs.com.br/como-aumentar-receita-evento' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Quanto a receita pode crescer na prática?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do tamanho do evento, do engajamento do público e do quanto o organizador investe em vender as cotas digitais. A gente faz uma projeção com os seus números reais antes de fechar.' } },
          { '@type': 'Question', name: 'Precisa aumentar preço de estande pra incluir isso?', acceptedAnswer: { '@type': 'Answer', text: 'Não precisa. A oferta digital é complementar e pode virar bônus pro expositor, o que ajuda a reter quem já está contigo.' } },
          { '@type': 'Question', name: 'Os patrocinadores atuais aceitam cotas digitais?', acceptedAnswer: { '@type': 'Answer', text: 'Em geral gostam, porque recebem relatório com números reais, que é algo que cota física não entrega. A gente ajuda a montar o pacote e o material comercial.' } },
          { '@type': 'Question', name: 'E se meu evento é pequeno, vale a pena?', acceptedAnswer: { '@type': 'Answer', text: 'Vale. Tem plano a partir de R$ 390 por mês pensado pra evento menor. O importante é o app estar rodando, não o tamanho da plateia.' } }
        ]
      })
    }
  ]
})
</script>
