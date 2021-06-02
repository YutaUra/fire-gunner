---
to: "_templates/generator/<%= name %>/__test__/index.test.ts.t"
unless_exists: true
---
---
to: "packages/<%%= name %>/__test__/index.test.ts"
unless_exists: true
---
import { hello } from '../src/index'

describe('@fire-gunner/<%%= name %>', () => {
  it('hello func output "Hello World"', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    hello()
    expect(consoleSpy).toHaveBeenCalledWith('Hello World')
  })
})
