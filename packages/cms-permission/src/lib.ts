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
import { cmsPermissionCollection, cmsPermissionUserCollection } from './config'
import type { CMSPermissionType } from './schema'
import { cmsPermissionSchema } from './schema'

export const getCmsPermissionUser = async (
  db: Readonly<Firestore>,
  permission: string,
  userId: string,
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
      data: CMSPermissionType & CommonDocumentType
    }
> => {
  const snapshot = await db
    .collection(cmsPermissionCollection)
    .doc(permission)
    .collection(cmsPermissionUserCollection)
    .doc(userId)
    .get()
  if (!snapshot.exists) {
    return {
      ref: snapshot.ref,
      exists: false,
      id: snapshot.id,
    }
  }
  const data = cmsPermissionSchema
    .merge(commonDocumentSchema)
    .parse(snapshot.data())
  return {
    ref: snapshot.ref,
    exists: true,
    id: snapshot.id,
    data,
  }
}

export const listCmsPermissionUsers = async (
  db: Readonly<Firestore>,
  permission: string,
  queryFactory: QueryFactory = (q): Query => q,
): Promise<
  {
    ref: DocumentReference<FirebaseFirestore.DocumentData>
    id: string
    data: CMSPermissionType & CommonDocumentType
  }[]
> => {
  const querySnapshot = await queryFactory(
    db
      .collection(cmsPermissionCollection)
      .doc(permission)
      .collection(cmsPermissionUserCollection),
  ).get()
  return querySnapshot.docs
    .filter((v) => v.exists)
    .map((snapshot) => {
      return {
        ref: snapshot.ref,
        id: snapshot.id,
        data: cmsPermissionSchema
          .merge(commonDocumentSchema)
          .parse(snapshot.data()),
      }
    })
}

export const createCmsPermissionUser = async (
  db: Readonly<Firestore>,
  permission: string,
  userId: string,
  data: Readonly<CMSPermissionType>,
  createdBy: string | null,
): Promise<WriteResult> => {
  return db
    .collection(cmsPermissionCollection)
    .doc(permission)
    .collection(cmsPermissionUserCollection)
    .doc(userId)
    .set(createDocument(data, createdBy))
}

export const updateCmsPermissionUser = async (
  db: Readonly<Firestore>,
  permission: string,
  userId: string,
  data: Readonly<Partial<CMSPermissionType>>,
  updatedBy: string | null,
): Promise<WriteResult> => {
  return db
    .collection(cmsPermissionCollection)
    .doc(permission)
    .collection(cmsPermissionUserCollection)
    .doc(userId)
    .update(updateDocument(data, updatedBy))
}

export const deleteCmsPermissionUser = async (
  db: Readonly<Firestore>,
  permission: string,
  userId: string,
): Promise<WriteResult> => {
  return db
    .collection(cmsPermissionCollection)
    .doc(permission)
    .collection(cmsPermissionUserCollection)
    .doc(userId)
    .delete()
}
