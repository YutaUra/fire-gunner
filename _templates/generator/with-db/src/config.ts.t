---
to: "packages/<%= name %>/src/config.ts"
unless_exists: true
---
import { getCollection } from '@fire-gunner/config'

export const <%= h.changeCase.camel(name) %>Collection = getCollection('<%= h.changeCase.snake(name) %>')
