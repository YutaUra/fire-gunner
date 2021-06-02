---
to: "packages/<%= name %>/__test__/index.test.ts"
unless_exists: true
---
describe('@fire-gunner/<%= name %>', () => {
  it('SKIP', () => {
    // skip
  })
})
