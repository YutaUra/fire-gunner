import * as z from 'zod'

export const cmsPermissionSchema = z.object({}).strict()
export type CMSPermissionType = z.infer<typeof cmsPermissionSchema>
