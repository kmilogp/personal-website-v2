import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please provide a valid email address'),
  message: z.string().min(1, 'Please enter a message').max(1000, 'Try to keep it short and concise')
})
