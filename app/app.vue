<template>
  <div class="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
    <NuxtRouteAnnouncer />
    
    <AppHeader />
    
    <main class="relative z-0 overflow-hidden">
      <div class="relative z-10">
        <HeroSection />
      </div>
      <div class="relative z-10">
        <ProjectsSection />
      </div>
      <div class="relative z-10">
        <CaseStudySection />
      </div>
      <div class="relative z-10">
        <TestimonialSection />
      </div>
      <div class="relative z-10">
        <LandingContact />
      </div>
    </main>
    
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import CaseStudySection from '../components/CaseStudySection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import LandingContact from '../components/LandingContact.vue'
import LandingFooter from '../components/LandingFooter.vue'
</script>
