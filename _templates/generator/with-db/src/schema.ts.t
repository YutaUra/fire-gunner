---
to: "packages/<%= name %>/src/schema.ts"
unless_exists: true
---
import * as z from 'zod'

export const <%= h.changeCase.camel(name) %>Schema = z.object({}).strict()
export type <%= h.changeCase.pascal(name) %>Type = z.infer<typeof <%= h.changeCase.camel(name) %>Schema>
