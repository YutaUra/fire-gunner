---
to: "packages/cms-content-<%= name %>-field/src/index.ts"
unless_exists: true
---
import type { CmsContentField } from '@fire-gunner/cms-content-field'
import { Static<%= h.changeCase.pascal(name) %>Field, <%= h.changeCase.pascal(name) %>Field } from './component'
import type { <%= h.changeCase.pascal(name) %>FieldValue } from './type'

export const <%= name %>Field: CmsContentField<<%= h.changeCase.pascal(name) %>FieldValue> = {
  type: '<%= name %>',
  defaultTitle: '',
  defaultDescription: '',
  component: <%= h.changeCase.pascal(name) %>Field,
  staticComponent: Static<%= h.changeCase.pascal(name) %>Field,
}
