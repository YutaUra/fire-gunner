import { hello } from '../src/index'

describe('@fire-gunner/lib', () => {
  it('hello func output "Hello World"', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    hello()
    expect(consoleSpy).toHaveBeenCalledWith('Hello World')
  })
})
