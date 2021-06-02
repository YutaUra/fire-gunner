import { FieldValue, Timestamp } from '@google-cloud/firestore'
import { writeDocumetByServer } from '../src/index'
import {
  commonDocumentSchema,
  createCommonDocumentSchema,
  updateCommonDocumentSchema,
} from '../src/schema'

describe('@fire-gunner/firestore-document/schema.ts', () => {
  it('commonDocumentSchema ok', () => {
    const obj = {
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      commonDocumentSchema.parse(obj)
    }).not.toThrow()
  })

  it('commonDocumentSchema false', () => {
    const obj = {
      updatedAt: Timestamp.fromDate(new Date()),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      commonDocumentSchema.parse(obj)
    }).toThrow()
  })

  it('createCommonDocumentSchema ok', () => {
    const obj = {
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      createCommonDocumentSchema.parse(obj)
    }).not.toThrow()
  })

  it('createCommonDocumentSchema false', () => {
    const obj = {
      createdAt: FieldValue.serverTimestamp(),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      createCommonDocumentSchema.parse(obj)
    }).toThrow()
  })

  it('updateCommonDocumentSchema ok', () => {
    const obj = {
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      updateCommonDocumentSchema.parse(obj)
    }).not.toThrow()
  })

  it('updateCommonDocumentSchema false 1', () => {
    const obj = {
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      updateCommonDocumentSchema.parse(obj)
    }).toThrow()
  })

  it('updateCommonDocumentSchema false 2', () => {
    const obj = {
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: writeDocumetByServer,
    }
    expect(() => {
      updateCommonDocumentSchema.parse(obj)
    }).toThrow()
  })
})
