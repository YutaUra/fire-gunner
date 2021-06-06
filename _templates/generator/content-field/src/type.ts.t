---
to: "packages/cms-content-<%= name %>-field/src/type.ts"
unless_exists: true
---
export type <%= h.changeCase.pascal(name) %>FieldValue = unknown
