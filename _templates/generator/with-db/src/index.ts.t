---
to: "packages/<%= name %>/src/index.ts"
unless_exists: true
---
export * from './config'
export * from './lib'
export * from './schema'
