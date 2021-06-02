import { FieldValue, Timestamp } from '@google-cloud/firestore'
import {
  createDocument,
  updateDocument,
  writeDocumetByServer,
} from '../src/index'

describe('@fire-gunner/firestore-document', () => {
  it('writeDocumetByServer is SERVER', () => {
    expect(writeDocumetByServer).toBe('SERVER')
  })

  it('createDocument with clean data', () => {
    const before = {
      name: 'YutaUra',
      age: 21,
    }
    const after = createDocument(before, writeDocumetByServer)
    expect(after).toEqual({
      name: 'YutaUra',
      age: 21,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    })
  })

  it('createDocument with auto value', () => {
    const before = {
      name: 'YutaUra',
      age: 21,
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
      createdBy: 'YUTAURA',
      updatedBy: 'YUTAURA',
    }
    const after = createDocument(before, writeDocumetByServer)
    expect(after).toEqual({
      name: 'YutaUra',
      age: 21,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      createdBy: writeDocumetByServer,
      updatedBy: writeDocumetByServer,
    })
  })

  it('updateDocument with clean data', () => {
    const before = {
      name: 'YutaUra',
      age: 21,
    }
    const after = updateDocument(before, writeDocumetByServer)
    expect(after).toEqual({
      name: 'YutaUra',
      age: 21,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: writeDocumetByServer,
    })
  })

  it('updateDocument with auto value', () => {
    const before = {
      name: 'YutaUra',
      age: 21,
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
      createdBy: 'YUTAURA',
      updatedBy: 'YUTAURA',
    }
    const after = updateDocument(before, writeDocumetByServer)
    expect(after).toEqual({
      name: 'YutaUra',
      age: 21,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: writeDocumetByServer,
    })
  })
})
