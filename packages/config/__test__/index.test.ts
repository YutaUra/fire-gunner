import { collectionPrefix, getCollection } from '../src/index'

describe('@fire-gunner/config', () => {
  it('collectionPrefix is "fg"', () => {
    expect(collectionPrefix).toBe('fg')
  })
  it('getCollection', () => {
    expect(getCollection('example')).toBe('fg_example')
  })
})
