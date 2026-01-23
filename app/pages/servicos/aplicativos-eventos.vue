<template>
  <div>
    <Head>
      <Title>Aplicativos para Feiras e Eventos Agrícolas | Trilha Labs</Title>
      <Meta name="description" content="Aumente o engajamento do seu evento com um app exclusivo. Agenda, mapas interativos, gamificação e networking para feiras e eventos corporativos." />
    </Head>

    <ServiceHero 
      title="Aplicativos para Feiras e Eventos"
      description="Transforme a experiência dos visitantes com um aplicativo oficial do seu evento. Agenda interativa, mapas, gamificação e dados em tempo real para organizadores."
      badge="Especialidade Trilha Labs"
    />

    <section class="py-20 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 relative group flex justify-center">
             <!-- Video Container with Glow Effect -->
             <div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 max-w-[300px] mx-auto"></div>
             
             <div class="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl max-w-[300px] mx-auto w-full aspect-[9/16]">
                <video 
                  autoplay 
                  loop 
                  muted 
                  playsinline
                  class="w-full h-full object-contain"
                  poster="/og-image.jpg"
                >
                  <source src="/videos/app-demo-video.mp4" type="video/mp4">
                  Seu navegador não suporta vídeos HTML5.
                </video>
                
                <!-- Video Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
             </div>
          </div>
          
          <div class="order-1 md:order-2">
            <h2 class="text-3xl font-bold text-white mb-6">A Solução Completa para seu Evento</h2>
            <p class="text-slate-400 mb-6 leading-relaxed">
              Não deixe seu público perdido. Com nossos aplicativos para eventos, você oferece uma ferramenta poderosa de networking e informação na palma da mão.
            </p>
            <p class="text-slate-400 mb-8 leading-relaxed">
              Ideal para feiras agrícolas, congressos corporativos, festivais e simpósios. Nossa tecnologia já foi validada em eventos com milhares de participantes.
            </p>
            
            <NuxtLink to="/#cases" class="text-violet-400 font-semibold hover:text-violet-300 flex items-center gap-2">
              Ver case Fenamilho <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Gamification Section Merged -->
    <section class="py-20 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
           <div class="w-full md:w-1/2 order-2 md:order-1">
             <div class="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-1 shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-500 max-w-md mx-auto">
                 <div class="bg-slate-900 rounded-xl p-8 h-full">
                    <div class="flex items-center justify-between mb-8">
                      <div class="text-white font-bold">Ranking Semanal</div>
                      <div class="text-violet-400 text-sm">Ao vivo</div>
                    </div>
                    <div class="space-y-4">
                      <div class="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-violet-500/30">
                         <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-slate-900">1</div>
                         <div class="flex-1">
                            <div class="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                               <div class="h-full bg-yellow-500 w-[90%]"></div>
                            </div>
                         </div>
                         <div class="text-yellow-500 font-bold">2.450 xp</div>
                      </div>
                      <div class="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
                         <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center font-bold text-slate-300">2</div>
                         <div class="flex-1">
                            <div class="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                               <div class="h-full bg-slate-500 w-[75%]"></div>
                            </div>
                         </div>
                         <div class="text-slate-400 font-bold">1.890 xp</div>
                      </div>
                       <div class="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
                         <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center font-bold text-slate-300">3</div>
                         <div class="flex-1">
                            <div class="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                               <div class="h-full bg-slate-500 w-[60%]"></div>
                            </div>
                         </div>
                         <div class="text-slate-400 font-bold">1.200 xp</div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div class="w-full md:w-1/2 order-1 md:order-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-4 uppercase tracking-wider">
                Novidade
              </div>
              <h2 class="text-3xl font-bold text-white mb-6">Gamificação Integrada</h2>
              <p class="text-slate-400 mb-6 leading-relaxed">
                Transforme a visitação aos estandes em um jogo divertido. Visitantes escaneiam QR Codes, ganham pontos e concorrem a prêmios.
              </p>
               <ul class="space-y-4">
                  <li class="flex gap-4">
                    <div class="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400">
                      <Icon name="lucide:target" class="w-5 h-5" />
                    </div>
                    <div>
                      <h3 class="font-bold text-white text-sm">Mais Engajamento</h3>
                      <p class="text-xs text-slate-400">Incentive a circulação em áreas menos visitadas.</p>
                    </div>
                  </li>
                  <li class="flex gap-4">
                    <div class="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400">
                      <Icon name="lucide:award" class="w-5 h-5" />
                    </div>
                    <div>
                      <h3 class="font-bold text-white text-sm">Recompensas Reais</h3>
                      <p class="text-xs text-slate-400">Troque pontos por brindes ou descontos.</p>
                    </div>
                  </li>
               </ul>
           </div>
        </div>
      </div>
    </section>

    <RelatedServices current="eventos" />
    <LandingContact />
  </div>
</template>

<script setup lang="ts">
import ServiceHero from '~/components/ServiceHero.vue'
import LandingContact from '~/components/LandingContact.vue'
import RelatedServices from '~/components/RelatedServices.vue'
</script>
