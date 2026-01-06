import * as z from 'zod'

// TODO: manage errors
const RegisterAndLoginUserScheme = z.object({
  email: z.email().min(5).max(80),
  password: z.string().min(8).max(255)
})

export { RegisterAndLoginUserScheme }
