import * as z from 'zod'

const CategoryScheme = z.object({
  name: z.string().min(1).max(40)
})

export { CategoryScheme }
