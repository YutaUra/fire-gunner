---
to: "_templates/generator/<%= name %>/src/index.ts.t"
unless_exists: true
---
---
to: "packages/<%%= name %>/src/index.ts"
unless_exists: true
---
export const hello = (): void => {
  console.log('Hello World')
}
