<template>
  <main class="relative z-0 overflow-hidden">
    <div class="relative z-10" ref="heroRef">
      <HeroSection />
    </div>
    <div class="relative z-10" ref="servicesRef">
      <ServicesSection />
    </div>
      <div class="relative z-10" ref="projectsRef">
        <LazyProjectsSection />
      </div>
      <div class="relative z-10" ref="testimonialsRef">
        <LazyTestimonialSection />
      </div>
    <div class="relative z-10" ref="contactRef">
      <LandingContact />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import LandingContact from '~/components/LandingContact.vue'
import { useSectionTracking } from '~/composables/useSectionTracking'

// Lazy load heavy components
const LazyProjectsSection = defineAsyncComponent(() => import('~/components/ProjectsSection.vue'))
const LazyTestimonialSection = defineAsyncComponent(() => import('~/components/TestimonialSection.vue'))

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
