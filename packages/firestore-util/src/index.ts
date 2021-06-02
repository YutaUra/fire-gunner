import type { Query } from '@google-cloud/firestore'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export type QueryFactory = (query: Readonly<Query>) => Query
