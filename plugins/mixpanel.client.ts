import { useMixpanel } from '../composables/useMixpanel'

export default defineNuxtPlugin(() => {
  const { trackPageView } = useMixpanel()
  
  // Track initial page view
  if (process.client) {
    // Wait for router to be ready
    nextTick(() => {
      const route = useRoute()
      trackPageView(route.name as string || route.path)
    })
  }
})
