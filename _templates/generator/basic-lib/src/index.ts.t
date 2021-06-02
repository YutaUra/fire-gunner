---
to: "packages/<%= name %>/src/index.ts"
unless_exists: true
---
export const hello = (): void => {
  console.log('Hello World')
}
