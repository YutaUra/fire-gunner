---
to: "packages/<%= name %>/src/lib.ts"
unless_exists: true
---
import type { CommonDocumentType } from '@fire-gunner/firestore-document'
import {
  commonDocumentSchema,
  createDocument,
  updateDocument,
} from '@fire-gunner/firestore-document'
import type { QueryFactory } from '@fire-gunner/firestore-util'
import type {
  DocumentReference,
  Firestore,
  Query,
  WriteResult,
} from '@google-cloud/firestore'
import { <%= h.changeCase.camel(name) %>Collection } from './config'
import type { <%= h.changeCase.pascal(name) %>Type } from './schema'
import { <%= h.changeCase.camel(name) %>Schema } from './schema'

export const get<%= h.changeCase.pascal(name) %> = async (
  db: Readonly<Firestore>,
  docId: string,
): Promise<
  | {
      ref: DocumentReference
      exists: false
      id: string
      data?: undefined
    }
  | {
      ref: DocumentReference
      exists: true
      id: string
      data: <%= h.changeCase.pascal(name) %>Type & CommonDocumentType
    }
> => {
  const snapshot = await db
    .collection(<%= h.changeCase.camel(name) %>Collection)
    .doc(docId)
    .get()
  if (!snapshot.exists) {
    return {
      ref: snapshot.ref,
      exists: false,
      id: snapshot.id,
    }
  }
  const data = <%= h.changeCase.camel(name) %>Schema
    .merge(commonDocumentSchema)
    .parse(snapshot.data())
  return {
    ref: snapshot.ref,
    exists: true,
    id: snapshot.id,
    data,
  }
}

export const list<%= h.changeCase.pascal(name) %>s = async (
  db: Readonly<Firestore>,
  queryFactory: QueryFactory = (q): Query => q,
): Promise<
  {
    ref: DocumentReference<FirebaseFirestore.DocumentData>
    id: string
    data: <%= h.changeCase.pascal(name) %>Type & CommonDocumentType
  }[]
> => {
  const querySnapshot = await queryFactory(
    db.collection(<%= h.changeCase.camel(name) %>Collection)
  ).get()
  return querySnapshot.docs
    .filter((v) => v.exists)
    .map((snapshot) => {
      return {
        ref: snapshot.ref,
        id: snapshot.id,
        data: <%= h.changeCase.camel(name) %>Schema
          .merge(commonDocumentSchema)
          .parse(snapshot.data()),
      }
    })
}

export const create<%= h.changeCase.pascal(name) %> = async (
  db: Readonly<Firestore>,
  data: Readonly<<%= h.changeCase.pascal(name) %>Type>,
  createdBy: string | null,
): Promise<DocumentReference> => {
  return db
    .collection(<%= h.changeCase.camel(name) %>Collection)
    .add(createDocument(data, createdBy))
}

export const update<%= h.changeCase.pascal(name) %> = async (
  db: Readonly<Firestore>,
  docId: string,
  data: Readonly<Partial<<%= h.changeCase.pascal(name) %>Type>>,
  updatedBy: string | null,
): Promise<WriteResult> => {
  return db
    .collection(<%= h.changeCase.camel(name) %>Collection)
    .doc(docId)
    .update(updateDocument(data, updatedBy))
}

export const delete<%= h.changeCase.pascal(name) %> = async (
  db: Readonly<Firestore>,
  docId: string,
): Promise<WriteResult> => {
  return db
    .collection(<%= h.changeCase.camel(name) %>Collection)
    .doc(docId)
    .delete()
}
