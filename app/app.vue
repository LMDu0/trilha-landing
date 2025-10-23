<template>
  <div class="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
    <SeoHead />
    <NuxtRouteAnnouncer />
    
    <AppHeader />
    
    <main class="relative z-0 overflow-hidden">
      <div class="relative z-10" ref="heroRef">
        <HeroSection />
      </div>
      <div class="relative z-10" ref="servicesRef">
        <ServicesSection />
      </div>
      <div class="relative z-10" ref="projectsRef">
        <ProjectsSection />
      </div>
      <div class="relative z-10" ref="testimonialsRef">
        <TestimonialSection />
      </div>
      <div class="relative z-10" ref="contactRef">
        <LandingContact />
      </div>
    </main>
    
    <LandingFooter />
    <BackToTop />
    
    <!-- Global Toast Container -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import LandingContact from '../components/LandingContact.vue'
import LandingFooter from '../components/LandingFooter.vue'
import BackToTop from '../components/BackToTop.vue'
import ToastContainer from '../components/ui/ToastContainer.vue'
import { useSectionTracking } from '../composables/useSectionTracking'

// Section tracking
const { observeSection } = useSectionTracking()

// Template refs
const heroRef = ref<HTMLElement>()
const servicesRef = ref<HTMLElement>()
const projectsRef = ref<HTMLElement>()
const testimonialsRef = ref<HTMLElement>()
const contactRef = ref<HTMLElement>()

// Setup section tracking on mount
onMounted(() => {
  if (heroRef.value) observeSection(heroRef.value, 'hero')
  if (servicesRef.value) observeSection(servicesRef.value, 'services')
  if (projectsRef.value) observeSection(projectsRef.value, 'projects')
  if (testimonialsRef.value) observeSection(testimonialsRef.value, 'testimonials')
  if (contactRef.value) observeSection(contactRef.value, 'contact')
})
</script>
