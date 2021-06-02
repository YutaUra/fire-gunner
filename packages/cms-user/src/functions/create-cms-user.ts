import { writeDocumetByServer } from '@fire-gunner/firestore-document'
import { initializeApp } from 'firebase-admin'
import { auth } from 'firebase-functions'
import { createCmsUser } from '../lib'

const admin = initializeApp()

export const fgCreateCMSUser = auth.user().onCreate(async (user) => {
  await createCmsUser(
    admin.firestore(),
    {
      name: user.displayName ?? '',
      email: user.email ?? '',
    },
    writeDocumetByServer,
  )
})
