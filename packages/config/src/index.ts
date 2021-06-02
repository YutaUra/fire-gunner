export const collectionPrefix = 'fg'

export const getCollection = <T extends string>(
  name: T,
): `${typeof collectionPrefix}_${T}` => `${collectionPrefix}_${name}` as const
