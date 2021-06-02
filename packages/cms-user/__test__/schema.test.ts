import { cmsUserSchema } from '../src/schema'

describe('@fire-gunner/cms-user/schema.ts', () => {
  it('cmsUserSchema ok', () => {
    const obj = {
      name: 'YutaUra',
      email: 'yuuta3594@outlook.jp',
    }
    expect(() => {
      cmsUserSchema.parse(obj)
    }).not.toThrow()
  })

  it('cmsUserSchema false', () => {
    const obj = {
      name: 'YutaUra',
      email: 'yuuta3594@outlook.jp',
      age: 123,
    }
    expect(() => {
      cmsUserSchema.parse(obj)
    }).toThrow()
  })

  it('cmsUserSchema false', () => {
    const obj = {
      name: 'YutaUra',
    }
    expect(() => {
      cmsUserSchema.parse(obj)
    }).toThrow()
  })
})
