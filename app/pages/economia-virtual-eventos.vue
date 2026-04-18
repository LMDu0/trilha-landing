<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="pt-36 pb-14 md:pt-44 md:pb-16 relative overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-slate-500 mb-6 mt-4">Moeda do evento</p>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
            A moeda do seu evento
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">vira caixa</span>
            antes, durante e depois.
          </h1>
          <p class="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Uma economia virtual dentro do evento que gira sozinha: o público ganha moeda completando missões, compra moeda com dinheiro e gasta com expositores. Pra você, é uma linha de receita nova que não estava lá.
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
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">O que é a moeda do evento</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Moeda do evento é a unidade de troca que circula dentro do app durante o evento inteiro. Tem nome próprio (pode ser trilhas, milhos, ingressos, o que fizer sentido pra marca), preço em real e regras claras de quanto vale cada ação e cada compra. Funciona como ficha de parque de diversão, mas no celular e medindo tudo.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              A grande diferença pro modelo de ingresso simples é que a moeda tem ciclo de vida. O público ganha, compra, gasta, ganha de novo. E cada volta desse ciclo é uma chance nova do organizador monetizar sem precisar aumentar o preço do ingresso.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Como a moeda entra na mão do público</h2>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Ganhando:</strong> completando missões, indicando amigos, postando no feed, visitando estande.</li>
              <li><strong class="text-slate-900">Comprando:</strong> recarga direto no app, via Pix ou cartão, com pacotes em preços variados.</li>
              <li><strong class="text-slate-900">Ganhando no ingresso:</strong> o ingresso pode já vir com saldo de boas-vindas pra estimular uso.</li>
              <li><strong class="text-slate-900">Ganhando de patrocinador:</strong> marca pode entregar moeda como ativação (ex.: responde o quiz, ganha 50).</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Onde o público gasta a moeda</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              O valor da moeda depende de onde ela pode ser gasta. Evento bom cria vários pontos de gasto pra fazer a moeda circular. Não precisa ser tudo caro. Precisa ser desejável pelo público que tá ali.
            </p>
            <ul class="space-y-3 text-slate-600 mb-6 list-disc pl-6">
              <li><strong class="text-slate-900">Loja oficial do evento:</strong> camiseta, boné, copo, brinde. Comissão pro organizador.</li>
              <li><strong class="text-slate-900">Produtos e serviços de expositor:</strong> cada expositor cadastra ofertas, pagas em moeda, com repasse configurado.</li>
              <li><strong class="text-slate-900">Roleta e raspadinha:</strong> gastos de moeda com chance de ganhar prêmios ou mais moeda.</li>
              <li><strong class="text-slate-900">Experiências internas:</strong> fura-fila, acesso VIP, encontro com artista, visita guiada.</li>
              <li><strong class="text-slate-900">Sorteios oficiais:</strong> cada ticket de sorteio custa moeda, premiação em produto ou voucher.</li>
            </ul>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Por que isso vira receita pro organizador</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Toda moeda comprada com dinheiro real é caixa que entra. Toda moeda gasta em expositor gera comissão configurada. Toda moeda gasta em loja oficial é receita direta. E quando a pessoa compra mais moeda do que consegue gastar, sobra saldo que pode ser usado na próxima edição, o que segura o público pra voltar. A economia do evento deixa de ser só o ingresso e o patrocínio e passa a ter uma terceira perna. Mais detalhes em <NuxtLink to="/como-aumentar-receita-evento" class="text-violet-600 hover:underline">como aumentar a receita do evento</NuxtLink> e <NuxtLink to="/como-monetizar-evento" class="text-violet-600 hover:underline">como monetizar o evento</NuxtLink>.
            </p>

            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 mt-12">Como montar a economia do zero</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Começa definindo o nome da moeda, a cotação com o real (ex.: 1 moeda = R$ 0,10) e as regras de ganho. Depois faz o catálogo dos pontos de gasto: loja oficial, ofertas de expositor, roleta, sorteio. Configura o split de cada transação (quanto vai pro organizador, quanto vai pro expositor). Abre a recarga. E acompanha pelo painel o que tá vendendo, o que tá parado e onde ajustar. A gente faz toda a parte técnica junto com o time de gamificação em <NuxtLink to="/gamificacao-para-eventos" class="text-violet-600 hover:underline">gamificação para eventos</NuxtLink>, pra moeda não virar número solto.
            </p>

            <!-- CTA intermediário -->
            <div class="my-12 p-8 rounded-2xl bg-violet-600 text-white relative overflow-hidden">
              <div class="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div class="relative">
                <h3 class="text-2xl font-semibold tracking-tight mb-3">Quer uma estimativa de quanto a moeda pode faturar?</h3>
                <p class="text-violet-100 mb-6">A gente olha o seu público e setor e volta com um cenário do que dá pra movimentar.</p>
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
                  <span class="text-lg font-medium text-slate-900">A moeda tem nome do evento?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Tem. Você escolhe o nome, o símbolo e a cotação. A moeda vira parte da identidade do evento, o que ajuda a marcar presença e fidelizar pro próximo ano.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Como fica a divisão entre organizador e expositor?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Você define. Cada tipo de transação tem split configurável. Loja oficial pode ser 100% do organizador, oferta de expositor pode ser, por exemplo, 80/20, sorteio pode ter regra própria. Tudo transparente no painel.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">E se sobrar saldo depois do evento?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">Dá pra decidir a regra: saldo expira no fim do evento, fica pra próxima edição ou vira voucher de parceiro. Cada modelo tem vantagem e a gente desenha junto com você.</p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                <summary class="flex items-center justify-between cursor-pointer list-none">
                  <span class="text-lg font-medium text-slate-900">Preciso lidar com questão fiscal?</span>
                  <Icon name="lucide:chevron-down" class="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed">A moeda é um valor pré-pago dentro do evento. A emissão fiscal acontece na transação real (recarga, pagamento a expositor), e o sistema entrega o relatório pra contabilidade resolver. A gente explica o fluxo no kickoff.</p>
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
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Quer uma moeda pro seu evento?</h3>
            <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">A gente monta o ciclo, os pontos de gasto e o relatório. Você só abre a torneira.</p>
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
            <NuxtLink to="/como-aumentar-receita-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como aumentar a receita</div>
            </NuxtLink>
            <NuxtLink to="/como-monetizar-evento" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Como monetizar o evento</div>
            </NuxtLink>
            <NuxtLink to="/app-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Produto</div>
              <div class="text-slate-900 font-medium">App para eventos</div>
            </NuxtLink>
            <NuxtLink to="/feed-social-para-eventos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Leia também</div>
              <div class="text-slate-900 font-medium">Feed social com vídeos</div>
            </NuxtLink>
            <NuxtLink to="/precos" class="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-900 transition-colors">
              <div class="text-sm text-slate-500 mb-1">Preços</div>
              <div class="text-slate-900 font-medium">Planos e o que entra em cada</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Economia virtual em eventos: moeda do evento que vira caixa — Trilha Flow',
  link: [{ rel: 'canonical', href: 'https://trilhalabs.com.br/economia-virtual-eventos' }],
  meta: [
    { name: 'description', content: 'Moeda do evento com ciclo próprio: o público ganha, compra e gasta dentro do app. Nova linha de receita pro organizador, sem aumentar o preço do ingresso.' },
    { property: 'og:title', content: 'Economia virtual em eventos: moeda do evento — Trilha Flow' },
    { property: 'og:description', content: 'Uma economia circulando no app do seu evento: moeda, recarga, loja e comissão.' },
    { property: 'og:url', content: 'https://trilhalabs.com.br/economia-virtual-eventos' },
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
          { '@type': 'ListItem', position: 2, name: 'Economia virtual em eventos', item: 'https://trilhalabs.com.br/economia-virtual-eventos' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'A moeda tem nome do evento?', acceptedAnswer: { '@type': 'Answer', text: 'Tem. Você escolhe o nome, o símbolo e a cotação. A moeda vira parte da identidade do evento.' } },
          { '@type': 'Question', name: 'Como fica a divisão entre organizador e expositor?', acceptedAnswer: { '@type': 'Answer', text: 'Você define. Cada tipo de transação tem split configurável e tudo aparece no painel.' } },
          { '@type': 'Question', name: 'E se sobrar saldo depois do evento?', acceptedAnswer: { '@type': 'Answer', text: 'Você decide: expira no fim, fica pra próxima edição ou vira voucher de parceiro.' } },
          { '@type': 'Question', name: 'Preciso lidar com questão fiscal?', acceptedAnswer: { '@type': 'Answer', text: 'A emissão fiscal acontece na transação real e o sistema entrega o relatório pra contabilidade resolver.' } }
        ]
      })
    }
  ]
})
</script>
