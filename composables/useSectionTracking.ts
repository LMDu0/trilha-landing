import { useMixpanel } from './useMixpanel'

export const useSectionTracking = () => {
  const { trackSectionView } = useMixpanel()
  
  const observeSection = (element: HTMLElement, sectionName: string) => {
    if (!process.client) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -10% 0px'
      }
    )
    
    observer.observe(element)
    
    // Return cleanup function
    return () => {
      observer.unobserve(element)
    }
  }
  
  return {
    observeSection
  }
}
