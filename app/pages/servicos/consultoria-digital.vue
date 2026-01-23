<template>
  <div>
    <Head>
      <Title>Consultoria Tecnológica e Desenvolvimento de Software | Trilha Labs</Title>
      <Meta name="description" content="Alocação de squads, desenvolvimento de software sob medida e integrações de sistemas complexos. Sua parceira técnica para escalar." />
    </Head>

    <ServiceHero 
      title="Consultoria & Desenvolvimento"
      description="Mais do que código, entregamos capacidade técnica. Se você precisa de um time dedicado, um software exclusivo ou integrar sistemas complexos, nós somos sua equipe de engenharia."
      badge="Tech Partners"
    />

    <!-- Main Pillars Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Pillar 1: Staff Augmentation -->
          <div class="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/30 transition-all">
            <div class="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <Icon name="lucide:users" class="w-7 h-7 text-violet-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Alocação de Times (Squads)</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              Acelere seu roadmap com nossos especialistas. Disponibilizamos times completos e autogerenciáveis para atuar no seu projeto. Escale sua capacidade produtiva com profissionais de alta performance, sem a burocracia de contratação interna.
            </p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Onboarding Imediato</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Gestão Ágil e Resultados</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Flexibilidade Contratual</li>
            </ul>
          </div>

          <!-- Pillar 2: Custom Software -->
          <div class="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/30 transition-all relative overflow-hidden">
             <!-- Decorative element -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-violet-500/5 rounded-bl-full"></div>
            
            <div class="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <Icon name="lucide:code-2" class="w-7 h-7 text-violet-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Software Sob Medida</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              Do planejamento à execução, criamos plataformas digitais exclusivas. Soluções robustas, seguras e desenhadas especificamente para resolver as dores do seu negócio, garantindo propriedade intelectual e diferencial competitivo.
            </p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Arquitetura de Alto Nível</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Código Proprietário (White Label)</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Escala Global</li>
            </ul>
          </div>

          <!-- Pillar 3: Integrations -->
          <div class="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/30 transition-all">
            <div class="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <Icon name="lucide:network" class="w-7 h-7 text-violet-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Integrações de Sistemas</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              Interconectividade total. Unificamos seu ecossistema digital fazendo diferentes softwares conversarem entre si. Seja via APIs, mensageria ou bancos de dados, eliminamos silos de informação e retrabalho manual.
            </p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> APIs Rest & GraphQL</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Webhooks & Eventos</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Fluxos Automatizados</li>
            </ul>
          </div>

           <!-- Pillar 4: AI & Automation -->
          <div class="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/30 transition-all">
            <div class="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <Icon name="lucide:brain-circuit" class="w-7 h-7 text-violet-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Inteligência Artificial</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              Leve sua empresa para o próximo nível. Implementamos soluções de IA Generativa e Machine Learning para analisar dados, prever tendências e automatizar atendimento ou processos complexos de decisão.
            </p>
             <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Chatbots & Assistentes Inteligentes</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Análise Preditiva</li>
              <li class="flex items-center gap-2"><Icon name="lucide:check" class="w-4 h-4 text-violet-500" /> Automação Cognitiva</li>
            </ul>
          </div>

          
        </div>

        <div class="mt-16 text-center">
            <a 
            href="https://wa.me/555493503203?text=Olá!%20Gostaria%20de%20falar%20sobre%20o%20desenvolvimento%20de%20um%20projeto."
            target="_blank"
            class="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-200 transition-colors"
          >
            Falar com um Especialista Técnico
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <RelatedServices current="consultoria" />
    <LandingContact />
  </div>
</template>

<script setup lang="ts">
import ServiceHero from '~/components/ServiceHero.vue'
import LandingContact from '~/components/LandingContact.vue'
import RelatedServices from '~/components/RelatedServices.vue'

</script>
