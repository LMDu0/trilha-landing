import mixpanel from 'mixpanel-browser'

interface MixpanelInstance {
  track: (eventName: string, properties?: Record<string, any>) => void
  identify: (userId: string) => void
  people: {
    set: (properties: Record<string, any>) => void
  }
  init: (token: string) => void
}

let mixpanelInstance: MixpanelInstance | null = null

export const useMixpanel = () => {
  const config = useRuntimeConfig()
  
  // Initialize Mixpanel only on client side
  if (process.client && !mixpanelInstance && config.public.mixpanelToken) {
    mixpanel.init(config.public.mixpanelToken, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: true,
      persistence: 'localStorage'
    })
    mixpanelInstance = mixpanel
  }

  const track = (eventName: string, properties?: Record<string, any>) => {
    if (process.client && mixpanelInstance) {
      mixpanelInstance.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer
      })
    }
  }

  const identify = (userId: string) => {
    if (process.client && mixpanelInstance) {
      mixpanelInstance.identify(userId)
    }
  }

  const setUserProperties = (properties: Record<string, any>) => {
    if (process.client && mixpanelInstance) {
      mixpanelInstance.people.set(properties)
    }
  }

  // Tracking functions for specific events
  const trackPageView = (pageName: string) => {
    track('Page View', {
      page_name: pageName,
      url: window.location.href
    })
  }

  const trackFormSubmit = (formName: string, success: boolean, errorMessage?: string, extraProperties?: Record<string, any>) => {
    track('Form Submit', {
      form_name: formName,
      success,
      error_message: errorMessage,
      ...extraProperties
    })
  }

  const trackButtonClick = (buttonName: string, section?: string) => {
    track('Button Click', {
      button_name: buttonName,
      section
    })
  }

  const trackSectionView = (sectionName: string) => {
    track('Section View', {
      section_name: sectionName
    })
  }

  const trackSliderInteraction = (sliderName: string, slideIndex: number) => {
    track('Slider Interaction', {
      slider_name: sliderName,
      slide_index: slideIndex
    })
  }

  const trackError = (errorType: string, errorMessage: string, context?: string) => {
    track('Error', {
      error_type: errorType,
      error_message: errorMessage,
      context
    })
  }

  const trackContactAction = (action: string, method?: string) => {
    track('Contact Action', {
      action, // 'copy_email', 'copy_whatsapp', 'open_whatsapp', 'open_email'
      method
    })
  }

  return {
    track,
    identify,
    setUserProperties,
    trackPageView,
    trackFormSubmit,
    trackButtonClick,
    trackSectionView,
    trackSliderInteraction,
    trackError,
    trackContactAction
  }
}
