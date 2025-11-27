import { contacts } from '../database/schema'
import { useDrizzle } from '../utils/drizzle'

export default eventHandler(async (event) => {
  const { name, email, message } = await readValidatedBody(event, contactSchema.parse)

  await useDrizzle().insert(contacts).values({ name: name ?? '', email, message })

  return
})
