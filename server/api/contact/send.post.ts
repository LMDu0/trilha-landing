import { sendContactEmail } from '../../services/emailService'
import type { ContactFormData } from '../../../types/contact'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<ContactFormData>(event)
    
    // Basic validation - only phone and message are required
    if (!body.phone || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: phone and message are required'
      })
    }

    // Phone validation - must have at least DDD + number
    const phoneClean = body.phone.replace(/\D/g, '')
    if (phoneClean.length < 10) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid phone format. Must include area code and number'
      })
    }


    // Send email through microservice
    const response = await sendContactEmail(body)

    return {
      success: true,
      response: response,
      message: 'Email sent successfully'
    }
  } catch (error: any) {
    console.error('Error sending contact email:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error while sending email'
    })
  }
})
