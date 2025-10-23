export interface ContactFormData {
  name?: string
  phone: string
  company?: string
  projectType?: string
  message: string
}

export interface EmailResponse {
  success: boolean
  message: string
}
