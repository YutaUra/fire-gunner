import { FieldValue } from '@google-cloud/firestore'
import omit from 'lodash.omit'
import type {
  CreateCommonDocumentType,
  UpdateCommonDocumentType,
} from './schema'
export * from './schema'

export const writeDocumetByServer = 'SERVER'

const autoField = ['createdAt', 'updatedAt', 'createdBy', 'updatedBy'] as const

export const createDocument = <T extends Record<string, unknown>>(
  data: T,
  createdBy: string | null,
): CreateCommonDocumentType & Omit<T, keyof CreateCommonDocumentType> => {
  return {
    ...omit(data, autoField),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
    createdBy: createdBy,
    updatedBy: createdBy,
  }
}

export const updateDocument = <T extends Record<string, unknown>>(
  data: T,
  updatedBy: string | null,
): Omit<T, keyof CreateCommonDocumentType> & UpdateCommonDocumentType => {
  return {
    ...omit(data, autoField),
    updatedAt: FieldValue.serverTimestamp(),
    updatedBy: updatedBy,
  }
}
