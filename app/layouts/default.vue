<template>
  <div class="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="relative z-0 overflow-hidden">
      <slot />
    </main>
    <LandingFooter />
    <BackToTop />
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
</script>
