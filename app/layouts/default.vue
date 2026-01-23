<template>
  <div class="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
    <!-- Header/Navigation -->
    <AppHeader />
    
    <!-- Page Content -->
    <slot />
    
    <!-- Footer & Global Elements -->
    <LandingFooter />
    <BackToTop />
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import LandingFooter from '~/components/LandingFooter.vue'
import BackToTop from '~/components/BackToTop.vue'
import ToastContainer from '~/components/ui/ToastContainer.vue'
</script>
