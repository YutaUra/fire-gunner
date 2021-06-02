import { FieldValue, Timestamp } from '@google-cloud/firestore'
import * as z from 'zod'

const firestoreTimestampSchema = z.instanceof(Timestamp)
const firestoreFieldValueSchema = z.custom<FieldValue>(
  (v) => v instanceof FieldValue,
)

export const commonDocumentSchema = z
  .object({
    createdAt: firestoreTimestampSchema,
    updatedAt: firestoreTimestampSchema,
    createdBy: z.string().nullable(),
    updatedBy: z.string().nullable(),
  })
  .strict()

export type CommonDocumentType = z.infer<typeof commonDocumentSchema>

export const createCommonDocumentSchema = z
  .object({
    createdAt: firestoreFieldValueSchema,
    updatedAt: firestoreFieldValueSchema,
    createdBy: z.string().nullable(),
    updatedBy: z.string().nullable(),
  })
  .strict()
export type CreateCommonDocumentType = z.infer<
  typeof createCommonDocumentSchema
>

export const updateCommonDocumentSchema = z
  .object({
    updatedAt: firestoreFieldValueSchema,
    updatedBy: z.string().nullable(),
  })
  .strict()
export type UpdateCommonDocumentType = z.infer<
  typeof updateCommonDocumentSchema
>
