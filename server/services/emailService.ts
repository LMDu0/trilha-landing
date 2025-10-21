import type { ContactFormData } from '../../types/contact'

export async function sendContactEmail(contactData: ContactFormData): Promise<void> {
  const config = useRuntimeConfig()
  
  try {
    const response = await $fetch(config.emailServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: {
        mail: contactData.email || '',
        subject: `Novo contato de ${contactData.name || contactData.phone}`,
        message: contactData.message,
        phone: contactData.phone,
        name: contactData.name || ''
      }
    })

    console.log('Email sent successfully:', response)
  } catch (error: any) {
    console.error('Failed to send email:', error)
    console.error('Error details:', {
      status: error.status,
      statusText: error.statusText,
      data: error.data
    })
    throw new Error(`Failed to send email through microservice: ${error.message}`)
  }
}
