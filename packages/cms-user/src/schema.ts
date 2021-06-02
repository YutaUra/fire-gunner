import * as z from 'zod'

export const cmsUserSchema = z
  .object({
    name: z.string().nullable(),
    email: z.string().email().nullable(),
  })
  .strict()
export type CMSUserType = z.infer<typeof cmsUserSchema>
