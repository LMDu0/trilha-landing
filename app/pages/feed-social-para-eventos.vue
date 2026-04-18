<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">Feed social para eventos</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            Feed com vídeos
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">dentro do app</span>
            do seu evento.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Um feed igual ao que o público já usa, mas dentro do seu evento. Vídeo curto, curtida, comentário e destaque dos expositores, rolando antes, durante e depois. A atenção do público não escapa pra concorrência.
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Por que o seu evento precisa de um feed próprio</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O público já consome conteúdo em feed vertical. Abre o celular, arrasta pra cima, olha o próximo vídeo. Essa é a gramática que ele já fala fluente. Se o seu evento tem conteúdo acontecendo (palestra, show, ativação de marca, corredor cheio), faz sentido ter essa mesma experiência no app. O público fica dentro do evento em vez de sair pra rede social concorrente e se distrair com outro conteúdo.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Feed nativo também resolve um problema clássico: o evento publica em três redes diferentes e nenhuma delas entrega pra base inteira. Dentro do seu app, a entrega é 100%. Se postou, todo mundo vê. E ainda dá pra priorizar o que for mais importante no momento: ativação de patrocinador, aviso de palco, oferta relâmpago.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que o feed entrega na prática</h2>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Vídeo vertical:</strong> feed tipo TikTok, com rolagem infinita e reprodução automática.</li>
              <li><strong class="text-slate-900">Post do público:</strong> qualquer participante pode postar do evento, com moderação configurável.</li>
              <li><strong class="text-slate-900">Post de expositor e patrocinador:</strong> marca posta oferta e conteúdo, aparece em posição de destaque.</li>
              <li><strong class="text-slate-900">Curtida e comentário:</strong> interação social que gera ranking e vale pontos na <NuxtLink to="/gamificacao-para-eventos" class="text-violet-600 hover:underline">gamificação do evento</NuxtLink>.</li>
              <li><strong class="text-slate-900">Deep link:</strong> cada post pode levar pra missão, produto, estande ou cupom.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Feed como ferramenta de monetização</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Um feed com audiência vira mídia. Você pode vender posts patrocinados, ativação de marca, destaques por período e pacotes por edição. O patrocinador entra com conteúdo em vídeo, recebe relatório de impressão e interação, e ainda pode integrar com <NuxtLink to="/economia-virtual-eventos" class="text-violet-600 hover:underline">a moeda do evento</NuxtLink> (responde o quiz no post e ganha moeda, por exemplo). É uma camada a mais de receita que não existe em evento que só tem cronograma e mapa.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Feed que continua vivo depois do evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Na maioria dos eventos, o dia seguinte é silêncio. O feed resolve isso. Os melhores vídeos ficam lá, o público continua assistindo, o expositor continua sendo visto. Dá pra abrir ofertas pós-evento, cupons e pré-venda da próxima edição pra uma base que ainda tá quente. Mais sobre isso em <NuxtLink to="/app-para-eventos" class="text-violet-600 hover:underline">app para eventos</NuxtLink> e <NuxtLink to="/como-engajar-publico-evento" class="text-violet-600 hover:underline">como engajar o público do evento</NuxtLink>.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Moderação e bom uso</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Feed aberto pede regra. O organizador define política de conteúdo, tem ferramenta de denúncia, aprovação prévia quando precisa e bloqueio automático por palavra-chave. O objetivo é manter o feed útil e alinhado com a marca do evento, sem virar terra de ninguém. A gente ajuda a montar a política no kickoff pra não ter surpresa no primeiro dia.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer ver o feed funcionando?</h3>
                <p class="text-violet-100 mb-6">A gente mostra o feed rodando no app de um evento real e desenha uma versão pro seu caso.</p>
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
                  <span class="text-lg font-medium text-slate-900">Qualquer pessoa pode postar?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Depende da regra que você define. Dá pra liberar pra todo mundo, só pra quem fez check-in, só pra cadastros verificados ou manter moderação prévia. Cada modelo funciona melhor pra um tipo de evento.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">E se o público não postar?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">O feed começa povoado por posts oficiais do evento, dos expositores e dos patrocinadores. Aí entram as missões que pedem conteúdo (post com hashtag, vídeo do estande) e o público começa a contribuir. A gente já chega com playbook pronto.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Patrocinador entra no feed?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Entra com post de destaque, vídeo patrocinado, ativação interativa e tag no feed principal. Recebe relatório com visualizações, cliques e interações, o que dá pra cobrar caro nas cotas.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">O conteúdo fica guardado depois do evento?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Fica. O feed continua acessível depois do evento, pode ser reabastecido com conteúdo de recap e usado pra aquecer a próxima edição. Tudo no mesmo app, sem perder base.</p>
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
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Quer um feed com a cara do seu evento?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">A gente monta o feed, a moderação e os formatos de mídia. Você mantém a atenção do público.</p>
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
            <NuxtLink to="/economia-virtual-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Moeda do evento</div>
            </NuxtLink>
            <NuxtLink to="/como-engajar-publico-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como engajar o público</div>
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
  title: 'Feed social para eventos: vídeo vertical dentro do app — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/feed-social-para-eventos' }],
  meta: [
    { name: 'description', content: 'Feed social com vídeos verticais dentro do app do seu evento. Post do público, destaque de expositor e patrocinador, curtidas e comentários. Mídia nativa que vira receita.' },
    { property: 'og:title', content: 'Feed social para eventos — Trilha Flow' },
    { property: 'og:description', content: 'Um feed tipo TikTok dentro do app do seu evento: vídeo, destaque e interação.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/feed-social-para-eventos' },
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
          { '@type': 'ListItem', position: 2, name: 'Feed social para eventos', item: 'https://trilhalabs.com.br/feed-social-para-eventos' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Qualquer pessoa pode postar?', acceptedAnswer: { '@type': 'Answer', text: 'Depende da regra que você define. Liberado pra todos, só pra quem fez check-in, só verificados ou com moderação prévia.' } },
          { '@type': 'Question', name: 'E se o público não postar?', acceptedAnswer: { '@type': 'Answer', text: 'O feed começa com posts oficiais, expositores e patrocinadores. Missões de conteúdo trazem o público pra dentro.' } },
          { '@type': 'Question', name: 'Patrocinador entra no feed?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Post de destaque, vídeo patrocinado, ativação interativa e relatório de impressões e cliques.' } },
          { '@type': 'Question', name: 'O conteúdo fica guardado depois do evento?', acceptedAnswer: { '@type': 'Answer', text: 'Fica. O feed continua acessível e pode ser usado pra aquecer a próxima edição.' } }
        ]
      })
    }
  ]
})
</script>
