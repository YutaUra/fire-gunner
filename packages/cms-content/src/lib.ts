import type { CommonDocumentType } from '@fire-gunner/firestore-document'
import {
  commonDocumentSchema,
  createDocument,
  updateDocument,
} from '@fire-gunner/firestore-document'
import type { QueryFactory } from '@fire-gunner/firestore-util'
import type { DeepReadonly } from '@fire-gunner/type-util'
import type {
  DocumentReference,
  Firestore,
  Query,
  WriteResult,
} from '@google-cloud/firestore'
import { cmsContentCollection } from './config'
import type { CmsContentType } from './schema'
import { cmsContentSchema } from './schema'

export const getCmsContent = async (
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
      data: CmsContentType & CommonDocumentType
    }
> => {
  const snapshot = await db.collection(cmsContentCollection).doc(docId).get()
  if (!snapshot.exists) {
    return {
      ref: snapshot.ref,
      exists: false,
      id: snapshot.id,
    }
  }
  const data = cmsContentSchema
    .merge(commonDocumentSchema)
    .parse(snapshot.data())
  return {
    ref: snapshot.ref,
    exists: true,
    id: snapshot.id,
    data,
  }
}

export const listCmsContents = async (
  db: Readonly<Firestore>,
  queryFactory: QueryFactory = (q): Query => q,
): Promise<
  {
    ref: DocumentReference<FirebaseFirestore.DocumentData>
    id: string
    data: CmsContentType & CommonDocumentType
  }[]
> => {
  const querySnapshot = await queryFactory(
    db.collection(cmsContentCollection),
  ).get()
  return querySnapshot.docs
    .filter((v) => v.exists)
    .map((snapshot) => {
      return {
        ref: snapshot.ref,
        id: snapshot.id,
        data: cmsContentSchema
          .merge(commonDocumentSchema)
          .parse(snapshot.data()),
      }
    })
}

export const createCmsContent = async (
  db: DeepReadonly<Firestore>,
  data: DeepReadonly<CmsContentType>,
  createdBy: string | null,
): Promise<DocumentReference> => {
  return await db
    .collection(cmsContentCollection)
    .add(createDocument(data, createdBy))
}

export const updateCmsContent = async (
  db: Readonly<Firestore>,
  docId: string,
  data: Readonly<Partial<CmsContentType>>,
  updatedBy: string | null,
): Promise<WriteResult> => {
  return await db
    .collection(cmsContentCollection)
    .doc(docId)
    .update(updateDocument(data, updatedBy))
}

export const deleteCmsContent = async (
  db: Readonly<Firestore>,
  docId: string,
): Promise<WriteResult> => {
  return await db.collection(cmsContentCollection).doc(docId).delete()
}
