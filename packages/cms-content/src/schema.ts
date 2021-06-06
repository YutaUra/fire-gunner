import * as z from 'zod'

export const cmsContentFieldSchema = z
  .object({
    id: z.number(),
    type: z.string().min(3),
    title: z.string().min(3),
    description: z.string(),
  })
  .strict()
export type CmsContentFieldType = z.infer<typeof cmsContentFieldSchema>

export const cmsContentSchema = z
  .object({
    id: z.string().min(3),
    name: z.string().min(3),
    description: z.string(),
    fields: z.array(cmsContentFieldSchema),
  })
  .strict()
export type CmsContentType = z.infer<typeof cmsContentSchema>
