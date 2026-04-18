import { ref } from 'vue'

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

const toasts = ref<Toast[]>([])

export function useToast() {
  const addToast = (message: string, type: Toast['type'] = 'success', duration = 2500) => {
    const id = Date.now().toString()
    const toast: Toast = {
      id,
      message,
      type,
      duration
    }
    
    toasts.value.push(toast)
    
    // Auto remove after duration
    setTimeout(() => {
      removeToast(id)
    }, duration)
    
    return id
  }
  
  const removeToast = (id: string) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }
  
  const success = (message: string, duration?: number) => {
    return addToast(message, 'success', duration)
  }
  
  const error = (message: string, duration?: number) => {
    return addToast(message, 'error', duration)
  }
  
  const info = (message: string, duration?: number) => {
    return addToast(message, 'info', duration)
  }
  
  return {
    toasts: readonly(toasts),
    addToast,
    removeToast,
    success,
    error,
    info
  }
}
