import * as z from 'zod'

const UserScheme = z.object({
  email: z.email().min(5).max(80),
  password: z.string().min(8).max(255)
})

export { UserScheme }
