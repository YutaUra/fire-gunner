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
import { cmsUserCollection } from './config'
import type { CMSUserType } from './schema'
import { cmsUserSchema } from './schema'

export const getCmsUser = async (
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
      data: CMSUserType & CommonDocumentType
    }
> => {
  const snapshot = await db.collection(cmsUserCollection).doc(docId).get()
  if (!snapshot.exists) {
    return {
      ref: snapshot.ref,
      exists: false,
      id: snapshot.id,
    }
  }
  const data = cmsUserSchema.merge(commonDocumentSchema).parse(snapshot.data())
  return {
    ref: snapshot.ref,
    exists: true,
    id: snapshot.id,
    data,
  }
}

export const listCmsUsers = async (
  db: Readonly<Firestore>,
  queryFactory: QueryFactory = (q): Query => q,
): Promise<
  {
    ref: DocumentReference<FirebaseFirestore.DocumentData>
    id: string
    data: CMSUserType & CommonDocumentType
  }[]
> => {
  const querySnapshot = await queryFactory(
    db.collection(cmsUserCollection),
  ).get()
  return querySnapshot.docs
    .filter((v) => v.exists)
    .map((snapshot) => {
      return {
        ref: snapshot.ref,
        id: snapshot.id,
        data: cmsUserSchema.merge(commonDocumentSchema).parse(snapshot.data()),
      }
    })
}

export const createCmsUser = async (
  db: Readonly<Firestore>,
  data: Readonly<CMSUserType>,
  createdBy: string | null,
): Promise<DocumentReference> => {
  return db.collection(cmsUserCollection).add(createDocument(data, createdBy))
}

export const updateCmsUser = async (
  db: Readonly<Firestore>,
  docId: string,
  data: Readonly<Partial<CMSUserType>>,
  updatedBy: string | null,
): Promise<WriteResult> => {
  return db
    .collection(cmsUserCollection)
    .doc(docId)
    .update(updateDocument(data, updatedBy))
}

export const deleteCmsUser = async (
  db: Readonly<Firestore>,
  docId: string,
): Promise<WriteResult> => {
  return db.collection(cmsUserCollection).doc(docId).delete()
}
